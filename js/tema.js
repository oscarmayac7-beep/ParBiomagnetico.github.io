/* ============================================================
   Día / noche
   Guarda la preferencia en localStorage y crea el botón flotante.
   ============================================================ */
(function () {
  var CLAVE = 'tema-parbiomag';
  var raiz = document.documentElement;

  function guardado() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }

  function aplicar(tema) {
    var noche = tema === 'noche';
    raiz.setAttribute('data-tema', noche ? 'noche' : 'dia');
    var btn = document.getElementById('btnTema');
    if (btn) {
      btn.textContent = noche ? '☀' : '☾';
      btn.title = noche ? 'Modo día' : 'Modo noche';
      btn.setAttribute('aria-label', btn.title);
    }
  }

  /* Se aplica antes de pintar la página */
  aplicar(guardado() || 'dia');

  function cambiar(tema) {
    aplicar(tema);
    try { localStorage.setItem(CLAVE, tema === 'noche' ? 'noche' : 'dia'); } catch (e) {}
  }

  /* API para la configuración */
  window.TEMA = {
    aplicar: cambiar,
    actual: function () { return raiz.getAttribute('data-tema') === 'noche' ? 'noche' : 'dia'; }
  };

  function crearBoton() {
    if (document.getElementById('btnTema')) return;
    var btn = document.createElement('button');
    btn.id = 'btnTema';
    btn.type = 'button';
    btn.className = 'btn-tema';
    document.body.appendChild(btn);
    aplicar(raiz.getAttribute('data-tema'));
    btn.addEventListener('click', function () {
      cambiar(raiz.getAttribute('data-tema') === 'noche' ? 'dia' : 'noche');
    });
  }

  if (document.body) crearBoton();
  else document.addEventListener('DOMContentLoaded', crearBoton);
})();
