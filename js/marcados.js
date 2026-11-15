/* ============================================================
   Pares marcados: casilla inicial en cada fila, ficha médica y
   resumen en PDF con formato de historia clínica.
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
  function emociones() {
    try { return JSON.parse(localStorage.getItem('emociones-atrapadas') || '[]') || []; }
    catch (e) { return []; }
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
        var ref = tr.querySelector('td.num');
        tr.insertBefore(celda, ref ? ref.nextSibling : tr.cells[0]);
      }
      var celdaChk = tr.querySelector('td.chk');
      if (celdaChk) {
        var num = tr.querySelector('td.num');
        var destino = num ? num.nextSibling : tr.cells[0];
        if (destino !== celdaChk) tr.insertBefore(celdaChk, destino);
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

  function ancho(texto, tam, bold) {
    return String(texto || '').length * tam * (bold ? 0.56 : 0.5);
  }

  function construirPdf(titulo, items) {
    var W = 595, H = 842, M = 42, ANCHO = W - 2 * M;
    var paginas = [], ops = [], y = H - M;
    var f = ficha();
    var hoy = new Date();
    var fecha = hoy.toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' });

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
        ops.push(t('F2', 8, M, y, 'PAR BIOMAGNÉTICO · HISTORIA CLÍNICA'));
        var pn = 'CONTINUACIÓN · PARES ENCONTRADOS';
        ops.push(t('F1', 8, W - M - ancho(pn, 8), y, pn));
        y -= 6;
        ops.push(linea(M, y, W - M, y, 0.8, '0.5'));
        y -= 22;
      }
    }
    function salto(alto) {
      if (y - alto < M + 46) nuevaPagina(true);
    }
    function banda(texto, yBanda) {
      ops.push(rect(M, yBanda - 4, ANCHO, 17, '0.90'));
      ops.push(t('F2', 9, M + 8, yBanda, texto));
      ops.push(linea(M, yBanda - 4, M + ANCHO, yBanda - 4, 0.5, '0.6'));
      return yBanda - 20;
    }
    function campo(x, etiqueta, valor, yy, anchoEtiqueta) {
      ops.push(t('F2', 8, x, yy, etiqueta));
      ops.push(t('F1', 9, x + anchoEtiqueta, yy, valor));
      ops.push(linea(x + anchoEtiqueta, yy - 2.5, x + anchoEtiqueta + ancho(valor, 9) + 6, yy - 2.5, 0.4, '0.7'));
    }

    /* Portada / encabezado */
    var tit = 'HISTORIA CLÍNICA';
    ops.push(t('F2', 22, (W - ancho(tit, 22, true)) / 2, y, tit));
    y -= 16;
    var sub = 'PAR BIOMAGNÉTICO · INFORME DE PARES ENCONTRADOS';
    ops.push(t('F1', 9, (W - ancho(sub, 9)) / 2, y, sub));
    y -= 9;
    ops.push(linea(M, y, W - M, y, 1, '0.35'));
    y -= 26;

    /* Datos personales */
    y = banda('DATOS PERSONALES', y);
    var nombre = recortar((f.cNombre || '').trim() || '—', 52);
    var edad = (f.cEdad || '').trim();
    var nac = recortar((f.cNacimiento || '').trim() || '—', 46);
    var correo = recortar((f.cCorreo || '').trim() || '—', 56);
    campo(M + 8, 'Nombre del paciente:', nombre, y, 108);
    campo(M + 330, 'Edad:', edad ? edad + ' años' : '—', y, 34);
    y -= 20;
    campo(M + 8, 'Lugar de nacimiento:', nac, y, 108);
    campo(M + 330, 'Fecha del informe:', fecha, y, 74);
    y -= 20;
    campo(M + 8, 'Correo electrónico:', correo, y, 108);
    y -= 28;

    /* Resumen ejecutivo */
    var clases = {};
    items.forEach(function (it) { var k = it.c || 'O'; clases[k] = (clases[k] || 0) + 1; });
    var nEmoRes = emociones().filter(function (m) { return m.c === 'A' || m.c === 'B'; }).length;
    y = banda('RESUMEN', y);
    ops.push(t('F1', 9, M + 8, y, 'Pares encontrados: ' + items.length));
    ops.push(t('F1', 9, M + 190, y, 'Clasificaciones: ' + Object.keys(clases).length));
    ops.push(t('F1', 9, M + 350, y, 'Emociones: ' + nEmoRes));
    y -= 26;

    /* Antecedentes */
    var bloques = [
      ['Personales', f.cPersonal],
      ['De los padres', f.cPadres],
      ['De los hermanos', f.cHermanos]
    ];
    if (bloques.some(function (b) { return (b[1] || '').trim(); })) {
      y = banda('ANTECEDENTES PATOLÓGICOS', y);
      bloques.forEach(function (b) {
        var lineas = envolver(b[1] || '—', 96);
        salto(16 + lineas.length * 11);
        ops.push(t('F2', 8, M + 8, y, b[0] + ':'));
        y -= 12;
        lineas.forEach(function (l) {
          salto(12);
          ops.push(t('F1', 8.5, M + 22, y, l));
          y -= 11;
        });
        y -= 6;
      });
      y -= 2;
    }

    /* Emociones atrapadas */
    var marcasEmo = emociones();
    var emo = marcasEmo.filter(function (m) { return m.c === 'A' || m.c === 'B'; });
    if (emo.length) {
      y = banda('EMOCIONES ATRAPADAS (' + emo.length + ')', y);

      var orgMark = {};
      marcasEmo.forEach(function (m) {
        if (m.c === 'O' || m.c === 'S') orgMark[m.f + '-' + (m.r || 0)] = m;
      });

      var colsEmo = [
        { x: M + 4, w: 18, t: '#' },
        { x: M + 22, w: 28, t: 'Fila' },
        { x: M + 50, w: 136, t: 'Columna A' },
        { x: M + 186, w: 136, t: 'Columna B' },
        { x: M + 322, w: 86, t: '\u00d3rgano' },
        { x: M + 408, w: 99, t: 'Sistema' }
      ];
      function cabeceraEmo() {
        ops.push(rect(M, y - 9, ANCHO, 13, '0.92'));
        colsEmo.forEach(function (c) { ops.push(t('F2', 7.5, c.x, y - 6, c.t)); });
        ops.push(linea(M, y - 9, W - M, y - 9, 0.4, '0.6'));
        y -= 15;
      }
      cabeceraEmo();

      var filasEmo = {}, nEmo = 0;
      emo.forEach(function (m) {
        if (!filasEmo[m.f]) filasEmo[m.f] = { org: (m.o || []).join(' / '), filas: [] };
        filasEmo[m.f].filas.push(m);
      });
      var todas = [];
      Object.keys(filasEmo).forEach(function (k) {
        filasEmo[k].filas.forEach(function (m) { todas.push(m); });
      });
      todas.sort(function (a, b) {
        if (a.f !== b.f) return a.f - b.f;
        return (a.r || 0) - (b.r || 0);
      });
      todas.forEach(function (m) {
        if (y - 13 < M + 46) { nuevaPagina(true); y = banda('EMOCIONES ATRAPADAS (continuaci\u00f3n)', y); cabeceraEmo(); }
        var o = orgMark[m.f + '-' + (m.r || 0)] || {};
        var fila = [
          String(++nEmo),
          String(m.f),
          m.c === 'A' ? recortar(m.e, 30) : '',
          m.c === 'B' ? recortar(m.e, 30) : '',
          o.c === 'O' ? recortar(o.e, 17) : '',
          o.c === 'S' ? recortar(o.e, 19) : ''
        ];
        colsEmo.forEach(function (c, i) { ops.push(t('F1', 7.6, c.x, y - 6, fila[i])); });
        y -= 12;
        ops.push(linea(M, y + 1, W - M, y + 1, 0.3, '0.9'));
      });
      y -= 14;
    }

    /* Pares encontrados: secciones por clasificación */
    var ORDEN_CL = [
      ['R', 'Reservorio'], ['E', 'Especiales'], ['D', 'Disfuncionales'],
      ['Ps', 'Psicoemocionales'], ['B', 'Bacteria'], ['V', 'Virus'], ['H', 'Hongo'],
      ['P', 'Par\u00e1sito'], ['T', 'T\u00f3xico'], ['O', 'Otros']
    ];
    var etiquetas = {}, grupos = {};
    ORDEN_CL.forEach(function (o) { etiquetas[o[0]] = o[1]; });
    items.forEach(function (it) {
      var k = it.c || 'O';
      if (!grupos[k]) grupos[k] = [];
      grupos[k].push(it);
    });
    var claves = Object.keys(grupos).sort(function (a, b) {
      var ia = 99, ib = 99;
      ORDEN_CL.forEach(function (o, k) { if (o[0] === a) ia = k; if (o[0] === b) ib = k; });
      return ia - ib;
    });

    y = banda('PARES ENCONTRADOS (' + items.length + ')', y);

    var cols = [
      { x: M + 4, w: 20, t: '#' },
      { x: M + 24, w: 172, t: 'Par 1 \u2013 Par 2' },
      { x: M + 196, w: 158, t: 'Padecimiento' },
      { x: M + 354, w: 70, t: 'Zona' },
      { x: M + 424, w: 83, t: 'Sistema' }
    ];
    function cabeceraTabla() {
      ops.push(rect(M, y - 10, ANCHO, 14, '0.93'));
      cols.forEach(function (c) { ops.push(t('F2', 7.5, c.x, y - 7, c.t)); });
      ops.push(linea(M, y - 10, W - M, y - 10, 0.5, '0.6'));
      y -= 16;
    }

    if (!items.length) {
      ops.push(t('F1', 9, M + 4, y - 2, 'No hay pares marcados.'));
      y -= 20;
    } else {
      var resumen = claves.map(function (k) { return (etiquetas[k] || 'Otros') + ': ' + grupos[k].length; }).join('   \u00b7   ');
      ops.push(t('F1', 8, M + 4, y - 2, 'Resumen: ' + resumen));
      y -= 14;
      cabeceraTabla();

      var nPar = 0;
      claves.forEach(function (k) {
        var lista = grupos[k].slice().sort(function (a, b) {
          return String(a.n).localeCompare(String(b.n), 'es');
        });
        if (y - 28 < M + 46) { nuevaPagina(true); cabeceraTabla(); }
        ops.push(rect(M, y - 9, ANCHO, 13, '0.955'));
        ops.push(t('F2', 7.5, M + 4, y - 6, k + ' \u00b7 ' + (etiquetas[k] || 'Otros') + ' (' + lista.length + ')'));
        y -= 15;

        lista.forEach(function (it) {
          if (y - 14 < M + 46) { nuevaPagina(true); cabeceraTabla(); }
          nPar++;
          if (nPar % 2 === 0) ops.push(rect(M, y - 10, ANCHO, 12, '0.975'));
          var fila = [
            String(nPar),
            recortar((it.p1 || '') + ' \u2013 ' + (it.p2 || ''), 42),
            recortar(it.n || '', 44),
            recortar(it.z || '', 18),
            recortar(it.s || '', 20)
          ];
          cols.forEach(function (c, i) { ops.push(t('F1', 7.6, c.x, y - 6.5, fila[i])); });
          y -= 12;
          ops.push(linea(M, y + 1, W - M, y + 1, 0.3, '0.9'));
        });
        y -= 5;
      });
    }

paginas.push(ops);

    /* Pie */
    var total = paginas.length;
    paginas.forEach(function (lineas, idx) {
      lineas.push(linea(M, 36, W - M, 36, 0.5, '0.85'));
      lineas.push(t('F1', 7, M, 26, 'Par Biomagnético · Documento informativo · No sustituye un diagnóstico médico'));
      lineas.push(t('F1', 7, W - M - 62, 26, 'Página ' + (idx + 1) + ' de ' + total));
    });

    /* Objetos */
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

  function nombreArchivo() {
    var f = ficha();
    var nombre = (f.cNombre || '').trim() || 'Paciente';
    nombre = nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Za-z0-9 ]+/g, '').trim().replace(/\s+/g, '-');
    if (!nombre) nombre = 'Paciente';
    var d = new Date();
    var fecha = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
    var hora = ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2);
    return nombre + '_' + fecha + '_' + hora + '_Informe-Pares.pdf';
  }

  function descargar() {
    var items = itemsOrdenados();
    var bytes = construirPdf('Informe de pares encontrados', items);
    var blob = new Blob([bytes], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo();
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1500);
    return a.download;
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
      var thNum = thead.querySelector('th.th-num');
      thead.insertBefore(th, thNum ? thNum.nextSibling : thead.cells[0]);
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
    nombreArchivo: nombreArchivo,
    pdfBytes: function () { return construirPdf('Informe de pares encontrados', itemsOrdenados()); }
  };
})();
