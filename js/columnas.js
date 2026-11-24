/* ============================================================
   Columnas opcionales de las listas:
   Fuente1 · Fecha alta · Fecha actualización · ¿Por qué se muestra? · Img Par-Biomag
   Se muestran u ocultan desde Configuración.
   ============================================================ */
(function () {
  var BASE = 9; /* # · ✓ · Clasif. · Par 1 · Par 2 · Nombre · Zona · Sistema · Vértebra */
  var OPC = [
    { k: 'colFuente1', c: 'fuente' },
    { k: 'colFechaAlta', c: 'f-alta' },
    { k: 'colFechaAct', c: 'f-act' },
    { k: 'colPorQue', c: 'p-que' },
    { k: 'colImg', c: 'img-par' }
  ];

  function activa(k) {
    return window.CONFIG ? window.CONFIG.get(k) !== false : true;
  }

  function plano(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function imagen(p1, p2) {
    var mapa = window.IMAGENES_PARES || {};
    var k = plano(p1) + '|' + plano(p2);
    if (mapa[k]) return true;
    if (!plano(p2)) return !!mapa[plano(p1) + '|' + plano(p1)];
    return false;
  }

  function motivoTexto(tr) {
    if (window.RASTREO && window.RASTREO.motivo) {
      var m = window.RASTREO.motivo(tr);
      if (m && m.length) return m.join(' · ');
    }
    return '';
  }

  function compacto(tr) {
    var ms = (window.RASTREO && window.RASTREO.motivo) ? window.RASTREO.motivo(tr) : [];
    var q = ((document.getElementById('q') || {}).value || '').trim();
    var partes = [];
    ms.forEach(function (m) {
      var mm;
      if ((mm = m.match(/^Búsqueda guardada: «(.+?)»/))) {
        partes.push('búsqueda: «' + mm[1] + '»');
      } else if ((mm = m.match(/^«(.+?)» coincide en: (.+)\.$/))) {
        partes.push('coincide en: ' + mm[2] + '. · «' + mm[1] + '»');
      } else if ((mm = m.match(/^Coincide con el texto buscado «(.+?)»\.$/))) {
        partes.push('coincide: «' + mm[1] + '»');
      } else if ((mm = m.match(/^Sin búsqueda activa: se muestra por el orden actual \(«(.+?)»\)\.$/))) {
        partes.push('orden: ' + mm[1]);
      } else if ((mm = m.match(/^Pertenece al grupo «(.+?)»\.$/))) {
        partes.push('grupo: ' + mm[1]);
      } else if ((mm = m.match(/^Agrupa (.+?) pares con el mismo Par 1 \(«(.+?)»\)/))) {
        partes.push('agrupa: ' + mm[1] + ' · «' + mm[2] + '»');
      } else {
        partes.push(m);
      }
    });
    if (q) {
      var solo = partes.filter(function (x) {
        return x.indexOf('coincide') === 0 || x.indexOf('búsqueda') === 0;
      });
      if (solo.length) return solo.join(' · ');
    }
    return partes.join(' · ');
  }

  function actualizarPorQue(tabla) {
    Array.prototype.forEach.call(tabla.querySelectorAll('tbody tr:not(.section-row)'), function (tr) {
      var celda = tr.querySelector('td.p-que');
      if (!celda) return;
      var txt = compacto(tr);
      if (!txt) txt = tr.dataset.pm || '';
      celda.textContent = txt;
      celda.title = motivoTexto(tr);
    });
  }

  function rellenarImagenes(tabla) {
    Array.prototype.forEach.call(tabla.querySelectorAll('tbody tr:not(.section-row)'), function (tr) {
      var celda = tr.querySelector('td.img-par');
      if (!celda) return;
      var a = tr.querySelector('td.par-a');
      var b = tr.querySelector('td.par-b');
      var p1 = (tr.dataset && tr.dataset.par1) || (a ? a.textContent : '');
      var p2 = b ? b.textContent : '';
      celda.textContent = imagen(p1.replace(/[\d\s+]+$/, '').trim(), p2) ? 'Sí' : '';
    });
  }

  function asegurarCeldas(tabla) {
    Array.prototype.forEach.call(tabla.querySelectorAll('tbody tr:not(.section-row)'), function (tr) {
      if (tr.querySelector('td.img-par')) return;
      var fa = document.createElement('td');
      fa.className = 'f-alta';
      fa.textContent = tr.dataset.fa || '—';
      var fu = document.createElement('td');
      fu.className = 'f-act';
      fu.textContent = tr.dataset.fu || '—';
      var pm = document.createElement('td');
      pm.className = 'p-que';
      pm.textContent = tr.dataset.pm || '';
      var img = document.createElement('td');
      img.className = 'img-par';
      tr.appendChild(fa);
      tr.appendChild(fu);
      tr.appendChild(img);
      tr.appendChild(pm);
    });
  }

  function aplicar() {
    var tabla = document.querySelector('table');
    if (!tabla) return;

    var visibles = BASE;
    var extra = 0;
    OPC.forEach(function (o) {
      var on = activa(o.k);
      tabla.classList.toggle('oculta-' + o.c, !on);
      if (on) visibles++;
      if (on && o.c !== 'fuente') extra++;
    });

    /* Con columnas extra la tabla se ajusta al ancho (sin barra horizontal) */
    tabla.classList.toggle('tabla-ancha', extra > 0);

    Array.prototype.forEach.call(tabla.querySelectorAll('tbody tr.section-row'), function (tr) {
      if (tr.cells[0]) tr.cells[0].colSpan = visibles;
    });

    asegurarCeldas(tabla);
    actualizarPorQue(tabla);
    rellenarImagenes(tabla);
  }

  if (document.body) aplicar();
  else document.addEventListener('DOMContentLoaded', aplicar);

  window.addEventListener('config:cambio', aplicar);

  var pendiente = null;
  function refrescar() {
    if (pendiente) clearTimeout(pendiente);
    pendiente = setTimeout(function () {
      var tabla = document.querySelector('table');
      if (tabla) actualizarPorQue(tabla);
    }, 120);
  }
  document.addEventListener('input', refrescar, true);
  document.addEventListener('change', refrescar, true);

  var tb = document.querySelector('tbody');
  if (tb) new MutationObserver(function () { aplicar(); }).observe(tb, { childList: true });
})();
