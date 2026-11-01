/* ============================================================
   Bacterias · tabla de pares
   Requiere: js/columna-vertebral.js
   Búsqueda, orden (original, Par 1, Par 2, Zona, Sistema y
   Columna vertebral) y numeración de filas.
   ============================================================ */
(function () {
  var tabla = document.getElementById('mainTable');
  if (!tabla) return;

  var input = document.getElementById('q');
  var sortSelect = document.getElementById('sortSelect');
  var alphaNav = document.getElementById('alphaNav');
  var tbody = tabla.tBodies[0];
  var noResults = document.getElementById('noResults');
  var CV = window.COLUMNA_VERTEBRAL;
  var COLS = 7;

  function planoTexto(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function textoReferencia(fila) {
    var a = fila.querySelector('td.name a');
    if (!a) return '';
    var slug = (a.getAttribute('href') || '').split('/').pop().replace(/\.html?$/i, '');
    var palabras = (window.REFERENCIAS && window.REFERENCIAS[slug]) || '';
    return slug.replace(/[-_]/g, ' ') + ' ' + palabras;
  }


  /* --- Columna Vértebra (al final de la tabla) --- */
  Array.prototype.forEach.call(tbody.rows, function (tr) {
    if (tr.classList.contains('section-row')) {
      if (tr.cells[0]) tr.cells[0].colSpan = COLS;
      return;
    }
    var par1 = tr.querySelector('.par-a');
    if (!par1) return;

    var codigo = CV ? CV.vertebraDe(par1.textContent) : '';
    var td = document.createElement('td');
    td.className = 'vertebra';
    td.innerHTML = CV ? CV.celda(codigo) : '';
    tr.dataset.vertebra = codigo;
    tr.dataset.partes = codigo && CV ? CV.partesDe(codigo) : '';
    tr.dataset.ref = textoReferencia(tr);
    tr.appendChild(td);
  });

  var originalChildren = Array.prototype.slice.call(tbody.children);
  var dataRows = originalChildren.filter(function (r) {
    return !r.classList.contains('section-row');
  });
  var hasSections = originalChildren.some(function (r) {
    return r.classList.contains('section-row');
  });
  var MODO_ORIGINAL = sortSelect.options[0].value;

  var ZONA_ORDER = ['Cabeza', 'Cara', 'Cuello', 'Brazos', 'Torso Superior', 'Torso Medio',
    'Torso Bajo', 'Pelvis', 'Dorso', 'Pierna', 'Pie', 'Otros'];
  var SISTEMA_ORDER = ['Nervioso', 'Circulatorio', 'Respiratorio', 'Digestivo', 'Esquelético',
    'Muscular', 'Endócrino', 'Endocrino', 'Urinario', 'Linfático', 'Inmunológico',
    'Tegumentario', 'Reproductor', 'Locomotor', 'OTRO'];

  function par1De(row) {
    return row.querySelector('.par-a').textContent.trim();
  }

  function getKey(row, key) {
    if (key === 'par1') return par1De(row).toLowerCase();
    if (key === 'par2') return row.querySelector('.par-b').textContent.trim().toLowerCase();
    return '';
  }

  function renumber() {
    var n = 0;
    Array.prototype.forEach.call(tbody.rows, function (row) {
      if (row.classList.contains('section-row')) return;
      var cell = row.querySelector('td.num');
      if (cell) cell.textContent = ++n;
    });
  }

  function encabezado(texto) {
    var header = document.createElement('tr');
    header.className = 'section-row';
    var cell = document.createElement('td');
    cell.colSpan = COLS;
    cell.textContent = texto;
    header.appendChild(cell);
    return header;
  }

  function encabezadoHTML(html) {
    var header = document.createElement('tr');
    header.className = 'section-row';
    var cell = document.createElement('td');
    cell.colSpan = COLS;
    cell.innerHTML = html;
    header.appendChild(cell);
    return header;
  }

  function buildGrouped(visibleData, groupField, groupOrder) {
    var byGroup = new Map();
    groupOrder.forEach(function (g) { byGroup.set(g, []); });
    Array.from(visibleData).forEach(function (r) {
      var g = r.querySelector('.' + groupField).textContent.trim();
      if (!byGroup.has(g)) byGroup.set(g, []);
      byGroup.get(g).push(r);
    });
    byGroup.forEach(function (arr) {
      arr.sort(function (a, b) {
        return par1De(a).toLowerCase().localeCompare(par1De(b).toLowerCase(), 'es');
      });
    });
    var order = groupOrder.slice();
    byGroup.forEach(function (_, g) { if (order.indexOf(g) === -1) order.push(g); });

    var frag = document.createDocumentFragment();
    order.forEach(function (g) {
      var arr = byGroup.get(g);
      if (!arr || !arr.length) return;
      frag.appendChild(encabezado(g));
      arr.forEach(function (r) { frag.appendChild(r); });
    });
    return frag;
  }

  function buildColumna(visibles, conBusqueda) {
    var grupos = new Map();
    CV.VERTEBRAS.forEach(function (v) { grupos.set(v[0], []); });
    var sinRelacion = [];

    Array.prototype.forEach.call(visibles, function (r) {
      var c = r.dataset.vertebra;
      if (c && grupos.has(c)) grupos.get(c).push(r);
      else sinRelacion.push(r);
    });

    var frag = document.createDocumentFragment();
    CV.VERTEBRAS.forEach(function (v) {
      var arr = grupos.get(v[0]);
      /* Sin búsqueda se muestran las 33 vértebras, aunque no tengan pares */
      if (!arr.length && conBusqueda) return;
      frag.appendChild(encabezadoHTML('<span class="v-code">' + v[0] + '</span> ' + v[1]));
      arr.sort(function (a, b) {
        return par1De(a).toLowerCase().localeCompare(par1De(b).toLowerCase(), 'es');
      }).forEach(function (r) { frag.appendChild(r); });
    });

    if (sinRelacion.length) {
      frag.appendChild(encabezado('Sin relación con la columna'));
      sinRelacion.sort(function (a, b) {
        return par1De(a).toLowerCase().localeCompare(par1De(b).toLowerCase(), 'es');
      }).forEach(function (r) { frag.appendChild(r); });
    }
    return frag;
  }

  function render() {
    var q = planoTexto(input.value).trim();
    var tokens = q ? q.split(/\s+/).filter(Boolean) : [];
    var sortKey = sortSelect.value;
    var matches = function (r) {
      if (!tokens.length) return true;
      var texto = planoTexto(r.textContent) + ' ' + planoTexto(r.dataset.partes || '') +
        ' ' + planoTexto(r.dataset.ref || '');
      for (var i = 0; i < tokens.length; i++) {
        if (texto.indexOf(tokens[i]) === -1) return false;
      }
      return true;
    };
    var visibleData = new Set(dataRows.filter(matches));
    var frag = document.createDocumentFragment();

    if (alphaNav) alphaNav.style.display = (sortKey === MODO_ORIGINAL && hasSections) ? '' : 'none';

    if (sortKey === MODO_ORIGINAL) {
      if (!hasSections) {
        originalChildren.filter(function (c) { return visibleData.has(c); })
          .forEach(function (c) { frag.appendChild(c); });
      } else {
        var currentSection = null;
        var sectionHasData = new Map();
        originalChildren.forEach(function (child) {
          if (child.classList.contains('section-row')) {
            currentSection = child;
            sectionHasData.set(child, false);
          } else if (visibleData.has(child) && currentSection) {
            sectionHasData.set(currentSection, true);
          }
        });
        originalChildren.forEach(function (child) {
          if (child.classList.contains('section-row')) {
            if (sectionHasData.get(child)) frag.appendChild(child);
          } else if (visibleData.has(child)) {
            frag.appendChild(child);
          }
        });
      }
    } else if (sortKey === 'columna') {
      frag.appendChild(buildColumna(Array.from(visibleData), !!q));
    } else if (sortKey === 'zona') {
      frag.appendChild(buildGrouped(visibleData, 'zona', ZONA_ORDER));
    } else if (sortKey === 'sistema') {
      frag.appendChild(buildGrouped(visibleData, 'sistema', SISTEMA_ORDER));
    } else {
      Array.from(visibleData)
        .sort(function (a, b) { return getKey(a, sortKey).localeCompare(getKey(b, sortKey), 'es'); })
        .forEach(function (r) { frag.appendChild(r); });
    }

    tbody.replaceChildren(frag);
    renumber();
    if (noResults) noResults.style.display = visibleData.size === 0 ? 'block' : 'none';
  }

  input.addEventListener('input', render);
  sortSelect.addEventListener('change', render);
  render();

  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
  }
})();
