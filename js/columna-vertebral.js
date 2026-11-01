/* ============================================================
   Columna vertebral (33 vértebras) y su relación con el Par 1
   Usado por las listas de pares: virus, bacterias, emocionales,
   especiales, hongos, parásitos, reservorios, básicos y mil pares.
   ============================================================ */
window.COLUMNA_VERTEBRAL = (function () {

  /* Las 33 vértebras con los órganos / partes del cuerpo
     que se relacionan con cada una. */
  var VERTEBRAS = [
    ['C1', 'Cabeza, hipófisis, cuero cabelludo, cerebro (migrañas, mareos)'],
    ['C2', 'Ojos, nervios ópticos, oídos, senos paranasales, lengua'],
    ['C3', 'Mejillas, orejas, dientes, nervio trigémino (trifacial)'],
    ['C4', 'Glándula tiroides, cuerdas vocales, garganta, cuello'],
    ['C5', 'Glándula tiroides, cuerdas vocales, garganta, cuello'],
    ['C6', 'Glándula tiroides, cuerdas vocales, garganta, cuello'],
    ['C7', 'Hombros, codos, tiroides, bursa'],
    ['T1', 'Corazón (válvulas y arterias), pulmones, bronquios'],
    ['T2', 'Corazón (válvulas y arterias), pulmones, bronquios'],
    ['T3', 'Esófago, pecho, pulmones'],
    ['T4', 'Vesícula biliar'],
    ['T5', 'Hígado, plexo solar, circulación general'],
    ['T6', 'Estómago'],
    ['T7', 'Páncreas, duodeno'],
    ['T8', 'Bazo, diafragma'],
    ['T9', 'Bazo, diafragma'],
    ['T10', 'Riñones'],
    ['T11', 'Riñones, uréteres, piel'],
    ['T12', 'Intestino delgado, circulación linfática'],
    ['L1', 'Intestino grueso, colon, anillos inguinales'],
    ['L2', 'Apéndice, abdomen, parte inferior de las piernas'],
    ['L3', 'Órganos genitales, útero, vejiga, rodillas'],
    ['L4', 'Próstata, músculos de la espalda baja, nervio ciático'],
    ['L5', 'Piernas, pantorrillas, pies'],
    ['S1', 'Huesos de las nalgas, piernas, órganos sexuales'],
    ['S2', 'Huesos de las nalgas, piernas, órganos sexuales'],
    ['S3', 'Huesos de las nalgas, piernas, órganos sexuales'],
    ['S4', 'Órganos pélvicos, vejiga, recto'],
    ['S5', 'Órganos pélvicos, vejiga, recto'],
    ['Co1', 'Recto y ano (problemas intestinales o urinarios)'],
    ['Co2', 'Recto y ano (problemas intestinales o urinarios)'],
    ['Co3', 'Recto y ano (problemas intestinales o urinarios)'],
    ['Co4', 'Recto y ano (problemas intestinales o urinarios)']
  ];

  /* Órgano / parte del cuerpo del Par 1 → vértebra relacionada */
  var ORGANO_VERTEBRA = {
    '1ra. costilla': 'T3',
    'adenohipófisis': 'C1',
    'aductor': 'L2',
    'aductor menor': 'L2',
    'ampolla hematopancreática': 'T7',
    'anexo': 'L3',
    'angina': 'C4',
    'angulo': 'C3',
    'antecuerno': 'C1',
    'apéndice': 'L2',
    'arco cigomático': 'C3',
    'arco del pie': 'L5',
    'área visual': 'C1',
    'atlas': 'C1',
    'axila': 'C7',
    'bazo': 'T8',
    'braquial': 'C7',
    'bulbo': 'C1',
    'bulbo raquídeo': 'C1',
    'bursa': 'C7',
    'cadera': 'L3',
    'calcaneo': 'L5',
    'calcáneo': 'L5',
    'caliz renal': 'T10',
    'cápsula renal': 'T10',
    'capitis': 'C1',
    'cardias': 'T6',
    'carina': 'T2',
    'carótida': 'C4',
    'cava': 'T1',
    'ceja': 'C2',
    'cerebelo': 'C1',
    'cervical': 'C4',
    'cervical 1 (atlas)': 'C1',
    'cervical 3': 'C4',
    'cervical 7': 'C7',
    'cervicales': 'C4',
    'cérvico': 'C4',
    'ciático': 'L4',
    'cinturon pancreático': 'T7',
    'cinturón pancreático': 'T7',
    'cisura media': 'C1',
    'codo': 'C7',
    'cola de caballo': 'L4',
    'colon ascendente': 'L1',
    'colon asc.': 'L1',
    'colon descendente': 'L1',
    'colon desc': 'L1',
    'colon transverso': 'L1',
    'colon trasverso': 'L1',
    'comisura': 'C3',
    'cond. central hepático': 'T5',
    'condral': 'T3',
    'coronarias': 'T1',
    'coronario': 'T1',
    'cortex prefrontal (i)': 'C1',
    'costohepático': 'T5',
    'cresta iliaca': 'L3',
    'cresta iliaca anterosuperior': 'L3',
    'cresta iliaca anteriosuperior': 'L3',
    'cuadriceps': 'L3',
    'cuádriceps': 'L3',
    'cuadrado lumbar': 'L4',
    'cúbito': 'C7',
    'cuello': 'C4',
    'cuerpo calloso': 'C1',
    'deltoides': 'C7',
    'deltoides (d)': 'C7',
    'deltoides der': 'C7',
    'dental': 'C3',
    'descendente': 'L1',
    'diafragma': 'T8',
    'dorsal 1': 'T1',
    'dorsal 2': 'T2',
    'dorsal 3': 'T3',
    'dorsal 4,5': 'T4',
    'dorsal 5': 'T5',
    'dorsal 6': 'T6',
    'dorsal 7': 'T7',
    'duodeno': 'T7',
    'elevador escápula': 'C4',
    'epiclavio': 'C7',
    'epiglotis': 'C4',
    'epiplón': 'T6',
    'esfínter uretral': 'S4',
    'esófago': 'T3',
    'espina del homóplato': 'C7',
    'espina del omóplato': 'C7',
    'esternal': 'T3',
    'esternocleidomastoideo': 'C4',
    'esternón': 'T3',
    'estómago': 'T6',
    'flanco': 'L1',
    'ganglios mesentéricos': 'T12',
    'glándula salivar': 'C3',
    'gluteo': 'S1',
    'glúteo': 'S1',
    'glúteo izq.': 'S1',
    'hiato': 'T6',
    'hiato esofágico': 'T6',
    'hígado': 'T5',
    'hipófisis': 'C1',
    'hipotálamo': 'C1',
    'hombro': 'C7',
    'húmero': 'C7',
    'iliaco': 'L3',
    'indice': 'C7',
    'índice': 'C7',
    'inguinal': 'L1',
    'inguinal (d)': 'L1',
    'inserción deltoides': 'C7',
    'interiliaco': 'L3',
    'interiliaco, sacro': 'L3',
    'intestino delgado': 'T12',
    'intestino medio': 'T12',
    'isquión': 'S1',
    'juanete': 'L5',
    'labio (sup)': 'C3',
    'latísimus': 'T6',
    'lengua': 'C2',
    'ligamento de páncreas': 'T7',
    'ligamento ext. de rodilla': 'L3',
    'ligamento hepático': 'T5',
    'ligamento páncreas': 'T7',
    'lóbulo prefrontal': 'C1',
    'lóbulo post. del hígado': 'T5',
    'lóbulo post. hígado': 'T5',
    'lumbar 1': 'L1',
    'lumbar 2': 'L2',
    'lumbar 3': 'L3',
    'lumbar 4': 'L4',
    'lumbar 5': 'L5',
    'lunar': 'T11',
    'mácula': 'C2',
    'malar': 'C3',
    'mandíbula': 'C3',
    'mango esternón': 'T3',
    'mastoides': 'C1',
    'maxilar superior': 'C3',
    'mejilla': 'C3',
    'mejillas': 'C3',
    'metatarso': 'L5',
    'mordida': 'C3',
    'muñeca': 'C7',
    'muñeca (arriba)': 'C7',
    'muñeca arriba': 'C7',
    'nervio facial': 'C3',
    'nervio femoral': 'L3',
    'nervio inguinal': 'L1',
    'nervio inguinal (d)': 'L1',
    'nervio inguinal der': 'L1',
    'nervio trigémino': 'C3',
    'nervio vago': 'C4',
    'nuca': 'C1',
    'nudo braquial': 'C7',
    'occipital': 'C1',
    'ojo': 'C2',
    'ombligo': 'T12',
    'oído': 'C3',
    'oreja': 'C3',
    'ovario': 'L3',
    'palma': 'C7',
    'parótida': 'C3',
    'parietal': 'C1',
    'parietal inf (d)': 'C1',
    'párpado': 'C2',
    'pectoral': 'T3',
    'perihepático': 'T5',
    'perirrenal': 'T10',
    'peritoneo': 'T12',
    'pezón der.': 'T3',
    'píloro': 'T6',
    'pineal': 'C1',
    'piso orbital': 'C2',
    'planta': 'L5',
    'planta del pie': 'L5',
    'pleura': 'T2',
    'pleura (der)': 'T2',
    'pleura derecha': 'T2',
    'plexo cervical': 'C4',
    'plexo lumbar': 'L4',
    'polígono de Willis': 'C1',
    'popliteo': 'L5',
    'popítleo': 'L5',
    'pre auricular': 'C3',
    'preauricular': 'C3',
    'prepineal': 'C1',
    'prepineal (preauricular)': 'C1',
    'postpineal': 'C1',
    'primera costilla': 'T3',
    'próstata': 'L4',
    'pudendo': 'S4',
    'punta de páncreas': 'T7',
    'punta páncreas': 'T7',
    'páncreas': 'T7',
    'páncreas (cabeza)': 'T7',
    'páncreas (cola)': 'T7',
    'páncreas (cuerpo)': 'T7',
    'pómulo': 'C3',
    'quiasma': 'C1',
    'radio': 'C7',
    'rama isquiática': 'S1',
    'recto': 'S5',
    'retro hepático': 'T5',
    'retrohepático': 'T5',
    'riñón': 'T10',
    'riñón (d)': 'T10',
    'riñón (i)': 'T10',
    'riñón der.': 'T10',
    'riñón izq.': 'T10',
    'riñón superior': 'T10',
    'rótula': 'L3',
    'sacro': 'S1',
    'seno frontal': 'C2',
    'seno nasal': 'C2',
    'sien': 'C1',
    'sien der.': 'C1',
    'sigmoides': 'L1',
    'subclavia': 'C7',
    'suelo pélvico': 'S4',
    'supraespinoso': 'C7',
    'suprahepático': 'T5',
    'suprapúbico': 'S4',
    'talón': 'L5',
    'temporal': 'C1',
    'temporal (d)': 'C1',
    'temporal (der)': 'C1',
    'temporal (i)': 'C1',
    'temporal (izq.)': 'C1',
    'temporal derecho': 'C1',
    'tendón triceps': 'C7',
    'tensor facia lata': 'L5',
    'testículo': 'L3',
    'testículo der.': 'L3',
    'tibia': 'L5',
    'tibia inf.': 'L5',
    'tibia inferior': 'L5',
    'tibia media': 'L5',
    'timo': 'T1',
    'torso frente': 'T3',
    'triángulo de scarpa': 'L3',
    'trocanter mayor': 'L3',
    'trocanter menor': 'L3',
    'trompa': 'L3',
    'tráquea': 'C4',
    'uretero': 'T11',
    'uretra': 'S4',
    'útero': 'L3',
    'utero': 'L3',
    'vago': 'C4',
    'válvula iliocecal': 'L1',
    'vejiga': 'L3',
    'vena porta': 'T5',
    'vesícula': 'T4',
    'conducto de vesícula': 'T4',
    'yeyuno': 'T12',
    'zona suprarrenal': 'T10',
    'amígdala cerebral': 'C1',
    'amígdala palatina': 'C4',
    'ano': 'Co1',
    'aorta': 'T1',
    'apófisis xifoides': 'T3',
    'aquiles': 'L5',
    'aquiles sup': 'L5',
    'aquiles superior': 'L5',
    'carótida (d)': 'C4',
    'cisura de silvio': 'C1',
    'costal': 'T3',
    'craneal': 'C1',
    'dorsal (2)': 'T2',
    'dorso de la mano': 'C7',
    'escápula': 'C7',
    'escotadura ciática': 'L4',
    'interciliar': 'C2',
    'lumbar': 'L4',
    'maxilar superior (d)': 'C3',
    'mediastino': 'T1',
    'pericardio': 'T1',
    'saco de douglas': 'S4',
    'supraciliar': 'C2',
    'suprapopliteo': 'L5',
    'borde calloso (d/i)': 'C1',
    'borde calloso (post)': 'C1',
    'botón aórtico': 'T1'
  };

  /* Respaldo por palabra clave para órganos que no estén en la tabla */
  var REGLAS = [
    ['capsula renal', 'T10'], ['rinon', 'T10'], ['suprarrenal', 'T10'],
    ['higado', 'T5'], ['colon', 'L1'], ['ciego', 'L1'], ['sigmoides', 'L1'],
    ['pulmon', 'T2'], ['pleura', 'T2'], ['bronquio', 'T2'], ['corazon', 'T1'],
    ['esofago', 'T3'], ['estomago', 'T6'], ['pancreas', 'T7'], ['bazo', 'T8'],
    ['diafragma', 'T8'], ['tiroides', 'C4'], ['traquea', 'C4'], ['laringe', 'C4'],
    ['garganta', 'C4'], ['oido', 'C3'], ['seno', 'C2'], ['ojo', 'C2'],
    ['utero', 'L3'], ['ovario', 'L3'], ['vagina', 'L3'], ['genital', 'L3'],
    ['prostata', 'L4'], ['vejiga', 'L3'], ['recto', 'S5'], ['coccix', 'Co1'],
    ['pie', 'L5'], ['talon', 'L5'], ['cabeza', 'C1'], ['cerebro', 'C1']
  ];

  function sinAcentos(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/\s+/g, ' ').trim();
  }

  var INFO = {};
  VERTEBRAS.forEach(function (v) { INFO[v[0]] = v[1]; });

  var MAPA = {};
  Object.keys(ORGANO_VERTEBRA).forEach(function (k) {
    MAPA[sinAcentos(k)] = ORGANO_VERTEBRA[k];
  });

  var REGLAS_NORM = REGLAS.map(function (r) { return [sinAcentos(r[0]), r[1]]; });

  /* «dorsal 7», «lumbar 3», «cervical 2»... se refieren a esa vértebra */
  function porNombreDeVertebra(clave) {
    var limpio = clave.replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();
    var m = limpio.match(/^(cervical|dorsal|toracica|lumbar|sacro)\s*(\d+)/);
    if (!m) return '';
    var n = parseInt(m[2], 10);
    if (m[1] === 'cervical' && n >= 1 && n <= 7) return 'C' + n;
    if ((m[1] === 'dorsal' || m[1] === 'toracica') && n >= 1 && n <= 12) return 'T' + n;
    if (m[1] === 'lumbar' && n >= 1 && n <= 5) return 'L' + n;
    if (m[1] === 'sacro' && n >= 1 && n <= 5) return 'S' + n;
    return '';
  }

  function vertebraDe(par1) {
    var clave = sinAcentos(par1);
    if (MAPA[clave]) return MAPA[clave];

    var directa = porNombreDeVertebra(clave);
    if (directa) return directa;

    for (var i = 0; i < REGLAS_NORM.length; i++) {
      if (clave.indexOf(REGLAS_NORM[i][0]) !== -1) return REGLAS_NORM[i][1];
    }
    return '';
  }

  function partesDe(codigo) {
    return INFO[codigo] || '';
  }

  function region(codigo) {
    return String(codigo || '').replace(/[0-9]/g, '');
  }

  /* HTML del chip: «T5» con las partes en el tooltip */
  function celda(codigo) {
    if (!codigo) return '<span class="v-none" title="Sin relación definida">—</span>';
    return '<span class="v-' + region(codigo) + '" title="' + codigo + ': ' +
      partesDe(codigo) + '">' + codigo + '</span>';
  }

  return {
    VERTEBRAS: VERTEBRAS,
    vertebraDe: vertebraDe,
    partesDe: partesDe,
    region: region,
    celda: celda,
    sinAcentos: sinAcentos
  };
})();
