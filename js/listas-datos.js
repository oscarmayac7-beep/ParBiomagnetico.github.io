/* ============================================================
   Render de las listas a partir de datos/pares.js (fuente única).
   La tabla indica su clasificación con data-clasif y su formato
   con data-formato ("milpares" o "lista").
   ============================================================ */
(function () {
  var tabla = document.querySelector('table[data-clasif]');
  if (!tabla || !window.PARES) return;

  var clasif = tabla.getAttribute('data-clasif') || '';
  var formato = tabla.getAttribute('data-formato') || 'lista';
  var tbody = tabla.querySelector('tbody');
  if (!tbody) return;

  var SIN = { 'Digestivo': 'digestivo', 'Nervioso': 'nervioso', 'Circulatorio': 'circulatorio',
    'Respiratorio': 'respiratorio', 'Esquel\u00e9tico': 'esqueletico', 'Muscular': 'muscular',
    'End\u00f3crino': 'endocrino', 'Urinario': 'urinario', 'Linf\u00e1tico': 'linfatico',
    'Inmunol\u00f3gico': 'inmunologico', 'Tegumentario': 'tegumentario',
    'Reproductor': 'reproductor', 'Locomotor': 'locomotor', 'OTRO': 'otro', 'Otro': 'otro' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function claseClasif(c) {
    var k = String(c || 'O').replace(/[^A-Za-z0-9]/g, '');
    return k || 'O';
  }

  function plano(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function chipSistema(s) {
    if (formato === 'milpares') {
      return 's-' + (plano(s).replace(/[^A-Za-z0-9]/g, '') || 'OTRO');
    }
    return 's-' + (SIN[s] || 'otro');
  }

  function enlace(p) {
    return p.h
      ? '<a href="' + esc(p.h) + '">' + esc(p.n) + '</a>'
      : esc(p.n);
  }

  function fila(p) {
    var sis = '<td class="sistema"><span class="' + chipSistema(p.s) + '">' + esc(p.s) + '</span></td>';
    var zona = '<td class="zona"><span>' + esc(p.z) + '</span></td>';
    var name = '<td class="name">' + enlace(p) + '</td>';
    var pares = '<td class="par-a">' + esc(p.p1) + '</td><td class="par-b">' + esc(p.p2) + '</td>';
    if (formato === 'milpares') {
      return '<tr><td class="clasif"><span class="c-' + claseClasif(p.c) + '">' + esc(p.c) + '</span></td>' +
        pares + name + zona + sis + '</tr>';
    }
    return '<tr><td class="num"></td><td class="clasif" data-c="' + esc(p.c) +
      '" aria-label="Clasificaci\u00f3n ' + esc(p.c) + '"></td>' + pares + name + zona + sis + '</tr>';
  }

  var datos = window.PARES.filter(function (p) {
    if (!clasif) return true;
    if (p.c === clasif) return true;
    return String(p.c).split('-').indexOf(clasif) !== -1;
  });

  datos.sort(function (a, b) {
    return String(a.n).localeCompare(String(b.n), 'es');
  });

  var frag = document.createDocumentFragment();
  datos.forEach(function (p) {
    var t = document.createElement('tbody');
    t.innerHTML = fila(p);
    var tr = t.firstElementChild;
    if (tr) frag.appendChild(tr);
  });

  tbody.innerHTML = '';
  tbody.appendChild(frag);
})();
