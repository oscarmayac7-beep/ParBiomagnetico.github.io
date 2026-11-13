/* ============================================================
   Buscador predictivo de las listas
   - Sugerencias mientras se escribe (búsquedas guardadas y
     nombres de la propia tabla).
   - Búsquedas predefinidas que se amplían a una lista de términos
     separados por coma (se busca cualquiera de ellos).
   ============================================================ */
window.BUSQUEDA = (function () {

  /* Búsquedas predefinidas (se irán agregando aquí) */
  var PREDEFINIDAS = [
    {
      nombre: 'Equilibrio vías respiratorias',
      terminos: 'Amigdalitis, Sinusitis, Faringitis, Laringitis, Otitis, Rinitis, Disnea, Bronquitis, Neumonitis, Neumonía, Asma, Enfisema, Pulmonar'
    },
	  {
      nombre: 'Equilibrio ocular',
      terminos: 'Ceguera, Conjuntivitis, Correorrenitis, Retina, Sensibilidad a la luz, Maculopatía, Uveitis, Pterigion, Cataratas, Macular, Glaucoma, Fotofobia, Visual, Vista'
    },
    {
      nombre: 'Equilibrio bucal',
      terminos: 'Halitosis, Dentales, Gingivitis, Periodontitis, Caries, Estomatitis, Aftas, Bruxismo, Sensibilidad dental, Encías'
    }
    ,{
      nombre: 'Equilibrio sexual',
      terminos: 'Transmisión sexual, Infección urinaria, Vaginitis, Cistitis, Prostatitis, Disfunción eréctil, Eyaculación precoz, Infertilidad, Esterilidad, Impotencia, Libido, Vaginismo, Dispareunia, Menstruación, Amenorrea, Ovarios, Endometriosis, Fibromas, Quistes, Miomas, Embarazo, Frigidez, Menopausia, Climaterio, Disfunción sexual, Libido baja, Deseo sexual, Infertilidad femenina,  Infertilidad masculina,Lujuria, Libido alta, Deseo sexual bajo, Deseo sexual alto, Disfunción sexual femenina, Disfunción sexual masculina,     Complejo de Edipo, Complejo de Electra, Complejo de castración, Complejo de inferioridad'
    }
  ];

  function plano(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function init(input, tbody, alCambiar) {
    if (!input || !tbody) return;

    var envoltura = input.parentNode;
    var caja = document.createElement('div');
    caja.className = 'sug';
    caja.setAttribute('role', 'listbox');
    envoltura.appendChild(caja);

    var barra = input.closest('.toolbar') || envoltura;
    var chips = document.createElement('div');
    chips.className = 'busq-chips';
    barra.parentNode.insertBefore(chips, barra.nextSibling);

    /* Palabras de la propia tabla para sugerir */
    var vocabulario = [];
    var vistos = {};
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row')) return;
      var celdas = [tr.querySelector('.par-a'), tr.querySelector('.name')];
      celdas.forEach(function (c) {
        if (!c) return;
        var t = c.textContent.trim();
        var k = plano(t);
        if (t.length > 2 && k && !vistos[k]) { vistos[k] = 1; vocabulario.push(t); }
      });
    });

    var activo = -1;
    var items = [];
    var predefActiva = null;

    function pintarChip(nombre, terminos) {
      chips.innerHTML = '';
      if (!nombre) return;
      var chip = document.createElement('span');
      chip.className = 'busq-chip';
      chip.innerHTML = '<span class="busq-chip-txt"></span><button type="button" aria-label="Quitar búsqueda">×</button>';
      chip.querySelector('.busq-chip-txt').textContent = nombre;
      chip.querySelector('button').addEventListener('click', function () {
        predefActiva = null;
        window.__BUSQUEDA_ACTIVA = null;
        input.value = '';
        pintarChip(null);
        alCambiar();
        input.focus();
      });
      chip.title = terminos;
      chips.appendChild(chip);
    }

    function opciones(q) {
      var t = plano(q);
      var res = [];

      PREDEFINIDAS.forEach(function (p) {
        if (!t || plano(p.nombre).indexOf(t) !== -1) {
          res.push({ tipo: 'predefinida', texto: p.nombre, dato: p });
        }
      });

      if (t) {
        var encontradas = 0;
        for (var i = 0; i < vocabulario.length && encontradas < 8; i++) {
          var w = vocabulario[i];
          var pw = plano(w);
          if (pw.indexOf(t) === 0 || pw.indexOf(' ' + t) !== -1 || pw.indexOf(t) !== -1) {
            res.push({ tipo: 'sugerencia', texto: w });
            encontradas++;
          }
        }
      }

      return res;
    }

    function renderSug(q) {
      items = opciones(q);
      activo = -1;
      caja.innerHTML = '';

      if (!items.length) { caja.classList.remove('abierto'); return; }

      var grupo = '';
      items.forEach(function (op, i) {
        var etiqueta = op.tipo === 'predefinida' ? 'Búsquedas guardadas' : 'Sugerencias';
        if (etiqueta !== grupo) {
          grupo = etiqueta;
          var g = document.createElement('div');
          g.className = 'sug-grupo';
          g.textContent = grupo;
          caja.appendChild(g);
        }
        var el = document.createElement('div');
        el.className = 'sug-item';
        el.setAttribute('role', 'option');
        el.dataset.indice = i;
        var txt = document.createElement('span');
        txt.textContent = op.texto;
        el.appendChild(txt);
        if (op.tipo === 'predefinida') {
          var marca = document.createElement('span');
          marca.className = 'sug-tipo';
          marca.textContent = op.dato.terminos.split(',').length + ' términos';
          el.appendChild(marca);
        }
        el.addEventListener('mousedown', function (ev) {
          ev.preventDefault();
          elegir(i);
        });
        caja.appendChild(el);
      });

      caja.classList.add('abierto');
    }

    function marcar() {
      Array.prototype.forEach.call(caja.querySelectorAll('.sug-item'), function (el, i) {
        el.classList.toggle('activo', i === activo);
      });
    }

    function elegir(i) {
      var op = items[i];
      if (!op) return;

      if (op.tipo === 'predefinida') {
        predefActiva = op.dato;
        window.__BUSQUEDA_ACTIVA = op.dato;
        input.value = op.dato.terminos;
        pintarChip(op.dato.nombre, op.dato.terminos);
      } else {
        predefActiva = null;
        window.__BUSQUEDA_ACTIVA = null;
        input.value = op.texto;
        pintarChip(null);
      }

      caja.classList.remove('abierto');
      alCambiar();
      input.focus();
    }

    input.addEventListener('input', function () {
      if (predefActiva && input.value !== predefActiva.terminos) {
        predefActiva = null;
        window.__BUSQUEDA_ACTIVA = null;
        pintarChip(null);
      }
      renderSug(input.value);
      alCambiar();
    });

    input.addEventListener('focus', function () {
      renderSug(input.value);
    });

    input.addEventListener('blur', function () {
      setTimeout(function () { caja.classList.remove('abierto'); }, 120);
    });

    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        if (!caja.classList.contains('abierto')) { renderSug(input.value); return; }
        ev.preventDefault();
        activo = ev.key === 'ArrowDown'
          ? Math.min(activo + 1, items.length - 1)
          : Math.max(activo - 1, 0);
        marcar();
      } else if (ev.key === 'Enter') {
        if (caja.classList.contains('abierto') && activo >= 0) {
          ev.preventDefault();
          elegir(activo);
        } else if (caja.classList.contains('abierto')) {
          caja.classList.remove('abierto');
        }
      } else if (ev.key === 'Escape') {
        caja.classList.remove('abierto');
      }
    });
  }

  return { init: init, predefinidas: PREDEFINIDAS,
    activa: function () { return window.__BUSQUEDA_ACTIVA || null; } };
})();
