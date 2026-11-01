/* ============================================================
   Menú táctil (Android / iOS)
   En pantallas sin hover (dedos) los submenús no se abren con
   :hover, así que se abren y cierran al tocar.  En escritorio se
   mantiene el comportamiento de siempre (hover) y este script no
   interviene.
   ============================================================ */
(function () {
  var sinHover = !(window.matchMedia && window.matchMedia('(hover: hover)').matches);

  var nav = document.querySelector('ul.acel');
  if (!nav || !sinHover) return;

  function cerrarOtros(excepto) {
    var abiertos = nav.querySelectorAll('li.open');
    for (var i = 0; i < abiertos.length; i++) {
      if (abiertos[i] !== excepto) abiertos[i].classList.remove('open');
    }
  }

  /* Primer hijo <ul> del li = submenú */
  function submenuDe(li) {
    for (var i = 0; i < li.children.length; i++) {
      if (li.children[i].tagName === 'UL') return li.children[i];
    }
    return null;
  }

  nav.addEventListener('click', function (ev) {
    var a = ev.target.closest ? ev.target.closest('a') : null;
    if (!a || !nav.contains(a)) return;

    var li = a.parentNode;
    if (!li || li.tagName !== 'LI') return;

    var sub = submenuDe(li);

    if (sub) {
      /* Elemento con submenú: abrir/cerrar en vez de navegar */
      ev.preventDefault();
      var estabaAbierto = li.classList.contains('open');
      cerrarOtros(li);
      if (estabaAbierto) {
        li.classList.remove('open');
      } else {
        li.classList.add('open');
      }
      return;
    }

    /* Enlace real dentro de un submenú: cerrarlo al navegar */
    var padre = a.closest('li.open');
    if (padre) {
      setTimeout(function () { padre.classList.remove('open'); }, 250);
    }
  });

  /* Tocar fuera del menú lo cierra */
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest || !ev.target.closest('ul.acel')) {
      cerrarOtros(null);
    }
  });
})();
