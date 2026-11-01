/* ============================================================
   DATOS DE PARES
   Formato de fila: [clasificacion, par1, par2, nombre, href]
   Fila de sección: {section:"A"}
   - href vacío => sin enlace.  Los enlaces van a padecimientos/<href>
   ============================================================ */
const DATA = [
  {section:"A"},
  ["V","Aductor","Aductor","VIH 2, virus","vih2.html"],
  ["P","Agujero","Agujero","Giardia Lamblia","giardia.html"],
  ["Ps","Amígdala cerebral","Timo","Odio","odio.html"],
  ["E","Amígdala palatina","Riñón (mismo lado)","Intoxicación crónica","intoxicacion_c.html"],
  ["V","Ampolla hematopancreática","Riñón","Virus BK","virus_vk.html"],
  ["V","Anexo","Ano","Paramixovirus","paramixovirus.html"],
  ["V","Angina","Angina","Herpes 2 virus","herpes2.html"],
  ["B","Angulo","Angulo","Estaphylococo fragilis, bacteria","e_fragilis.html"],
  ["V","Ano","Ano","Papiloma, virus","papiloma.html"],
  ["H","Ano","Píloro","Levadura","levadura.html"],
  ["E","Ano","Testículo izquierdo","Ecuador, Hemorroides","hemorroides.html"],
  ["B","Antecuerno","antecuerno","Aerobacter aerogenus, bacteria","a_aerogenus.html"],
  ["V","Apéndice","Lengua","Viruela, virus","viruela.html"],
  ["B","Apéndice","Pleura","Estaphylococo aureus cuag. +","estafilococo_aureus_pos.html"],
  ["V","Apéndice","Riñón","Virus BK","virus_vk.html"],
  ["E","Apéndice","Timo","Angeles, inmunocompetencia","angeles.html"],
  ["R","Apéndice","Vejiga","Fagos Reservorio","fagos_reserv.html"],
  ["B","Aquiles","Aquiles","Shigella, bacteria","shigella.html"],
  ["P","Arco cigomático","Arco cigomático","Cisticercosis","cisticerco.html"],
  ["V","Arco de pie","arco de pie","Ebolavirus","ebola.html"],
  ["E","Atlas","Atlas","Juana, líbido","juana.html"],
  ["Ps","Atlas","Útero","Celos, Linda","celos.html"],
  ["V","Axila","Axila","Rabia, virus","rabia.html"],

  {section:"B"},
  ["B-D","Bazo","Bazo","Yersinia Pestis o Disfunción del Bazo","yersinia_p.html"],
  ["B","Bazo","Duodeno","Leucemia","leucemia.html"],
  ["B","Bazo","Hígado","Brucelosis o Fiebre de Malta","brucela.html"],
  ["Ps","Bazo","Hipotálamo","Pereza, psicoemocional","pereza.html"],
  ["R","Bazo","Pulmón","Rubén, Reservorio de bacterias","ruben.html"],
  ["V","Bazo","Punta de Páncreas","Verruga Común (virus)","verruga.html"],
  ["B","Borde calloso (D/I)","Borde Calloso (post)","Microbacterium Tuberculosis","tuberculosis.html"],
  ["B","Botón aórtico","Dorsal 7","Estreptococo C","estreptococo_c.html"],
  ["B","Braquial","Braquial","Estreptococo A","estreptococo_a.html"],
  ["Ps","Bronquio der.","Cerebelo","Miedo a quedar loco","miedo_locura.html"],
  ["E","Bulbo","Bulbo","Alzheimer, Chile","alzheimer.html"],
  ["E","Bulbo","Corazón","Bradicardia","bradicardia.html"],
  ["Ps","Bulbo","Corazón","Crueldad, Josué","crueldad.html"],
  ["V","Bulbo","Cerebelo","Newcastle virus","newcastle.html"],
  ["B","Bulbo","Tiroides","Meningitis, meningococo","meningitis.html"],
  ["V","Bulbo","Vejiga","Dengue hemorrágico","dengueh.html"],
  ["B","Bursa","Bursa","Actinomices, bacteria","actinomices.html"],
  ["R","Bursa","Codo (mismo lado)","Estreptococo Beta Hemolítico","estreptococo_beta.html"],

  {section:"C"},
  ["R","Cabeza cuello femur","Cabeza cuello femur","Reservorio de hongos","r_hongos.html"],
  ["B","Cabeza de páncreas","Hígado","Estafilococo Aureus (-)","estafilococo_aneg.html"],
  ["T","Cabeza de páncreas","Pancreas","Intoxicación por metales","metales.html"],
  ["B","Cabeza de páncreas","Píloro","Clostridium Difficile","clorstridium_d.html"],
  ["B","Cabeza de páncreas","Suprarrenales","Estafilococo Aureo (-)","estafilococo_aneg.html"],
  ["B","Cadera","Cadera","Clamydia Pneumoniae","clamidia_pn.html"],
  ["P","Calcáneo","Calcáneo","Rickettsia (Alzheimer)","rickettsia.html"],
  ["V","Caliz renal","Uretero","Herpes V, virus","herpes5.html"],
  ["H","Canto del ojo","Canto del ojo","Asperjilus, hongo","asperjillus.html"],
  ["B","Cápsula Renal","Cápsula R.","Proteus Mirabilis","proteus_m.html"],
  ["T","Cápsula Renal","Vejiga","Toxinas en el Riñón","toxinas_rinon.html"],
  ["B","Cardias","Apéndice","Bartonella","bartonella.html"],
  ["B","Cardias","Píloro","Estreptococo C","estreptococo_c.html"],
  ["B","Cardias","Suprarrenales","Estreptococo B","estreptococo_b.html"],
  ["O","Cardias","Temporal","Priones","priones.html"],
  ["V","Carina","Carina","Aftosa virus o fiebre Aftosa","aftosa.html"],
  ["E","Carótida","Carótida","Marimar, hipertensión","marimar.html"],
  ["H","Cava","Cava","Trychophyton, hongo","trychophyton.html"],
  ["V","Ceja","Ceja","Sincicial Respiratorio Virus","v_sincicial.html"],
  ["Ps","Ceja","Ceja","Neurosis crítica, trastornos psicóticos","neurosis.html"],
  ["V","Cerebelo","Bulbo","Newcastle virus","newcastle.html"],
  ["E","Cerebelo","Cerebelo","Chapingo, Sist. Nerv. Central","chapingo.html"],
  ["E","Cervical","Dorsal 1","Pasciano o Tennis elbow","pasciano.html"],
  ["P","Cervical 1 (atlas)","Píloro","Plasmodium Falciparum, parásito","plasmodium_f.html"],
  ["D","Cervicales","Sacro","Disfunción Parasimpática","parasimpatico.html"],
  ["P","Cervical 3","Supraespinoso (Deltoides)","Ballantidium tifo, parásito","balantidium_t.html"],
  ["V","Ciático","Ciático","Poliomielitis virus","poliomielitis.html"],
  ["P","Ciego","Ciego","Tricomonas (Hemophylus Influenza)","tricomonas.html"],
  ["B","Ciego","Riñón derecho","Haemophilus Influenza","haemophilus_i.html"],
  ["Ps","Cisura Media","Cisura Media","Altivez","altivez.html"],
  ["Ps","Cisura Silvio","Cisura Silvio","Sor, Inspiración","sor.html"],
  ["B","Clítoris","Clítoris","Espiroqueta","espiroqueta.html"],
  ["B","Clítoris","Pelvis 8","Espiroqueta","espiroqueta.html"],
  ["B","Clítoris","Hueso púbico (suprapúbico)","Espiroqueta","espiroqueta.html"],
  ["E","Codo","Codo","Castañeda, Trastornos visuales","castaneda.html"],
  ["B","Cola de Páncreas","Hígado","Botulismo por Chlostridium Botulium","botulismo.html"],
  ["B","Colon asc.","Colon asc.","Listeria Monocytógenes","listeria_m.html"],
  ["V","Colon asc.","Colon desc.","Herpe 1","herpes1.html"],
  ["B","Colon asc.","Hígado","Klepsiela Pneumoniae","klepsiela_pn.html"],
  ["B","Colon asc.","Riñón der.","Haemophilus Influenzae","haemophilus_i.html"],
  ["B","Colon asc.","Sacro","Burkholderia Cepacia","burkholderia_c.html"],
  ["V","Colon desc","Ano","Chikungunya","chikungunya.html"],
  ["B","Colon desc","Colon desc.","Enterobacter cloacae","enterobacter_c.html"],
  ["P","Colon desc","Cuadriceps","Schistosoma","schistosoma.html"],
  ["B","Colon desc","Hígado","Hepatitis A","pasteurela.html"],
  ["E","Colon desc","Recto","Olazo, Obstrucción intestinal","olazo.html"],
  ["B","Colon desc","Riñón","Pasteurella","pasteurela.html"],
  ["P","Colon Transverso","Colon desc","Giardia Lamblia, parásito","giardia.html"],
  ["D","Colon Transverso","Colon transv.","Disfunción del colon","colon_disf.html"],
  ["B","Colon Transverso","Hígado","Vibro Cholerae, bacteria","colera.html"],
  ["Ps","Colon Transverso","Ovario, testículo","Materialismo","wallstreet.html"],
  ["V","Colon Transverso","Riñón izq","Zika, virus","zika.html"],
  ["B","Colon Transverso","Sacro","Chlamydia intestinalis","clamidia_i.html"],
  ["B","Colon Transverso","Vejiga","Vibro Cholerae, bacteria","colera.html"],
  ["V","Comisura","Comisura","Herpes (4), virus","herpes4.html"],
  ["H","Condral","Condral","Pneumoscystis Carinii, hongo","pneumocystis.html"],
  ["V","Conducto espermático","C.E.","Ebola virus","ebola.html"],
  ["B","Conducto deferente","Laringe","Microbacterium tuberculosis · Adenovirus?","tuberculosis.html"],
  ["B","Conducto de Páncreas","Riñón izquierdo","Espiroqueta","espiroqueta.html"],
  ["B","Conducto de Vesícula","Riñón derecho","Espiroqueta","espiroqueta.html"],
  ["B","Contraciego","Contraciego","Bordetella pertusis","bordetella.html"],
  ["Ps","Corazón","Corazón","Negatividad, pesimismo","negatividad.html"],
  ["Ps","Corazón","Páncreas","Caín: Envidia","cain.html"],
  ["Ps","Corazón","Vejiga","Resentimiento","resentimiento.html"],
  ["E","Corazón","Costilla (mismo lado)","Asfixia","asfixia.html"],
  ["B","Coronarias","Pulmón","Estreptococo Alfa, bacteria","estreptococo_a.html"],
  ["B","Costal","Costal","Proteus Mirabilis, bacteria","proteus_m.html"],
  ["V","Costal anterior","Costal anterior","Ebola virus","trychophyton.html"],
  ["V","Costal anterior","Colon descendente","Zika virus","zika.html"],
  ["V","Costal anterior","Riñón","Zika virus","zika.html"],
  ["H","1ra. Costilla","1ra. Costilla","Trychophyton","trychophyton.html"],
  ["P","Costodiafragmático","Costodiafragmático","Trepanozoma Cruzi o Chagas","trepanozoma_c.html"],
  ["B","Costohepático","costohepático","Borrelia, bacteria","borrelia.html"],
  ["V","Cóccix","Cóccix","Rotavirus","rotavirus.html"],
  ["B","Craneal","Craneal","Antrax, bacilo","antrax.html"],
  ["P","Cresta iliaca","Cresta iliaca","Tripanosoma Brucei Gambi","tripanozoma_g.html"],
  ["E","Cresta iliaca anteriosuperior","Cresta iliaca anteriosup.","Obesidad (probar)","obsidad.html"],
  ["B","Cresta isquiática (D/I)","Píloro","Vibro Haemophilus","vibro-haemofilus.html"],
  ["E","Cuadriceps","Cuadriceps","Magda","magda.html"],
  ["P","Cuadrado lumbar","Cuadrado lumbar","Trepanosoma Palidum, parásito","tripanozoma_p.html"],
  ["V","Cúbito","Cúbito","Herpe (3)","herpes3.html"],
  ["P","Cuello","Cuello","Blastocistis hominnis","blastocistis_h.html"],
  ["Ps","Cuerpo calloso","Cuerpo calloso","Drogadicción","drogadiccion.html"],
  ["D","Cuerpo cavernoso","cuerpo cavernoso","Disfunción erectil","sexuales.html"],

  {section:"D"},
  ["P","Deltoides","cervical","Balantidium Tifo","balantidium_t.html"],
  ["R","Deltoides","Deltoides","Trypanosoma Brucei Brucei","tripanozoma_b.html"],
  ["B","Deltoides","Deltoides","Sífilis por Treponema Palidum","sifilis.html"],
  ["P","Deltoides der","Riñón (mismo lado)","Leishmania","leismania.html"],
  ["R","Dental","Riñón","Reservorio Universal","dentadura.html"],
  ["H","Diafragma","Diafragma","Cándida Albicans, Hongo","candida_a.html"],
  ["B","Diafragma","Riñón (mismo lado)","Brusela Abortus","brusela_a.html"],
  ["E","Dorsal 1","cervical 7","Codo de Tenista","pasciano.html"],
  ["B","Dorsal 2","Dorsal 2","Legionela Pneumophila","legionela_pn.html"],
  ["V","Dorsal 3","Dorsal 7","Aftosa virus","aftosa.html"],
  ["B","Dorsal 5","Lumbar 1","Meningococo, bacteria","meningitis.html"],
  ["H","Dorsal 6","Dorsal 6","Coccidio immitis","coccidio_i.html"],
  ["E","Dorsal 7","Dorsal 7","Acidez y oxidación","acidez.html"],
  ["B","Dorso","Lumbar","Meningococo","meningitis.html"],
  ["Ps","Dorso de la mano","dorso de la mano","Duda","duda.html"],
  ["B","Dorso de la mano","dorso de la mano","Proteus Mirabilis","proteus_m.html"],
  ["V","Duodeno","Bazo","Leucemia verdadera","leucemia.html"],
  ["P","Duodeno","Cola de Páncreas","Anisakis","anisakis.html"],
  ["D","Duodeno","Duodeno","Disfunción Duodenal","duodeno_disf.html"],
  ["B","Duodeno","Hígado","Chlamydia trachomatis","clamidia_t.html"],
  ["B","Duodeno","Riñón Izq.","Chlamydia trachomatis","clamidia_t.html"],
  ["D","Duodeno","Riñón derecho","Diabetes Mellitus verdadera","diabetes.html"],
  ["B","Descendente","Desdendente","Enterobacter Cloacae","enterobacter_c.html"],
  ["B","Descendente","Hígado","Hepatitis A","pasteurela.html"],

  {section:"E"},
  ["Ps","Empeine","Pancreas, empeine","Duda","duda.html"],
  ["P","Epigastrio","Epigastrio","Giardia Lamblia, parásito","giardia.html"],
  ["B","Epiplón","Epiplón","Estafilococo Albus","estafilococo_albus.html"],
  ["E","Epiclavio","Epiclavio","Sistema linfático, bronquios","epiclavio.html"],
  ["B","Escápula","Escápula","Lepra por microbacterium Leprae","lepra.html"],
  ["B","Escotadura ciática","Escotadura ciática","Moraxella Catarrhalis","moxarella_c.html"],
  ["V","Esfinter uretral","Esfinter uretral","Rabia virus","rabia.html"],
  ["P","Esófago","Esófago","Fasciola Hepática o Fasiolopsis burski","fasiolopsis_b.html"],
  ["R","Esófago","Duodeno","Reservorio Microbacterium Leprae","lepra.html"],
  ["H","Esófago","Vejiga izq.","Histoplasma Capsulatum, Hongo","histoplasma_c.html"],
  ["B","Espina del Homóplato","Espina del homóplato","Mycoplasma pneumoniae - Lupus","mycoplasma_pn.html"],
  ["D","Esternocleidomastoideo","","Disfunción Sistema Nervioso Simpático","sns_disf.html"],
  ["E","Esternón","Bazo","Enfisema, Médula osea, anemia","enfisema.html"],
  ["E","Esternón","Suprarrenales","Lucio, Poliglobulina","lucio.html"],
  ["T","Estómago","Cola de páncreas","intoxicación mariscos, metales","mariscos.html"],
  ["B","Estómago","Colon transverso","Chlamydia Tucans","clamidia_tu.html"],
  ["Ps","Estómago","Corazón (próstata)","Gula, control de peso","gula.html"],
  ["R","Estómago","Duodeno","Reservorio de Herpes (checar pares de Herpes)","herpes.html"],
  ["D","Estómago","Estómago","Disfunción estomacal","estomago_disf.html"],
  ["Ps","Estómago","Hígado","Poligafia","gula.html"],
  ["B","Estómago","Píloro","Clostridium Perfringes","clorstridium_p.html"],
  ["B","Estómago","Timo","Escherichia Coli Transgénica","e-coli.html"],
  ["V","Estómago","Suprarrenales","Sarampión","sarampion.html"],

  {section:"F"},
  ["B","Flanco","Flanco (hl)","Yersinia Intestinalis, bacteria","yersinia_i.html"],

  {section:"G"},
  ["E","Gen","órgano afectado","GEN, regeneración tisular","gen.html"],
  ["B","Glándula salivar","Glándula salivar","Proteus Vulgaris","proteus_v.html"],
  ["P","Glúteo","Glúteo","Parásitos intestinales","parasitos_i.html"],
  ["B","Glúteo","Píloro","Vellonella","vellonela.html"],
  ["B","Glúteo","Vena femoral","Babesia","babesia.html"],
  ["R","Glúteo izq.","Aquiles izq.","Reservorio Universal","gluteo-aquiles.html"],

  {section:"H"},
  ["P","Hiato esofágico","Lengua","Triquinela Spiralis, parásito","triquinosis.html"],
  ["B","Hiato","Esófago","Enterobacter Neumonia","enterobacter_pn.html"],
  ["B","Hiato","testículo derecho","Helicobacter pilori","helicobacter_p.html"],
  ["B","Hígado","Colon desc.","Hepatitis A, Pasteurela","pasteurela.html"],
  ["Ps","Hígado","Corazón","Ira (Talibán)","ira.html"],
  ["T","Hígado","Hígado","Hepatisis C (tóxica)","hepatitis_c.html"],
  ["B","Hígado","Cola de Páncreas","Botulismo","botulismo.html"],
  ["P","Hígado","Riñón izq.","Abseso hepático por ameba","absesohepatico.html"],
  ["O","Hígado","Riñón derecho","Cirrosis hepática","cirrosis.html"],
  ["P","Hígado","Píloro","Enterovios, Oxiuro","enterobios_v.html"],
  ["B","Hígado","Píloro","Listeria Monocytógenes","listeria_m.html"],
  ["P","Retrohepático","Retrohepático","Acaros, parásitos","acaro.html"],
  ["O","Hipófisis","Bulbo Raquideo","Diabetes insípida","diabetes_ins.html"],
  ["D","Hipófisis","Hipófisis","Disfunción de la Hipófisis","hipofisis_disf.html"],
  ["Ps","Hipófisis","Mastoides Izq.","Sensibilidad, percepción","sensibilidad.html"],
  ["D","Hipófisis","Ovario","Carmen","carmen.html"],
  ["Ps","Hipófisis","Tiroides","Venganza","venganza.html"],
  ["B","Hipófisis","Vejiga","Dengue","dengue.html"],
  ["V","Hombro","Cardias","Cryptocides Primordialis","cryptocides_p.html"],
  ["V","Huastecas","Huastecas","Eipstein Barr, Virus","eipsteinbar.html"],
  ["R","Hueco garganta","Gluteo Izq.","Reservorio Universal","hueco-gluteo.html"],
  ["B","Húmero","Húmero","Enterobacter Pneumoniae","enterobacter_pn.html"],

  {section:"I"},
  ["E","Iliaco","Iliaco","Elena","elena.html"],
  ["R","Inguinal (D)","Espina iliaca postero superior (D)","Reservorio Universal","inguinal-cresta.html"],
  ["R","Indice","Indice","E. Coli, reservorio","e-coli-r.html"],
  ["V","Infraaxilar","Infraaxilar","Pleuritis Viral","pleuritis_viral.html"],
  ["Ps","Interciliar","Bulbo","David","david.html"],
  ["R","Interiliaco","Riñón","Congreso, reservorio parásitos",""],
  ["R","Interiliaco, Sacro","4 y 5 lumbar","Congreso, reservorio parásitos",""],
  ["P","Isquión","Isquión","Oncocercosis","oncocercosis.html"],
  ["B","Intestino medio","Vegija","Cólera por vibrocolera","colera.html"],

  {section:"L"},
  ["B","Lacrimal","Lacrimal","Klepsiella neumonía (E. Influenzae)","klepsiela_pn.html"],
  ["B","Laringe","Laringe","Bordetela Pertusis, bacilo","bordetella.html"],
  ["B","Latisimus","Latisimus","Yersinia Pneumoniae","yersinia_pn.html"],
  ["P","Lengua","Lengua","Escabiasis","escabiasis.html"],
  ["V","Ligamento hepático","Riñón derecho","Adeno virus","adenovirus.html"],
  ["H","Ligamento int. rodilla","maleolo","Microsporum","microsporum_c.html"],
  ["D","Ligamento int. rótula","maleolo","Disfunción hígado","higado_disf.html"],
  ["V","Ligamento páncreas","Bazo","Virus del Nilo, AH1N1","nilo.html"],
  ["V","Ligamento páncreas","Colon Descendente","Virus BK","virus_vk.html"],
  ["V","Ligamento de páncreas","Colon descendente","Fiebre amarilla","fiebre_ama.html"],
  ["E","Lobulo posterior del hígado","Riñón","Puebla, Envenenamiento","venenos.html"],
  ["B","Lumbar 1","Dorsal 5","Meningococo","meningitis.html"],
  ["B","Lumbar 4","Lumbar 4","Neisseria Gonorreae","neiseria_g.html"],
  ["B","Lumbar 5","Lumbar 5","Staphylococcus Aureus (-)","estafilococo_aneg.html"],
  ["V","Lunar","Riñón","Hanta virus","hantavirus.html"],

  {section:"M"},
  ["E","Mácula","Cerebelo (mismo lado)","Edema Macular","e_macular.html"],
  ["V","Malar","Malar","Enterovirus","enterovirus.html"],
  ["P","Malar","Riñón contralateral","Plasmodium vivax y ovale","plasmodium_v.html"],
  ["B","Mandíbula","Mandíbula","Neisseria Gonorreae","neiseria_g.html"],
  ["V","Mango esternón","Mango esternón","Coxsackie, virus","coxsackie.html"],
  ["P","Mastoides","Mastoides","Filaria, parásito","filaria.html"],
  ["B","Maxilar Superior","Maxilar Superior","Klebsiella Pneumoniae","klepsiela_pn.html"],
  ["B","Mediastino","Mediastino","Proteus Mirabillis, bacteria","proteus_m.html"],
  ["V","Mentón","Mentón","Rabdovirus, Rabia","rabia.html"],
  ["B","Mesenterio","Mesenterio","Microbacterium Leprae, bacteria","lepra.html"],
  ["V","Mordida","Axila","Reservorio Rabia virus","rabia.html"],
  ["P","Muñeca","Muñeca","Rickettsia (Alzheimer)","rickettsia.html"],
  ["E","Muñeca (arriba)","Muñeca (arriba)","Migraña","migrana.html"],
  ["E","Muñeca","Tibia (inf. contralat)","Equilibrio energético","equilibrio_ene.html"],
  ["R","Muñón","Muñón","Guadalupe, Reservorio universal, amputaduras, cirugías, cicatrices",""],

  {section:"N"},
  ["T","Nariz","Nariz","Toxoides","toxoides.html"],
  ["V","Nervio femoral","Nervio femoral","Herpes (6), virus","herpes6.html"],
  ["O","Nervio inguinal der","Articulaciones","Reumatismo Articular","artritis.html"],
  ["V","Nervio inguinal","Hígado","Roseola, neurodermatitis, herpes 6","roseola.html"],
  ["V","Nervio inguinal","Nervio inguinal","VIH (3), virus","vih3.html"],
  ["E","Nervio facial","nevio facial","Parálisis facial","nervio_fa.html"],
  ["D","Nervio vago","Cardias","Disfunción del Cardias","cardias.html"],
  ["R","Nervio vago","Riñón","Benavides, regula función estomacal","benavides.html"],
  ["E","Nudo Braquial","Nudo Braquial","Bloqueo energético","desbloqueo_ene.html"],
  ["E","Nuca","Sacro","Regula líquido cefaloraquídeo (por raquia)","nuca-sacro.html"],
  ["R","Nutricia","Nutricia","Reservorio bacterias","nutricias.html"],

  {section:"O"},
  ["V","Occipital","Occipital","Eipsteinbarr virus, (Herpes 8)","eipsteinbar.html"],
  ["Ps","Occipital","Testículo (D/I)","Malignidad","malignidad.html"],
  ["P","Oído","Oído","Toxoplasmosis","toxoplasmosis.html"],
  ["E","Oído","Riñón contralateral","Goiz","goiz.html"],
  ["E","Ojo","Cerebelo","Edema nervio óptico","nervio_optico.html"],
  ["E","Ojo","Escápula","Cataratas","cataratas.html"],
  ["V","Ojo","Ojo","Citomegalovirus","citomegalovirus.html"],
  ["E","Ombligo","Ombligo","Trombos","plaquetas.html"],
  ["Ps","Ombligo","Testículo","Integridad moral","saturnino.html"],
  ["Ps","Ombligo","Testículo","Saturnino o complejo de Edipo","saturnino.html"],
  ["Ps","Ombligo","Utero","Trini o complejo de Electra","trini.html"],
  ["T","Oreja","Oreja","Leny, intoxicación","leny.html"],
  ["D","Ovario","Hipófisis (Hígado)","Dismenorrea","dismenorrea.html"],
  ["D","Ovario","Ovario","Disfunción ovárica","ovario_disf.html"],
  ["E","Ovario","Utero","Durán o embarazo","duran.html"],

  {section:"P"},
  ["P","Palma","Palma","Plasmodium Vivax, parásito","plasmodium_v.html"],
  ["P","Páncreas","Bazo","Equinococcus Granulosus","equinococus_g.html"],
  ["E","Páncreas","Estómago","Chaco, alergias alimentarias","chaco.html"],
  ["T","Páncreas","Páncreas","Pancreatitis o Ramsés","ramses.html"],
  ["V","Páncreas","Páncreas","Adenovirus","adenovirus.html"],
  ["E","Páncreas (cuerpo)","Hígado","Ecuador, resist. insulina, para bajar de peso","ecuador.html"],
  ["B","Páncreas (cola)","Hígado","Botulismo","botulismo.html"],
  ["E","Páncreas (cabeza)","Estómago","Alergias alimentarias","alergia_a.html"],
  ["B","Páncreas (cabeza)","Suprarrenales","Estafilococo Dorado cuagulasa (-)","estafilococo_aneg.html"],
  ["D","Paratiroides","paratiroides","Disfunción glandular","paratiroides_disf.html"],
  ["Ps","Paratiroides","Corazón","Odio","odio.html"],
  ["H","Paravertebral","Parabertebral","Levadura","levadura.html"],
  ["E","Paravertebral","Parabertebral","Radiculopatía","radiculopatia.html"],
  ["D","Parietal","Bulbo","Desequilibio mental grave",""],
  ["P","Parietal","Colon transverso","Entamoeba Histolytica","entamoeba.html"],
  ["V","Parietal","parietal","Encefalitis viral","encefalitis.html"],
  ["Ps","Parietal","Riñón mismo lado","Déficit de atención",""],
  ["E","Parietal","Riñón contraleteral","Goiz","goiz.html"],
  ["D","Parótida","Parótida","Lolita. disfunción glandular","lolita.html"],
  ["B","Párpado","Párpado","Neisseria catarralis","neiseria_c.html"],
  ["V","Pata de ganso","Pata de ganso","Coronavirus","coronavirus.html"],
  ["B","Pecho","Pecho","Neumococo","neumonia.html"],
  ["B","Pectoral","Pectoral","Mycoplasma","mycoplasma_pn.html"],
  ["E","Pectoral","Tendón cuadriceps (mismo lado)","Energético","equilibrio_ene.html"],
  ["B","Pericardio","Pericardio","Pericarditis, Estafilococo Aureo (+)","pericarditis.html"],
  ["B","Perihepático","perihepático","Morganella tifo","morganella_t.html"],
  ["V","Peripancreático (sup)","Peripancreático (inf)","Rabia virus","rabia.html"],
  ["B","Perirrenal","Perirrenal","Microbacterium Bovis","m_bovis.html"],
  ["R","Peritoneo","Apéndice vermiforme","Reservorio Gardenella","gardenerella_v.html"],
  ["R","Peritoneo","Pleura","Moisés, Reservorio de bacterias","moises.html"],
  ["B","Peroné","Peroné","Proteus Mirabilis, bacteria","proteus_m.html"],
  ["R","Pezón der.","Gemelo izq.","Reservorio Universal","pezon-gemelo.html"],
  ["H-V","Píloro","Ano (útero)","Micelio intestinalis, Hanta virus","miceo_in.html"],
  ["Ps","Píloro","Colon transverso","Polifagia, anorexia","gula.html"],
  ["P","Píloro","Lengua","Triquinella spirallis","triquinosis.html"],
  ["D","Píloro","Píloro","Disfunción","piloro_disf.html"],
  ["P","Píloro","Hígado","Enterovius vermicularis, Oxiuros","enterobios_v.html"],
  ["P","Píloro","Riñón izquierdo","Amebiasis intestinal","amibiasis.html"],
  ["H","Píloro","Ureter","Micelio intestinalis, hongo","miceo_in.html"],
  ["V","Píneal","Bulbo raquídeo","Guillan Barré o Polirradículo","guillenbarre.html"],
  ["Ps","Pineal","Hipotálamo","Depresión aguda","depresion.html"],
  ["E","Pineal","Hipotálamo","Herpes, cualquier tipo","herpes.html"],
  ["D","Pineal","pineal","Vitiligio o Hipocromía","vitiligo.html"],
  ["Ps","Pineal","pancreas","Sade: lujuria","sade.html"],
  ["Ps","Pineal","próstata o útero","Sade: lujuria","sade.html"],
  ["V","Piso orbital","piso orbital","Orf, virus","orf.html"],
  ["V","Pleura derecha","Hígado","Orthohepadnavirus, Hepatitis B","orthohepadna.html"],
  ["B","Pleura","Pleura","Pseudomona Auroginosa","pseudomona_a.html"],
  ["V","Pleura","Pleura","Pleuritis, virus","pleuritis_viral.html"],
  ["B","Pleura","Apendice","Estafilococo Aurus cuagulasa (+)","estafilococo_aureus_pos.html"],
  ["E","Pleura (der)","Peritoneo","Moisés","moises.html"],
  ["B","Plexo Cervical","Plexo Cervical","Enterococcus Faecalis, Desbloqueo Energético","enterococus_f.html"],
  ["B","Plexo Lumbar","Plexo Lumbar","Enterococcus Faecallis","enterococus_f.html"],
  ["V","Polígono de Willis","P. de W.","Reovirus","reovirus.html"],
  ["E","Polo","Polo","Abraham","abraham.html"],
  ["P","Pómulo","Riñón contralateral","Paludismo, Plasmodium Vivax","plasmodium_v.html"],
  ["B","Popítleo","Popítleo","Neumonía por Neumococo","neumonia.html"],
  ["Ps","Pospineal","Amígdala","Depresión",""],
  ["Ps","Pospineal","Pospineal","Xcaret, Goiz, hostilidad, sin moral","xcaret.html"],
  ["B","Preauricular","Preauricular","Neocardia Americana, bacteria","neocardia_a.html"],
  ["H","Prepineal (Preauricular)","Vejiga","Criptococcus Neoformans, hongo","criptococcus_n.html"],
  ["H","1ra. costilla","1ra. costilla","Trycophito, Hongo en uñas","trychophyton.html"],
  ["H","Primer ortejo","Primer ortejo","Trycophito, Hongo en pies","trychophyton.html"],
  ["D","Próstata","Próstata","Prostatitis","prostatitis.html"],
  ["V","Próstata","Recto","Papiloma, virus","papiloma.html"],
  ["V","Pudendo","Pudendo","Parotiditis o Paperas","parotiditis.html"],
  ["Ps","Pulmón","Bulbo R.","Kado, tristeza","tristeza.html"],
  ["Ps","Pulmón","Corazón","Kado, tristeza","tristeza.html"],
  ["Ps","Pulmón","Pulmón","Culpa",""],
  ["V","Punta Páncreas","Bazo","Verruga común (VPH)","verruga.html"],
  ["E","Punto alcalino","Escápula","Tratar tumores, miomas, fibromas, quistes","p_alcalino.html"],

  {section:"Q"},
  ["E","Quiasma","Quiasma","Lucina, sistema linfático","lucina.html"],

  {section:"R"},
  ["H","Radio","Radio","Microsporum cannis, hongo","microsporum_c.html"],
  ["B","Rama isquiática","Rama isquiática","Estreptococo C, bacteria","estreptococo_c.html"],
  ["B","Rama mandibular","Rama mandibular","Estafilococo epidermis, bacteria","estafilococo-epi.html"],
  ["B","Recto","Recto","Pseudomona Aureoginosa","pseudomona_a.html"],
  ["B","Retroaxilar","Retroaxilar","Estreptococo C","estreptococo_c.html"],
  ["P","Retrohepático","Riñón (retrohep.)","Toxacara, ácaro","acaro.html"],
  ["P","Retromastoides","Retro mastoides","Cisticercosis","cisticerco.html"],
  ["B","Retroplantar","Retroplantar","Microbacterium Leprae, bacteria","lepra.html"],
  ["V","Retrotensor fascia lata","Retrotensor fascia lata","Verruguita","verruga.html"],
  ["E","Riñón Izq.","cápsula renal","Alex","alex.html"],
  ["Ps","Riñón Izq.","Ojo izq.","Fobias a arañas, relámpagos, oscuridad, etc","fobias.html"],
  ["Ps","Riñón Izq.","Tiroides","Miedo a sufrir accidentes","fobias.html"],
  ["P","Riñón","Pómulo contralateral","Paludismo, Plasmodium vivex","plasmodium_v.html"],
  ["T","Riñón","Riñón","Tétanos por Clostridium tetanie","tetanos.html"],
  ["D","Riñón","Sacro contralateral","Olazo, Disfunción intestinal","olazo.html"],
  ["E","Riñón superior","Riñón inferior","Inmunocompetencia","inmunocomp.html"],
  ["O","Riñón der.","Duodeno","Diabetes Mellitus","diabetes.html"],
  ["E","Riñón","Temporal (parietal, oído) contralateral","Goiz","goiz.html"],
  ["E","Riñón","Uretero","Machín o Herpes (4)","machin.html"],
  ["B","Riñón Izq.","Conducto de Páncreas","Espiroqueta","espiroqueta.html"],
  ["P","Riñón","Deltoides","Leismania","leismania.html"],
  ["B","Riñón der.","Conducto de vesícula","Espiroqueta","espiroqueta.html"],
  ["O","Riñón","Uretero","Cólico nefrítico","machin.html"],
  ["P","Retrohepático","Retrohepático","Toxacara Acaro, parásito","acaro.html"],
  ["Ps","Rótula","Rótula","Miedo, dolor de rodillas","miedo.html"],

  {section:"S"},
  ["R","Sacro","Bazo","Reservorio Universal","sacro-bazo.html"],
  ["V","Saco de Douglas","Vena Femoral","Norwalk, virus","norkwalk.html"],
  ["B","Sacro","Sacro","Proteus Mirabillis, bacteria","proteus_m.html"],
  ["E","Seno A. ventricular","Riñón","Ana Alicia, Taquicardia","Anaalicia.html"],
  ["V","Seno frontal","Seno frontal","Sinusitis frontal, viral","sinusitis_f.html"],
  ["V","Seno nasal","seno nasal","Sinusitis nasal, viral","sinusitis_n.html"],
  ["Ps","Sien der.","Corazón","Tristeza, pigmentación de la piel","tristeza.html"],
  ["E","Sien","Sien","Isaac","isaac.html"],
  ["V","Sigmoides","Recto","SV-40 virus","rcv40.html"],
  ["B","Sigmoides","Testículo","Campylobacter Jejuni","campylobacter_j.html"],
  ["B","Subclavia","Subclavia","Difteria","difteria.html"],
  ["R","Subdiafragma","Subdiafragma","Reservorio Universal y Reserv. Cisticercosis","subdiafragmas.html"],
  ["R","Suelo pélvico","Suelo pélvico","Reservorio Universal","piso_pelvico.html"],
  ["E","Supraciliar","Bulbo","Vivian","vivian.html"],
  ["B","Supraespinoso","Supraespinoso","Tuberculosis por Microbacterium tuberculosa","tuberculosis.html"],
  ["B","Suprahepático","Suprahepático","Clostridium Malignum","clorstridium_m.html"],
  ["V","Suprapúbico","Suprapúbico","htlv1, virus","htlv1.html"],
  ["Ps","Suprarrenal","Hígado","Soberbia","altivez.html"],
  ["B","Suprarrenal","Pulmón","Pseudomona Aeroginosa, bacteria","pseudomona_a.html"],
  ["D","Suprarrenal","Suprarrenal","Disfunción suprarrenal","suprarrenal_disf.html"],
  ["B","Suprarrenal","Recto","Leptospira","leptospira.html"],
  ["V","Suprarrenal","Bulbo raquideo","Adenovirus","adenovirus.html"],
  ["E","Suprarrenales","Todo el frente","Asma alérgico","asma_a.html"],
  ["E","Sacro","utero","Endometriosis","endometriosis.html"],

  {section:"T"},
  ["R","Talón","Talón","Reservorio Epstein Barr","eipsteinbar.html"],
  ["B","Temporal (der)","Temporal (der)","Tifo exantemático","tifo_exa.html"],
  ["Ps","Temporal (der)","Temporal (der)","Bonilla, agresividad","bonilla.html"],
  ["V","Temporal (izq.)","Temporal (izq.)","Polyomavirus","polioma.html"],
  ["B","Temporal (izq.)","Temporal (izq.)","Tifo exantemático","tifo_exa.html"],
  ["E","Temporal","Riñón contralateral","Goiz","goiz.html"],
  ["E","Tendón triceps","Aquiles","Energético","equilibrio_ene.html"],
  ["V","Tensor facia lata","Tensor facia lata","Gardenerella vaginalis, virus","gardenerella_v.html"],
  ["B","Testículo","Testículo","Yersina Pestis, bacteria","yersinia_p.html"],
  ["B","Testículo der.","Hiato","Helicobacter pilori","helicobacter_p.html"],
  ["H","Tibia","Tibia","Pytirosporum Versicolor o Malasesia Furfur","p_versicolo.html"],
  ["H","Tibia media","Tibia media","Actinomices sp, micosis profunda","actinomices.html"],
  ["H","Tibia inferior","Tibia inferior","Piedra Nigra, Hongo","piedra_nigra.html"],
  ["E","Timo","Bazo","Factor surfactante","sufactante.html"],
  ["E","Timo","Bazo","Marco Antonio, Poliglobulina","poliglobulina.html"],
  ["B","Timo","Hígado","Escherichia Coli, bacteria","e-coli.html"],
  ["Ps","Timo","Hipófisis","Wallstreet, Avaricia","wallstreet.html"],
  ["Ps","Timo","Ovario o testículo","Impaciencia","impaciencia.html"],
  ["V","Timo","Parietal","Rubeola","rubeola.html"],
  ["V","Timo","Recto","VIH-SIDA","sida.html"],
  ["E","Timo","Apéndice","Angeles","angeles.html"],
  ["E","Timo","Suprarrenales","Alvaro, Sist. endócrino, menopausia","alvaro.html"],
  ["D","Timo","Timo","Disfunción Glandular","timo_disf.html"],
  ["V","Tiroides","Bulbo","Meningitis","meningitis.html"],
  ["D","Tiroides","Tiroides","Disfunción Glandular","tiroides_disf.html"],
  ["Ps","Traquea","Corazón","Intolerancia","intolerancia.html"],
  ["V","Traquea","Traquea","Influenza, virus","influenza.html"],
  ["R","Triángulo de Scarpa","Triang. de S.","Reservorio Microbacterium Leprae","lepra.html"],
  ["B","Trocanter mayor","Riñón (contra u homolateral)","Bacilo Paratyphi","b_paratiyphico.html"],
  ["H","Trocanter mayor","Tensor Fascia latta","Blastomyces Dermatitidis","blastomicosis.html"],
  ["B","Trocanter mayor","Trocanter mayor","Salmonella Tifo","salmonella_t.html"],
  ["V","Trocanter menor","Trocanter menor","VIH (4)","vih4.html"],
  ["E","Trompa","Ovario","Paty, embarazo ectópico","paty.html"],
  ["V","Trompa","Trompa","Parvovirus","parvovirus.html"],

  {section:"U"},
  ["V","Uretero","Uretero","Varicela","varicela.html"],
  ["V","Uretra","Uretra (vagina)","Corona Virus","coronavirus.html"],
  ["R","Uretra","Uretra","Fox Reservorio de virus","fox.html"],
  ["E","Utero","Hígado","Embarazo molar","e_molar.html"],
  ["E","Utero","Ovario","Durán (embarazo)","duran.html"],
  ["E","Utero","Utero","Roberta (falso embarazo)","roberta.html"],
  ["V","Uretero","Caliz Renal","Herpe (5)","herpes5.html"],
  ["E","Utero","Recto","Intolerancia alimentaria y Papiloma virus","intolerancia_a.html"],
  ["E","Utero","Riñón","Miomas, absesos, polipos, carcinomas","miomas.html"],
  ["E","Utero","Sacro","Endometriosis","endometriosis.html"],
  ["E","Uretero","Riñón","Cólico nefrítico","machin.html"],

  {section:"V"},
  ["R","Vacuna","Supraespinoso","Reservorio tuberculosis","tuberculosis.html"],
  ["B","Vagina","Vagina","Yersina Pestis","yersinia_p.html"],
  ["R","Vagina","Vagina","Yolanda, Reservorio de virus","yolanda.html"],
  ["B","Vagina (tetículo)","Garganta","Yersina Pestis, Estreptococo Aureus","yersinia_p.html"],
  ["R","Vago","Riñón contralateral","Benavides, Reservorio universal (shigella)","benavides.html"],
  ["R","Válvula Iliocecal","Prominencia occipital","Reservorio Universal","valv-occi.html"],
  ["P","Válvula Iliocecal","Riñón der.","Tricomonas","tricomonas.html"],
  ["B","Vejiga","Ano","Enterococcus fecallis","enterococus_f.html"],
  ["B","Vejiga","Vejiga","Estreptococo G - Disfunción","estreptococo_g.html"],
  ["V","Vejiga","Bulbo","Dengue hemorrágico","dengueh.html"],
  ["B","Vejiga","Intestino Medio","Cólera","colera.html"],
  ["V","Vejiga","Recto","Herpes 7","herpes7.html"],
  ["B","Vena Porta","Vena Porta","Klebsiella Pneumoniae","klepsiela_pn.html"],
  ["V","Vesícula","Riñón derecho","Catarro común","catarro.html"],
  ["Ps","Vesícula","Vagina","Envidia","cain.html"],
  ["E","Vesícula","Riñón","Dolor por cálculos","calculos_auch.html"],
  ["E","Vesícula","Escápula","Desinflama vesícula","vesicula.html"],
  ["R","Vesícula","Vesícula","Prada, reservorio de virus","prada.html"],

  {section:"Y"},
  ["B","Yeyuno","Riñón","Campylobacter Jejuni","campylobacter_j.html"],

  {section:"Z"},
  ["R","Zona suprarrenal","Riñón contralateral","Reservorio universal","reservorio_z.html"]
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
  function buildRow(item) {
    const [clasif, p1, p2, name, href] = item;
    const zona = zonaDe(p1, p2);
    const sistema = sistemaDe(p1, p2);
    const tr = document.createElement('tr');
    tr.innerHTML =
      `<td class="clasif"><span class="${clasifClass(clasif)}">${esc(clasif)}</span></td>` +
      `<td class="par-a">${esc(p1)}</td>` +
      `<td class="par-b">${esc(p2 || '')}</td>` +
      `<td class="name">${href
        ? `<a href="padecimientos/${esc(href)}">${esc(name)}</a>`
        : `<span>${esc(name)}</span>`}</td>` +
      `<td class="zona"><span>${esc(zona)}</span></td>` +
      `<td class="sistema"><span class="s-${sistemaClass(sistema)}">${esc(sistema)}</span></td>`;
    return tr;
  }

  function sectionRow(texto, id) {
    const tr = document.createElement('tr');
    tr.className = 'section-row';
    if (id) tr.id = id;
    tr.innerHTML = `<td colspan="6">${esc(texto)}</td>`;
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


  function coincide(item, q) {
    if (!q) return true;
    const [clasif, p1, p2, name] = item;
    const texto = `${clasif} ${p1} ${p2 || ''} ${name} ${zonaDe(p1, p2)} ${sistemaDe(p1, p2)}`;
    return sinAcentos(texto).includes(q);
  }

  function render() {
    const q = sinAcentos(input.value);
    const modo = sortSel.value;
    const visibles = filas.filter(it => coincide(it, q));

    tbody.innerHTML = '';
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
          items.forEach(it => tbody.appendChild(buildRow(it)));
        });
    } else if (modo === 'clasif' || modo === 'par1' || modo === 'par2') {
      const idx = modo === 'clasif' ? 0 : modo === 'par1' ? 1 : 2;
      visibles
        .sort((a, b) => String(a[idx] || '').localeCompare(String(b[idx] || ''), 'es'))
        .forEach(it => tbody.appendChild(buildRow(it)));
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
        arr.sort((a, b) => a[1].localeCompare(b[1], 'es'));
        frag.appendChild(sectionRow(g));
        arr.forEach(it => frag.appendChild(buildRow(it)));
      });
      tbody.appendChild(frag);
    }

    noResults.style.display = visibles.length ? 'none' : 'block';
  }

  input.addEventListener('input', render);
  sortSel.addEventListener('change', render);

  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  render();
})();
