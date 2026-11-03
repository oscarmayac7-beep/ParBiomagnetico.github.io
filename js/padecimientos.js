/* ============================================================
   Padecimientos · búsqueda, categorías, orden y numeración
   ============================================================ */
(function () {
  var tbody = document.getElementById('padeBody');
  if (!tbody) return;

  var input = document.getElementById('q');
  var orden = document.getElementById('sortSelect');
  var alphaNav = document.getElementById('alphaNav');
  var noResults = document.getElementById('noResults');
  var backTop = document.getElementById('backToTop');

  var filas = Array.prototype.slice.call(tbody.querySelectorAll('tr.fila'));
  var letras = [];
  filas.forEach(function (f) {
    if (letras.indexOf(f.dataset.letra) === -1) letras.push(f.dataset.letra);
  });
  letras.sort();

  var ALFA = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  if (alphaNav) {
    ALFA.forEach(function (l) {
      var el = document.createElement(letras.indexOf(l) !== -1 ? 'a' : 'span');
      el.textContent = l;
      if (el.tagName === 'A') el.href = '#sec-' + l;
      alphaNav.appendChild(el);
    });
  }

  var SISTEMAS = ['Nervioso', 'Circulatorio', 'Respiratorio', 'Digestivo', 'Esquelético',
    'Muscular', 'Endócrino', 'Urinario', 'Linfático', 'Tegumentario', 'Reproductor',
    'Locomotor', 'Otro'];

  var TIPOS = ['Virus', 'Bacteria', 'Hongo', 'Parásito', 'Especial', 'Disfunción',
    'Psicoemocional', 'Enfermedad compleja', 'Causas múltiples', 'Tóxico',
    'Primeros auxilios', 'Otros'];

  function plano(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function seleccion() {
    var q = plano(input.value).trim();
    var tokens = q ? q.split(/\s+/).filter(Boolean) : [];

    return filas.filter(function (f) {
      if (!tokens.length) return true;
      var texto = plano(f.textContent) + ' ' + plano(f.dataset.sistema) + ' ' + plano(f.dataset.tipo);
      return tokens.every(function (t) { return texto.indexOf(t) !== -1; });
    });
  }

  function encabezado(texto, id) {
    var tr = document.createElement('tr');
    tr.className = 'section-row';
    if (id) tr.id = id;
    var td = document.createElement('td');
    td.colSpan = 5;
    td.textContent = texto;
    tr.appendChild(td);
    return tr;
  }

  function numerar(fila, n) {
    var c = fila.querySelector('td.num');
    if (c) c.textContent = n;
  }

  function render() {
    var arr = seleccion();
    var modo = orden ? orden.value : 'alfabetico';
    var n = 0;

    tbody.innerHTML = '';

    if (modo === 'alfabetico') {
      letras.forEach(function (L) {
        var grupo = arr.filter(function (f) { return f.dataset.letra === L; });
        if (!grupo.length) return;
        tbody.appendChild(encabezado(L, 'sec-' + L));
        grupo.forEach(function (f) { numerar(f, ++n); tbody.appendChild(f); });
      });
      if (alphaNav) alphaNav.style.display = '';
    } else {
      var campo = modo === 'sistema' ? 'sistema' : 'tipo';
      var lista = campo === 'sistema' ? SISTEMAS : TIPOS;
      var grupos = {};

      arr.forEach(function (f) {
        var k = f.dataset[campo];
        (grupos[k] = grupos[k] || []).push(f);
      });

      var extra = Object.keys(grupos).filter(function (k) { return lista.indexOf(k) === -1; });

      lista.concat(extra).forEach(function (k) {
        var grupo = grupos[k] || [];
        if (!grupo.length) return;
        tbody.appendChild(encabezado(k));
        grupo.slice().sort(function (a, b) {
          return (a.dataset.nombre || '').localeCompare(b.dataset.nombre || '', 'es');
        }).forEach(function (f) { numerar(f, ++n); tbody.appendChild(f); });
      });

      if (alphaNav) alphaNav.style.display = 'none';
    }

    if (noResults) noResults.style.display = arr.length ? 'none' : 'block';
  }

  if (input) input.addEventListener('input', render);
  if (orden) orden.addEventListener('change', render);

  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
  }

  render();
})();
