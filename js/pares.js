/* ============================================================
   DATOS DE PARES
   Formato de fila: [clasificacion, par1, par2, nombre, href]
   Fila de sección: {section:"A"}
   - href vacío => sin enlace.  Los enlaces van a padecimientos/<href>
   ============================================================ */
const DATA = [
  {section:"A"},
  ["V","aductor","aductor","VIH 2, virus","vih2.html"],
  ["P","agujero","agujero","Giardia Lamblia","giardia.html"],
  ["Ps","amígdala cerebral","timo","Odio","odio.html"],
  ["E","amígdala palatina","riñón (mismo lado)","Intoxicación crónica","intoxicacion_c.html"],
  ["V","ampolla hematopancreática","riñón","Virus BK","virus_vk.html"],
  ["V","anexo","ano","Paramixovirus","paramixovirus.html"],
  ["V","angina","angina","Herpes 2 virus","herpes2.html"],
  ["B","angulo","angulo","Estaphylococo fragilis, bacteria","e_fragilis.html"],
  ["V","ano","ano","Papiloma, virus","papiloma.html"],
  ["H","ano","píloro","Levadura","levadura.html"],
  ["E","ano","testículo izquierdo","Ecuador, Hemorroides","hemorroides.html"],
  ["B","antecuerno","antecuerno","Aerobacter aerogenus, bacteria","a_aerogenus.html"],
  ["V","apéndice","lengua","Viruela, virus","viruela.html"],
  ["B","apéndice","pleura","Estaphylococo aureus cuag. +","estafilococo_aureus_pos.html"],
  ["V","apéndice","riñón","Virus BK","virus_vk.html"],
  ["E","apéndice","timo","Angeles, inmunocompetencia","angeles.html"],
  ["R","apéndice","vejiga","Fagos Reservorio","fagos_reserv.html"],
  ["B","aquiles","aquiles","Shigella, bacteria","shigella.html"],
  ["P","arco cigomático","arco cigomático","Cisticercosis","cisticerco.html"],
  ["V","arco de pie","arco de pie","Ebolavirus","ebola.html"],
  ["E","atlas","atlas","Juana, líbido","juana.html"],
  ["Ps","atlas","útero","Celos, Linda","celos.html"],
  ["V","axila","axila","Rabia, virus","rabia.html"],

  {section:"B"},
  ["B-D","bazo","bazo","Yersinia Pestis o Disfunción del Bazo","yersinia_p.html"],
  ["B","bazo","duodeno","Leucemia","leucemia.html"],
  ["B","bazo","hígado","Brucelosis o Fiebre de Malta","brucela.html"],
  ["Ps","bazo","hipotálamo","Pereza, psicoemocional","pereza.html"],
  ["R","bazo","pulmón","Rubén, Reservorio de bacterias","ruben.html"],
  ["V","bazo","punta de páncreas","Verruga Común (virus)","verruga.html"],
  ["B","borde calloso (d/i)","borde calloso (post)","Microbacterium Tuberculosis","tuberculosis.html"],
  ["B","botón aórtico","dorsal 7","Estreptococo C","estreptococo_c.html"],
  ["B","braquial","braquial","Estreptococo A","estreptococo_a.html"],
  ["Ps","bronquio der.","cerebelo","Miedo a quedar loco","miedo_locura.html"],
  ["E","bulbo","bulbo","Alzheimer, Chile","alzheimer.html"],
  ["E","bulbo","corazón","Bradicardia","bradicardia.html"],
  ["Ps","bulbo","corazón","Crueldad, Josué","crueldad.html"],
  ["V","bulbo","cerebelo","Newcastle virus","newcastle.html"],
  ["B","bulbo","tiroides","Meningitis, meningococo","meningitis.html"],
  ["V","bulbo","vejiga","Dengue hemorrágico","dengueh.html"],
  ["B","bursa","bursa","Actinomices, bacteria","actinomices.html"],
  ["R","bursa","codo (mismo lado)","Estreptococo Beta Hemolítico","estreptococo_beta.html"],

  {section:"C"},
  ["R","cabeza cuello femur","cabeza cuello femur","Reservorio de hongos","r_hongos.html"],
  ["B","cabeza de páncreas","hígado","Estafilococo Aureus (-)","estafilococo_aneg.html"],
  ["T","cabeza de páncreas","páncreas","Intoxicación por metales","metales.html"],
  ["B","cabeza de páncreas","píloro","Clostridium Difficile","clorstridium_d.html"],
  ["B","cabeza de páncreas","suprarrenales","Estafilococo Aureo (-)","estafilococo_aneg.html"],
  ["B","cadera","cadera","Clamydia Pneumoniae","clamidia_pn.html"],
  ["P","calcáneo","calcáneo","Rickettsia (Alzheimer)","rickettsia.html"],
  ["V","caliz renal","uretero","Herpes V, virus","herpes5.html"],
  ["H","canto del ojo","canto del ojo","Asperjilus, hongo","asperjillus.html"],
  ["B","cápsula renal","cápsula r.","Proteus Mirabilis","proteus_m.html"],
  ["T","cápsula renal","vejiga","Toxinas en el Riñón","toxinas_rinon.html"],
  ["B","cardias","apéndice","Bartonella","bartonella.html"],
  ["B","cardias","píloro","Estreptococo C","estreptococo_c.html"],
  ["B","cardias","suprarrenales","Estreptococo B","estreptococo_b.html"],
  ["O","cardias","temporal","Priones","priones.html"],
  ["V","carina","carina","Aftosa virus o fiebre Aftosa","aftosa.html"],
  ["E","carótida","carótida","Marimar, hipertensión","marimar.html"],
  ["H","cava","cava","Trychophyton, hongo","trychophyton.html"],
  ["V","ceja","ceja","Sincicial Respiratorio Virus","v_sincicial.html"],
  ["Ps","ceja","ceja","Neurosis crítica, trastornos psicóticos","neurosis.html"],
  ["V","cerebelo","bulbo","Newcastle virus","newcastle.html"],
  ["E","cerebelo","cerebelo","Chapingo, Sist. Nerv. Central","chapingo.html"],
  ["E","cervical","dorsal 1","Pasciano o Tennis elbow","pasciano.html"],
  ["P","cervical 1 (atlas)","píloro","Plasmodium Falciparum, parásito","plasmodium_f.html"],
  ["D","cervicales","sacro","Disfunción Parasimpática","parasimpatico.html"],
  ["P","cervical 3","supraespinoso (deltoides)","Ballantidium tifo, parásito","balantidium_t.html"],
  ["V","ciático","ciático","Poliomielitis virus","poliomielitis.html"],
  ["P","ciego","ciego","Tricomonas (Hemophylus Influenza)","tricomonas.html"],
  ["B","ciego","riñón derecho","Haemophilus Influenza","haemophilus_i.html"],
  ["Ps","cisura media","cisura media","Altivez","altivez.html"],
  ["Ps","cisura silvio","cisura silvio","Sor, Inspiración","sor.html"],
  ["B","clítoris","clítoris","Espiroqueta","espiroqueta.html"],
  ["B","clítoris","pelvis 8","Espiroqueta","espiroqueta.html"],
  ["B","clítoris","hueso púbico (suprapúbico)","Espiroqueta","espiroqueta.html"],
  ["E","codo","codo","Castañeda, Trastornos visuales","castaneda.html"],
  ["B","cola de páncreas","hígado","Botulismo por Chlostridium Botulium","botulismo.html"],
  ["B","colon asc.","colon asc.","Listeria Monocytógenes","listeria_m.html"],
  ["V","colon asc.","colon desc.","Herpe 1","herpes1.html"],
  ["B","colon asc.","hígado","Klepsiela Pneumoniae","klepsiela_pn.html"],
  ["B","colon asc.","riñón der.","Haemophilus Influenzae","haemophilus_i.html"],
  ["B","colon asc.","sacro","Burkholderia Cepacia","burkholderia_c.html"],
  ["V","colon desc","ano","Chikungunya","chikungunya.html"],
  ["B","colon desc","colon desc.","Enterobacter cloacae","enterobacter_c.html"],
  ["P","colon desc","cuádriceps","Schistosoma","schistosoma.html"],
  ["B","colon desc","hígado","Hepatitis A","pasteurela.html"],
  ["E","colon desc","recto","Olazo, Obstrucción intestinal","olazo.html"],
  ["B","colon desc","riñón","Pasteurella","pasteurela.html"],
  ["P","colon transverso","colon desc","Giardia Lamblia, parásito","giardia.html"],
  ["D","colon transverso","colon transv.","Disfunción del colon","colon_disf.html"],
  ["B","colon transverso","hígado","Vibro Cholerae, bacteria","colera.html"],
  ["Ps","colon transverso","ovario, testículo","Materialismo","wallstreet.html"],
  ["V","colon transverso","riñón izq","Zika, virus","zika.html"],
  ["B","colon transverso","sacro","Chlamydia intestinalis","clamidia_i.html"],
  ["B","colon transverso","vejiga","Vibro Cholerae, bacteria","colera.html"],
  ["V","comisura","comisura","Herpes (4), virus","herpes4.html"],
  ["H","condral","condral","Pneumoscystis Carinii, hongo","pneumocystis.html"],
  ["V","conducto espermático","c.e.","Ebola virus","ebola.html"],
  ["B","conducto deferente","laringe","Microbacterium tuberculosis · Adenovirus?","tuberculosis.html"],
  ["B","conducto de páncreas","riñón izquierdo","Espiroqueta","espiroqueta.html"],
  ["B","conducto de vesícula","riñón derecho","Espiroqueta","espiroqueta.html"],
  ["B","contraciego","contraciego","Bordetella pertusis","bordetella.html"],
  ["Ps","corazón","corazón","Negatividad, pesimismo","negatividad.html"],
  ["Ps","corazón","páncreas","Caín: Envidia","cain.html"],
  ["Ps","corazón","vejiga","Resentimiento","resentimiento.html"],
  ["E","corazón","costilla (mismo lado)","Asfixia","asfixia.html"],
  ["B","coronarias","pulmón","Estreptococo Alfa, bacteria","estreptococo_a.html"],
  ["B","costal","costal","Proteus Mirabilis, bacteria","proteus_m.html"],
  ["V","costal anterior","costal anterior","Ebola virus","trychophyton.html"],
  ["V","costal anterior","colon descendente","Zika virus","zika.html"],
  ["V","costal anterior","riñón","Zika virus","zika.html"],
  ["H","1ra. costilla","1ra. costilla","Trychophyton","trychophyton.html"],
  ["P","costodiafragmático","costodiafragmático","Trepanozoma Cruzi o Chagas","trepanozoma_c.html"],
  ["B","costohepático","costohepático","Borrelia, bacteria","borrelia.html"],
  ["V","cóccix","cóccix","Rotavirus","rotavirus.html"],
  ["B","craneal","craneal","Antrax, bacilo","antrax.html"],
  ["P","cresta iliaca","cresta iliaca","Tripanosoma Brucei Gambi","tripanozoma_g.html"],
  ["E","cresta iliaca anteriosuperior","cresta iliaca anteriosup.","Obesidad (probar)","obsidad.html"],
  ["B","cresta isquiática (d/i)","píloro","Vibro Haemophilus","vibro-haemofilus.html"],
  ["E","cuádriceps","cuádriceps","Magda","magda.html"],
  ["P","cuadrado lumbar","cuadrado lumbar","Trepanosoma Palidum, parásito","tripanozoma_p.html"],
  ["V","cúbito","cúbito","Herpe (3)","herpes3.html"],
  ["P","cuello","cuello","Blastocistis hominnis","blastocistis_h.html"],
  ["Ps","cuerpo calloso","cuerpo calloso","Drogadicción","drogadiccion.html"],
  ["D","cuerpo cavernoso","cuerpo cavernoso","Disfunción erectil","sexuales.html"],

  {section:"D"},
  ["P","deltoides","cervical","Balantidium Tifo","balantidium_t.html"],
  ["R","deltoides","deltoides","Trypanosoma Brucei Brucei","tripanozoma_b.html"],
  ["B","deltoides","deltoides","Sífilis por Treponema Palidum","sifilis.html"],
  ["P","deltoides der","riñón (mismo lado)","Leishmania","leismania.html"],
  ["R","dental","riñón","Reservorio Universal","dentadura.html"],
  ["H","diafragma","diafragma","Cándida Albicans, Hongo","candida_a.html"],
  ["B","diafragma","riñón (mismo lado)","Brusela Abortus","brusela_a.html"],
  ["E","dorsal 1","cervical 7","Codo de Tenista","pasciano.html"],
  ["B","dorsal 2","dorsal 2","Legionela Pneumophila","legionela_pn.html"],
  ["V","dorsal 3","dorsal 7","Aftosa virus","aftosa.html"],
  ["B","dorsal 5","lumbar 1","Meningococo, bacteria","meningitis.html"],
  ["H","dorsal 6","dorsal 6","Coccidio immitis","coccidio_i.html"],
  ["E","dorsal 7","dorsal 7","Acidez y oxidación","acidez.html"],
  ["B","dorso","lumbar","Meningococo","meningitis.html"],
  ["Ps","dorso de la mano","dorso de la mano","Duda","duda.html"],
  ["B","dorso de la mano","dorso de la mano","Proteus Mirabilis","proteus_m.html"],
  ["V","duodeno","bazo","Leucemia verdadera","leucemia.html"],
  ["P","duodeno","cola de páncreas","Anisakis","anisakis.html"],
  ["D","duodeno","duodeno","Disfunción Duodenal","duodeno_disf.html"],
  ["B","duodeno","hígado","Chlamydia trachomatis","clamidia_t.html"],
  ["B","duodeno","riñón izq.","Chlamydia trachomatis","clamidia_t.html"],
  ["D","duodeno","riñón derecho","Diabetes Mellitus verdadera","diabetes.html"],
  ["B","descendente","desdendente","Enterobacter Cloacae","enterobacter_c.html"],
  ["B","descendente","hígado","Hepatitis A","pasteurela.html"],

  {section:"E"},
  ["Ps","empeine","páncreas, empeine","Duda","duda.html"],
  ["P","epigastrio","epigastrio","Giardia Lamblia, parásito","giardia.html"],
  ["B","epiplón","epiplón","Estafilococo Albus","estafilococo_albus.html"],
  ["E","epiclavio","epiclavio","Sistema linfático, bronquios","epiclavio.html"],
  ["B","escápula","escápula","Lepra por microbacterium Leprae","lepra.html"],
  ["B","escotadura ciática","escotadura ciática","Moraxella Catarrhalis","moxarella_c.html"],
  ["V","esfínter uretral","esfínter uretral","Rabia virus","rabia.html"],
  ["P","esófago","esófago","Fasciola Hepática o Fasiolopsis burski","fasiolopsis_b.html"],
  ["R","esófago","duodeno","Reservorio Microbacterium Leprae","lepra.html"],
  ["H","esófago","vejiga izq.","Histoplasma Capsulatum, Hongo","histoplasma_c.html"],
  ["B","espina del homóplato","espina del homóplato","Mycoplasma pneumoniae - Lupus","mycoplasma_pn.html"],
  ["D","esternocleidomastoideo","","Disfunción Sistema Nervioso Simpático","sns_disf.html"],
  ["E","esternón","bazo","Enfisema, Médula osea, anemia","enfisema.html"],
  ["E","esternón","suprarrenales","Lucio, Poliglobulina","lucio.html"],
  ["T","estómago","cola de páncreas","intoxicación mariscos, metales","mariscos.html"],
  ["B","estómago","colon transverso","Chlamydia Tucans","clamidia_tu.html"],
  ["Ps","estómago","corazón (próstata)","Gula, control de peso","gula.html"],
  ["R","estómago","duodeno","Reservorio de Herpes (checar pares de Herpes)","herpes.html"],
  ["D","estómago","estómago","Disfunción estomacal","estomago_disf.html"],
  ["Ps","estómago","hígado","Poligafia","gula.html"],
  ["B","estómago","píloro","Clostridium Perfringes","clorstridium_p.html"],
  ["B","estómago","timo","Escherichia Coli Transgénica","e-coli.html"],
  ["V","estómago","suprarrenales","Sarampión","sarampion.html"],

  {section:"F"},
  ["B","flanco","flanco (hl)","Yersinia Intestinalis, bacteria","yersinia_i.html"],

  {section:"G"},
  ["E","gen","órgano afectado","GEN, regeneración tisular","gen.html"],
  ["B","glándula salivar","glándula salivar","Proteus Vulgaris","proteus_v.html"],
  ["P","glúteo","glúteo","Parásitos intestinales","parasitos_i.html"],
  ["B","glúteo","píloro","Vellonella","vellonela.html"],
  ["B","glúteo","vena femoral","Babesia","babesia.html"],
  ["R","glúteo izq.","aquiles izq.","Reservorio Universal","gluteo-aquiles.html"],

  {section:"H"},
  ["P","hiato esofágico","lengua","Triquinela Spiralis, parásito","triquinosis.html"],
  ["B","hiato","esófago","Enterobacter Neumonia","enterobacter_pn.html"],
  ["B","hiato","testículo derecho","Helicobacter pilori","helicobacter_p.html"],
  ["B","hígado","colon desc.","Hepatitis A, Pasteurela","pasteurela.html"],
  ["Ps","hígado","corazón","Ira (Talibán)","ira.html"],
  ["T","hígado","hígado","Hepatisis C (tóxica)","hepatitis_c.html"],
  ["B","hígado","cola de páncreas","Botulismo","botulismo.html"],
  ["P","hígado","riñón izq.","Abseso hepático por ameba","absesohepatico.html"],
  ["O","hígado","riñón derecho","Cirrosis hepática","cirrosis.html"],
  ["P","hígado","píloro","Enterovios, Oxiuro","enterobios_v.html"],
  ["B","hígado","píloro","Listeria Monocytógenes","listeria_m.html"],
  ["P","retrohepático","retrohepático","Acaros, parásitos","acaro.html"],
  ["O","hipófisis","bulbo raquídeo","Diabetes insípida","diabetes_ins.html"],
  ["D","hipófisis","hipófisis","Disfunción de la Hipófisis","hipofisis_disf.html"],
  ["Ps","hipófisis","mastoides izq.","Sensibilidad, percepción","sensibilidad.html"],
  ["D","hipófisis","ovario","Carmen","carmen.html"],
  ["Ps","hipófisis","tiroides","Venganza","venganza.html"],
  ["B","hipófisis","vejiga","Dengue","dengue.html"],
  ["V","hombro","cardias","Cryptocides Primordialis","cryptocides_p.html"],
  ["V","huastecas","huastecas","Eipstein Barr, Virus","eipsteinbar.html"],
  ["R","hueco garganta","glúteo izq.","Reservorio Universal","hueco-gluteo.html"],
  ["B","húmero","húmero","Enterobacter Pneumoniae","enterobacter_pn.html"],

  {section:"I"},
  ["E","iliaco","iliaco","Elena","elena.html"],
  ["R","inguinal (d)","espina iliaca postero superior (d)","Reservorio Universal","inguinal-cresta.html"],
  ["R","índice","índice","E. Coli, reservorio","e-coli-r.html"],
  ["V","infraaxilar","infraaxilar","Pleuritis Viral","pleuritis_viral.html"],
  ["Ps","interciliar","bulbo","David","david.html"],
  ["R","interiliaco","riñón","Congreso, reservorio parásitos",""],
  ["R","interiliaco, sacro","4 y 5 lumbar","Congreso, reservorio parásitos",""],
  ["P","isquión","isquión","Oncocercosis","oncocercosis.html"],
  ["B","intestino medio","vegija","Cólera por vibrocolera","colera.html"],

  {section:"L"},
  ["B","lacrimal","lacrimal","Klepsiella neumonía (E. Influenzae)","klepsiela_pn.html"],
  ["B","laringe","laringe","Bordetela Pertusis, bacilo","bordetella.html"],
  ["B","latisimus","latisimus","Yersinia Pneumoniae","yersinia_pn.html"],
  ["P","lengua","lengua","Escabiasis","escabiasis.html"],
  ["V","ligamento hepático","riñón derecho","Adeno virus","adenovirus.html"],
  ["H","ligamento int. rodilla","maleolo","Microsporum","microsporum_c.html"],
  ["D","ligamento int. rótula","maleolo","Disfunción hígado","higado_disf.html"],
  ["V","ligamento páncreas","bazo","Virus del Nilo, AH1N1","nilo.html"],
  ["V","ligamento páncreas","colon descendente","Virus BK","virus_vk.html"],
  ["V","ligamento de páncreas","colon descendente","Fiebre amarilla","fiebre_ama.html"],
  ["E","lóbulo posterior del hígado","riñón","Puebla, Envenenamiento","venenos.html"],
  ["B","lumbar 1","dorsal 5","Meningococo","meningitis.html"],
  ["B","lumbar 4","lumbar 4","Neisseria Gonorreae","neiseria_g.html"],
  ["B","lumbar 5","lumbar 5","Staphylococcus Aureus (-)","estafilococo_aneg.html"],
  ["V","lunar","riñón","Hanta virus","hantavirus.html"],

  {section:"M"},
  ["E","mácula","cerebelo (mismo lado)","Edema Macular","e_macular.html"],
  ["V","malar","malar","Enterovirus","enterovirus.html"],
  ["P","malar","riñón contralateral","Plasmodium vivax y ovale","plasmodium_v.html"],
  ["B","mandíbula","mandíbula","Neisseria Gonorreae","neiseria_g.html"],
  ["V","mango esternón","mango esternón","Coxsackie, virus","coxsackie.html"],
  ["P","mastoides","mastoides","Filaria, parásito","filaria.html"],
  ["B","maxilar superior","maxilar superior","Klebsiella Pneumoniae","klepsiela_pn.html"],
  ["B","mediastino","mediastino","Proteus Mirabillis, bacteria","proteus_m.html"],
  ["V","mentón","mentón","Rabdovirus, Rabia","rabia.html"],
  ["B","mesenterio","mesenterio","Microbacterium Leprae, bacteria","lepra.html"],
  ["V","mordida","axila","Reservorio Rabia virus","rabia.html"],
  ["P","muñeca","muñeca","Rickettsia (Alzheimer)","rickettsia.html"],
  ["E","muñeca (arriba)","muñeca (arriba)","Migraña","migrana.html"],
  ["E","muñeca","tibia (inf. contralat)","Equilibrio energético","equilibrio_ene.html"],
  ["R","muñón","muñón","Guadalupe, Reservorio universal, amputaduras, cirugías, cicatrices",""],

  {section:"N"},
  ["T","nariz","nariz","Toxoides","toxoides.html"],
  ["V","nervio femoral","nervio femoral","Herpes (6), virus","herpes6.html"],
  ["O","nervio inguinal der","articulaciones","Reumatismo Articular","artritis.html"],
  ["V","nervio inguinal","hígado","Roseola, neurodermatitis, herpes 6","roseola.html"],
  ["V","nervio inguinal","nervio inguinal","VIH (3), virus","vih3.html"],
  ["E","nervio facial","nevio facial","Parálisis facial","nervio_fa.html"],
  ["D","nervio vago","cardias","Disfunción del Cardias","cardias.html"],
  ["R","nervio vago","riñón","Benavides, regula función estomacal","benavides.html"],
  ["E","nudo braquial","nudo braquial","Bloqueo energético","desbloqueo_ene.html"],
  ["E","nuca","sacro","Regula líquido cefaloraquídeo (por raquia)","nuca-sacro.html"],
  ["R","nutricia","nutricia","Reservorio bacterias","nutricias.html"],

  {section:"O"},
  ["V","occipital","occipital","Eipsteinbarr virus, (Herpes 8)","eipsteinbar.html"],
  ["Ps","occipital","testículo (d/i)","Malignidad","malignidad.html"],
  ["P","oído","oído","Toxoplasmosis","toxoplasmosis.html"],
  ["E","oído","riñón contralateral","Goiz","goiz.html"],
  ["E","ojo","cerebelo","Edema nervio óptico","nervio_optico.html"],
  ["E","ojo","escápula","Cataratas","cataratas.html"],
  ["V","ojo","ojo","Citomegalovirus","citomegalovirus.html"],
  ["E","ombligo","ombligo","Trombos","plaquetas.html"],
  ["Ps","ombligo","testículo","Integridad moral","saturnino.html"],
  ["Ps","ombligo","testículo","Saturnino o complejo de Edipo","saturnino.html"],
  ["Ps","ombligo","útero","Trini o complejo de Electra","trini.html"],
  ["T","oreja","oreja","Leny, intoxicación","leny.html"],
  ["D","ovario","hipófisis (hígado)","Dismenorrea","dismenorrea.html"],
  ["D","ovario","ovario","Disfunción ovárica","ovario_disf.html"],
  ["E","ovario","útero","Durán o embarazo","duran.html"],

  {section:"P"},
  ["P","palma","palma","Plasmodium Vivax, parásito","plasmodium_v.html"],
  ["P","páncreas","bazo","Equinococcus Granulosus","equinococus_g.html"],
  ["E","páncreas","estómago","Chaco, alergias alimentarias","chaco.html"],
  ["T","páncreas","páncreas","Pancreatitis o Ramsés","ramses.html"],
  ["V","páncreas","páncreas","Adenovirus","adenovirus.html"],
  ["E","páncreas (cuerpo)","hígado","Ecuador, resist. insulina, para bajar de peso","ecuador.html"],
  ["B","páncreas (cola)","hígado","Botulismo","botulismo.html"],
  ["E","páncreas (cabeza)","estómago","Alergias alimentarias","alergia_a.html"],
  ["B","páncreas (cabeza)","suprarrenales","Estafilococo Dorado cuagulasa (-)","estafilococo_aneg.html"],
  ["D","paratiroides","paratiroides","Disfunción glandular","paratiroides_disf.html"],
  ["Ps","paratiroides","corazón","Odio","odio.html"],
  ["H","paravertebral","parabertebral","Levadura","levadura.html"],
  ["E","paravertebral","parabertebral","Radiculopatía","radiculopatia.html"],
  ["D","parietal","bulbo","Desequilibio mental grave",""],
  ["P","parietal","colon transverso","Entamoeba Histolytica","entamoeba.html"],
  ["V","parietal","parietal","Encefalitis viral","encefalitis.html"],
  ["Ps","parietal","riñón mismo lado","Déficit de atención",""],
  ["E","parietal","riñón contraleteral","Goiz","goiz.html"],
  ["D","parótida","parótida","Lolita. disfunción glandular","lolita.html"],
  ["B","párpado","párpado","Neisseria catarralis","neiseria_c.html"],
  ["V","pata de ganso","pata de ganso","Coronavirus","coronavirus.html"],
  ["B","pecho","pecho","Neumococo","neumonia.html"],
  ["B","pectoral","pectoral","Mycoplasma","mycoplasma_pn.html"],
  ["E","pectoral","tendón cuádriceps (mismo lado)","Energético","equilibrio_ene.html"],
  ["B","pericardio","pericardio","Pericarditis, Estafilococo Aureo (+)","pericarditis.html"],
  ["B","perihepático","perihepático","Morganella tifo","morganella_t.html"],
  ["V","peripancreático (sup)","peripancreático (inf)","Rabia virus","rabia.html"],
  ["B","perirrenal","perirrenal","Microbacterium Bovis","m_bovis.html"],
  ["R","peritoneo","apéndice vermiforme","Reservorio Gardenella","gardenerella_v.html"],
  ["R","peritoneo","pleura","Moisés, Reservorio de bacterias","moises.html"],
  ["B","peroné","peroné","Proteus Mirabilis, bacteria","proteus_m.html"],
  ["R","pezón der.","gemelo izq.","Reservorio Universal","pezon-gemelo.html"],
  ["H-V","píloro","ano (útero)","Micelio intestinalis, Hanta virus","miceo_in.html"],
  ["Ps","píloro","colon transverso","Polifagia, anorexia","gula.html"],
  ["P","píloro","lengua","Triquinella spirallis","triquinosis.html"],
  ["D","píloro","píloro","Disfunción","piloro_disf.html"],
  ["P","píloro","hígado","Enterovius vermicularis, Oxiuros","enterobios_v.html"],
  ["P","píloro","riñón izquierdo","Amebiasis intestinal","amibiasis.html"],
  ["H","píloro","ureter","Micelio intestinalis, hongo","miceo_in.html"],
  ["V","pineal","bulbo raquídeo","Guillan Barré o Polirradículo","guillenbarre.html"],
  ["Ps","pineal","hipotálamo","Depresión aguda","depresion.html"],
  ["E","pineal","hipotálamo","Herpes, cualquier tipo","herpes.html"],
  ["D","pineal","pineal","Vitiligio o Hipocromía","vitiligo.html"],
  ["Ps","pineal","páncreas","Sade: lujuria","sade.html"],
  ["Ps","pineal","próstata o útero","Sade: lujuria","sade.html"],
  ["V","piso orbital","piso orbital","Orf, virus","orf.html"],
  ["V","pleura derecha","hígado","Orthohepadnavirus, Hepatitis B","orthohepadna.html"],
  ["B","pleura","pleura","Pseudomona Auroginosa","pseudomona_a.html"],
  ["V","pleura","pleura","Pleuritis, virus","pleuritis_viral.html"],
  ["B","pleura","apéndice","Estafilococo Aurus cuagulasa (+)","estafilococo_aureus_pos.html"],
  ["E","pleura (der)","peritoneo","Moisés","moises.html"],
  ["B","plexo cervical","plexo cervical","Enterococcus Faecalis, Desbloqueo Energético","enterococus_f.html"],
  ["B","plexo lumbar","plexo lumbar","Enterococcus Faecallis","enterococus_f.html"],
  ["V","polígono de willis","p. de w.","Reovirus","reovirus.html"],
  ["E","polo","polo","Abraham","abraham.html"],
  ["P","pómulo","riñón contralateral","Paludismo, Plasmodium Vivax","plasmodium_v.html"],
  ["B","popítleo","popítleo","Neumonía por Neumococo","neumonia.html"],
  ["Ps","pospineal","amígdala","Depresión",""],
  ["Ps","pospineal","pospineal","Xcaret, Goiz, hostilidad, sin moral","xcaret.html"],
  ["B","preauricular","preauricular","Neocardia Americana, bacteria","neocardia_a.html"],
  ["H","prepineal (preauricular)","vejiga","Criptococcus Neoformans, hongo","criptococcus_n.html"],
  ["H","1ra. costilla","1ra. costilla","Trycophito, Hongo en uñas","trychophyton.html"],
  ["H","primer ortejo","primer ortejo","Trycophito, Hongo en pies","trychophyton.html"],
  ["D","próstata","próstata","Prostatitis","prostatitis.html"],
  ["V","próstata","recto","Papiloma, virus","papiloma.html"],
  ["V","pudendo","pudendo","Parotiditis o Paperas","parotiditis.html"],
  ["Ps","pulmón","bulbo r.","Kado, tristeza","tristeza.html"],
  ["Ps","pulmón","corazón","Kado, tristeza","tristeza.html"],
  ["Ps","pulmón","pulmón","Culpa",""],
  ["V","punta páncreas","bazo","Verruga común (VPH)","verruga.html"],
  ["E","punto alcalino","escápula","Tratar tumores, miomas, fibromas, quistes","p_alcalino.html"],

  {section:"Q"},
  ["E","quiasma","quiasma","Lucina, sistema linfático","lucina.html"],

  {section:"R"},
  ["H","radio","radio","Microsporum cannis, hongo","microsporum_c.html"],
  ["B","rama isquiática","rama isquiática","Estreptococo C, bacteria","estreptococo_c.html"],
  ["B","rama mandibular","rama mandibular","Estafilococo epidermis, bacteria","estafilococo-epi.html"],
  ["B","recto","recto","Pseudomona Aureoginosa","pseudomona_a.html"],
  ["B","retroaxilar","retroaxilar","Estreptococo C","estreptococo_c.html"],
  ["P","retrohepático","riñón (retrohep.)","Toxacara, ácaro","acaro.html"],
  ["P","retromastoides","retro mastoides","Cisticercosis","cisticerco.html"],
  ["B","retroplantar","retroplantar","Microbacterium Leprae, bacteria","lepra.html"],
  ["V","retrotensor fascia lata","retrotensor fascia lata","Verruguita","verruga.html"],
  ["E","riñón izq.","cápsula renal","Alex","alex.html"],
  ["Ps","riñón izq.","ojo izq.","Fobias a arañas, relámpagos, oscuridad, etc","fobias.html"],
  ["Ps","riñón izq.","tiroides","Miedo a sufrir accidentes","fobias.html"],
  ["P","riñón","pómulo contralateral","Paludismo, Plasmodium vivex","plasmodium_v.html"],
  ["T","riñón","riñón","Tétanos por Clostridium tetanie","tetanos.html"],
  ["D","riñón","sacro contralateral","Olazo, Disfunción intestinal","olazo.html"],
  ["E","riñón superior","riñón inferior","Inmunocompetencia","inmunocomp.html"],
  ["O","riñón der.","duodeno","Diabetes Mellitus","diabetes.html"],
  ["E","riñón","temporal (parietal, oído) contralateral","Goiz","goiz.html"],
  ["E","riñón","uretero","Machín o Herpes (4)","machin.html"],
  ["B","riñón izq.","conducto de páncreas","Espiroqueta","espiroqueta.html"],
  ["P","riñón","deltoides","Leismania","leismania.html"],
  ["B","riñón der.","conducto de vesícula","Espiroqueta","espiroqueta.html"],
  ["O","riñón","uretero","Cólico nefrítico","machin.html"],
  ["P","retrohepático","retrohepático","Toxacara Acaro, parásito","acaro.html"],
  ["Ps","rótula","rótula","Miedo, dolor de rodillas","miedo.html"],

  {section:"S"},
  ["R","sacro","bazo","Reservorio Universal","sacro-bazo.html"],
  ["V","saco de douglas","vena femoral","Norwalk, virus","norkwalk.html"],
  ["B","sacro","sacro","Proteus Mirabillis, bacteria","proteus_m.html"],
  ["E","seno a. ventricular","riñón","Ana Alicia, Taquicardia","Anaalicia.html"],
  ["V","seno frontal","seno frontal","Sinusitis frontal, viral","sinusitis_f.html"],
  ["V","seno nasal","seno nasal","Sinusitis nasal, viral","sinusitis_n.html"],
  ["Ps","sien der.","corazón","Tristeza, pigmentación de la piel","tristeza.html"],
  ["E","sien","sien","Isaac","isaac.html"],
  ["V","sigmoides","recto","SV-40 virus","rcv40.html"],
  ["B","sigmoides","testículo","Campylobacter Jejuni","campylobacter_j.html"],
  ["B","subclavia","subclavia","Difteria","difteria.html"],
  ["R","subdiafragma","subdiafragma","Reservorio Universal y Reserv. Cisticercosis","subdiafragmas.html"],
  ["R","suelo pélvico","suelo pélvico","Reservorio Universal","piso_pelvico.html"],
  ["E","supraciliar","bulbo","Vivian","vivian.html"],
  ["B","supraespinoso","supraespinoso","Tuberculosis por Microbacterium tuberculosa","tuberculosis.html"],
  ["B","suprahepático","suprahepático","Clostridium Malignum","clorstridium_m.html"],
  ["V","suprapúbico","suprapúbico","htlv1, virus","htlv1.html"],
  ["Ps","suprarrenal","hígado","Soberbia","altivez.html"],
  ["B","suprarrenal","pulmón","Pseudomona Aeroginosa, bacteria","pseudomona_a.html"],
  ["D","suprarrenal","suprarrenal","Disfunción suprarrenal","suprarrenal_disf.html"],
  ["B","suprarrenal","recto","Leptospira","leptospira.html"],
  ["V","suprarrenal","bulbo raquídeo","Adenovirus","adenovirus.html"],
  ["E","suprarrenales","todo el frente","Asma alérgico","asma_a.html"],
  ["E","sacro","útero","Endometriosis","endometriosis.html"],

  {section:"T"},
  ["R","talón","talón","Reservorio Epstein Barr","eipsteinbar.html"],
  ["B","temporal (der)","temporal (der)","Tifo exantemático","tifo_exa.html"],
  ["Ps","temporal (der)","temporal (der)","Bonilla, agresividad","bonilla.html"],
  ["V","temporal (izq.)","temporal (izq.)","Polyomavirus","polioma.html"],
  ["B","temporal (izq.)","temporal (izq.)","Tifo exantemático","tifo_exa.html"],
  ["E","temporal","riñón contralateral","Goiz","goiz.html"],
  ["E","tendón triceps","aquiles","Energético","equilibrio_ene.html"],
  ["V","tensor facia lata","tensor facia lata","Gardenerella vaginalis, virus","gardenerella_v.html"],
  ["B","testículo","testículo","Yersina Pestis, bacteria","yersinia_p.html"],
  ["B","testículo der.","hiato","Helicobacter pilori","helicobacter_p.html"],
  ["H","tibia","tibia","Pytirosporum Versicolor o Malasesia Furfur","p_versicolo.html"],
  ["H","tibia media","tibia media","Actinomices sp, micosis profunda","actinomices.html"],
  ["H","tibia inferior","tibia inferior","Piedra Nigra, Hongo","piedra_nigra.html"],
  ["E","timo","bazo","Factor surfactante","sufactante.html"],
  ["E","timo","bazo","Marco Antonio, Poliglobulina","poliglobulina.html"],
  ["B","timo","hígado","Escherichia Coli, bacteria","e-coli.html"],
  ["Ps","timo","hipófisis","Wallstreet, Avaricia","wallstreet.html"],
  ["Ps","timo","ovario o testículo","Impaciencia","impaciencia.html"],
  ["V","timo","parietal","Rubeola","rubeola.html"],
  ["V","timo","recto","VIH-SIDA","sida.html"],
  ["E","timo","apéndice","Angeles","angeles.html"],
  ["E","timo","suprarrenales","Alvaro, Sist. endócrino, menopausia","alvaro.html"],
  ["D","timo","timo","Disfunción Glandular","timo_disf.html"],
  ["V","tiroides","bulbo","Meningitis","meningitis.html"],
  ["D","tiroides","tiroides","Disfunción Glandular","tiroides_disf.html"],
  ["Ps","tráquea","corazón","Intolerancia","intolerancia.html"],
  ["V","tráquea","tráquea","Influenza, virus","influenza.html"],
  ["R","triángulo de scarpa","triang. de s.","Reservorio Microbacterium Leprae","lepra.html"],
  ["B","trocanter mayor","riñón (contra u homolateral)","Bacilo Paratyphi","b_paratiyphico.html"],
  ["H","trocanter mayor","tensor fascia latta","Blastomyces Dermatitidis","blastomicosis.html"],
  ["B","trocanter mayor","trocanter mayor","Salmonella Tifo","salmonella_t.html"],
  ["V","trocanter menor","trocanter menor","VIH (4)","vih4.html"],
  ["E","trompa","ovario","Paty, embarazo ectópico","paty.html"],
  ["V","trompa","trompa","Parvovirus","parvovirus.html"],

  {section:"U"},
  ["V","uretero","uretero","Varicela","varicela.html"],
  ["V","uretra","uretra (vagina)","Corona Virus","coronavirus.html"],
  ["R","uretra","uretra","Fox Reservorio de virus","fox.html"],
  ["E","útero","hígado","Embarazo molar","e_molar.html"],
  ["E","útero","ovario","Durán (embarazo)","duran.html"],
  ["E","útero","útero","Roberta (falso embarazo)","roberta.html"],
  ["V","uretero","caliz renal","Herpe (5)","herpes5.html"],
  ["E","útero","recto","Intolerancia alimentaria y Papiloma virus","intolerancia_a.html"],
  ["E","útero","riñón","Miomas, absesos, polipos, carcinomas","miomas.html"],
  ["E","útero","sacro","Endometriosis","endometriosis.html"],
  ["E","uretero","riñón","Cólico nefrítico","machin.html"],

  {section:"V"},
  ["R","vacuna","supraespinoso","Reservorio tuberculosis","tuberculosis.html"],
  ["B","vagina","vagina","Yersina Pestis","yersinia_p.html"],
  ["R","vagina","vagina","Yolanda, Reservorio de virus","yolanda.html"],
  ["B","vagina (tetículo)","garganta","Yersina Pestis, Estreptococo Aureus","yersinia_p.html"],
  ["R","vago","riñón contralateral","Benavides, Reservorio universal (shigella)","benavides.html"],
  ["R","válvula iliocecal","prominencia occipital","Reservorio Universal","valv-occi.html"],
  ["P","válvula iliocecal","riñón der.","Tricomonas","tricomonas.html"],
  ["B","vejiga","ano","Enterococcus fecallis","enterococus_f.html"],
  ["B","vejiga","vejiga","Estreptococo G - Disfunción","estreptococo_g.html"],
  ["V","vejiga","bulbo","Dengue hemorrágico","dengueh.html"],
  ["B","vejiga","intestino medio","Cólera","colera.html"],
  ["V","vejiga","recto","Herpes 7","herpes7.html"],
  ["B","vena porta","vena porta","Klebsiella Pneumoniae","klepsiela_pn.html"],
  ["V","vesícula","riñón derecho","Catarro común","catarro.html"],
  ["Ps","vesícula","vagina","Envidia","cain.html"],
  ["E","vesícula","riñón","Dolor por cálculos","calculos_auch.html"],
  ["E","vesícula","escápula","Desinflama vesícula","vesicula.html"],
  ["R","vesícula","vesícula","Prada, reservorio de virus","prada.html"],

  {section:"Y"},
  ["B","yeyuno","riñón","Campylobacter Jejuni","campylobacter_j.html"],

  {section:"Z"},
  ["R","zona suprarrenal","riñón contralateral","Reservorio universal","reservorio_z.html"]
];

/* ============================================================
   ZONA Y SISTEMA A PARTIR DEL PAR 1
   El Par 1 es el punto de referencia del par: de él se obtienen
   la zona y el sistema.  La tabla siguiente usa los mismos
   valores que el resto de la guía (virus.html, bacterias.html,
   especiales.html, emocionales.html, reservorios.html, ...), de
   modo que un mismo punto (Bazo, Timo, Bulbo, Riñón, ...)
   siempre muestra la misma zona y el mismo sistema.
   ============================================================ */
const ZONA_ORDER = ['Cabeza','Cara','Cuello','Brazos','Dorso','Torso Superior','Torso Medio',
                    'Torso Bajo','Pelvis','Pierna','Pie','Otros'];
const SISTEMA_ORDER = ['Nervioso','Circulatorio','Respiratorio','Digestivo','Esquelético',
                       'Muscular','Endócrino','Urinario','Linfático','Tegumentario',
                       'Reproductor','Locomotor','OTRO'];

const PAR1_INFO = {
  "1ra. costilla": ["Torso Superior", "Esquelético"],
  "Aductor": ["Pierna", "Muscular"],
  "Aductor menor": ["Pierna", "Muscular"],
  "Apófisis Xifoides": ["Torso Superior", "Esquelético"],
  "Aquiles sup": ["Pierna", "Muscular"],
  "Cervical 1": ["Cuello", "Esquelético"],
  "Cervical 2 (axis)": ["Cuello", "Esquelético"],
  "Cervical 4": ["Cuello", "Esquelético"],
  "Cervical 5": ["Cuello", "Esquelético"],
  "Cervical 6": ["Cuello", "Esquelético"],
  "Cervical 7": ["Cuello", "Esquelético"],
  "Dorsal 4": ["Dorso", "Esquelético"],
  "Lumbar 2": ["Dorso", "Esquelético"],
  "Lumbar 3": ["Dorso", "Esquelético"],
  "Post pineal": ["Cabeza", "Endócrino"],
  "Ganglios mesentéricos": ["Torso Medio", "Linfático"],
  "Riñón (I)": ["Torso Medio", "Urinario"],
  "Riñón (D)": ["Torso Medio", "Urinario"],
  "Glúteo (sup)": ["Pierna", "Muscular"],
  "Pleura (D)": ["Torso Superior", "Respiratorio"],
  "Primera. costilla": ["Torso Superior", "Esquelético"],
  "Testículo (D)": ["Pelvis", "Reproductor"],
  "Cisura Rolando": ["Cabeza", "Nervioso"],
  "Colon asc": ["Torso Bajo", "Digestivo"],
  "Conducto eferente": ["Pelvis", "Reproductor"],
  "Dentadura": ["Cara", "Esquelético"],
  "Maxilar inferior": ["Cara", "Esquelético"],
  "Nervio vago (D)": ["Torso Medio", "Nervioso"],
  "Oído (D)": ["Cara", "OTRO"],
  "Piso pélvico": ["Pelvis", "Muscular"],
  "Rodilla": ["Pierna", "Esquelético"],
  "Rodilla interna": ["Pierna", "Esquelético"],
  "Sien (D)": ["Cara", "OTRO"],
  "Temporal (D)": ["Cara", "Esquelético"],
  "Temporal (I)": ["Cara", "Esquelético"],
  "Colon ascendente": ["Torso Bajo", "Digestivo"],
  "Punta de páncreas": ["Torso Medio", "Digestivo"],
  "Hipotálamo": ["Cabeza", "Endócrino"],
  "Tobillo": ["Pierna", "Esquelético"],
  "Lóbulo post. hígado": ["Torso Medio", "Digestivo"],
  "Poplíteo": ["Pierna", "OTRO"],
  "Bíceps": ["Brazos", "Muscular"],
  "Temporoccipital": ["Cabeza", "Esquelético"],
  "Postpineal": ["Cabeza", "Endócrino"],
  "Fémur posterior": ["Pierna", "Esquelético"],
  "Labio": ["Cara", "OTRO"],
  "Prepineal": ["Cabeza", "Endócrino"],
  "Bulbo raquídeo": ["Cabeza", "Nervioso"],
  "Gemelo": ["Pierna", "Muscular"],
  "Yunque": ["Cara", "Esquelético"],
  "Seno A. ventricular": ["Torso Superior", "Circulatorio"],
  "Plexo tobillo": ["Pierna", "Nervioso"],
  "Muñeca (arriba)": ["Brazos", "Locomotor"],
  "Agujero": ["Otros", "OTRO"],
  "Amígdala cerebral": ["Cabeza", "Nervioso"],
  "Amígdala palatina": ["Cuello", "Linfático"],
  "Ampolla hematopancreática": ["Torso Medio", "Digestivo"],
  "Anexo": ["Pelvis", "Reproductor"],
  "Angina": ["Cuello", "Linfático"],
  "Angulo": ["Cara", "Esquelético"],
  "Ano": ["Pelvis", "Digestivo"],
  "Antecuerno": ["Cabeza", "OTRO"],
  "Apéndice": ["Torso Bajo", "Digestivo"],
  "Aquiles": ["Pierna", "Muscular"],
  "Arco cigomático": ["Cara", "Esquelético"],
  "Arco de pie": ["Pie", "Esquelético"],
  "Atlas": ["Cuello", "Esquelético"],
  "Axila": ["Brazos", "OTRO"],
  "Bazo": ["Torso Medio", "Linfático"],
  "Borde calloso (D/I)": ["Cabeza", "Nervioso"],
  "Botón aórtico": ["Torso Superior", "Circulatorio"],
  "Braquial": ["Brazos", "Nervioso"],
  "Bronquio der.": ["Torso Superior", "Respiratorio"],
  "Bulbo": ["Cabeza", "Nervioso"],
  "Bursa": ["Brazos", "Muscular"],
  "Cabeza cuello femur": ["Pierna", "Esquelético"],
  "Cabeza de páncreas": ["Torso Medio", "Digestivo"],
  "Cadera": ["Pierna", "Esquelético"],
  "Calcáneo": ["Pie", "Esquelético"],
  "Caliz renal": ["Torso Medio", "Urinario"],
  "Canto del ojo": ["Cara", "OTRO"],
  "Cápsula Renal": ["Torso Medio", "Urinario"],
  "Cardias": ["Torso Medio", "Digestivo"],
  "Carina": ["Torso Superior", "Respiratorio"],
  "Carótida": ["Cuello", "Circulatorio"],
  "Cava": ["Torso Superior", "Circulatorio"],
  "Ceja": ["Cara", "Tegumentario"],
  "Cerebelo": ["Cabeza", "Nervioso"],
  "Cervical": ["Cuello", "Esquelético"],
  "Cervical 1 (atlas)": ["Cuello", "Esquelético"],
  "Cervical 3": ["Cuello", "Esquelético"],
  "Cervicales": ["Cuello", "Esquelético"],
  "Ciático": ["Pierna", "Nervioso"],
  "Ciego": ["Torso Bajo", "Digestivo"],
  "Cisura Media": ["Cabeza", "Nervioso"],
  "Cisura Silvio": ["Cabeza", "Nervioso"],
  "Clítoris": ["Pelvis", "Reproductor"],
  "Cóccix": ["Dorso", "Esquelético"],
  "Codo": ["Brazos", "Locomotor"],
  "Cola de Páncreas": ["Torso Medio", "Digestivo"],
  "Colon asc.": ["Torso Bajo", "Digestivo"],
  "Colon desc": ["Torso Bajo", "Digestivo"],
  "Colon Transverso": ["Torso Bajo", "Digestivo"],
  "Comisura": ["Cara", "OTRO"],
  "Condral": ["Torso Superior", "Esquelético"],
  "Conducto de Páncreas": ["Torso Medio", "Digestivo"],
  "Conducto de Vesícula": ["Torso Medio", "Digestivo"],
  "Conducto deferente": ["Pelvis", "Reproductor"],
  "Conducto espermático": ["Pelvis", "Reproductor"],
  "Contraciego": ["Torso Bajo", "Digestivo"],
  "Corazón": ["Torso Superior", "Circulatorio"],
  "Coronarias": ["Torso Superior", "Circulatorio"],
  "Costal": ["Torso Superior", "Esquelético"],
  "Costal anterior": ["Torso Superior", "Esquelético"],
  "Costodiafragmático": ["Torso Medio", "Esquelético"],
  "Costohepático": ["Torso Medio", "Esquelético"],
  "Craneal": ["Cabeza", "Esquelético"],
  "Cresta iliaca": ["Pelvis", "Esquelético"],
  "Cresta iliaca anteriosuperior": ["Pelvis", "Esquelético"],
  "Cresta isquiática (D/I)": ["Pelvis", "Esquelético"],
  "Cuadrado lumbar": ["Dorso", "Muscular"],
  "Cuadriceps": ["Pierna", "Muscular"],
  "Cúbito": ["Brazos", "Esquelético"],
  "Cuello": ["Cuello", "OTRO"],
  "Cuerpo calloso": ["Cabeza", "Nervioso"],
  "Cuerpo cavernoso": ["Pelvis", "Reproductor"],
  "Deltoides": ["Brazos", "Muscular"],
  "Deltoides der": ["Brazos", "Muscular"],
  "Dental": ["Cara", "OTRO"],
  "Descendente": ["Torso Bajo", "Digestivo"],
  "Diafragma": ["Torso Medio", "Muscular"],
  "Dorsal 1": ["Dorso", "Esquelético"],
  "Dorsal 2": ["Dorso", "Esquelético"],
  "Dorsal 3": ["Dorso", "Esquelético"],
  "Dorsal 5": ["Dorso", "Esquelético"],
  "Dorsal 6": ["Dorso", "Esquelético"],
  "Dorsal 7": ["Dorso", "Esquelético"],
  "Dorso": ["Dorso", "Esquelético"],
  "Dorso de la mano": ["Brazos", "Tegumentario"],
  "Duodeno": ["Torso Medio", "Digestivo"],
  "Empeine": ["Pie", "Tegumentario"],
  "Epiclavio": ["Cuello", "Linfático"],
  "Epigastrio": ["Torso Medio", "OTRO"],
  "Epiplón": ["Torso Medio", "Digestivo"],
  "Escápula": ["Dorso", "Esquelético"],
  "Escotadura ciática": ["Pierna", "Esquelético"],
  "Esfinter uretral": ["Pelvis", "Urinario"],
  "Esófago": ["Torso Medio", "Digestivo"],
  "Espina del Homóplato": ["Dorso", "Esquelético"],
  "Esternocleidomastoideo": ["Cuello", "Muscular"],
  "Esternón": ["Torso Superior", "Esquelético"],
  "Estómago": ["Torso Medio", "Digestivo"],
  "Flanco": ["Torso Bajo", "OTRO"],
  "Gen": ["Otros", "OTRO"],
  "Glándula salivar": ["Cara", "Digestivo"],
  "Glúteo": ["Pierna", "Muscular"],
  "Glúteo izq.": ["Pierna", "Muscular"],
  "Hiato": ["Torso Medio", "Digestivo"],
  "Hiato esofágico": ["Torso Medio", "Digestivo"],
  "Hígado": ["Torso Medio", "Digestivo"],
  "Hipófisis": ["Cabeza", "Endócrino"],
  "Hombro": ["Brazos", "Esquelético"],
  "Huastecas": ["Otros", "OTRO"],
  "Hueco garganta": ["Cuello", "OTRO"],
  "Húmero": ["Brazos", "Esquelético"],
  "Iliaco": ["Pelvis", "Esquelético"],
  "Indice": ["Brazos", "Esquelético"],
  "Infraaxilar": ["Brazos", "Tegumentario"],
  "Inguinal (D)": ["Pelvis", "Esquelético"],
  "Interciliar": ["Cara", "OTRO"],
  "Interiliaco": ["Pelvis", "Esquelético"],
  "Interiliaco, Sacro": ["Pelvis", "Esquelético"],
  "Intestino medio": ["Torso Bajo", "Digestivo"],
  "Isquión": ["Pelvis", "Esquelético"],
  "Lacrimal": ["Cara", "OTRO"],
  "Laringe": ["Cuello", "Respiratorio"],
  "Latisimus": ["Dorso", "Muscular"],
  "Lengua": ["Cara", "Muscular"],
  "Ligamento de páncreas": ["Torso Medio", "Digestivo"],
  "Ligamento hepático": ["Torso Medio", "Digestivo"],
  "Ligamento int. rodilla": ["Pierna", "Esquelético"],
  "Ligamento int. rótula": ["Pierna", "Esquelético"],
  "Ligamento páncreas": ["Torso Medio", "Digestivo"],
  "Lobulo posterior del hígado": ["Torso Medio", "Digestivo"],
  "Lumbar 1": ["Dorso", "Esquelético"],
  "Lumbar 4": ["Dorso", "Esquelético"],
  "Lumbar 5": ["Dorso", "Esquelético"],
  "Lunar": ["Cara", "Tegumentario"],
  "Mácula": ["Cabeza", "OTRO"],
  "Malar": ["Cara", "Esquelético"],
  "Mandíbula": ["Cara", "Esquelético"],
  "Mango esternón": ["Torso Superior", "Esquelético"],
  "Mastoides": ["Cabeza", "Esquelético"],
  "Maxilar Superior": ["Cara", "Esquelético"],
  "Mediastino": ["Torso Superior", "OTRO"],
  "Mentón": ["Cara", "Esquelético"],
  "Mesenterio": ["Torso Medio", "Digestivo"],
  "Mordida": ["Cara", "OTRO"],
  "Muñeca": ["Brazos", "Locomotor"],
  "Muñeca (arriba)": ["Brazos", "Locomotor"],
  "Muñón": ["Otros", "OTRO"],
  "Nariz": ["Cara", "OTRO"],
  "Nervio facial": ["Cara", "Nervioso"],
  "Nervio femoral": ["Pierna", "Nervioso"],
  "Nervio inguinal": ["Pelvis", "Nervioso"],
  "Nervio inguinal der": ["Pelvis", "Nervioso"],
  "Nervio vago": ["Torso Medio", "Nervioso"],
  "Nuca": ["Cuello", "OTRO"],
  "Nudo Braquial": ["Brazos", "Nervioso"],
  "Nutricia": ["Otros", "OTRO"],
  "Occipital": ["Cabeza", "Esquelético"],
  "Oído": ["Cara", "OTRO"],
  "Ojo": ["Cara", "OTRO"],
  "Ombligo": ["Torso Medio", "OTRO"],
  "Oreja": ["Cara", "OTRO"],
  "Ovario": ["Pelvis", "Reproductor"],
  "Palma": ["Brazos", "Tegumentario"],
  "Páncreas": ["Torso Medio", "Digestivo"],
  "Páncreas (cabeza)": ["Torso Medio", "Digestivo"],
  "Páncreas (cola)": ["Torso Medio", "Digestivo"],
  "Páncreas (cuerpo)": ["Torso Medio", "Digestivo"],
  "Paratiroides": ["Cuello", "Endócrino"],
  "Paravertebral": ["Dorso", "Esquelético"],
  "Parietal": ["Cabeza", "Esquelético"],
  "Parótida": ["Cara", "Digestivo"],
  "Párpado": ["Cara", "OTRO"],
  "Pata de ganso": ["Pierna", "Muscular"],
  "Pecho": ["Torso Superior", "OTRO"],
  "Pectoral": ["Torso Superior", "Muscular"],
  "Pericardio": ["Torso Superior", "Circulatorio"],
  "Perihepático": ["Torso Medio", "Digestivo"],
  "Peripancreático (sup)": ["Torso Medio", "Digestivo"],
  "Perirrenal": ["Torso Medio", "Urinario"],
  "Peritoneo": ["Torso Medio", "Digestivo"],
  "Peroné": ["Pierna", "Esquelético"],
  "Pezón der.": ["Torso Superior", "OTRO"],
  "Píloro": ["Torso Medio", "Digestivo"],
  "Píneal": ["Cabeza", "Endócrino"],
  "Pineal": ["Cabeza", "Endócrino"],
  "Piso orbital": ["Cara", "Esquelético"],
  "Pleura": ["Torso Superior", "Respiratorio"],
  "Pleura (der)": ["Torso Superior", "Respiratorio"],
  "Pleura derecha": ["Torso Superior", "Respiratorio"],
  "Plexo Cervical": ["Cuello", "Nervioso"],
  "Plexo Lumbar": ["Dorso", "Nervioso"],
  "Polígono de Willis": ["Cabeza", "Circulatorio"],
  "Polo": ["Otros", "OTRO"],
  "Pómulo": ["Cara", "Esquelético"],
  "Popítleo": ["Pierna", "OTRO"],
  "Pospineal": ["Cabeza", "Endócrino"],
  "Preauricular": ["Cara", "OTRO"],
  "Prepineal (Preauricular)": ["Cabeza", "Endócrino"],
  "Primer ortejo": ["Pie", "Esquelético"],
  "Próstata": ["Pelvis", "Reproductor"],
  "Pudendo": ["Pelvis", "Nervioso"],
  "Pulmón": ["Torso Superior", "Respiratorio"],
  "Punta Páncreas": ["Torso Medio", "Digestivo"],
  "Punto alcalino": ["Otros", "OTRO"],
  "Quiasma": ["Cabeza", "Nervioso"],
  "Radio": ["Brazos", "Esquelético"],
  "Rama isquiática": ["Pierna", "Esquelético"],
  "Rama mandibular": ["Cara", "Esquelético"],
  "Recto": ["Pelvis", "Digestivo"],
  "Retroaxilar": ["Brazos", "Tegumentario"],
  "Retrohepático": ["Torso Medio", "Digestivo"],
  "Retromastoides": ["Cabeza", "Esquelético"],
  "Retroplantar": ["Pie", "Esquelético"],
  "Retrotensor fascia lata": ["Pierna", "Muscular"],
  "Riñón": ["Torso Medio", "Urinario"],
  "Riñón der.": ["Torso Medio", "Urinario"],
  "Riñón Izq.": ["Torso Medio", "Urinario"],
  "Riñón superior": ["Torso Medio", "Urinario"],
  "Rótula": ["Pierna", "Esquelético"],
  "Saco de Douglas": ["Pelvis", "OTRO"],
  "Sacro": ["Dorso", "Esquelético"],
  "Seno A. ventricular": ["Torso Superior", "Circulatorio"],
  "Seno frontal": ["Cara", "Respiratorio"],
  "Seno nasal": ["Cara", "Respiratorio"],
  "Sien": ["Cara", "OTRO"],
  "Sien der.": ["Cara", "OTRO"],
  "Sigmoides": ["Torso Bajo", "Digestivo"],
  "Subclavia": ["Torso Superior", "Circulatorio"],
  "Subdiafragma": ["Torso Medio", "Digestivo"],
  "Suelo pélvico": ["Pelvis", "Muscular"],
  "Supraciliar": ["Cara", "OTRO"],
  "Supraespinoso": ["Brazos", "Muscular"],
  "Suprahepático": ["Torso Medio", "Digestivo"],
  "Suprapúbico": ["Pelvis", "OTRO"],
  "Suprarrenal": ["Torso Medio", "Endócrino"],
  "Suprarrenales": ["Torso Medio", "Endócrino"],
  "Talón": ["Pie", "Esquelético"],
  "Temporal": ["Cara", "Esquelético"],
  "Temporal (der)": ["Cara", "Esquelético"],
  "Temporal (izq.)": ["Cara", "Esquelético"],
  "Tendón triceps": ["Brazos", "Locomotor"],
  "Tensor facia lata": ["Pierna", "Muscular"],
  "Testículo": ["Pelvis", "Reproductor"],
  "Testículo der.": ["Pelvis", "Reproductor"],
  "Tibia": ["Pierna", "Esquelético"],
  "Tibia inferior": ["Pierna", "Esquelético"],
  "Tibia media": ["Pierna", "Esquelético"],
  "Timo": ["Torso Superior", "Linfático"],
  "Tiroides": ["Cuello", "Endócrino"],
  "Traquea": ["Cuello", "Respiratorio"],
  "Triángulo de Scarpa": ["Pierna", "Muscular"],
  "Trocanter mayor": ["Pierna", "Esquelético"],
  "Trocanter menor": ["Pierna", "Esquelético"],
  "Trompa": ["Pelvis", "Reproductor"],
  "Uretero": ["Torso Medio", "Urinario"],
  "Uretra": ["Pelvis", "Urinario"],
  "Utero": ["Pelvis", "Reproductor"],
  "Vacuna": ["Otros", "OTRO"],
  "Vagina": ["Pelvis", "Reproductor"],
  "Vagina (tetículo)": ["Pelvis", "Reproductor"],
  "Vago": ["Torso Superior", "Nervioso"],
  "Válvula Iliocecal": ["Torso Bajo", "Digestivo"],
  "Vejiga": ["Pelvis", "Urinario"],
  "Vena Porta": ["Torso Medio", "Circulatorio"],
  "Vesícula": ["Torso Medio", "Digestivo"],
  "Yeyuno": ["Torso Medio", "Digestivo"],
  "Zona suprarrenal": ["Torso Medio", "Endócrino"],
};

/* Respaldo por palabras clave: sólo se usa si aparece un Par 1
   que todavía no esté en la tabla anterior. */
const ZONA_KEYWORDS = {
  'Cabeza':        ['bulbo','cerebelo','occipital','parietal','temporal','hipotálamo','hipófisis','pineal','amígdala cerebral','sien','ceja','interciliar','supraciliar','mácula','craneal','nuca'],
  'Cara':          ['ojo','nariz','oreja','oído','malar','mentón','mandíbula','maxilar','comisura','pómulo','lengua','dental','piso orbital','preauricular','párpado','boca','canto del ojo','labio','mejilla'],
  'Cuello':        ['tiroides','tráquea','laringe','angina','carótida','subclavia','cuello','atlas','cervical','epiglotis','mastoides'],
  'Brazos':        ['braquial','cúbito','húmero','muñeca','axila','hombro','epiclavio','mano','dedo','índice','antebrazo','deltoides','supraespinoso','radio','palma'],
  'Dorso':         ['dorsal','lumbar','cóccix','paravertebral','dorso','escápula','omóplato','sacro','latísimus'],
  'Torso Superior':['pulmón','pleura','corazón','timo','mediastino','esternón','costilla','clavícula','pericardio','coronarias','aorta','cava','subclavia','botón aórtico','pecho','pectoral','mama','seno ventricular'],
  'Torso Medio':   ['hígado','páncreas','estómago','riñón','epiplón','diafragma','hiato','mesenterio','ombligo','peritoneo','cápsula renal','suprarrenal','cardias','píloro','duodeno','vesícula','bazo','yeyuno','vena porta'],
  'Torso Bajo':    ['colon','sigmoides','recto','ciego','apéndice','iliaco','inguinal','válvula iliocecal','intestino'],
  'Pelvis':        ['útero','utero','ovario','próstata','testículo','vagina','clítoris','pelvis','púbico','suprapúbico','vejiga','uretra','ano','cresta iliaca','isquión','conducto deferente'],
  'Pierna':        ['femur','tibia','peroné','rodilla','cuadriceps','glúteo','isquión','popítleo','aquiles','trocánter','pierna','muslo','tensor','pata de ganso','cadera'],
  'Pie':           ['arco de pie','pie','calcáneo','talón','ortejo','metatarso','empeine','planta']
};

const SISTEMA_KEYWORDS = {
  'Nervioso':     ['nervio','plexo','ciático','bulbo','cerebelo','occipital','parietal','temporal','hipotálamo','amígdala cerebral','sien','interciliar','nuca','quiasma','borde calloso'],
  'Circulatorio': ['corazón','cava','polígono','válvula','coronarias','aorta','arteria','vena','saco de douglas','pericardio','botón aórtico'],
  'Respiratorio': ['pulmón','pleura','tráquea','laringe','carina','seno frontal','seno nasal','bronquio','epiglotis'],
  'Digestivo':    ['hígado','páncreas','estómago','colon','recto','esófago','duodeno','píloro','ciego','apéndice','epiplón','mesenterio','peritoneo','cardias','hiato','bazo','vesícula','yeyuno','ano','intestino'],
  'Esquelético':  ['costilla','dorsal','lumbar','sacro','cóccix','femur','tibia','peroné','húmero','cúbito','radio','maxilar','mandíbula','esternón','clavícula','trocánter','isquión','púbico','craneal','occipital','parietal','temporal','atlas','cervical'],
  'Muscular':     ['deltoides','cuadriceps','pectoral','diafragma','glúteo','tensor','pata de ganso','aductor','supraespinoso','lengua'],
  'Endócrino':    ['hipófisis','pineal','tiroides','paratiroides','suprarrenal'],
  'Urinario':     ['riñón','vejiga','uretero','uretra','cápsula renal','caliz','perirrenal'],
  'Linfático':    ['timo','amígdala palatina','bazo','ganglio'],
  'Tegumentario': ['piel','lunar','ceja','palma','planta'],
  'Reproductor':  ['útero','utero','ovario','próstata','testículo','vagina','clítoris','trompa','conducto deferente'],
  'Locomotor':    ['codo','muñeca','tendón']
};

const sinAcentos = s => String(s || '')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/\s+/g, ' ').trim();

/* Índice normalizado: tolera mayúsculas, acentos y espacios de más. */
const PAR1_INDEX = new Map();
Object.keys(PAR1_INFO).forEach(k => PAR1_INDEX.set(sinAcentos(k), PAR1_INFO[k]));

function porPalabras(texto, mapa) {
  const t = sinAcentos(texto);
  for (const [valor, claves] of Object.entries(mapa)) {
    if (claves.some(k => t.includes(sinAcentos(k)))) return valor;
  }
  return '';
}

function infoPar1(par1, par2) {
  const directo = PAR1_INDEX.get(sinAcentos(par1));
  if (directo) return directo;
  let zona = porPalabras(par1, ZONA_KEYWORDS);
  let sistema = porPalabras(par1, SISTEMA_KEYWORDS);
  if (!zona || !sistema) {
    zona = zona || porPalabras(par2, ZONA_KEYWORDS);
    sistema = sistema || porPalabras(par2, SISTEMA_KEYWORDS);
  }
  return [zona || 'Otros', sistema || 'OTRO'];
}

const zonaDe = (par1, par2) => infoPar1(par1, par2)[0];
const sistemaDe = (par1, par2) => infoPar1(par1, par2)[1];

/* ============================================================
   RENDER Y LÓGICA
   ============================================================ */
(function () {
  const tbody     = document.getElementById('paresBody');
  const input     = document.getElementById('q');
  const sortSel   = document.getElementById('sortSelect');
  const alphaNav  = document.getElementById('alphaNav');
  const noResults = document.getElementById('noResults');
  const backTop   = document.getElementById('backToTop');
  const CV        = window.COLUMNA_VERTEBRAL;
  const COLS      = 8;

  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const clasifClass = c => {
    const base = String(c).split('-')[0].replace(/^\d+/, '');
    return /^(R|E|D|Ps|B|V|H|P|T|O)$/.test(base) ? 'c-' + base : 'c-O';
  };

  const sistemaClass = s => String(s)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');      /* conserva mayúsculas: s-Nervioso, s-OTRO */

  /* --- Índice alfabético --- */
  const LETRAS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  const secciones = new Set(DATA.filter(d => d.section).map(d => d.section));
  LETRAS.forEach(letra => {
    const el = document.createElement(secciones.has(letra) ? 'a' : 'span');
    el.textContent = letra;
    if (el.tagName === 'A') el.href = '#sec-' + letra;
    alphaNav.appendChild(el);
  });

  /* --- Filas --- */
  function vertebraCell(par1) {
    const codigo = CV ? CV.vertebraDe(par1) : '';
    return `<td class="vertebra">${CV ? CV.celda(codigo) : ''}</td>`;
  }

  function buildRow(item, num) {
    const [clasif, p1, p2, name, href] = item;
    const zona = zonaDe(p1, p2);
    const sistema = sistemaDe(p1, p2);
    const tr = document.createElement('tr');
    tr.dataset.par1 = p1;
    tr.innerHTML =
      `<td class="num">${num}</td><td class="clasif"><span class="${clasifClass(clasif)}">${esc(clasif)}</span></td>` +
      `<td class="par-a">${esc(p1)}</td>` +
      `<td class="par-b">${esc(p2 || '')}</td>` +
      `<td class="name">${href
        ? `<a href="padecimientos/${esc(href)}">${esc(name)}</a>`
        : `<span>${esc(name)}</span>`}</td>` +
      `<td class="zona"><span>${esc(zona)}</span></td>` +
      `<td class="sistema"><span class="s-${sistemaClass(sistema)}">${esc(sistema)}</span></td>` +
      vertebraCell(p1);
    return tr;
  }

  function sectionRow(texto, id) {
    const tr = document.createElement('tr');
    tr.className = 'section-row';
    if (id) tr.id = id;
    tr.innerHTML = `<td colspan="${COLS}">${esc(texto)}</td>`;
    return tr;
  }

  const filas = DATA.filter(d => !d.section);

  /* Cada fila conserva la letra de la sección a la que pertenece en DATA. */
  const filasConLetra = [];
  let letraActual = 'A';
  DATA.forEach(d => {
    if (d.section) { letraActual = d.section; return; }
    filasConLetra.push({ item: d, letra: letraActual });
  });


  function textoReferencia(href) {
    if (!href) return '';
    const slug = String(href).split('/').pop().replace(/\.html?$/i, '');
    const palabras = (window.REFERENCIAS && window.REFERENCIAS[slug]) || '';
    return slug.replace(/[-_]/g, ' ') + ' ' + palabras;
  }

  function coincide(item, q) {
    if (!q) return true;
    const [clasif, p1, p2, name, href] = item;
    const codigo = CV ? CV.vertebraDe(p1) : '';
    const partes = codigo && CV ? CV.partesDe(codigo) : '';
    const texto = sinAcentos(`${clasif} ${p1} ${p2 || ''} ${name} ${zonaDe(p1, p2)} ${sistemaDe(p1, p2)} ${codigo} ${partes} ${textoReferencia(href)}`);
    const grupos = q.split(',').map(t => t.trim()).filter(Boolean);
    return grupos.some(g => g.split(/\s+/).filter(Boolean).every(w => texto.includes(w)));
  }


  const compararPares = (a, b, conFlujo) => {
    if (!window.ORDEN_ANATOMICO) return a[1].localeCompare(b[1], 'es');
    return window.ORDEN_ANATOMICO.comparar(a[1], sistemaDe(a[1], a[2]), b[1], sistemaDe(b[1], b[2]), conFlujo);
  };

  var CLASIF_ORDER = ['V', 'B', 'H', 'P', 'T', 'E', 'D', 'Ps', 'R', 'O'];
  var CLASIF_TITULOS = {
    'V': 'Virus', 'B': 'Bacteria', 'H': 'Hongo', 'P': 'Parásito', 'T': 'Tóxico',
    'E': 'Especial', 'D': 'Disfunción', 'Ps': 'Psico-emocional', 'R': 'Reservorio', 'O': 'Otros'
  };


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
    renumerarPares();
  }

  function renumerarPares() {
    let vis = 0;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row') || tr.classList.contains('oculto')) return;
      const c = tr.querySelector('td.num');
      if (c) c.textContent = ++vis;
    });
  }

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

  function render() {
    const q = sinAcentos(input.value);
    const modo = sortSel.value;
    const visibles = filas.filter(it => coincide(it, q));

    tbody.innerHTML = '';
    let nFila = 0;
    alphaNav.style.display = modo === 'patogeno' ? '' : 'none';

    if (modo === 'patogeno') {
      /* Se conserva el orden alfabético original, con encabezados de letra. */
      const porLetra = new Map();
      filasConLetra.forEach(({ item, letra }) => {
        if (!coincide(item, q)) return;
        if (!porLetra.has(letra)) porLetra.set(letra, []);
        porLetra.get(letra).push(item);
      });
      if (!porLetra.size) {
        noResults.style.display = 'block';
        return;
      }
      [...porLetra.entries()]
        .sort((a, b) => a[0].localeCompare(b[0], 'es'))
        .forEach(([letra, items]) => {
          tbody.appendChild(sectionRow(letra, 'sec-' + letra));
          items.forEach(it => tbody.appendChild(buildRow(it, ++nFila)));
        });
    } else if (modo === 'par1' || modo === 'par2' || modo === 'nombre') {
      const idx = modo === 'par1' ? 1 : modo === 'par2' ? 2 : 3;
      visibles
        .sort((a, b) => String(a[idx] || '').localeCompare(String(b[idx] || ''), 'es'))
        .forEach(it => tbody.appendChild(buildRow(it, ++nFila)));
    } else if (modo === 'clasif') {
      const grupos = new Map();
      visibles.forEach(it => {
        const c = String(it[0] || '');
        if (!grupos.has(c)) grupos.set(c, []);
        grupos.get(c).push(it);
      });
      const orden = CLASIF_ORDER.slice();
      grupos.forEach((_, g) => { if (orden.indexOf(g) === -1) orden.push(g); });
      const frag = document.createDocumentFragment();
      orden.forEach(g => {
        const arr = grupos.get(g);
        if (!arr || !arr.length) return;
        arr.sort((a, b) => String(a[1] || '').localeCompare(String(b[1] || ''), 'es'));
        frag.appendChild(sectionRow(CLASIF_TITULOS[g] ? g + ' · ' + CLASIF_TITULOS[g] : g));
        arr.forEach(it => frag.appendChild(buildRow(it, ++nFila)));
      });
      tbody.appendChild(frag);
    } else if (modo === 'columna' || modo === 'vertebra') {
      /* Columna vertebral: las 33 vértebras con sus órganos. */
      const grupos = new Map();
      (CV ? CV.VERTEBRAS : []).forEach(v => grupos.set(v[0], []));
      const sinRelacion = [];
      visibles.forEach(it => {
        const c = CV ? CV.vertebraDe(it[1]) : '';
        if (c && grupos.has(c)) grupos.get(c).push(it);
        else sinRelacion.push(it);
      });
      if (CV) {
        CV.VERTEBRAS.forEach(([codigo, partes]) => {
          const arr = grupos.get(codigo);
          if (!arr.length && q) return;
          const head = sectionRow('');
          head.firstChild.innerHTML = `<a class="v-code" href="Vertebras.html#${codigo}">${codigo}</a> ${esc(partes)}`;
          tbody.appendChild(head);
          arr.sort((a, b) => a[1].localeCompare(b[1], 'es'))
            .forEach(it => tbody.appendChild(buildRow(it, ++nFila)));
        });
      }
      if (sinRelacion.length) {
        tbody.appendChild(sectionRow('Sin relación con la columna'));
        sinRelacion.sort((a, b) => a[1].localeCompare(b[1], 'es'))
          .forEach(it => tbody.appendChild(buildRow(it, ++nFila)));
      }
    } else {
      /* Zona o Sistema: filas agrupadas con encabezado. */
      const campo = modo;
      const orden = campo === 'zona' ? ZONA_ORDER : SISTEMA_ORDER;
      const grupos = new Map();
      orden.forEach(g => grupos.set(g, []));
      visibles.forEach(it => {
        const v = campo === 'zona' ? zonaDe(it[1], it[2]) : sistemaDe(it[1], it[2]);
        if (!grupos.has(v)) grupos.set(v, []);
        grupos.get(v).push(it);
      });
      const frag = document.createDocumentFragment();
      orden.forEach(g => {
        const arr = grupos.get(g);
        if (!arr || !arr.length) return;
        arr.sort((a, b) => compararPares(a, b, campo === 'sistema'));
        frag.appendChild(sectionRow(g));
        arr.forEach(it => frag.appendChild(buildRow(it, ++nFila)));
      });
      tbody.appendChild(frag);
    }

    let pares = 0;
    Array.prototype.forEach.call(tbody.rows, function (tr) {
      if (tr.classList.contains('section-row')) return;
      pares++;
      tr.classList.toggle('fila-par', pares % 2 === 0);
    });

    if (window.CONFIG && window.CONFIG.get('ocultarPar1') &&
        (modo === 'clasif' || modo === 'zona' || modo === 'sistema' ||
         modo === 'columna' || modo === 'vertebra')) {
      aplicarPar1Unico(tbody);
      if (window.CONFIG.get('contraerPar1')) {
        contadorGrupo = 0;
        contraerRepetidos(tbody);
        renumerarPares();
      }
    }

    noResults.style.display = visibles.length ? 'none' : 'block';
  }

  if (window.BUSQUEDA) {
    window.BUSQUEDA.init(input, tbody, render);
  } else {
    input.addEventListener('input', render);
  }
  tbody.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) return;
    const tr = e.target.closest ? e.target.closest('tr.grupo-par1') : null;
    if (tr) alternarGrupo(tr);
  });
  sortSel.addEventListener('change', render);
  window.addEventListener('config:cambio', function (e) {
    render();
  });

  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  render();
})();
