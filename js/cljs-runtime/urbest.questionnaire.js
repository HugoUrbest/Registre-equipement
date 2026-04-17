goog.provide('urbest.questionnaire');
var module$node_modules$xlsx$xlsx=shadow.js.require("module$node_modules$xlsx$xlsx", {});
urbest.questionnaire.equipment_types = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cvc","cvc",1488701754),new cljs.core.Keyword(null,"label","label",1718410804),"Climatisation / CVC",new cljs.core.Keyword(null,"short","short",1928760516),"CVC",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF21\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"elec","elec",1312492262),new cljs.core.Keyword(null,"label","label",1718410804),"\u00C9quipements \u00E9lectriques",new cljs.core.Keyword(null,"short","short",1928760516),"\u00C9lectrique",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26A1"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plomb","plomb",-243165163),new cljs.core.Keyword(null,"label","label",1718410804),"Plomberie / Sanitaires",new cljs.core.Keyword(null,"short","short",1928760516),"Plomberie",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCA7"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"label","label",1718410804),"Ascenseurs / Monte-charges",new cljs.core.Keyword(null,"short","short",1928760516),"Ascenseurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDED7"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"copier","copier",1370751421),new cljs.core.Keyword(null,"label","label",1718410804),"Photocopieurs / Imprimantes",new cljs.core.Keyword(null,"short","short",1928760516),"Photocopieurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDA8\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"distrib","distrib",-1176762767),new cljs.core.Keyword(null,"label","label",1718410804),"Distributeurs automatiques",new cljs.core.Keyword(null,"short","short",1928760516),"Distributeurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD64"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"secu","secu",1407733704),new cljs.core.Keyword(null,"label","label",1718410804),"S\u00E9curit\u00E9 incendie / Intrusion",new cljs.core.Keyword(null,"short","short",1928760516),"S\u00E9curit\u00E9",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDD25"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"access","access",2027349272),new cljs.core.Keyword(null,"label","label",1718410804),"Contr\u00F4le d'acc\u00E8s",new cljs.core.Keyword(null,"short","short",1928760516),"Acc\u00E8s",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDD11"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"autres","autres",530727954),new cljs.core.Keyword(null,"label","label",1718410804),"Autres \u00E9quipements",new cljs.core.Keyword(null,"short","short",1928760516),"Autres",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F"], null)], null);
urbest.questionnaire.common_sections = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"identification","identification",-1342325264),new cljs.core.Keyword(null,"title","title",636505583),"Identification",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDFF7\uFE0F",new cljs.core.Keyword(null,"desc","desc",2093485764),"Informations de base pour identifier chaque \u00E9quipement",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"designation","designation",-314072167),new cljs.core.Keyword(null,"col","col",-1959363084),"D\u00E9signation",new cljs.core.Keyword(null,"always","always",-1772028770),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-equip","type-equip",-2027728680),new cljs.core.Keyword(null,"col","col",-1959363084),"Type d'\u00E9quipement",new cljs.core.Keyword(null,"always","always",-1772028770),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"marque","marque",-1313044484),new cljs.core.Keyword(null,"col","col",-1959363084),"Marque / Fabricant",new cljs.core.Keyword(null,"q","q",689001697),"La marque ou le fabricant ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"modele","modele",-777299075),new cljs.core.Keyword(null,"col","col",-1959363084),"Mod\u00E8le",new cljs.core.Keyword(null,"q","q",689001697),"Le mod\u00E8le exact ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"num-serie","num-serie",-676080551),new cljs.core.Keyword(null,"col","col",-1959363084),"N\u00B0 de s\u00E9rie",new cljs.core.Keyword(null,"q","q",689001697),"Le num\u00E9ro de s\u00E9rie ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ref-interne","ref-interne",-1658896921),new cljs.core.Keyword(null,"col","col",-1959363084),"R\u00E9f\u00E9rence interne",new cljs.core.Keyword(null,"q","q",689001697),"Une r\u00E9f\u00E9rence interne / code inventaire ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"localisation","localisation",915132077),new cljs.core.Keyword(null,"title","title",636505583),"Localisation",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCD",new cljs.core.Keyword(null,"desc","desc",2093485764),"O\u00F9 se trouve l'\u00E9quipement dans le b\u00E2timent ?",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"col","col",-1959363084),"Site / Adresse",new cljs.core.Keyword(null,"q","q",689001697),"Le site ou l'adresse du b\u00E2timent ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"batim","batim",-912022141),new cljs.core.Keyword(null,"col","col",-1959363084),"B\u00E2timent / Bloc",new cljs.core.Keyword(null,"q","q",689001697),"Le b\u00E2timent ou bloc ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"etage","etage",1141965752),new cljs.core.Keyword(null,"col","col",-1959363084),"\u00C9tage",new cljs.core.Keyword(null,"q","q",689001697),"L'\u00E9tage ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"col","col",-1959363084),"Local / Zone",new cljs.core.Keyword(null,"q","q",689001697),"Le local ou la zone pr\u00E9cise ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cycle-vie","cycle-vie",-1280895991),new cljs.core.Keyword(null,"title","title",636505583),"Cycle de vie",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC5",new cljs.core.Keyword(null,"desc","desc",2093485764),"Dates cl\u00E9s li\u00E9es \u00E0 l'installation et \u00E0 la dur\u00E9e de vie",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-install","date-install",211840783),new cljs.core.Keyword(null,"col","col",-1959363084),"Date d'installation",new cljs.core.Keyword(null,"q","q",689001697),"La date d'installation ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fin-garantie","fin-garantie",1715927794),new cljs.core.Keyword(null,"col","col",-1959363084),"Fin de garantie",new cljs.core.Keyword(null,"q","q",689001697),"La date de fin de garantie constructeur ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"garantie-ext","garantie-ext",-1635615001),new cljs.core.Keyword(null,"col","col",-1959363084),"Fin de garantie \u00E9tendue",new cljs.core.Keyword(null,"q","q",689001697),"Une garantie \u00E9tendue avec sa date ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-remplace","date-remplace",600620433),new cljs.core.Keyword(null,"col","col",-1959363084),"Remplacement pr\u00E9vu",new cljs.core.Keyword(null,"q","q",689001697),"La date de remplacement pr\u00E9vue ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"contrats","contrats",1170424482),new cljs.core.Keyword(null,"title","title",636505583),"Contrats de maintenance",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCB",new cljs.core.Keyword(null,"desc","desc",2093485764),"Informations sur le(s) contrat(s) de maintenance",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prestataire","prestataire",295111864),new cljs.core.Keyword(null,"col","col",-1959363084),"Prestataire",new cljs.core.Keyword(null,"q","q",689001697),"Le prestataire de maintenance ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-contrat","type-contrat",-1336529549),new cljs.core.Keyword(null,"col","col",-1959363084),"Type de contrat",new cljs.core.Keyword(null,"q","q",689001697),"Le type de contrat (P1/P2/P3/P4/P5) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fin-contrat","fin-contrat",1307930515),new cljs.core.Keyword(null,"col","col",-1959363084),"Fin de contrat",new cljs.core.Keyword(null,"q","q",689001697),"La date de fin de contrat ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cout-contrat","cout-contrat",1776219001),new cljs.core.Keyword(null,"col","col",-1959363084),"Co\u00FBt annuel HT (\u20AC)",new cljs.core.Keyword(null,"q","q",689001697),"Le co\u00FBt annuel du contrat ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"interventions","interventions",480681558),new cljs.core.Keyword(null,"title","title",636505583),"Suivi des interventions",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDD27",new cljs.core.Keyword(null,"desc","desc",2093485764),"Historique et planification des interventions",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"freq-maint","freq-maint",-1478389336),new cljs.core.Keyword(null,"col","col",-1959363084),"Fr\u00E9quence maintenance",new cljs.core.Keyword(null,"q","q",689001697),"La fr\u00E9quence de maintenance pr\u00E9ventive ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"derniere-int","derniere-int",640623097),new cljs.core.Keyword(null,"col","col",-1959363084),"Derni\u00E8re intervention",new cljs.core.Keyword(null,"q","q",689001697),"La date de la derni\u00E8re intervention ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prochaine-int","prochaine-int",610398625),new cljs.core.Keyword(null,"col","col",-1959363084),"Prochaine intervention",new cljs.core.Keyword(null,"q","q",689001697),"La date de la prochaine intervention ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nb-pannes","nb-pannes",-1416354864),new cljs.core.Keyword(null,"col","col",-1959363084),"Nb pannes / an",new cljs.core.Keyword(null,"q","q",689001697),"Le nombre de pannes par an ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"technique","technique",1107663284),new cljs.core.Keyword(null,"title","title",636505583),"Caract\u00E9ristiques techniques",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F",new cljs.core.Keyword(null,"desc","desc",2093485764),"Donn\u00E9es techniques g\u00E9n\u00E9rales de l'\u00E9quipement",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"puissance","puissance",-1998747214),new cljs.core.Keyword(null,"col","col",-1959363084),"Puissance (kW)",new cljs.core.Keyword(null,"q","q",689001697),"La puissance nominale (kW) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tension","tension",58343589),new cljs.core.Keyword(null,"col","col",-1959363084),"Tension (V)",new cljs.core.Keyword(null,"q","q",689001697),"La tension d'alimentation (V) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debit","debit",214956555),new cljs.core.Keyword(null,"col","col",-1959363084),"D\u00E9bit / Capacit\u00E9",new cljs.core.Keyword(null,"q","q",689001697),"Le d\u00E9bit ou la capacit\u00E9 ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.Keyword(null,"col","col",-1959363084),"Dimensions (L\u00D7l\u00D7H mm)",new cljs.core.Keyword(null,"q","q",689001697),"Les dimensions (L\u00D7l\u00D7H) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"poids","poids",962489685),new cljs.core.Keyword(null,"col","col",-1959363084),"Poids (kg)",new cljs.core.Keyword(null,"q","q",689001697),"Le poids ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"classe-ener","classe-ener",-140014142),new cljs.core.Keyword(null,"col","col",-1959363084),"Classe \u00E9nerg\u00E9tique",new cljs.core.Keyword(null,"q","q",689001697),"La classe \u00E9nerg\u00E9tique ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reglementation","reglementation",1790383536),new cljs.core.Keyword(null,"title","title",636505583),"R\u00E9glementation & Contr\u00F4les",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDC",new cljs.core.Keyword(null,"desc","desc",2093485764),"Obligations r\u00E9glementaires et organismes de contr\u00F4le",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"organisme","organisme",-1604045400),new cljs.core.Keyword(null,"col","col",-1959363084),"Organisme de contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"L'organisme de contr\u00F4le ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"periodicite","periodicite",-126106791),new cljs.core.Keyword(null,"col","col",-1959363084),"P\u00E9riodicit\u00E9 contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"La p\u00E9riodicit\u00E9 des contr\u00F4les r\u00E9glementaires ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dernier-ctrl","dernier-ctrl",-1787505807),new cljs.core.Keyword(null,"col","col",-1959363084),"Dernier contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"La date du dernier contr\u00F4le r\u00E9glementaire ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prochain-ctrl","prochain-ctrl",-334221448),new cljs.core.Keyword(null,"col","col",-1959363084),"Prochain contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"La date du prochain contr\u00F4le r\u00E9glementaire ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resultat-ctrl","resultat-ctrl",-674227579),new cljs.core.Keyword(null,"col","col",-1959363084),"R\u00E9sultat contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"Le r\u00E9sultat du dernier contr\u00F4le ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"finances","finances",-1121549896),new cljs.core.Keyword(null,"title","title",636505583),"Donn\u00E9es financi\u00E8res",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCB6",new cljs.core.Keyword(null,"desc","desc",2093485764),"Informations comptables et financi\u00E8res",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"valeur-achat","valeur-achat",561557068),new cljs.core.Keyword(null,"col","col",-1959363084),"Valeur d'achat HT (\u20AC)",new cljs.core.Keyword(null,"q","q",689001697),"La valeur d'achat HT ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-achat","date-achat",-1629042550),new cljs.core.Keyword(null,"col","col",-1959363084),"Date d'achat",new cljs.core.Keyword(null,"q","q",689001697),"La date d'achat ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mode-acqui","mode-acqui",1428721876),new cljs.core.Keyword(null,"col","col",-1959363084),"Mode d'acquisition",new cljs.core.Keyword(null,"q","q",689001697),"Le mode d'acquisition (achat/location) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"centre-cout","centre-cout",1536795143),new cljs.core.Keyword(null,"col","col",-1959363084),"Centre de co\u00FBt",new cljs.core.Keyword(null,"q","q",689001697),"Le centre de co\u00FBt ou imputation comptable ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"etat","etat",1915625434),new cljs.core.Keyword(null,"title","title",636505583),"\u00C9tat & Observations",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA",new cljs.core.Keyword(null,"desc","desc",2093485764),"Suivi de l'\u00E9tat g\u00E9n\u00E9ral de l'\u00E9quipement",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"etat-fonct","etat-fonct",1166820146),new cljs.core.Keyword(null,"col","col",-1959363084),"\u00C9tat de fonctionnement",new cljs.core.Keyword(null,"always","always",-1772028770),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"priorite","priorite",1291600428),new cljs.core.Keyword(null,"col","col",-1959363084),"Priorit\u00E9 remplacement",new cljs.core.Keyword(null,"q","q",689001697),"La priorit\u00E9 de remplacement ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"observations","observations",266638725),new cljs.core.Keyword(null,"col","col",-1959363084),"Observations",new cljs.core.Keyword(null,"q","q",689001697),"Un champ observations / commentaires ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null)], null);
urbest.questionnaire.specific_sections = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-cvc","spec-cvc",1113813849),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"cvc","cvc",1488701754),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique CVC",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF21\uFE0F",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux \u00E9quipements de climatisation, chauffage et ventilation",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-cvc","type-cvc",-908286535),new cljs.core.Keyword(null,"col","col",-1959363084),"Type de syst\u00E8me CVC",new cljs.core.Keyword(null,"q","q",689001697),"Le type de syst\u00E8me (split/VRV/CTA/groupe froid) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"puis-frigo","puis-frigo",1191048461),new cljs.core.Keyword(null,"col","col",-1959363084),"Puissance frigorifique (kW)",new cljs.core.Keyword(null,"q","q",689001697),"La puissance frigorifique (kW) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"puis-calo","puis-calo",-1875662191),new cljs.core.Keyword(null,"col","col",-1959363084),"Puissance calorifique (kW)",new cljs.core.Keyword(null,"q","q",689001697),"La puissance calorifique (kW) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fluide-cvc","fluide-cvc",1067030308),new cljs.core.Keyword(null,"col","col",-1959363084),"Fluide frigorig\u00E8ne",new cljs.core.Keyword(null,"q","q",689001697),"Le type de fluide frigorig\u00E8ne (R32, R410A\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"charge-flu","charge-flu",-1603464758),new cljs.core.Keyword(null,"col","col",-1959363084),"Charge fluide (kg)",new cljs.core.Keyword(null,"q","q",689001697),"La charge en fluide frigorig\u00E8ne (kg) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"surface","surface",699915646),new cljs.core.Keyword(null,"col","col",-1959363084),"Surface desservie (m\u00B2)",new cljs.core.Keyword(null,"q","q",689001697),"La surface ou zone desservie (m\u00B2) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nb-unit-int","nb-unit-int",972257626),new cljs.core.Keyword(null,"col","col",-1959363084),"Nb unit\u00E9s int\u00E9rieures",new cljs.core.Keyword(null,"q","q",689001697),"Le nombre d'unit\u00E9s int\u00E9rieures ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"gtb","gtb",107314837),new cljs.core.Keyword(null,"col","col",-1959363084),"Connexion GTB/GTC",new cljs.core.Keyword(null,"q","q",689001697),"Une connexion GTB ou GTC ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-copier","spec-copier",384279349),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"copier","copier",1370751421),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique Photocopieurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDA8\uFE0F",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux photocopieurs et imprimantes",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format-max","format-max",1134060862),new cljs.core.Keyword(null,"col","col",-1959363084),"Format max (A3/A4)",new cljs.core.Keyword(null,"q","q",689001697),"Le format maximal (A3/A4) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"couleur","couleur",236724082),new cljs.core.Keyword(null,"col","col",-1959363084),"Impression couleur",new cljs.core.Keyword(null,"q","q",689001697),"Les capacit\u00E9s d'impression couleur ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recto-verso","recto-verso",-1926467865),new cljs.core.Keyword(null,"col","col",-1959363084),"Recto-verso auto",new cljs.core.Keyword(null,"q","q",689001697),"Le recto-verso automatique ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"vitesse","vitesse",-1295222927),new cljs.core.Keyword(null,"col","col",-1959363084),"Vitesse (pages/min)",new cljs.core.Keyword(null,"q","q",689001697),"La vitesse d'impression (pages/min) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"vol-mensuel","vol-mensuel",766412961),new cljs.core.Keyword(null,"col","col",-1959363084),"Volume mensuel (pages)",new cljs.core.Keyword(null,"q","q",689001697),"Le volume mensuel estim\u00E9 (pages/mois) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"compteur-nb","compteur-nb",-1731116052),new cljs.core.Keyword(null,"col","col",-1959363084),"Compteur N&B",new cljs.core.Keyword(null,"q","q",689001697),"Le compteur noir & blanc actuel ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"compteur-cl","compteur-cl",-1003060426),new cljs.core.Keyword(null,"col","col",-1959363084),"Compteur couleur",new cljs.core.Keyword(null,"q","q",689001697),"Le compteur couleur actuel ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"contrat-loc","contrat-loc",1212528722),new cljs.core.Keyword(null,"col","col",-1959363084),"Contrat de location",new cljs.core.Keyword(null,"q","q",689001697),"Un contrat de location / leasing ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reseau","reseau",631093756),new cljs.core.Keyword(null,"col","col",-1959363084),"Connexion r\u00E9seau",new cljs.core.Keyword(null,"q","q",689001697),"La connexion r\u00E9seau ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-distrib","spec-distrib",-2138364643),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"distrib","distrib",-1176762767),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique Distributeurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD64",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux distributeurs automatiques",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-distrib","type-distrib",-1620628716),new cljs.core.Keyword(null,"col","col",-1959363084),"Type de distributeur",new cljs.core.Keyword(null,"q","q",689001697),"Le type (boissons chaudes/froides/snacks) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"paiement","paiement",1812790735),new cljs.core.Keyword(null,"col","col",-1959363084),"Syst\u00E8mes de paiement",new cljs.core.Keyword(null,"q","q",689001697),"Les syst\u00E8mes de paiement accept\u00E9s ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"capacite-dist","capacite-dist",-954659937),new cljs.core.Keyword(null,"col","col",-1959363084),"Capacit\u00E9 (nb r\u00E9f.)",new cljs.core.Keyword(null,"q","q",689001697),"La capacit\u00E9 (nombre de r\u00E9f\u00E9rences) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prest-reappro","prest-reappro",1918621981),new cljs.core.Keyword(null,"col","col",-1959363084),"Prestataire r\u00E9appro.",new cljs.core.Keyword(null,"q","q",689001697),"Le prestataire de r\u00E9approvisionnement ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"freq-reappro","freq-reappro",1404908498),new cljs.core.Keyword(null,"col","col",-1959363084),"Fr\u00E9quence r\u00E9appro.",new cljs.core.Keyword(null,"q","q",689001697),"La fr\u00E9quence de r\u00E9approvisionnement ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"telemetrie","telemetrie",-1514793799),new cljs.core.Keyword(null,"col","col",-1959363084),"T\u00E9l\u00E9m\u00E9trie / IoT",new cljs.core.Keyword(null,"q","q",689001697),"Une connexion t\u00E9l\u00E9m\u00E9trie ou IoT ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-asc","spec-asc",1717576612),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique Ascenseurs",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDED7",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux ascenseurs et monte-charges",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-asc","type-asc",-1857501338),new cljs.core.Keyword(null,"col","col",-1959363084),"Type (ascenseur/MC)",new cljs.core.Keyword(null,"q","q",689001697),"Le type (ascenseur / monte-charge) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"charge-util","charge-util",1000259655),new cljs.core.Keyword(null,"col","col",-1959363084),"Charge utile (kg)",new cljs.core.Keyword(null,"q","q",689001697),"La charge utile maximale (kg) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nb-niveaux","nb-niveaux",357999155),new cljs.core.Keyword(null,"col","col",-1959363084),"Nombre de niveaux",new cljs.core.Keyword(null,"q","q",689001697),"Le nombre de niveaux desservis ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"vitesse-asc","vitesse-asc",85200955),new cljs.core.Keyword(null,"col","col",-1959363084),"Vitesse (m/s)",new cljs.core.Keyword(null,"q","q",689001697),"La vitesse de d\u00E9placement (m/s) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"organisme-bt","organisme-bt",-433155179),new cljs.core.Keyword(null,"col","col",-1959363084),"Bureau de contr\u00F4le",new cljs.core.Keyword(null,"q","q",689001697),"Le bureau de contr\u00F4le (Apave, Socotec\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-ctrl-bt","date-ctrl-bt",-1026064031),new cljs.core.Keyword(null,"col","col",-1959363084),"Date dernier BTQ",new cljs.core.Keyword(null,"q","q",689001697),"La date du dernier contr\u00F4le BTQ ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-secu","spec-secu",-1745264033),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"secu","secu",1407733704),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique S\u00E9curit\u00E9 incendie",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDD25",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux \u00E9quipements de s\u00E9curit\u00E9 incendie",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-secu","type-secu",-1707575863),new cljs.core.Keyword(null,"col","col",-1959363084),"Type \u00E9quipement SI",new cljs.core.Keyword(null,"q","q",689001697),"Le type (RIA, d\u00E9tecteur, extincteur, BAES\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"zone-secu","zone-secu",-1025900117),new cljs.core.Keyword(null,"col","col",-1959363084),"Zone / Secteur",new cljs.core.Keyword(null,"q","q",689001697),"La zone ou secteur surveill\u00E9 ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-verif-si","date-verif-si",1474036472),new cljs.core.Keyword(null,"col","col",-1959363084),"Derni\u00E8re v\u00E9rification",new cljs.core.Keyword(null,"q","q",689001697),"La date de la derni\u00E8re v\u00E9rification ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"proch-verif","proch-verif",1205520318),new cljs.core.Keyword(null,"col","col",-1959363084),"Prochaine v\u00E9rification",new cljs.core.Keyword(null,"q","q",689001697),"La date de la prochaine v\u00E9rification ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ref-norme","ref-norme",-2073344398),new cljs.core.Keyword(null,"col","col",-1959363084),"Norme applicable",new cljs.core.Keyword(null,"q","q",689001697),"La norme ou r\u00E9f\u00E9rentiel applicable ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-elec","spec-elec",954976084),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"elec","elec",1312492262),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique \u00C9lectrique",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26A1",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux \u00E9quipements et armoires \u00E9lectriques",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-elec","type-elec",-1789338716),new cljs.core.Keyword(null,"col","col",-1959363084),"Type \u00E9quipement \u00E9lec.",new cljs.core.Keyword(null,"q","q",689001697),"Le type (TGBT, armoire, onduleur, groupe\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"puiss-elec","puiss-elec",-1022026923),new cljs.core.Keyword(null,"col","col",-1959363084),"Puissance install\u00E9e (kW)",new cljs.core.Keyword(null,"q","q",689001697),"La puissance install\u00E9e (kW) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"indice-ip","indice-ip",1184439225),new cljs.core.Keyword(null,"col","col",-1959363084),"Indice de protection (IP)",new cljs.core.Keyword(null,"q","q",689001697),"L'indice de protection (IP) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"courant","courant",1650653527),new cljs.core.Keyword(null,"col","col",-1959363084),"Intensit\u00E9 nominale (A)",new cljs.core.Keyword(null,"q","q",689001697),"L'intensit\u00E9 nominale (A) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"verif-elec","verif-elec",1638623774),new cljs.core.Keyword(null,"col","col",-1959363084),"Date v\u00E9rification \u00E9lec.",new cljs.core.Keyword(null,"q","q",689001697),"La date de la v\u00E9rification \u00E9lectrique ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-plomb","spec-plomb",360318227),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"plomb","plomb",-243165163),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique Plomberie",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCA7",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux \u00E9quipements de plomberie et sanitaires",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-plomb","type-plomb",-1079780964),new cljs.core.Keyword(null,"col","col",-1959363084),"Type \u00E9quipement plomb.",new cljs.core.Keyword(null,"q","q",689001697),"Le type (pompe, ballon, nourrice, vanne\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debit-plomb","debit-plomb",702814207),new cljs.core.Keyword(null,"col","col",-1959363084),"D\u00E9bit nominal (m\u00B3/h)",new cljs.core.Keyword(null,"q","q",689001697),"Le d\u00E9bit nominal (m\u00B3/h) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pression","pression",847954481),new cljs.core.Keyword(null,"col","col",-1959363084),"Pression nominale (bar)",new cljs.core.Keyword(null,"q","q",689001697),"La pression nominale (bar) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"volume-ballon","volume-ballon",1211215101),new cljs.core.Keyword(null,"col","col",-1959363084),"Volume (litres)",new cljs.core.Keyword(null,"q","q",689001697),"Le volume (ex : ballon ECS) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-dtd","date-dtd",77049988),new cljs.core.Keyword(null,"col","col",-1959363084),"Derni\u00E8re DTD",new cljs.core.Keyword(null,"q","q",689001697),"La date du dernier diagnostic technique ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-access","spec-access",1925911544),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"access","access",2027349272),new cljs.core.Keyword(null,"title","title",636505583),"Sp\u00E9cifique Contr\u00F4le d'acc\u00E8s",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDD11",new cljs.core.Keyword(null,"desc","desc",2093485764),"Attributs propres aux \u00E9quipements de contr\u00F4le d'acc\u00E8s",new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type-access","type-access",-460283236),new cljs.core.Keyword(null,"col","col",-1959363084),"Type \u00E9quipement acc\u00E8s",new cljs.core.Keyword(null,"q","q",689001697),"Le type (lecteur badge, interphone, portail\u2026) ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"zone-access","zone-access",-434652671),new cljs.core.Keyword(null,"col","col",-1959363084),"Zone contr\u00F4l\u00E9e",new cljs.core.Keyword(null,"q","q",689001697),"La zone ou porte contr\u00F4l\u00E9e ?",new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"technologie","technologie",1765276755),new cljs.core.Keyword(null,"col","col",-1959363084),"Technologie (RFID/BLE\u2026)",new cljs.core.Keyword(null,"q","q",689001697),"La technologie utilis\u00E9e (RFID, BLE, biom\u00E9trie) ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nb-badges","nb-badges",-1343412392),new cljs.core.Keyword(null,"col","col",-1959363084),"Nb badges actifs",new cljs.core.Keyword(null,"q","q",689001697),"Le nombre de badges ou acc\u00E8s actifs ?",new cljs.core.Keyword(null,"default","default",-1987822328),false], null)], null)], null)], null);
if((typeof urbest !== 'undefined') && (typeof urbest.questionnaire !== 'undefined') && (typeof urbest.questionnaire.state !== 'undefined')){
} else {
urbest.questionnaire.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"welcome","welcome",-578152123),new cljs.core.Keyword(null,"types","types",590030639),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"section-idx","section-idx",1836855653),(0)], null));
}
urbest.questionnaire.type_by_id = (function urbest$questionnaire$type_by_id(id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6203_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6203_SHARP_),id);
}),urbest.questionnaire.equipment_types));
});
urbest.questionnaire.visible_specific_sections = (function urbest$questionnaire$visible_specific_sections(types){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6204_SHARP_){
var G__6205 = new cljs.core.Keyword(null,"for","for",-1323786319).cljs$core$IFn$_invoke$arity$1(p1__6204_SHARP_);
return (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(G__6205) : types.call(null, G__6205));
}),urbest.questionnaire.specific_sections);
});
urbest.questionnaire.all_visible_sections = (function urbest$questionnaire$all_visible_sections(types){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(urbest.questionnaire.common_sections,urbest.questionnaire.visible_specific_sections(types));
});
urbest.questionnaire.init_answers = (function urbest$questionnaire$init_answers(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function urbest$questionnaire$init_answers_$_iter__6206(s__6207){
return (new cljs.core.LazySeq(null,(function (){
var s__6207__$1 = s__6207;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6207__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var sec = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__6207__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function urbest$questionnaire$init_answers_$_iter__6206_$_iter__6208(s__6209){
return (new cljs.core.LazySeq(null,((function (s__6207__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6209__$1 = s__6209;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__6209__$1);
if(temp__5804__auto____$1){
var s__6209__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6209__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6209__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6211 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6210 = (0);
while(true){
if((i__6210 < size__5479__auto__)){
var map__6212 = cljs.core._nth(c__5478__auto__,i__6210);
var map__6212__$1 = cljs.core.__destructure_map(map__6212);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"always","always",-1772028770));
cljs.core.chunk_append(b__6211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(cljs.core.truth_(always)?true:cljs.core.boolean$(default$))], null));

var G__6272 = (i__6210 + (1));
i__6210 = G__6272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6211),urbest$questionnaire$init_answers_$_iter__6206_$_iter__6208(cljs.core.chunk_rest(s__6209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6211),null);
}
} else {
var map__6213 = cljs.core.first(s__6209__$2);
var map__6213__$1 = cljs.core.__destructure_map(map__6213);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"always","always",-1772028770));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(cljs.core.truth_(always)?true:cljs.core.boolean$(default$))], null),urbest$questionnaire$init_answers_$_iter__6206_$_iter__6208(cljs.core.rest(s__6209__$2)));
}
} else {
return null;
}
break;
}
});})(s__6207__$1,sec,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6207__$1,sec,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sec)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,urbest$questionnaire$init_answers_$_iter__6206(cljs.core.rest(s__6207__$1)));
} else {
var G__6273 = cljs.core.rest(s__6207__$1);
s__6207__$1 = G__6273;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(urbest.questionnaire.common_sections,urbest.questionnaire.specific_sections));
})());
});
urbest.questionnaire.common_cols = (function urbest$questionnaire$common_cols(answers){
var iter__5480__auto__ = (function urbest$questionnaire$common_cols_$_iter__6214(s__6215){
return (new cljs.core.LazySeq(null,(function (){
var s__6215__$1 = s__6215;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6215__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var sec = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__6215__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function urbest$questionnaire$common_cols_$_iter__6214_$_iter__6216(s__6217){
return (new cljs.core.LazySeq(null,((function (s__6215__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6217__$1 = s__6217;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__6217__$1);
if(temp__5804__auto____$1){
var s__6217__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6217__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6217__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6219 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6218 = (0);
while(true){
if((i__6218 < size__5479__auto__)){
var q = cljs.core._nth(c__5478__auto__,i__6218);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)))){
cljs.core.chunk_append(b__6219,q);

var G__6274 = (i__6218 + (1));
i__6218 = G__6274;
continue;
} else {
var G__6275 = (i__6218 + (1));
i__6218 = G__6275;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6219),urbest$questionnaire$common_cols_$_iter__6214_$_iter__6216(cljs.core.chunk_rest(s__6217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6219),null);
}
} else {
var q = cljs.core.first(s__6217__$2);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)))){
return cljs.core.cons(q,urbest$questionnaire$common_cols_$_iter__6214_$_iter__6216(cljs.core.rest(s__6217__$2)));
} else {
var G__6276 = cljs.core.rest(s__6217__$2);
s__6217__$1 = G__6276;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__6215__$1,sec,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6215__$1,sec,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sec)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,urbest$questionnaire$common_cols_$_iter__6214(cljs.core.rest(s__6215__$1)));
} else {
var G__6277 = cljs.core.rest(s__6215__$1);
s__6215__$1 = G__6277;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(urbest.questionnaire.common_sections);
});
urbest.questionnaire.specific_cols = (function urbest$questionnaire$specific_cols(answers,type_id){
var iter__5480__auto__ = (function urbest$questionnaire$specific_cols_$_iter__6220(s__6221){
return (new cljs.core.LazySeq(null,(function (){
var s__6221__$1 = s__6221;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6221__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var sec = cljs.core.first(xs__6360__auto__);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"for","for",-1323786319).cljs$core$IFn$_invoke$arity$1(sec),type_id)){
var iterys__5476__auto__ = ((function (s__6221__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function urbest$questionnaire$specific_cols_$_iter__6220_$_iter__6222(s__6223){
return (new cljs.core.LazySeq(null,((function (s__6221__$1,sec,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6223__$1 = s__6223;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__6223__$1);
if(temp__5804__auto____$1){
var s__6223__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6223__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6223__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6225 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6224 = (0);
while(true){
if((i__6224 < size__5479__auto__)){
var q = cljs.core._nth(c__5478__auto__,i__6224);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)))){
cljs.core.chunk_append(b__6225,q);

var G__6278 = (i__6224 + (1));
i__6224 = G__6278;
continue;
} else {
var G__6279 = (i__6224 + (1));
i__6224 = G__6279;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6225),urbest$questionnaire$specific_cols_$_iter__6220_$_iter__6222(cljs.core.chunk_rest(s__6223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6225),null);
}
} else {
var q = cljs.core.first(s__6223__$2);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)))){
return cljs.core.cons(q,urbest$questionnaire$specific_cols_$_iter__6220_$_iter__6222(cljs.core.rest(s__6223__$2)));
} else {
var G__6280 = cljs.core.rest(s__6223__$2);
s__6223__$1 = G__6280;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__6221__$1,sec,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6221__$1,sec,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sec)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,urbest$questionnaire$specific_cols_$_iter__6220(cljs.core.rest(s__6221__$1)));
} else {
var G__6281 = cljs.core.rest(s__6221__$1);
s__6221__$1 = G__6281;
continue;
}
} else {
var G__6282 = cljs.core.rest(s__6221__$1);
s__6221__$1 = G__6282;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(urbest.questionnaire.specific_sections);
});
urbest.questionnaire.cols_for_type = (function urbest$questionnaire$cols_for_type(answers,type_id){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(urbest.questionnaire.common_cols(answers),urbest.questionnaire.specific_cols(answers,type_id));
});
urbest.questionnaire.add_sheet_BANG_ = (function urbest$questionnaire$add_sheet_BANG_(wb,answers,type_id){
var type_info = urbest.questionnaire.type_by_id(type_id);
var sheet_name = new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(type_info);
var cols = cljs.core.vec(urbest.questionnaire.cols_for_type(answers,type_id));
var hdrs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),cols);
var rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hdrs], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((20),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hdrs),""))));
var ws = module$node_modules$xlsx$xlsx.utils.aoa_to_sheet(cljs.core.clj__GT_js(rows));
var widths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6226_SHARP_){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wch","wch",936995845),(function (){var x__5087__auto__ = (18);
var y__5088__auto__ = ((2) + cljs.core.count(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(p1__6226_SHARP_)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], null));
}),cols);
(ws["!cols"] = cljs.core.clj__GT_js(widths));

var temp__5804__auto___6283 = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__6228_SHARP_,p2__6227_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(p2__6227_SHARP_),"\u00C9tat de fonctionnement")){
return p1__6228_SHARP_;
} else {
return null;
}
}),cols));
if(cljs.core.truth_(temp__5804__auto___6283)){
var etat_idx_6284 = temp__5804__auto___6283;
var col_letter_6285 = module$node_modules$xlsx$xlsx.utils.encode_col(etat_idx_6284);
var sqref_6286 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_letter_6285),"2:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_letter_6285),"21"].join('');
var dv_6287 = ({});
(dv_6287[sqref_6286] = ({"type": "List", "formula1": "\"Bon,Moyen,Mauvais,Hors service\"", "sqref": sqref_6286, "showDropDown": false}));

(ws["!datavalidation"] = dv_6287);
} else {
}

return module$node_modules$xlsx$xlsx.utils.book_append_sheet(wb,ws,sheet_name);
});
urbest.questionnaire.generate_excel_BANG_ = (function urbest$questionnaire$generate_excel_BANG_(answers,types){
var wb = module$node_modules$xlsx$xlsx.utils.book_new();
var seq__6232_6288 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (wb){
return (function (p1__6231_SHARP_){
var G__6237 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6231_SHARP_);
return (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(G__6237) : types.call(null, G__6237));
});})(wb))
,urbest.questionnaire.equipment_types)));
var chunk__6233_6289 = null;
var count__6234_6290 = (0);
var i__6235_6291 = (0);
while(true){
if((i__6235_6291 < count__6234_6290)){
var t_6292 = chunk__6233_6289.cljs$core$IIndexed$_nth$arity$2(null, i__6235_6291);
urbest.questionnaire.add_sheet_BANG_(wb,answers,t_6292);


var G__6293 = seq__6232_6288;
var G__6294 = chunk__6233_6289;
var G__6295 = count__6234_6290;
var G__6296 = (i__6235_6291 + (1));
seq__6232_6288 = G__6293;
chunk__6233_6289 = G__6294;
count__6234_6290 = G__6295;
i__6235_6291 = G__6296;
continue;
} else {
var temp__5804__auto___6297 = cljs.core.seq(seq__6232_6288);
if(temp__5804__auto___6297){
var seq__6232_6298__$1 = temp__5804__auto___6297;
if(cljs.core.chunked_seq_QMARK_(seq__6232_6298__$1)){
var c__5525__auto___6299 = cljs.core.chunk_first(seq__6232_6298__$1);
var G__6300 = cljs.core.chunk_rest(seq__6232_6298__$1);
var G__6301 = c__5525__auto___6299;
var G__6302 = cljs.core.count(c__5525__auto___6299);
var G__6303 = (0);
seq__6232_6288 = G__6300;
chunk__6233_6289 = G__6301;
count__6234_6290 = G__6302;
i__6235_6291 = G__6303;
continue;
} else {
var t_6304 = cljs.core.first(seq__6232_6298__$1);
urbest.questionnaire.add_sheet_BANG_(wb,answers,t_6304);


var G__6305 = cljs.core.next(seq__6232_6298__$1);
var G__6306 = null;
var G__6307 = (0);
var G__6308 = (0);
seq__6232_6288 = G__6305;
chunk__6233_6289 = G__6306;
count__6234_6290 = G__6307;
i__6235_6291 = G__6308;
continue;
}
} else {
}
}
break;
}

return module$node_modules$xlsx$xlsx.writeFile(wb,"registre-equipements.xlsx");
});
urbest.questionnaire.progress_bar = (function urbest$questionnaire$progress_bar(current,total){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-wrap","div.progress-wrap",-874568439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar","div.progress-bar",929518721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (current / total)))),"%"].join('')], null)], null)], null)], null);
});
urbest.questionnaire.welcome_screen = (function urbest$questionnaire$welcome_screen(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen.welcome","div.screen.welcome",-1244666893),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"big-logo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Configurez votre registre d'\u00E9quipements"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),"R\u00E9pondez aux questions pour g\u00E9n\u00E9rer un fichier Excel personnalis\u00E9,\n             avec un onglet par famille d'\u00E9quipement."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.features","div.features",-519807727),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feat","div.feat",1911352317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2705"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Questions communes + sp\u00E9cifiques par famille"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feat","div.feat",1911352317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCCA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"1 onglet Excel par famille d'\u00E9quipement"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feat","div.feat",1911352317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u25BE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Liste d\u00E9roulante pour l'\u00E9tat de fonctionnement"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"types","types",590030639),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"answers","answers",-2066449770),urbest.questionnaire.init_answers()], 0));
})], null),"Commencer \u2192"], null)], null);
});
urbest.questionnaire.type_selection = (function urbest$questionnaire$type_selection(){
var selected = new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(urbest.questionnaire.state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen-header","div.screen-header",880797269),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Familles d'\u00E9quipements"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"S\u00E9lectionnez toutes les familles pr\u00E9sentes dans votre parc \u2014 un onglet sera cr\u00E9\u00E9 pour chacune"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.types-grid","div.types-grid",-1315087624),(function (){var iter__5480__auto__ = (function urbest$questionnaire$type_selection_$_iter__6238(s__6239){
return (new cljs.core.LazySeq(null,(function (){
var s__6239__$1 = s__6239;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6239__$1);
if(temp__5804__auto__){
var s__6239__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6239__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6239__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6241 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6240 = (0);
while(true){
if((i__6240 < size__5479__auto__)){
var map__6242 = cljs.core._nth(c__5478__auto__,i__6240);
var map__6242__$1 = cljs.core.__destructure_map(map__6242);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__6241,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-card","div.type-card",441245771),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(id) : selected.call(null, id)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6240,map__6242,map__6242__$1,id,label,icon,c__5478__auto__,size__5479__auto__,b__6241,s__6239__$2,temp__5804__auto__,selected){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.update,new cljs.core.Keyword(null,"types","types",590030639),((function (i__6240,map__6242,map__6242__$1,id,label,icon,c__5478__auto__,size__5479__auto__,b__6241,s__6239__$2,temp__5804__auto__,selected){
return (function (t){
if(cljs.core.truth_((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(id) : t.call(null, id)))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(t,id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(t,id);
}
});})(i__6240,map__6242,map__6242__$1,id,label,icon,c__5478__auto__,size__5479__auto__,b__6241,s__6239__$2,temp__5804__auto__,selected))
);
});})(i__6240,map__6242,map__6242__$1,id,label,icon,c__5478__auto__,size__5479__auto__,b__6241,s__6239__$2,temp__5804__auto__,selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-label","div.type-label",-609042896),label], null),(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(id) : selected.call(null, id)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-check","div.type-check",167382786),"\u2713"], null):null)], null));

var G__6309 = (i__6240 + (1));
i__6240 = G__6309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6241),urbest$questionnaire$type_selection_$_iter__6238(cljs.core.chunk_rest(s__6239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6241),null);
}
} else {
var map__6243 = cljs.core.first(s__6239__$2);
var map__6243__$1 = cljs.core.__destructure_map(map__6243);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6243__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6243__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6243__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-card","div.type-card",441245771),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(id) : selected.call(null, id)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__6243,map__6243__$1,id,label,icon,s__6239__$2,temp__5804__auto__,selected){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.update,new cljs.core.Keyword(null,"types","types",590030639),(function (t){
if(cljs.core.truth_((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(id) : t.call(null, id)))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(t,id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(t,id);
}
}));
});})(map__6243,map__6243__$1,id,label,icon,s__6239__$2,temp__5804__auto__,selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-icon","div.type-icon",-629311637),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-label","div.type-label",-609042896),label], null),(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(id) : selected.call(null, id)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-check","div.type-check",167382786),"\u2713"], null):null)], null),urbest$questionnaire$type_selection_$_iter__6238(cljs.core.rest(s__6239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(urbest.questionnaire.equipment_types);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-row","div.nav-row",-1228832701),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"welcome","welcome",-578152123));
})], null),"\u2190 Retour"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(selected),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section-idx","section-idx",1836855653),(0)], 0));
})], null),["Continuer (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(selected))," famille(s)) \u2192"].join('')], null)], null)], null);
});
urbest.questionnaire.question_row = (function urbest$questionnaire$question_row(q){
var ans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(urbest.questionnaire.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.q-row","div.q-row",1677059596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(q))?"always":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.q-text","div.q-text",888377491),(cljs.core.truth_(new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(q))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(q)], null)," \u2014 toujours inclus"], null):["Inclure : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(q))," ?"].join('')),(cljs.core.truth_(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(q))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.q-hint","span.q-hint",892196205),[" \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(q))].join('')], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(q))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.q-badge","div.q-badge",-1563244064),"\u2713 Inclus"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-wrap","div.toggle-wrap",426454321),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggle","button.toggle",816170076),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(ans)?"active-yes":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)], null),true);
})], null),"Oui"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggle","button.toggle",816170076),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(ans)?null:"active-no"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)], null),false);
})], null),"Non"], null)], null))], null);
});
urbest.questionnaire.questions_screen = (function urbest$questionnaire$questions_screen(){
var st = cljs.core.deref(urbest.questionnaire.state);
var all_secs = urbest.questionnaire.all_visible_sections(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(st));
var total = cljs.core.count(all_secs);
var idx = new cljs.core.Keyword(null,"section-idx","section-idx",1836855653).cljs$core$IFn$_invoke$arity$1(st);
var sec = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_secs,idx);
var qs = new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sec);
var all_on_QMARK_ = cljs.core.every_QMARK_((function (p1__6244_SHARP_){
var or__5002__auto__ = new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(p1__6244_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6244_SHARP_));
}
}),qs);
var is_specific_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"for","for",-1323786319).cljs$core$IFn$_invoke$arity$1(sec));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.progress_bar,(idx + (1)),total], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section-nav-info","div.section-nav-info",1631646579),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sec-count","span.sec-count",-220568180),["Section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sec-name","span.sec-name",-609768272),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(sec))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(sec))].join(''),((is_specific_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sec-tag","span.sec-tag",-1615813393),"sp\u00E9cifique"], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section-card","div.section-card",717572284),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sec-header","div.sec-header",598309283),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sec-icon","div.sec-icon",1006718858),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(sec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(sec)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sec-desc","p.sec-desc",371943952),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(sec)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-toggle-all","button.btn-toggle-all",940420362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var seq__6245 = cljs.core.seq(qs);
var chunk__6246 = null;
var count__6247 = (0);
var i__6248 = (0);
while(true){
if((i__6248 < count__6247)){
var map__6251 = chunk__6246.cljs$core$IIndexed$_nth$arity$2(null, i__6248);
var map__6251__$1 = cljs.core.__destructure_map(map__6251);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6251__$1,new cljs.core.Keyword(null,"always","always",-1772028770));
if(cljs.core.truth_(always)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),id], null),(!(all_on_QMARK_)));
}


var G__6310 = seq__6245;
var G__6311 = chunk__6246;
var G__6312 = count__6247;
var G__6313 = (i__6248 + (1));
seq__6245 = G__6310;
chunk__6246 = G__6311;
count__6247 = G__6312;
i__6248 = G__6313;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6245);
if(temp__5804__auto__){
var seq__6245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6245__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__6245__$1);
var G__6314 = cljs.core.chunk_rest(seq__6245__$1);
var G__6315 = c__5525__auto__;
var G__6316 = cljs.core.count(c__5525__auto__);
var G__6317 = (0);
seq__6245 = G__6314;
chunk__6246 = G__6315;
count__6247 = G__6316;
i__6248 = G__6317;
continue;
} else {
var map__6252 = cljs.core.first(seq__6245__$1);
var map__6252__$1 = cljs.core.__destructure_map(map__6252);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"always","always",-1772028770));
if(cljs.core.truth_(always)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),id], null),(!(all_on_QMARK_)));
}


var G__6318 = cljs.core.next(seq__6245__$1);
var G__6319 = null;
var G__6320 = (0);
var G__6321 = (0);
seq__6245 = G__6318;
chunk__6246 = G__6319;
count__6247 = G__6320;
i__6248 = G__6321;
continue;
}
} else {
return null;
}
}
break;
}
})], null),((all_on_QMARK_)?"Tout d\u00E9cocher":"Tout cocher")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.questions-list","div.questions-list",-2000244785),(function (){var iter__5480__auto__ = (function urbest$questionnaire$questions_screen_$_iter__6253(s__6254){
return (new cljs.core.LazySeq(null,(function (){
var s__6254__$1 = s__6254;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6254__$1);
if(temp__5804__auto__){
var s__6254__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6254__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6254__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6256 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6255 = (0);
while(true){
if((i__6255 < size__5479__auto__)){
var q = cljs.core._nth(c__5478__auto__,i__6255);
cljs.core.chunk_append(b__6256,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.question_row,q], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q))], null)));

var G__6322 = (i__6255 + (1));
i__6255 = G__6322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6256),urbest$questionnaire$questions_screen_$_iter__6253(cljs.core.chunk_rest(s__6254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6256),null);
}
} else {
var q = cljs.core.first(s__6254__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.question_row,q], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q))], null)),urbest$questionnaire$questions_screen_$_iter__6253(cljs.core.rest(s__6254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(qs);
})()], null)], null),((is_specific_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.common-note","div.common-note",211240397),"\uD83D\uDCA1 Les colonnes communes (identification, localisation, contrats\u2026) seront automatiquement ajout\u00E9es \u00E0 cet onglet."], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-row","div.nav-row",-1228832701),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((idx === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"types","types",590030639));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.update,new cljs.core.Keyword(null,"section-idx","section-idx",1836855653),cljs.core.dec);
}
})], null),"\u2190 Retour"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((idx < (total - (1)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.update,new cljs.core.Keyword(null,"section-idx","section-idx",1836855653),cljs.core.inc);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"summary","summary",380847952));
}
})], null),(((idx < (total - (1))))?"Suivant \u2192":"Voir le r\u00E9capitulatif \u2192")], null)], null)], null);
});
urbest.questionnaire.sheet_preview = (function urbest$questionnaire$sheet_preview(type_id,answers){
var type_info = urbest.questionnaire.type_by_id(type_id);
var c_cols = cljs.core.vec(urbest.questionnaire.common_cols(answers));
var s_cols = cljs.core.vec(urbest.questionnaire.specific_cols(answers,type_id));
var all_cols = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(c_cols,s_cols);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sheet-preview","div.sheet-preview",1932300544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sheet-tab","div.sheet-tab",-1870826393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(type_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(type_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-count","span.tab-count",990618905),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(all_cols))," colonnes"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sheet-cols","div.sheet-cols",-1382955974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-group","div.cols-group",-303063911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-group-label","div.cols-group-label",-1465307163),"Communes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-chips","div.cols-chips",75459132),(function (){var iter__5480__auto__ = (function urbest$questionnaire$sheet_preview_$_iter__6257(s__6258){
return (new cljs.core.LazySeq(null,(function (){
var s__6258__$1 = s__6258;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6258__$1);
if(temp__5804__auto__){
var s__6258__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6258__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6258__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6260 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6259 = (0);
while(true){
if((i__6259 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__6259);
cljs.core.chunk_append(b__6260,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-chip-sm","span.col-chip-sm",1295256898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(c)], null));

var G__6323 = (i__6259 + (1));
i__6259 = G__6323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6260),urbest$questionnaire$sheet_preview_$_iter__6257(cljs.core.chunk_rest(s__6258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6260),null);
}
} else {
var c = cljs.core.first(s__6258__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-chip-sm","span.col-chip-sm",1295256898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(c)], null),urbest$questionnaire$sheet_preview_$_iter__6257(cljs.core.rest(s__6258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(c_cols);
})()], null)], null),((cljs.core.seq(s_cols))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-group","div.cols-group",-303063911),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-group-label","div.cols-group-label",-1465307163),"Sp\u00E9cifiques"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cols-chips","div.cols-chips",75459132),(function (){var iter__5480__auto__ = (function urbest$questionnaire$sheet_preview_$_iter__6261(s__6262){
return (new cljs.core.LazySeq(null,(function (){
var s__6262__$1 = s__6262;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6262__$1);
if(temp__5804__auto__){
var s__6262__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6262__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6262__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6264 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6263 = (0);
while(true){
if((i__6263 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__6263);
cljs.core.chunk_append(b__6264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-chip-sm.specific","span.col-chip-sm.specific",-1531285115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(c)], null));

var G__6324 = (i__6263 + (1));
i__6263 = G__6324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6264),urbest$questionnaire$sheet_preview_$_iter__6261(cljs.core.chunk_rest(s__6262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6264),null);
}
} else {
var c = cljs.core.first(s__6262__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-chip-sm.specific","span.col-chip-sm.specific",-1531285115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(c)], null),urbest$questionnaire$sheet_preview_$_iter__6261(cljs.core.rest(s__6262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(s_cols);
})()], null)], null):null)], null)], null);
});
urbest.questionnaire.summary_screen = (function urbest$questionnaire$summary_screen(){
var st = cljs.core.deref(urbest.questionnaire.state);
var types = new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(st);
var ans = new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(st);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen-header","div.screen-header",880797269),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"R\u00E9capitulatif de votre registre"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(types))," onglet(s) \u00B7 20 lignes vides par onglet \u00B7 liste d\u00E9roulante \u00E9tat de fonctionnement"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sheets-list","div.sheets-list",760684511),(function (){var iter__5480__auto__ = (function urbest$questionnaire$summary_screen_$_iter__6266(s__6267){
return (new cljs.core.LazySeq(null,(function (){
var s__6267__$1 = s__6267;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6267__$1);
if(temp__5804__auto__){
var s__6267__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6267__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6267__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6269 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6268 = (0);
while(true){
if((i__6268 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__6268);
cljs.core.chunk_append(b__6269,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.sheet_preview,t,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(t)], null)));

var G__6325 = (i__6268 + (1));
i__6268 = G__6325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6269),urbest$questionnaire$summary_screen_$_iter__6266(cljs.core.chunk_rest(s__6267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6269),null);
}
} else {
var t = cljs.core.first(s__6267__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.sheet_preview,t,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(t)], null)),urbest$questionnaire$summary_screen_$_iter__6266(cljs.core.rest(s__6267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6265_SHARP_){
var G__6270 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6265_SHARP_);
return (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(G__6270) : types.call(null, G__6270));
}),urbest.questionnaire.equipment_types)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-row","div.nav-row",-1228832701),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(urbest.questionnaire.state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section-idx","section-idx",1836855653),(0)], 0));
})], null),"\u2190 Modifier"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-download","button.btn-download",567998426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return urbest.questionnaire.generate_excel_BANG_(ans,types);
})], null),"\u2B07 T\u00E9l\u00E9charger l'Excel (.xlsx)"], null)], null)], null);
});
urbest.questionnaire.app = (function urbest$questionnaire$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.top-bar","header.top-bar",-1299348390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"Urbest",new cljs.core.Keyword(null,"class","class",-2030961996),"header-logo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.header-title","span.header-title",1966909570),"G\u00E9n\u00E9rateur de registre d'\u00E9quipements"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(function (){var G__6271 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(urbest.questionnaire.state));
var G__6271__$1 = (((G__6271 instanceof cljs.core.Keyword))?G__6271.fqn:null);
switch (G__6271__$1) {
case "welcome":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.welcome_screen], null);

break;
case "types":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.type_selection], null);

break;
case "questions":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.questions_screen], null);

break;
case "summary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.summary_screen], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6271__$1)].join('')));

}
})()], null)], null);
});
urbest.questionnaire.init = (function urbest$questionnaire$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [urbest.questionnaire.app], null),document.getElementById("app"));
});

//# sourceMappingURL=urbest.questionnaire.js.map
