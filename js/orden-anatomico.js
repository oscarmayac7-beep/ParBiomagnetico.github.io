/* ============================================================
   Orden anatómico de los pares
   1) De arriba hacia abajo según la vértebra relacionada (C1 → Co4).
   2) En los sistemas con recorrido (digestivo, urinario, respiratorio,
      reproductor, nervioso y circulatorio) se respeta el flujo del
      sistema antes que la altura de la vértebra.
   Requiere: js/columna-vertebral.js
   ============================================================ */
window.ORDEN_ANATOMICO = (function () {
  var CV = window.COLUMNA_VERTEBRAL;

  function sinAcentos(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  /* Altura de la vértebra: C1=1 … T1=8 … L1=20 … S1=25 … Co1=30 */
  function rankVert(par1) {
    var c = CV ? CV.vertebraDe(par1) : '';
    if (!c) return 90;
    var m = c.match(/^([CTLS])(\d+)$/);
    if (m) {
      var base = { C: 0, T: 7, L: 19, S: 24 }[m[1]];
      return base + parseInt(m[2], 10);
    }
    if (c.indexOf('Co') === 0) return 29 + parseInt(c.slice(2), 10);
    return 90;
  }

  /* Recorrido fisiológico de cada sistema (de arriba hacia abajo / flujo) */
  var FLUJOS = {
    'Digestivo': [
      ['boca', 'labio', 'lengua', 'diente', 'dental', 'encia', 'gingiv', 'paladar', 'amigdala', 'garganta', 'faringe'],
      ['esofago', 'cardias', 'hiato'],
      ['estomago', 'piloro'],
      ['duodeno'],
      ['higado', 'hepatico', 'vesicula', 'biliar', 'coledoco', 'pancreas'],
      ['yeyuno', 'ileon', 'intestino delgado', 'intestino medio'],
      ['ciego', 'contraciego', 'colon asc', 'colon transverso', 'colon desc', 'sigmoides', 'valvula ileocecal'],
      ['recto', 'ano']
    ],
    'Urinario': [
      ['rinon', 'capsula renal', 'caliz', 'suprarrenal'],
      ['ureter'],
      ['vejiga'],
      ['uretra']
    ],
    'Respiratorio': [
      ['nariz', 'seno', 'faringe', 'laringe'],
      ['traquea', 'carina'],
      ['bronquio'],
      ['pulmon', 'pleura']
    ],
    'Reproductor': [
      ['ovario'],
      ['trompa'],
      ['utero'],
      ['vagina'],
      ['testiculo', 'prostata', 'pene', 'escroto']
    ],
    'Nervioso': [
      ['cerebro', 'corteza', 'hipofisis', 'pineal', 'hipotalamo', 'talamo', 'cerebelo', 'bulbo', 'quiasma', 'poligono', 'amigdala cerebral', 'parietal', 'occipital', 'temporal'],
      ['medula', 'cola de caballo'],
      ['nervio', 'plexo', 'ciatico']
    ],
    'Circulatorio': [
      ['corazon', 'pericardio', 'valvula', 'coronaria', 'aorta', 'cava'],
      ['arteria', 'carotida', 'subclavia', 'vena', 'porta'],
      ['capilar']
    ]
  };

  var SIN_FLUJO = 500;

  function rankFlujo(par1, sistema) {
    var flujos = FLUJOS[sistema];
    if (!flujos) return SIN_FLUJO;
    var t = sinAcentos(par1);
    for (var i = 0; i < flujos.length; i++) {
      for (var j = 0; j < flujos[i].length; j++) {
        if (t.indexOf(flujos[i][j]) !== -1) return i;
      }
    }
    return SIN_FLUJO;
  }

  function peso(par1, sistema, conFlujo) {
    var r = rankVert(par1);
    if (!conFlujo) return r;
    return rankFlujo(par1, sistema) * 100 + r;
  }

  function comparar(aPar1, aSistema, bPar1, bSistema, conFlujo) {
    var pa = peso(aPar1, aSistema, conFlujo);
    var pb = peso(bPar1, bSistema, conFlujo);
    if (pa !== pb) return pa - pb;
    return String(aPar1).localeCompare(String(bPar1), 'es');
  }

  return {
    rankVert: rankVert,
    rankFlujo: rankFlujo,
    peso: peso,
    comparar: comparar
  };
})();
