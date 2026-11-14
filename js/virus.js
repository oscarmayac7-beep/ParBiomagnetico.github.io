/* ============================================================
   Virus · tabla de pares
   Requiere: js/columna-vertebral.js
   Búsqueda, orden (original, Par 1, Par 2, Zona, Sistema y
   Columna vertebral) y numeración de filas.
   ============================================================ */
(function () {
  var tabla = document.getElementById('virusTable');
  if (!tabla) return;

  var input = document.getElementById('q');
  var sortSelect = document.getElementById('sortSelect');
  var alphaNav = document.getElementById('alphaNav');
  var tbody = tabla.tBodies[0];
  var noResults = document.getElementById('noResults');
  var CV = window.COLUMNA_VERTEBRAL;
  var COLS = 8;

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
  var MODO_ORIGINAL = '__original__';

  var ZONA_ORDER = ['Cabeza', 'Cara', 'Cuello', 'Brazos', 'Torso Superior', 'Torso Medio',
    'Torso Bajo', 'Pelvis', 'Dorso', 'Pierna', 'Pie', 'Otros'];
  var SISTEMA_ORDER = ['Nervioso', 'Circulatorio', 'Respiratorio', 'Digestivo', 'Esquelético',
    'Muscular', 'Endócrino', 'Endocrino', 'Urinario', 'Linfático', 'Inmunológico',
    'Tegumentario', 'Reproductor', 'Locomotor', 'OTRO'];

  function par1De(row) {
    return row.querySelector('.par-a').textContent.trim();
  }

  function sistemaDe(row) {
    var c = row.querySelector('.sistema');
    return c ? c.textContent.trim() : '';
  }

  function compararFilas(a, b, conFlujo) {
    if (window.ORDEN_ANATOMICO) {
      return window.ORDEN_ANATOMICO.comparar(par1De(a), sistemaDe(a), par1De(b), sistemaDe(b), conFlujo);
    }
    return par1De(a).toLowerCase().localeCompare(par1De(b).toLowerCase(), 'es');
  }

  function getKey(row, key) {
    if (key === 'par1') return par1De(row).toLowerCase();
    if (key === 'par2') return row.querySelector('.par-b').textContent.trim().toLowerCase();
    if (key === 'clasif') {
      var c = row.querySelector('.clasif');
      return c ? (c.getAttribute('data-c') || c.textContent).trim().toLowerCase() : '';
    }
    if (key === 'nombre' || key === 'name') {
      var n = row.querySelector('.name');
      return n ? n.textContent.trim().toLowerCase() : '';
    }
    return '';
  }

  function renumber() {
    var n = 0;
    Array.prototype.forEach.call(tbody.rows, function (row) {
      if (row.classList.contains('section-row') || row.classList.contains('oculto')) return;
      var cell = row.querySelector('td.num');
      if (cell) cell.textContent = ++n;
      row.classList.toggle('fila-par', n % 2 === 0);
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


  function valorGrupo(r, campo) {
    var c = r.querySelector('.' + campo);
    if (!c) return '';
    if (campo === 'clasif' && c.getAttribute('data-c')) return c.getAttribute('data-c').trim();
    return c.textContent.trim();
  }

  function buildGrouped(visibleData, groupField, groupOrder, etiqueta) {
    var byGroup = new Map();
    groupOrder.forEach(function (g) { byGroup.set(g, []); });
    Array.from(visibleData).forEach(function (r) {
      var g = valorGrupo(r, groupField);
      if (!byGroup.has(g)) byGroup.set(g, []);
      byGroup.get(g).push(r);
    });
    byGroup.forEach(function (arr) {
      arr.sort(function (a, b) {
        return compararFilas(a, b, groupField === 'sistema');
      });
    });
    var order = groupOrder.slice();
    byGroup.forEach(function (_, g) { if (order.indexOf(g) === -1) order.push(g); });

    var frag = document.createDocumentFragment();
    order.forEach(function (g) {
      var arr = byGroup.get(g);
      if (!arr || !arr.length) return;
      frag.appendChild(encabezado(etiqueta ? etiqueta(g) : g));
      arr.forEach(function (r) { frag.appendChild(r); });
    });
    return frag;
  }

  var CLASIF_ORDER = ['V', 'B', 'H', 'P', 'T', 'E', 'D', 'Ps', 'R', 'O'];
  var CLASIF_TITULOS = {
    'V': 'Virus', 'B': 'Bacteria', 'H': 'Hongo', 'P': 'Parásito', 'T': 'Tóxico',
    'E': 'Especial', 'D': 'Disfunción', 'Ps': 'Psico-emocional', 'R': 'Reservorio', 'O': 'Otros'
  };

  function aplicarPar1Unico(contenedor) {
    var ultimo = null;
    Array.prototype.forEach.call(contenedor.childNodes, function (n) {
      if (n.nodeType !== 1) return;
      if (n.classList.contains('section-row')) { ultimo = null; return; }
      var a = n.querySelector('.par-a');
      if (!a) return;
      var txt = a.textContent.trim();
      if (txt && ultimo && txt === ultimo) {
        a.textContent = '';
        n.classList.add('par1-repetido');
      } else {
        if (txt) ultimo = txt;
        n.classList.remove('par1-repetido');
      }
    });
  }

  var contadorGrupo = 0;

  function contraerRepetidos(contenedor) {
    var filas = [];
    Array.prototype.forEach.call(contenedor.childNodes, function (n) {
      if (n.nodeType !== 1) return;
      filas.push(n.classList.contains('section-row') ? null : n);
    });

    var i = 0;
    while (i < filas.length) {
      var tr = filas[i];
      if (!tr) { i++; continue; }
      var clave = tr.dataset.par1 || '';
      var j = i + 1;
      while (j < filas.length && filas[j] && (filas[j].dataset.par1 || '') === clave) j++;
      if (clave && (j - i) > 1) {
        var id = 'g' + (++contadorGrupo);
        tr.classList.add('grupo-par1');
        tr.dataset.grupo = id;
        tr.classList.remove('oculto', 'abierto');
        var celda = tr.querySelector('.par-a');
        if (celda && !celda.querySelector('.mas-par1')) {
          var marca = document.createElement('span');
          marca.className = 'mas-par1';
          marca.dataset.total = String(j - i);
          marca.innerHTML = '<b>' + (j - i) + '</b><i>+</i>';
          marca.title = 'Expandir ' + (j - i) + ' pares';
          marca.addEventListener('click', function (ev) {
            ev.stopPropagation();
            var fila = this.closest ? this.closest('tr') : null;
            if (fila) alternarGrupo(fila);
          });
          celda.appendChild(marca);
        }
        for (var k = i + 1; k < j; k++) {
          filas[k].classList.add('oculto');
          filas[k].dataset.grupo = id;
          filas[k].classList.remove('abierto');
        }
      }
      i = j;
    }
  }

  function alternarGrupo(tr) {
    var id = tr.dataset.grupo;
    if (!id) return;
    var abierto = !tr.classList.contains('abierto');
    tr.classList.toggle('abierto', abierto);
    var marca = tr.querySelector('.mas-par1');
    if (marca) {
      var total = marca.dataset.total || '';
      marca.innerHTML = '<b>' + total + '</b><i>' + (abierto ? '\u2212' : '+') + '</i>';
      marca.title = (abierto ? 'Contraer ' : 'Expandir ') + total + ' pares';
    }
    Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-grupo="' + id + '"]'), function (fila) {
      if (fila === tr) return;
      fila.classList.toggle('oculto', !abierto);
      if (abierto) {
        var celda = fila.querySelector('.par-a');
        if (celda && fila.dataset.par1) {
          var marca = celda.querySelector('.mas-par1');
          if (marca) marca.remove();
          celda.textContent = fila.dataset.par1;
        }
      }
    });
    renumber();
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
      frag.appendChild(encabezadoHTML('<a class="v-code" href="Vertebras.html#' + v[0] + '">' + v[0] + '</a> ' + v[1]));
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
    var grupos = q ? q.split(',').map(function (t) { return t.trim(); }).filter(Boolean) : [];
    var sortKey = sortSelect.value;
    if (window.CONFIG) {
      Array.prototype.forEach.call(dataRows, function (tr) {
        var celda = tr.querySelector('.par-a');
        if (!celda) return;
        if (tr.dataset.par1 === undefined) tr.dataset.par1 = celda.textContent.trim();
        celda.textContent = tr.dataset.par1;
        tr.classList.remove('oculto', 'grupo-par1', 'abierto');
        delete tr.dataset.grupo;
        var marca = tr.querySelector('.mas-par1');
        if (marca) marca.remove();
      });
    }

    var matches = function (r) {
      if (!grupos.length) return true;
      var texto = planoTexto(r.textContent) + ' ' + planoTexto(r.dataset.partes || '') +
        ' ' + planoTexto(r.dataset.ref || '');
      return grupos.some(function (g) {
        return g.split(/\s+/).filter(Boolean).every(function (w) { return texto.indexOf(w) !== -1; });
      });
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
    } else if ((sortKey === 'columna' || sortKey === 'vertebra')) {
      frag.appendChild(buildColumna(Array.from(visibleData), !!q));
    } else if (sortKey === 'clasif') {
      frag.appendChild(buildGrouped(visibleData, 'clasif', CLASIF_ORDER, function (g) {
        return CLASIF_TITULOS[g] ? g + ' · ' + CLASIF_TITULOS[g] : g;
      }));
    } else if (sortKey === 'zona') {
      frag.appendChild(buildGrouped(visibleData, 'zona', ZONA_ORDER));
    } else if (sortKey === 'sistema') {
      frag.appendChild(buildGrouped(visibleData, 'sistema', SISTEMA_ORDER));
    } else {
      Array.from(visibleData)
        .sort(function (a, b) { return getKey(a, sortKey).localeCompare(getKey(b, sortKey), 'es'); })
        .forEach(function (r) { frag.appendChild(r); });
    }

    if (window.CONFIG &&
        (sortKey === 'clasif' || sortKey === 'zona' || sortKey === 'sistema' ||
         sortKey === 'columna' || sortKey === 'vertebra')) {
      if (window.CONFIG.get('contraerPar1')) {
        contadorGrupo = 0;
        contraerRepetidos(frag);
      } else if (window.CONFIG.get('ocultarPar1')) {
        aplicarPar1Unico(frag);
      }
    }
    tbody.replaceChildren(frag);
    renumber();
    if (noResults) noResults.style.display = visibleData.size === 0 ? 'block' : 'none';
  }

  if (window.BUSQUEDA) {
    window.BUSQUEDA.init(input, tbody, render);
  } else {
    input.addEventListener('input', render);
  }
  tbody.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) return;
    var tr = e.target.closest ? e.target.closest('tr.grupo-par1') : null;
    if (tr) alternarGrupo(tr);
  });
  sortSelect.addEventListener('change', render);
  window.addEventListener('config:cambio', function (e) {
    render();
  });
  render();

  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
  }
})();
