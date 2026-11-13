/* ============================================================
   Pares marcados: casilla inicial en cada fila y resumen en PDF.
   ============================================================ */
window.MARCADOS = (function () {
  var CLAVE = 'marcados-parbiomag';
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
      if (tr.classList.contains('section-row')) {
        var td = tr.cells[0];
        if (td && total) td.colSpan = total;
        return;
      }
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
      var total2 = tr.cells.length;
      if (total2 > total) total = total2;
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
    /* ajustar encabezados de sección que aún no tengan el colspan correcto */
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

  function construirPdf(titulo, items) {
    var W = 595, H = 842, M = 42, LH = 12;
    var paginas = [], actual = [], y = H - M;

    function comando(x, yy, size, bold, texto) {
      return 'BT /' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + x + ' ' + yy + ' Td (' + esc(texto) + ') Tj ET';
    }
    function nuevaPagina() { paginas.push(actual); actual = []; y = H - M; }
    function asegurarEspacio(n) { if (y - n < M + 18) nuevaPagina(); }

    actual.push(comando(M, y, 16, true, titulo));
    y -= 20;
    actual.push(comando(M, y, 9, false, 'Pares Biomagnéticos · resumen de pares marcados'));
    y -= 8;
    actual.push(comando(M, y, 9, false, 'Generado: ' + new Date().toLocaleString('es-MX')));
    y -= 18;

    items.forEach(function (it, i) {
      asegurarEspacio(26);
      actual.push(comando(M, y, 10, true, (i + 1) + '. ' + (it.n || '(sin nombre)')));
      y -= LH;
      var detalle = (it.p1 || '') + '  \u2013  ' + (it.p2 || '');
      actual.push(comando(M + 12, y, 9, false, detalle));
      y -= LH - 1;
      var extra = [];
      if (it.c) extra.push('Clasif. ' + it.c);
      if (it.z) extra.push('Zona ' + it.z);
      if (it.s) extra.push('Sistema ' + it.s);
      if (extra.length) {
        actual.push(comando(M + 12, y, 8, false, extra.join('  ·  ')));
        y -= LH - 1;
      }
      y -= 4;
    });

    if (!items.length) actual.push(comando(M, y, 10, false, 'No hay pares marcados.'));
    paginas.push(actual);

    /* armar el PDF */
    var totalPag = paginas.length;
    paginas.forEach(function (lineas, idx) {
      lineas.push(comando(M, 28, 8, false, 'Página ' + (idx + 1) + ' de ' + totalPag + '  ·  Par Biomagnético'));
    });

    var objetos = [];
    function obj(n, cuerpo) { objetos[n] = cuerpo; }

    var hijos = [];
    var nObjeto = 3;
    var idsPaginas = [];
    for (var p = 0; p < totalPag; p++) {
      idsPaginas.push(nObjeto);
      nObjeto += 2;
    }
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, '<< /Type /Pages /Kids [' + idsPaginas.map(function (i) { return i + ' 0 R'; }).join(' ') +
      '] /Count ' + totalPag + ' >>');
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
      var off = offsets[j] || 0;
      salida += ('0000000000' + off).slice(-10) + ' 00000 n \n';
    }
    salida += 'trailer\n<< /Size ' + objetos.length + ' /Root 1 0 R >>\nstartxref\n' + inicioXref + '\n%%EOF';

    var bytes = new Uint8Array(salida.length);
    for (var k = 0; k < salida.length; k++) bytes[k] = salida.charCodeAt(k) & 0xff;
    return bytes;
  }

  function descargar() {
    var items = Object.keys(datos).map(function (k) { return datos[k]; });
    items.sort(function (a, b) { return String(a.n).localeCompare(String(b.n), 'es'); });
    var bytes = construirPdf('Pares marcados (' + items.length + ')', items);
    var blob = new Blob([bytes], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var f = new Date();
    var nombre = 'pares-marcados-' + f.getFullYear() +
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
      var t = document.createElement('b');
      t.textContent = it.n || '(sin nombre)';
      var d = document.createElement('span');
      d.textContent = it.p1 + ' – ' + it.p2 + (it.c ? ' · ' + it.c : '');
      info.appendChild(t);
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
    pdfBytes: function () {
      return construirPdf('Pares marcados', Object.keys(datos).map(function (k) { return datos[k]; }));
    }
  };
})();
