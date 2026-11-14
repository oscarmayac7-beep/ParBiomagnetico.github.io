/* ============================================================
   Pares marcados: casilla inicial en cada fila, ficha médica y
   resumen en PDF con formato de informe.
   ============================================================ */
window.MARCADOS = (function () {
  var CLAVE = 'marcados-parbiomag';
  var FICHA = 'ficha-medica';
  var datos = {};

  function leer() {
    try {
      var g = JSON.parse(localStorage.getItem(CLAVE) || '{}');
      if (g && typeof g === 'object') datos = g;
    } catch (e) { datos = {}; }
  }
  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(datos)); } catch (e) {}
  }
  function ficha() {
    try { return JSON.parse(localStorage.getItem(FICHA) || '{}'); } catch (e) { return {}; }
  }

  function txt(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }

  function sinMarca(el) {
    if (!el) return '';
    var c = el.cloneNode(true);
    var m = c.querySelector('.mas-par1');
    if (m) m.remove();
    return txt(c);
  }

  function clave(tr) {
    return sinMarca(tr.querySelector('.par-a')) + '|' + txt(tr.querySelector('.par-b')) + '|' + txt(tr.querySelector('.name'));
  }

  function registro(tr) {
    var cls = tr.querySelector('.clasif');
    return {
      p1: sinMarca(tr.querySelector('.par-a')),
      p2: txt(tr.querySelector('.par-b')),
      n: txt(tr.querySelector('.name')),
      c: cls ? (cls.getAttribute('data-c') || txt(cls)) : '',
      z: txt(tr.querySelector('.zona')),
      s: txt(tr.querySelector('.sistema'))
    };
  }

  function contar() { return Object.keys(datos).length; }

  function pintarBoton() {
    var b = document.getElementById('btnMarcados');
    if (!b) return;
    b.innerHTML = '<span aria-hidden="true">✓</span><b>' + contar() + '</b>';
    b.title = 'Pares marcados (' + contar() + ') · ver y descargar PDF';
  }

  var tbody = null;

  function asegurar() {
    if (!tbody) return;
    var total = 0;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row')) return;
      if (!tr.querySelector('td.chk')) {
        var celda = document.createElement('td');
        celda.className = 'chk';
        var inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.setAttribute('aria-label', 'Marcar par');
        celda.appendChild(inp);
        celda.addEventListener('click', function (e) { e.stopPropagation(); });
        tr.insertBefore(celda, tr.cells[0]);
      }
      if (tr.cells.length > total) total = tr.cells.length;
      var chk = tr.querySelector('td.chk input');
      var k = clave(tr);
      if (chk) {
        chk.checked = !!datos[k];
        chk.onchange = function () {
          if (chk.checked) datos[k] = registro(tr);
          else delete datos[k];
          guardar();
          tr.classList.toggle('marcado', chk.checked);
          pintarBoton();
        };
      }
      tr.classList.toggle('marcado', !!datos[k]);
    });
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row') && tr.cells[0] && total) {
        tr.cells[0].colSpan = total;
      }
    });
  }

  /* ---------- PDF ---------- */
  function ansi(s) {
    var mapa = {
      '\u2013': '-', '\u2014': '-', '\u00b7': '-', '\u2022': '-',
      '\u00ab': '"', '\u00bb': '"', '\u201c': '"', '\u201d': '"',
      '\u2018': "'", '\u2019': "'", '\u2713': 'x', '\u2715': 'x', '\u00a0': ' '
    };
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (mapa[ch] !== undefined) { out += mapa[ch]; continue; }
      var c = s.charCodeAt(i);
      if (c === 10) { out += ' '; continue; }
      if (c >= 32 && c <= 255) out += ch;
    }
    return out;
  }

  function esc(s) {
    return ansi(s).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  function envolver(texto, maxChars) {
    var palabras = String(texto || '').split(/\s+/).filter(Boolean);
    var lineas = [], actual = '';
    palabras.forEach(function (p) {
      if (!actual) { actual = p; return; }
      if ((actual + ' ' + p).length > maxChars) { lineas.push(actual); actual = p; }
      else actual += ' ' + p;
    });
    if (actual) lineas.push(actual);
    return lineas.length ? lineas : [''];
  }

  function recortar(s, max) {
    s = String(s || '');
    return s.length > max ? s.slice(0, max - 1) + '\u2026' : s;
  }

  function construirPdf(titulo, items) {
    var W = 595, H = 842, M = 42, ANCHO = W - 2 * M;
    var paginas = [], ops = [], y = H - M;
    var f = ficha();
    var fecha = new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' });

    function t(font, size, x, yy, str) {
      return 'BT /' + font + ' ' + size + ' Tf ' + x + ' ' + yy + ' Td (' + esc(str) + ') Tj ET';
    }
    function rect(x, yy, w, h, gris) {
      return gris + ' g ' + x + ' ' + yy + ' ' + w + ' ' + h + ' re f 0 g';
    }
    function linea(x1, y1, x2, y2, grosor, gris) {
      return (gris || '0.75') + ' G ' + (grosor || 0.6) + ' w ' + x1 + ' ' + y1 + ' m ' + x2 + ' ' + y2 + ' l S 0 G';
    }
    function nuevaPagina(continuacion) {
      paginas.push(ops);
      ops = [];
      y = H - M;
      if (continuacion) {
        ops.push(t('F2', 8, M, y, 'PAR BIOMAGNÉTICO · Informe de pares encontrados'));
        y -= 6;
        ops.push(linea(M, y, W - M, y, 0.7, '0.8'));
        y -= 20;
      }
    }
    function salto(alto) {
      if (y - alto < M + 44) nuevaPagina(true);
    }
    function tituloSeccion(texto) {
      salto(24);
      ops.push(t('F2', 9, M, y, texto));
      y -= 5;
      ops.push(linea(M, y, W - M, y, 0.8, '0.85'));
      y -= 13;
    }

    /* Encabezado de la primera página */
    ops.push(t('F2', 8, M, y, 'PAR BIOMAGNÉTICO'));
    ops.push(t('F1', 8, W - M - 90, y, fecha));
    y -= 7;
    ops.push(linea(M, y, W - M, y, 1, '0.35'));
    y -= 26;
    ops.push(t('F2', 19, M, y, titulo || 'Informe de pares encontrados'));
    y -= 15;
    ops.push(t('F1', 9, M, y, 'Resumen de pares biomagnéticos encontrados'));
    y -= 22;

    /* Datos del paciente */
    tituloSeccion('DATOS DEL PACIENTE');
    var nombre = (f.cNombre || '').trim() || '—';
    var edad = (f.cEdad || '').trim();
    var nac = (f.cNacimiento || '').trim() || '—';
    ops.push(t('F2', 10, M, y, recortar(nombre, 80)));
    y -= 12;
    ops.push(t('F1', 8.5, M, y, 'Edad: ' + (edad ? edad + ' años' : '—') + '     Lugar de nacimiento: ' + recortar(nac, 60)));
    y -= 18;

    /* Antecedentes */
    var bloques = [
      ['Antecedentes personales', f.cPersonal],
      ['Antecedentes de los padres', f.cPadres],
      ['Antecedentes de los hermanos', f.cHermanos]
    ];
    if (bloques.some(function (b) { return (b[1] || '').trim(); })) {
      tituloSeccion('ANTECEDENTES PATOLÓGICOS');
      bloques.forEach(function (b) {
        var lineas = envolver(b[1] || '—', 105);
        salto(14 + lineas.length * 11);
        ops.push(t('F2', 8.5, M, y, b[0]));
        y -= 11;
        lineas.forEach(function (l) {
          salto(12);
          ops.push(t('F1', 8.5, M + 10, y, l));
          y -= 11;
        });
        y -= 5;
      });
    }

    /* Tabla de pares */
    tituloSeccion('PARES ENCONTRADOS (' + items.length + ')');
    var cols = [
      { x: M, w: 20, t: '#' },
      { x: M + 20, w: 148, t: 'Par 1 – Par 2' },
      { x: M + 168, w: 166, t: 'Padecimiento' },
      { x: M + 334, w: 30, t: 'Clasif.' },
      { x: M + 364, w: 70, t: 'Zona' },
      { x: M + 434, w: 77, t: 'Sistema' }
    ];
    function cabeceraTabla() {
      ops.push(rect(M, y - 10, ANCHO, 13, '0.92'));
      cols.forEach(function (c) { ops.push(t('F2', 7.5, c.x + 3, y - 7, c.t)); });
      y -= 15;
    }
    cabeceraTabla();

    if (!items.length) {
      ops.push(t('F1', 9, M, y - 2, 'No hay pares marcados.'));
      y -= 20;
    }

    items.forEach(function (it, i) {
      if (y - 14 < M + 44) { nuevaPagina(true); cabeceraTabla(); }
      if (i % 2 === 1) ops.push(rect(M, y - 10, ANCHO, 12, '0.975'));
      var fila = [
        String(i + 1),
        recortar((it.p1 || '') + ' \u2013 ' + (it.p2 || ''), 40),
        recortar(it.n || '', 46),
        it.c || '',
        recortar(it.z || '', 18),
        recortar(it.s || '', 18)
      ];
      cols.forEach(function (c, k) {
        ops.push(t('F1', 7.6, c.x + 3, y - 6.5, fila[k]));
      });
      y -= 12;
      ops.push(linea(M, y + 1, W - M, y + 1, 0.4, '0.9'));
    });

    paginas.push(ops);

    /* Pie de página */
    var total = paginas.length;
    paginas.forEach(function (lineas, idx) {
      lineas.push(linea(M, 36, W - M, 36, 0.5, '0.85'));
      lineas.push(t('F1', 7, M, 26, 'Par Biomagnético · Documento informativo · No sustituye un diagnóstico médico'));
      lineas.push(t('F1', 7, W - M - 62, 26, 'Página ' + (idx + 1) + ' de ' + total));
    });

    /* Objetos PDF */
    var objetos = [];
    function obj(n, cuerpo) { objetos[n] = cuerpo; }

    var nObjeto = 3;
    var idsPaginas = [];
    for (var p = 0; p < total; p++) { idsPaginas.push(nObjeto); nObjeto += 2; }

    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, '<< /Type /Pages /Kids [' + idsPaginas.map(function (i) { return i + ' 0 R'; }).join(' ') + '] /Count ' + total + ' >>');
    obj(nObjeto, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    obj(nObjeto + 1, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');

    paginas.forEach(function (lineas, idx) {
      var idPag = idsPaginas[idx];
      var idCont = idPag + 1;
      var cont = lineas.join('\n');
      obj(idPag, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + W + ' ' + H + '] ' +
        '/Resources << /Font << /F1 ' + nObjeto + ' 0 R /F2 ' + (nObjeto + 1) + ' 0 R >> >> ' +
        '/Contents ' + idCont + ' 0 R >>');
      obj(idCont, '<< /Length ' + cont.length + ' >>\nstream\n' + cont + '\nendstream');
    });

    var salida = '%PDF-1.4\n';
    var offsets = [];
    for (var i = 1; i < objetos.length; i++) {
      if (!objetos[i]) continue;
      offsets[i] = salida.length;
      salida += i + ' 0 obj\n' + objetos[i] + '\nendobj\n';
    }
    var inicioXref = salida.length;
    salida += 'xref\n0 ' + objetos.length + '\n0000000000 65535 f \n';
    for (var j = 1; j < objetos.length; j++) {
      salida += ('0000000000' + (offsets[j] || 0)).slice(-10) + ' 00000 n \n';
    }
    salida += 'trailer\n<< /Size ' + objetos.length + ' /Root 1 0 R >>\nstartxref\n' + inicioXref + '\n%%EOF';

    var bytes = new Uint8Array(salida.length);
    for (var k = 0; k < salida.length; k++) bytes[k] = salida.charCodeAt(k) & 0xff;
    return bytes;
  }

  function itemsOrdenados() {
    return Object.keys(datos)
      .map(function (k) { return datos[k]; })
      .sort(function (a, b) { return String(a.n).localeCompare(String(b.n), 'es'); });
  }

  function descargar() {
    var items = itemsOrdenados();
    var bytes = construirPdf('Informe de pares encontrados', items);
    var blob = new Blob([bytes], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var f = new Date();
    var nombre = 'informe-pares-' + f.getFullYear() +
      ('0' + (f.getMonth() + 1)).slice(-2) + ('0' + f.getDate()).slice(-2) + '-' +
      ('0' + f.getHours()).slice(-2) + ('0' + f.getMinutes()).slice(-2) + '.pdf';
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1500);
    return nombre;
  }

  /* ---------- panel de marcados ---------- */
  function abrir() {
    var fondo = document.createElement('div');
    fondo.className = 'cfg-fondo';
    var caja = document.createElement('div');
    caja.className = 'cfg-caja';
    caja.setAttribute('role', 'dialog');
    caja.setAttribute('aria-modal', 'true');
    caja.setAttribute('aria-label', 'Pares marcados');

    var cabeza = document.createElement('div');
    cabeza.className = 'cfg-cabeza';
    cabeza.innerHTML = '<h2>Pares marcados (' + contar() + ')</h2>' +
      '<button type="button" class="cfg-cerrar" aria-label="Cerrar">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';

    var cuerpo = document.createElement('div');
    cuerpo.className = 'cfg-cuerpo';

    var f = ficha();
    var paciente = document.createElement('p');
    paciente.className = 'ras-nota';
    paciente.textContent = f.cNombre ? 'Paciente: ' + f.cNombre + (f.cEdad ? ' · ' + f.cEdad + ' años' : '') : 'Ficha médica vacía.';
    cuerpo.appendChild(paciente);

    var enlace = document.createElement('a');
    enlace.href = 'cuestionario.html';
    enlace.target = 'guia';
    enlace.className = 'mar-enlace';
    enlace.textContent = f.cNombre ? 'Editar ficha médica' : 'Llenar ficha médica';
    cuerpo.appendChild(enlace);

    var lista = document.createElement('ul');
    lista.className = 'mar-lista';
    var claves = Object.keys(datos);
    if (!claves.length) {
      var vacio = document.createElement('p');
      vacio.className = 'ras-nota';
      vacio.textContent = 'Aún no hay pares marcados. Usa la casilla de la primera columna.';
      cuerpo.appendChild(vacio);
    }
    claves.forEach(function (k) {
      var it = datos[k];
      var li = document.createElement('li');
      var info = document.createElement('div');
      info.className = 'mar-info';
      var t1 = document.createElement('b');
      t1.textContent = it.n || '(sin nombre)';
      var d = document.createElement('span');
      d.textContent = it.p1 + ' – ' + it.p2 + (it.c ? ' · ' + it.c : '');
      info.appendChild(t1);
      info.appendChild(d);
      var q = document.createElement('button');
      q.type = 'button';
      q.className = 'mar-quitar';
      q.textContent = '×';
      q.title = 'Quitar';
      q.addEventListener('click', function () {
        delete datos[k];
        guardar();
        li.remove();
        pintarBoton();
        asegurar();
        var cab = cabeza.querySelector('h2');
        if (cab) cab.textContent = 'Pares marcados (' + contar() + ')';
      });
      li.appendChild(info);
      li.appendChild(q);
      lista.appendChild(li);
    });
    cuerpo.appendChild(lista);

    var acciones = document.createElement('div');
    acciones.className = 'mar-acciones';

    var pdf = document.createElement('button');
    pdf.type = 'button';
    pdf.className = 'ras-copiar';
    pdf.textContent = 'Descargar PDF (' + contar() + ')';
    pdf.disabled = !contar();
    pdf.addEventListener('click', function () { descargar(); });
    acciones.appendChild(pdf);

    var limpiar = document.createElement('button');
    limpiar.type = 'button';
    limpiar.className = 'mar-limpiar';
    limpiar.textContent = 'Quitar todos';
    limpiar.addEventListener('click', function () {
      if (!window.confirm('¿Quitar todos los pares marcados?')) return;
      datos = {};
      guardar();
      pintarBoton();
      asegurar();
      cerrar();
    });
    acciones.appendChild(limpiar);

    cuerpo.appendChild(acciones);
    caja.appendChild(cabeza);
    caja.appendChild(cuerpo);
    fondo.appendChild(caja);

    function cerrar() { document.removeEventListener('keydown', tecla); fondo.remove(); }
    function tecla(e) { if (e.key === 'Escape') cerrar(); }
    fondo.addEventListener('click', function (e) { if (e.target === fondo) cerrar(); });
    cabeza.querySelector('.cfg-cerrar').addEventListener('click', cerrar);
    document.addEventListener('keydown', tecla);
    document.body.appendChild(fondo);
  }

  function montar() {
    tbody = document.querySelector('tbody');
    if (!tbody) return;

    var thead = document.querySelector('thead tr');
    if (thead && !thead.querySelector('.th-chk')) {
      var th = document.createElement('th');
      th.className = 'th-chk';
      th.scope = 'col';
      th.innerHTML = '<input type="checkbox" id="chkTodos" aria-label="Marcar los visibles" title="Marcar / desmarcar los pares visibles">';
      thead.insertBefore(th, thead.cells[0]);
    }

    asegurar();

    if (document.getElementById('chkTodos')) {
      document.getElementById('chkTodos').addEventListener('change', function () {
        var on = this.checked;
        Array.prototype.forEach.call(tbody.rows, function (tr) {
          if (tr.classList.contains('section-row') || tr.classList.contains('oculto')) return;
          var chk = tr.querySelector('td.chk input');
          if (chk) { chk.checked = on; chk.onchange(); }
        });
      });
    }

    if (!document.getElementById('btnMarcados')) {
      var b = document.createElement('button');
      b.type = 'button';
      b.id = 'btnMarcados';
      b.className = 'btn-marcados';
      b.setAttribute('aria-label', 'Pares marcados');
      b.addEventListener('click', abrir);
      document.body.appendChild(b);
    }
    pintarBoton();

    new MutationObserver(function () { asegurar(); }).observe(tbody, { childList: true });
  }

  leer();
  if (document.body) montar();
  else document.addEventListener('DOMContentLoaded', montar);

  return {
    descargar: descargar,
    abrir: abrir,
    contar: contar,
    pdfBytes: function () { return construirPdf('Informe de pares encontrados', itemsOrdenados()); }
  };
})();
