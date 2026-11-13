/* ============================================================
   Rastreo del registro: al tocar el número (#) explica por qué
   aparece esa fila (búsqueda, predefinida, orden, agrupación).
   ============================================================ */
window.RASTREO = (function () {

  function plano(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function limpio(el) {
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function sinMarca(el) {
    if (!el) return '';
    var c = el.cloneNode(true);
    var m = c.querySelector('.mas-par1');
    if (m) m.remove();
    return limpio(c);
  }

  function campos(tr) {
    return [
      { n: 'Par 1', v: sinMarca(tr.querySelector('.par-a')) },
      { n: 'Par 2', v: limpio(tr.querySelector('.par-b')) },
      { n: 'Nombre', v: limpio(tr.querySelector('.name')) },
      { n: 'Zona', v: limpio(tr.querySelector('.zona')) },
      { n: 'Sistema', v: limpio(tr.querySelector('.sistema')) },
      { n: 'Vértebra', v: limpio(tr.querySelector('.vertebra')) },
      { n: 'Ficha', v: tr.dataset.ref || '' },
      { n: 'Partes de la vértebra', v: tr.dataset.partes || '' }
    ];
  }

  function contiene(valor, palabras) {
    var v = plano(valor);
    for (var i = 0; i < palabras.length; i++) {
      if (v.indexOf(palabras[i]) === -1) return false;
    }
    return true;
  }

  function clave(tr) {
    var p1 = tr.querySelector('.par-a'), p2 = tr.querySelector('.par-b');
    return (sinMarca(p1) + ' \u2013 ' + limpio(p2)).replace(/\s+\u2013\s*$/, '');
  }

  function grupoDe(tr) {
    var n = tr.previousElementSibling;
    while (n) {
      if (n.classList.contains('section-row')) return limpio(n);
      n = n.previousElementSibling;
    }
    return '';
  }

  function ordenActual() {
    var sel = document.getElementById('sortSelect') || document.getElementById('sortSel');
    if (!sel) return '';
    return sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : sel.value;
  }

  function abrir(tr) {
    var q = (document.getElementById('q') || {}).value || '';
    q = q.trim();
    var predef = (window.BUSQUEDA && window.BUSQUEDA.activa) ? window.BUSQUEDA.activa() : null;
    var num = limpio(tr.querySelector('td.num'));
    var cs = campos(tr);
    var porNombre = {};
    cs.forEach(function (c) { porNombre[c.n] = c.v; });

    var tbody = tr.parentNode;
    var filas = tbody.querySelectorAll('tr:not(.section-row)');
    var visibles = tbody.querySelectorAll('tr:not(.section-row):not(.oculto)');

    var lineas = [];

    /* --- Motivo --- */
    var motivo = [];
    if (q) {
      if (predef) {
        motivo.push('Búsqueda guardada: «' + predef.nombre + '» (' + predef.terminos.split(',').length + ' términos).');
      }
      var terminos = q.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      terminos.forEach(function (t) {
        var palabras = plano(t).split(/\s+/).filter(Boolean);
        var donde = [];
        cs.forEach(function (c) {
          if (c.v && contiene(c.v, palabras)) donde.push(c.n);
        });
        if (donde.length) {
          motivo.push('«' + t + '» coincide en: ' + donde.join(', ') + '.');
        }
      });
      if (!motivo.length) motivo.push('Coincide con el texto buscado «' + q + '».');
    } else {
      motivo.push('Sin búsqueda activa: se muestra por el orden actual («' + ordenActual() + '»).');
    }

    var grupo = grupoDe(tr);
    if (grupo) motivo.push('Pertenece al grupo «' + grupo + '».');

    if (tr.classList.contains('grupo-par1')) {
      var marca = tr.querySelector('.mas-par1');
      var n = marca ? marca.textContent.replace('+', '') : '';
      motivo.push('Encabeza ' + (n || 'varias') + ' fila(s) más con el mismo Par 1 («' + sinMarca(tr.querySelector('.par-a')) + '»), contraídas.');
    }

    /* --- Construir panel --- */
    var fondo = document.createElement('div');
    fondo.className = 'cfg-fondo';

    var caja = document.createElement('div');
    caja.className = 'cfg-caja';
    caja.setAttribute('role', 'dialog');
    caja.setAttribute('aria-modal', 'true');
    caja.setAttribute('aria-label', 'Detalle del registro');

    var cabeza = document.createElement('div');
    cabeza.className = 'cfg-cabeza';
    cabeza.innerHTML = '<h2>Registro #' + (num || '?') + '</h2>' +
      '<button type="button" class="cfg-cerrar" aria-label="Cerrar">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">' +
      '<path d="M6 6l12 12M18 6L6 18"/></svg></button>';

    var cuerpo = document.createElement('div');
    cuerpo.className = 'cfg-cuerpo';

    var titulo = document.createElement('p');
    titulo.className = 'ras-titulo';
    titulo.textContent = clave(tr);
    cuerpo.appendChild(titulo);

    var nombre = document.createElement('p');
    nombre.className = 'ras-nota';
    nombre.textContent = porNombre['Nombre'] || '';
    cuerpo.appendChild(nombre);

    var chips = document.createElement('div');
    chips.className = 'ras-chips';
    [['Clasif.', (tr.querySelector('.clasif') || {}).getAttribute ? (tr.querySelector('.clasif').getAttribute('data-c') || limpio(tr.querySelector('.clasif'))) : ''],
     ['Zona', porNombre['Zona']],
     ['Sistema', porNombre['Sistema']],
     ['Vértebra', porNombre['Vértebra']]].forEach(function (p) {
      if (!p[1]) return;
      var c = document.createElement('span');
      c.className = 'ras-chip';
      c.textContent = p[0] + ': ' + p[1];
      chips.appendChild(c);
    });
    cuerpo.appendChild(chips);

    var sub1 = document.createElement('h3');
    sub1.className = 'ras-sub';
    sub1.textContent = '¿Por qué se muestra?';
    cuerpo.appendChild(sub1);

    var ul = document.createElement('ul');
    ul.className = 'ras-lista';
    motivo.forEach(function (m) {
      var li = document.createElement('li');
      li.textContent = m;
      ul.appendChild(li);
    });
    cuerpo.appendChild(ul);

    var sub2 = document.createElement('h3');
    sub2.className = 'ras-sub';
    sub2.textContent = 'Contexto';
    cuerpo.appendChild(sub2);

    var ctx = document.createElement('p');
    ctx.className = 'ras-nota';
    ctx.textContent = 'Filas visibles: ' + visibles.length + ' de ' + filas.length +
      (q ? ' · Búsqueda: «' + q + '»' : ' · Sin búsqueda') +
      ' · Orden: ' + (ordenActual() || '—');
    cuerpo.appendChild(ctx);

    var copiar = document.createElement('button');
    copiar.type = 'button';
    copiar.className = 'ras-copiar';
    copiar.textContent = 'Copiar reseña';
    copiar.addEventListener('click', function () {
      var texto = [
        'Registro #' + (num || '?') + ' · ' + clave(tr),
        'Nombre: ' + (porNombre['Nombre'] || ''),
        'Clasif.: ' + ((tr.querySelector('.clasif') || {}).getAttribute ? (tr.querySelector('.clasif').getAttribute('data-c') || limpio(tr.querySelector('.clasif'))) : ''),
        'Zona: ' + porNombre['Zona'] + ' · Sistema: ' + porNombre['Sistema'] + ' · Vértebra: ' + porNombre['Vértebra'],
        'Motivo: ' + motivo.join(' '),
        'Contexto: ' + ctx.textContent
      ].join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(function () {
          copiar.textContent = 'Copiado ✓';
          setTimeout(function () { copiar.textContent = 'Copiar reseña'; }, 1400);
        });
      } else {
        copiar.textContent = 'No disponible';
      }
    });
    cuerpo.appendChild(copiar);

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
  }

  document.addEventListener('click', function (e) {
    var celda = e.target.closest ? e.target.closest('td.num') : null;
    if (!celda) return;
    var tr = celda.closest('tr');
    if (!tr || tr.classList.contains('section-row')) return;
    e.preventDefault();
    e.stopPropagation();
    abrir(tr);
  }, true);

  return { abrir: abrir };
})();
