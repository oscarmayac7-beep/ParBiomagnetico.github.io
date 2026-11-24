/* ============================================================
   Configuración compartida (menú «Configuración» y engrane flotante)
   - Tema día / noche
   - Mostrar el Par 1 una sola vez cuando se repite (orden por categorías)
   ============================================================ */
window.CONFIG = (function () {
  var CLAVE = 'config-parbiomag';
  var DEF = {
    ocultarPar1: true, contraerPar1: true,
    colFuente1: true, colFechaAlta: false, colFechaAct: false,
    colPorQue: false, colImg: false
  };
  var estado = { ocultarPar1: DEF.ocultarPar1, contraerPar1: DEF.contraerPar1 };

  function leer() {
    try {
      var g = JSON.parse(localStorage.getItem(CLAVE) || '{}');
      ['ocultarPar1', 'contraerPar1', 'colFuente1', 'colFechaAlta',
       'colFechaAct', 'colPorQue', 'colImg'].forEach(function (k) {
        estado[k] = (k in g) ? !!g[k] : DEF[k];
      });
    } catch (e) {
      Object.keys(DEF).forEach(function (k) { estado[k] = DEF[k]; });
    }
  }

  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) {}
  }

  function get(clave) {
    leer();
    return estado[clave];
  }

  function set(clave, valor) {
    estado[clave] = valor;
    guardar();
    var ev;
    try {
      ev = new CustomEvent('config:cambio', { detail: { clave: clave, valor: valor } });
    } catch (e) {
      ev = document.createEvent('CustomEvent');
      ev.initCustomEvent('config:cambio', true, true, { clave: clave, valor: valor });
    }
    window.dispatchEvent(ev);
  }

  function temaActual() {
    if (window.TEMA && window.TEMA.actual) return window.TEMA.actual();
    return document.documentElement.getAttribute('data-tema') === 'noche' ? 'noche' : 'dia';
  }

  function ponerTema(t) {
    if (window.TEMA && window.TEMA.aplicar) window.TEMA.aplicar(t);
    else document.documentElement.setAttribute('data-tema', t === 'noche' ? 'noche' : 'dia');
  }

  /* Bloque de ajustes reutilizable */
  function bloqueAjustes() {
    var caja = document.createElement('div');
    caja.className = 'cfg';
    caja.innerHTML =
      '<div class="cfg-sec">' +
        '<div class="cfg-tit">Apariencia</div>' +
        '<div class="cfg-seg" role="group" aria-label="Tema">' +
          '<button type="button" data-tema="dia">☀ Día</button>' +
          '<button type="button" data-tema="noche">☾ Noche</button>' +
        '</div>' +
      '</div>' +
      '<div class="cfg-sec">' +
        '<div class="cfg-tit">Tablas</div>' +
        '<label class="cfg-switch">' +
          '<input type="checkbox" class="cfg-par1">' +
          '<span>Mostrar el Par 1 una sola vez</span>' +
        '</label>' +
        '<p class="cfg-ayuda">Al ordenar por Clasif., Zona, Sistema o Vértebra, el Par 1 repetido se muestra solo en la primera fila del grupo.</p>' +
        '<label class="cfg-switch" style="margin-top:.6rem">' +
          '<input type="checkbox" class="cfg-contraer">' +
          '<span>Contraer las filas repetidas</span>' +
        '</label>' +
        '<p class="cfg-ayuda">Las filas del mismo Par 1 se ocultan; toca el contador <b>N +</b> de la primera fila para expandirlas o volver a contraerlas. Los cambios se aplican al instante en todas las listas.</p>' +
      '</div>' +
      '<div class="cfg-sec">' +
        '<div class="cfg-tit">Columnas opcionales</div>' +
        '<label class="cfg-switch"><input type="checkbox" class="cfg-c-fuente"><span>Fuente1</span></label>' +
        '<label class="cfg-switch" style="margin-top:.35rem"><input type="checkbox" class="cfg-c-falta"><span>Fecha alta</span></label>' +
        '<label class="cfg-switch" style="margin-top:.35rem"><input type="checkbox" class="cfg-c-fact"><span>Fecha actualización</span></label>' +
        '<label class="cfg-switch" style="margin-top:.35rem"><input type="checkbox" class="cfg-c-pque"><span>¿Por qué se muestra?</span></label>' +
        '<label class="cfg-switch" style="margin-top:.35rem"><input type="checkbox" class="cfg-c-img"><span>Img Par-Biomag</span></label>' +
        '<p class="cfg-ayuda">Muestra u oculta las columnas opcionales de las listas. Las columnas adicionales aparecen al final de la tabla.</p>' +
      '</div>' +
      '<div class="cfg-sep"></div>';

    var check = caja.querySelector('.cfg-par1');
    check.checked = !!get('ocultarPar1');
    check.addEventListener('change', function () { set('ocultarPar1', check.checked); });

    var checkC = caja.querySelector('.cfg-contraer');
    checkC.checked = !!get('contraerPar1');
    checkC.addEventListener('change', function () { set('contraerPar1', checkC.checked); });

    [['.cfg-c-fuente', 'colFuente1'], ['.cfg-c-falta', 'colFechaAlta'],
     ['.cfg-c-fact', 'colFechaAct'], ['.cfg-c-pque', 'colPorQue'],
     ['.cfg-c-img', 'colImg']].forEach(function (par) {
      var c = caja.querySelector(par[0]);
      if (!c) return;
      c.checked = !!get(par[1]);
      c.addEventListener('change', function () { set(par[1], c.checked); });
    });

    var botones = caja.querySelectorAll('[data-tema]');

    function marcarTema() {
      var t = temaActual();
      Array.prototype.forEach.call(botones, function (b) {
        b.classList.toggle('activo', b.getAttribute('data-tema') === t);
      });
    }

    Array.prototype.forEach.call(botones, function (b) {
      b.addEventListener('click', function () {
        ponerTema(b.getAttribute('data-tema'));
        marcarTema();
      });
    });

    marcarTema();
    return caja;
  }

  function abrirModal() {
    var fondo = document.createElement('div');
    fondo.className = 'cfg-fondo';

    var caja = document.createElement('div');
    caja.className = 'cfg-caja';
    caja.setAttribute('role', 'dialog');
    caja.setAttribute('aria-modal', 'true');
    caja.setAttribute('aria-label', 'Configuración');

    var cabeza = document.createElement('div');
    cabeza.className = 'cfg-cabeza';
    cabeza.innerHTML = '<h2>Configuración</h2>' +
      '<button type="button" class="cfg-cerrar" aria-label="Cerrar">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">' +
      '<path d="M6 6l12 12M18 6L6 18"/></svg></button>';

    var cuerpo = document.createElement('div');
    cuerpo.className = 'cfg-cuerpo';
    cuerpo.appendChild(bloqueAjustes());

    caja.appendChild(cabeza);
    caja.appendChild(cuerpo);
    fondo.appendChild(caja);

    function cerrar() {
      document.removeEventListener('keydown', tecla);
      fondo.remove();
    }
    function tecla(e) { if (e.key === 'Escape') cerrar(); }

    fondo.addEventListener('click', function (e) { if (e.target === fondo) cerrar(); });
    cabeza.querySelector('.cfg-cerrar').addEventListener('click', cerrar);
    document.addEventListener('keydown', tecla);

    document.body.appendChild(fondo);
    caja.setAttribute('tabindex', '-1');
    caja.focus();
  }

  function montar() {
    /* Opción «Configuración» del menú lateral */
    var enlace = document.getElementById('abrirConfig');
    if (enlace) {
      enlace.addEventListener('click', function (e) {
        e.preventDefault();
        abrirModal();
      });
      return;
    }

    /* Panel de preferencias antiguo (si existe) */
    var panel = document.getElementById('colores');
    if (panel) {
      if (!panel.querySelector('.cfg')) {
        panel.insertBefore(bloqueAjustes(), panel.firstChild);
      }
      return;
    }

    if (document.getElementById('btnConfig')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'btnConfig';
    btn.className = 'btn-config';
    btn.textContent = '⚙';
    btn.title = 'Configuración';
    btn.setAttribute('aria-label', 'Configuración');
    btn.addEventListener('click', abrirModal);
    document.body.appendChild(btn);
  }


  function vigilarCambios() {
    var antes = JSON.stringify(estado);
    leer();
    if (JSON.stringify(estado) !== antes) {
      var ev;
      try { ev = new CustomEvent('config:cambio', { detail: { recarga: true } }); }
      catch (e) {
        ev = document.createEvent('CustomEvent');
        ev.initCustomEvent('config:cambio', true, true, { recarga: true });
      }
      window.dispatchEvent(ev);
    }
  }

  leer();
  setInterval(vigilarCambios, 1200);
  window.addEventListener('focus', vigilarCambios);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) vigilarCambios();
  });

  if (document.body) montar();
  else document.addEventListener('DOMContentLoaded', montar);

  return { get: get, set: set, abrir: abrirModal, porDefecto: DEF };
})();
