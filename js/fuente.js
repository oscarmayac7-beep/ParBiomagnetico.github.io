/* ============================================================
   Columna Fuente1 (al final de la tabla).
   Se ejecuta después del script de la lista para colocar la
   columna detrás de la vértebra.
   ============================================================ */
(function () {
  function plano(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  var MAPA = {}, PAR = {};
  (window.PARES || []).forEach(function (p) {
    var k = plano(p.p1) + '|' + plano(p.p2) + '|' + plano(p.n);
    MAPA[k] = p.f || 'Lista';
    var kp = plano(p.p1) + '|' + plano(p.p2);
    if (!PAR[kp]) PAR[kp] = p.f || 'Lista';
  });

  function texto(el) {
    if (!el) return '';
    var c = el.cloneNode(true);
    var m = c.querySelector('.mas-par1');
    if (m) m.remove();
    return plano(c.textContent);
  }

  function valor(tr) {
    var p1 = plano(tr.dataset.par1 || '') || texto(tr.querySelector('.par-a'));
    var p2 = texto(tr.querySelector('.par-b'));
    var n = texto(tr.querySelector('.name'));
    return MAPA[p1 + '|' + p2 + '|' + n] || PAR[p1 + '|' + p2] || 'Lista';
  }

  function ajustarEncabezados() {
    var tbody = document.querySelector('tbody');
    if (!tbody) return;
    var total = 0;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (!tr.classList.contains('section-row') && tr.cells.length > total) total = tr.cells.length;
    });
    if (!total) return;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row') && tr.cells[0]) tr.cells[0].colSpan = total;
    });
  }

  function aplicar() {
    var tbody = document.querySelector('tbody');
    if (!tbody) return;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row')) return;
      if (tr.querySelector('td.fuente')) return;
      var td = document.createElement('td');
      td.className = 'fuente';
      td.textContent = valor(tr);
      tr.appendChild(td);
    });
    ajustarEncabezados();
  }

  if (document.body) aplicar();
  else document.addEventListener('DOMContentLoaded', aplicar);

  var tb = document.querySelector('tbody');
  if (tb) new MutationObserver(function () { aplicar(); }).observe(tb, { childList: true });
})();
