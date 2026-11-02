/* ============================================================
   Vértebras · buscador, desplazamiento y resaltado del destino
   ============================================================ */
(function () {
  var input = document.getElementById('q');
  var noResults = document.getElementById('noResults');
  var secciones = Array.prototype.slice.call(document.querySelectorAll('section.zona'));
  var tarjetas = Array.prototype.slice.call(document.querySelectorAll('.vcard'));
  var backTop = document.getElementById('backToTop');

  function plano(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function filtrar() {
    var q = plano(input.value).trim();
    var tokens = q ? q.split(/\s+/).filter(Boolean) : [];
    var visibles = 0;

    tarjetas.forEach(function (c) {
      var texto = plano(c.textContent) + ' ' + plano(c.getAttribute('data-code'));
      var ok = tokens.every(function (t) { return texto.indexOf(t) !== -1; });
      c.hidden = !ok;
      if (ok) visibles++;
    });

    secciones.forEach(function (s) {
      var hay = Array.prototype.some.call(s.querySelectorAll('.vcard'), function (c) { return !c.hidden; });
      s.hidden = !hay;
    });

    if (noResults) noResults.style.display = visibles ? 'none' : 'block';
  }

  if (input) input.addEventListener('input', filtrar);

  /* Desplaza hasta la vértebra del enlace (#T5) y la resalta */
  var temporizador = null;

  function irA(el) {
    var d = document.documentElement;
    var previo = d.style.scrollBehavior;
    d.style.scrollBehavior = 'auto';           /* salto inmediato, sin animación */
    var y = el.getBoundingClientRect().top + (window.pageYOffset || d.scrollTop || 0) - 72;
    if (y < 0) y = 0;
    if (window.scrollTo) window.scrollTo(0, y);
    d.style.scrollBehavior = previo;
  }

  function resaltar() {
    var id = decodeURIComponent((location.hash || '').replace('#', ''));
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;

    el.classList.add('destacada');
    irA(el);
    /* por si el navegador termina de maquetar después */
    setTimeout(function () { irA(el); }, 120);

    clearTimeout(temporizador);
    temporizador = setTimeout(function () { el.classList.remove('destacada'); }, 3500);
  }

  window.addEventListener('hashchange', resaltar);
  window.addEventListener('load', function () { setTimeout(resaltar, 40); });
  resaltar();

  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
  }
})();
