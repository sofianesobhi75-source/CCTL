const QUIZ_DATA = {
  "c1": [
    { id:"c1_q1", title:"Quiz 1 : Fondamentaux WBS", questions:[
      {q:"Que signifie WBS ?",o:["Work Breakdown Structure","Workflow Base System","Work Balance Schedule","World Business Structure"],a:0,e:"Work Breakdown Structure."},
      {q:"La WBS contient-elle des dates ou durées ?",o:["Oui","Non, c'est une décomposition du travail","Seulement pour les tâches critiques","Oui, via un Gantt intégré"],a:1,e:"La WBS décompose le travail, pas le planning."},
      {q:"Que stipule la Règle des 100% ?",o:["100% du budget dépensé","100% de l'équipe affectée","La WBS couvre 100% du périmètre","100% des tâches terminées"],a:2,e:"Tout le périmètre doit être couvert."},
      {q:"Qu'est-ce qu'un Work Package ?",o:["Un logiciel","Un colis client","Le composant le plus petit de la WBS","Une équipe"],a:2,e:"C'est le lot de travail le plus fin."},
      {q:"Que signifie OBS ?",o:["Object Breakdown Structure","Organization Breakdown Structure","Operational Base System","Output Business Strategy"],a:1,e:"Organization Breakdown Structure."},
      {q:"Quel outil résulte du croisement WBS × OBS ?",o:["Gantt","Matrice RACI","PERT","Registre des risques"],a:1,e:"La matrice de responsabilités RACI."},
      {q:"Dans la WBS, 'Formation des utilisateurs' appartient à quelle phase ?",o:["Conception","Développement","Déploiement","Clôture"],a:2,e:"La formation fait partie du déploiement."}
    ]},
    { id:"c1_q2", title:"Quiz 2 : Pièges WBS/OBS", questions:[
      {q:"Lequel NE figure PAS dans une WBS ?",o:["La plomberie","L'équipe d'électriciens","Le permis de construire","La toiture"],a:1,e:"L'équipe relève de l'OBS, pas de la WBS."},
      {q:"Un Work Package doit pouvoir être :",o:["Fait en 1h","Estimé en coût et temps","Réalisé par le chef seul","Ignoré si manque de temps"],a:1,e:"Il doit être estimable avec précision."},
      {q:"WBS définit le 'Quoi', OBS définit le :",o:["Quand","Qui","Combien","Pourquoi"],a:1,e:"WBS = livrables. OBS = organisation."},
      {q:"RACI signifie :",o:["Risk And Cost Index","Responsible Accountable Consulted Informed","Rapid Action Control Interface","Resource Allocation Chart Index"],a:1,e:"Réalisateur, Approbateur, Consulté, Informé."},
      {q:"Combien de niveaux max dans une WBS ?",o:["3 max","Pas de limite stricte","Toujours 4","Seulement 2"],a:1,e:"Cela dépend de la taille du projet."},
      {q:"Si une tâche n'est pas dans la WBS, cela signifie :",o:["Elle est externalisée","Elle ne fait pas partie du périmètre","Elle est dans l'OBS","Elle est implicite"],a:1,e:"Règle des 100% : tout doit être dans la WBS."},
      {q:"L'estimation budgétaire se fait à partir de :",o:["L'OBS seule","Avant la WBS","Les Work Packages (bottom-up)","La clôture du projet"],a:2,e:"Estimation ascendante depuis les WP."}
    ]},
    { id:"c1_q3", title:"Quiz 3 : Cas pratiques", questions:[
      {q:"Pour un projet logiciel, lequel est un livrable WBS ?",o:["Le développeur Jean","Le code source testé","Le salaire mensuel","La réunion du lundi"],a:1,e:"Le code source est un livrable concret."},
      {q:"'Équipe Backend' est un élément de :",o:["La WBS","L'OBS","Le Gantt","Le MCD"],a:1,e:"C'est une unité organisationnelle."},
      {q:"La décomposition s'arrête quand :",o:["L'équipe n'a plus d'idées","On atteint un WP gérable","La limite de 100 tâches est atteinte","Le Gantt est terminé"],a:1,e:"Le Work Package doit être gérable et mesurable."},
      {q:"Qui se trouve au sommet de l'OBS ?",o:["Le client","Le chef de projet / sponsor","Le dev le plus expérimenté","Le fournisseur"],a:1,e:"Le chef de projet dirige l'équipe."},
      {q:"Un jalon (milestone) est :",o:["Un Work Package spécial","Un point de contrôle sans durée","Une tâche répétitive","Un rôle RACI"],a:1,e:"Le jalon marque un événement clé, il n'a pas de durée."},
      {q:"Le dictionnaire de la WBS contient :",o:["Uniquement les noms des tâches","La description détaillée de chaque élément WBS","Les salaires de l'équipe","Les dates du Gantt"],a:1,e:"Il décrit chaque élément en détail."},
      {q:"Peut-on avoir des tâches de gestion (réunions) dans la WBS ?",o:["Non, jamais","Oui, elles font partie du périmètre","Seulement dans l'OBS","Seulement dans le Gantt"],a:1,e:"Les réunions de projet font partie du travail à réaliser."}
    ]}
  ],
  "c2": [
    { id:"c2_q1", title:"Quiz 1 : Bases SI & Réseaux", questions:[
      {q:"Quel est le rôle d'un SI ?",o:["Gérer les emails","Collecter, traiter, stocker et diffuser l'info","Réparer les ordinateurs","Générer du HTML"],a:1,e:"Le SI aide à la prise de décision."},
      {q:"Qu'est-ce qu'un ERP ?",o:["Un protocole réseau","Un logiciel de gestion intégré","Une BDD open-source","Un composant matériel"],a:1,e:"Enterprise Resource Planning."},
      {q:"L'architecture client-serveur permet de :",o:["Isoler chaque PC","Partager des ressources centralisées","Créer un réseau sans fil","Héberger un site public"],a:1,e:"Centralisation des ressources."},
      {q:"Qu'est-ce qu'un LAN ?",o:["Un réseau mondial","Un réseau local en zone restreinte","Un VPN","Un réseau satellite"],a:1,e:"Local Area Network."},
      {q:"Rôle principal d'un pare-feu ?",o:["Accélérer la connexion","Filtrer les paquets entrants/sortants","Augmenter le WiFi","Sauvegarder les données"],a:1,e:"Sécurité réseau par filtrage."},
      {q:"Le routeur sert à :",o:["Stocker des fichiers","Diriger les paquets vers leur destination","Afficher les pages web","Compiler du code"],a:1,e:"Routage des paquets de données."},
      {q:"Une adresse IP identifie :",o:["Un logiciel","Un appareil sur le réseau","Un fichier","Un utilisateur"],a:1,e:"Identifiant réseau logique."}
    ]},
    { id:"c2_q2", title:"Quiz 2 : Infrastructures avancées", questions:[
      {q:"Le DBA est responsable de :",o:["La configuration des routeurs","L'intégrité et sauvegarde des BDD","L'interface graphique","La matrice RACI"],a:1,e:"Database Administrator."},
      {q:"Un VPN chiffre les données pour :",o:["Empêcher les plantages","Garantir la confidentialité sur Internet","Générer de la crypto","Contourner les pare-feux"],a:1,e:"Protection des données en transit."},
      {q:"L'hyperviseur est la technologie clé de :",o:["L'impression 3D","La virtualisation","L'intelligence artificielle","La fibre optique"],a:1,e:"Il permet de créer des machines virtuelles."},
      {q:"L'adresse MAC est :",o:["Un identifiant logique","Un identifiant physique unique de la carte réseau","Une adresse email","Un mot de passe"],a:1,e:"L'adresse MAC est gravée dans le matériel."},
      {q:"IaaS vs SaaS : le IaaS fournit :",o:["Le logiciel final","Le matériel (serveurs, stockage)","Les emails","Le système d'exploitation uniquement"],a:1,e:"Infrastructure as a Service."},
      {q:"Le cloud public permet :",o:["Un contrôle total sur le matériel","Une gestion simplifiée sans infrastructure interne","Plus de latence","Moins de sécurité obligatoirement"],a:1,e:"Externalisation de la maintenance."},
      {q:"Un serveur DNS sert à :",o:["Stocker les mots de passe","Traduire les noms de domaine en adresses IP","Filtrer les virus","Compresser les fichiers"],a:1,e:"Domain Name System."}
    ]},
    { id:"c2_q3", title:"Quiz 3 : Métiers et sécurité", questions:[
      {q:"L'architecte SI a pour rôle de :",o:["Coder les applications","Concevoir la structure globale du SI","Réparer le matériel","Former les utilisateurs"],a:1,e:"Il conçoit l'architecture logicielle et matérielle."},
      {q:"Un commutateur (switch) opère au niveau :",o:["Application","Réseau local (couche 2)","Internet mondial","Présentation"],a:1,e:"Le switch travaille au niveau liaison de données."},
      {q:"Le protocole HTTPS garantit :",o:["La vitesse de connexion","Le chiffrement des échanges web","La disponibilité du serveur","La compression des images"],a:1,e:"HTTP + SSL/TLS = chiffrement."},
      {q:"Que signifie SLA ?",o:["System Level Architecture","Service Level Agreement","Software License Activation","Server Load Analysis"],a:1,e:"Contrat de niveau de service."},
      {q:"La redondance des serveurs sert à :",o:["Économiser de l'énergie","Assurer la haute disponibilité","Accélérer les requêtes SQL","Simplifier l'administration"],a:1,e:"Si un serveur tombe, l'autre prend le relais."},
      {q:"Un proxy sert à :",o:["Remplacer le pare-feu","Servir d'intermédiaire entre client et Internet","Créer des VPN","Gérer les imprimantes"],a:1,e:"Le proxy filtre et cache les requêtes."},
      {q:"RAID est une technologie de :",o:["Sécurité réseau","Redondance de disques durs","Routage avancé","Développement web"],a:1,e:"Redundant Array of Independent Disks."}
    ]}
  ],
  "c3": [
    { id:"c3_q1", title:"Quiz 1 : Bases de la modélisation", questions:[
      {q:"Que désigne SGBD ?",o:["Système Global de BD","Système de Gestion de Bases de Données","Serveur Général de Bases Distantes","Solution de Big Data"],a:1,e:"Système de Gestion de Bases de Données."},
      {q:"Une base relationnelle organise les données en :",o:["Fichiers texte","Tables interconnectées","Documents JSON","Graphes"],a:1,e:"Tables liées par des clés."},
      {q:"Une ligne dans une table s'appelle :",o:["Colonne","Tuple","Clé","Vue"],a:1,e:"Tuple ou enregistrement."},
      {q:"La clé primaire sert à :",o:["Crypter","Identifier chaque enregistrement de façon unique","Faire joli","Lier deux BDD"],a:1,e:"Unicité garantie."},
      {q:"La clé étrangère permet de :",o:["Supprimer une table","Faire le lien entre deux tables","Créer un index","Trier les données"],a:1,e:"Lien inter-tables."},
      {q:"La normalisation vise à :",o:["Fusionner les tables","Réduire la redondance et éviter les anomalies","Garantir l'unicité des clés","Accélérer les requêtes"],a:1,e:"Intégrité des données."},
      {q:"Un schéma de BDD représente :",o:["Les données elles-mêmes","La structure des tables et contraintes","Le code SQL","Les utilisateurs"],a:1,e:"Structure organisationnelle."}
    ]},
    { id:"c3_q2", title:"Quiz 2 : MCD et MLD", questions:[
      {q:"Dans un MCD, le lien entre deux entités s'appelle :",o:["Une clé","Une cardinalité","Une association","Un tuple"],a:2,e:"Association ou relation conceptuelle."},
      {q:"Une association (n,m) devient au MLD :",o:["Elle disparaît","Une nouvelle table associative","Elle fusionne avec une entité","Une simple clé étrangère"],a:1,e:"Table de liaison obligatoire."},
      {q:"Cardinalité (1,1) signifie :",o:["Participation obligatoire et unique","Un seul attribut","Clé primaire = 1","Maximum 1 table"],a:0,e:"Participation obligatoire (min=1) et unique (max=1)."},
      {q:"Les clés étrangères dans le MCD ?",o:["Oui, toujours","Non, elles n'existent que dans le MLD","Si l'entité est petite","Entre parenthèses"],a:1,e:"Le MCD utilise des traits et cardinalités."},
      {q:"La normalisation (Formes Normales) sert à :",o:["Renommer les tables","Éviter redondance et anomalies","Permettre Excel de lire la base","Rendre le SQL plus rapide"],a:1,e:"Fiabilisation de la structure."},
      {q:"La 2FN impose que chaque attribut dépende de :",o:["N'importe quelle colonne","La totalité de la clé primaire composée","La clé étrangère","L'index"],a:1,e:"Pas de dépendance partielle."},
      {q:"Une entité dans le MCD est représentée par :",o:["Un ovale","Un rectangle","Un losange","Un cercle"],a:1,e:"Rectangle avec le nom et les attributs."}
    ]},
    { id:"c3_q3", title:"Quiz 3 : Cas pratiques BDD", questions:[
      {q:"Si Client(1,n) --- Commande(1,1), la clé étrangère va dans :",o:["Client","Commande","Les deux","Aucune"],a:1,e:"La clé migre du côté (1,1)."},
      {q:"Un attribut calculé (ex: âge à partir de date_naissance) :",o:["Doit être dans le MCD","Ne doit PAS être stocké dans le MCD","Est une clé primaire","Est une association"],a:1,e:"Le MCD ne contient que des données élémentaires."},
      {q:"L'intégrité référentielle garantit :",o:["Que les mots de passe sont sécurisés","Qu'une clé étrangère pointe vers un enregistrement existant","Que les tables sont triées","Que le SGBD est à jour"],a:1,e:"Cohérence des liens inter-tables."},
      {q:"Une dépendance transitive viole :",o:["La 1FN","La 2FN","La 3FN","Aucune forme normale"],a:2,e:"3FN = pas de dépendance transitive entre non-clés."},
      {q:"DROP TABLE vs DELETE FROM :",o:["Identiques","DROP supprime la table entière, DELETE supprime des lignes","DROP est plus lent","DELETE supprime la structure"],a:1,e:"DROP = structure + données. DELETE = lignes seulement."},
      {q:"Un identifiant dans le MCD doit être :",o:["Le plus long possible","Unique et souligné","En majuscules obligatoirement","Calculé"],a:1,e:"L'identifiant est souligné et doit être unique."},
      {q:"Combien de clés primaires peut avoir une table ?",o:["Autant que l'on veut","Exactement une (qui peut être composée)","Zéro","Deux maximum"],a:1,e:"Une seule clé primaire, mais elle peut être composée de plusieurs colonnes."}
    ]}
  ],
  "c4": [
    { id:"c4_q1", title:"Quiz 1 : Bases SQL", questions:[
      {q:"GROUP BY est obligatoire avec :",o:["ORDER BY","Les fonctions d'agrégation (MAX, SUM...)","WHERE","LIMIT"],a:1,e:"Agrégation = regroupement."},
      {q:"NATURAL JOIN relie les tables sur :",o:["La clé primaire","Les colonnes du même nom","Un index","La première colonne"],a:1,e:"Jointure automatique par nom."},
      {q:"Pour trouver les orphelins avec LEFT JOIN :",o:["WHERE col IS NULL sur la table droite","INNER JOIN","NOT EXIST","Impossible"],a:0,e:"Anti-jointure gauche."},
      {q:"COUNT(DISTINCT id) fait :",o:["Supprime les doublons","Compte les valeurs uniques","Génère une erreur","Compte toutes les lignes"],a:1,e:"Comptage sans doublons."},
      {q:"DELIMITER $$ sert à :",o:["Chiffrer","Changer le séparateur pour une fonction stockée","Joindre des tables","Formater l'heure"],a:1,e:"Permet d'écrire un bloc BEGIN...END."},
      {q:"SELECT DISTINCT élimine :",o:["Les NULL","Les doublons dans le résultat","Les clés étrangères","Les erreurs"],a:1,e:"Suppression des lignes identiques."},
      {q:"La clause ORDER BY sert à :",o:["Filtrer les résultats","Trier les résultats (ASC ou DESC)","Grouper les résultats","Limiter le nombre de lignes"],a:1,e:"Tri ascendant par défaut."}
    ]},
    { id:"c4_q2", title:"Quiz 2 : Requêtes avancées", questions:[
      {q:"WHERE vs HAVING :",o:["Identiques","WHERE avant GROUP BY, HAVING après","HAVING pour les DELETE","WHERE sans conditions"],a:1,e:"HAVING filtre les agrégats."},
      {q:"LIKE '%A_' cherche les noms qui :",o:["Commencent par A","Finissent par A","Ont un A suivi d'exactement 1 caractère à la fin","Contiennent A"],a:2,e:"% = N chars, _ = 1 char."},
      {q:"IN équivaut à :",o:["= ANY","< ALL","NOT NULL","INNER JOIN"],a:0,e:"Vérifie si la valeur est dans la liste."},
      {q:"ALTER TABLE Users ADD COLUMN Age INT sert à :",o:["Modifier Age","Ajouter la colonne Age à la table Users","Supprimer Age","Renommer la table"],a:1,e:"ALTER TABLE ... ADD COLUMN."},
      {q:"RETURN dans une fonction stockée :",o:["Affiche à l'écran","Renvoie le résultat","Supprime la fonction","Crée une variable"],a:1,e:"Retourne la valeur calculée."},
      {q:"DELETE FROM t WHERE id NOT IN (SELECT id FROM v) :",o:["Supprime les lignes présentes dans v","Supprime tout","Supprime les lignes absentes de v","Erreur"],a:2,e:"Suppression des non-correspondances."},
      {q:"TRUNCATE vs DELETE :",o:["Identiques","TRUNCATE vide la table sans possibilité de WHERE","DELETE est plus rapide","TRUNCATE supprime la structure"],a:1,e:"TRUNCATE = suppression massive sans condition."}
    ]},
    { id:"c4_q3", title:"Quiz 3 : SQL Expert", questions:[
      {q:"Pour calculer la moyenne par département :",o:["SELECT dept, AVG(sal) FROM emp","SELECT dept, AVG(sal) FROM emp GROUP BY dept","SELECT AVG(sal) FROM emp WHERE dept","SELECT dept, SUM(sal) FROM emp"],a:1,e:"GROUP BY obligatoire avec AVG."},
      {q:"Une sous-requête corrélée :",o:["S'exécute une seule fois","S'exécute pour chaque ligne de la requête externe","Est interdite en SQL","Remplace le GROUP BY"],a:1,e:"Elle dépend de la requête externe."},
      {q:"COALESCE(a, b, c) retourne :",o:["La somme de a+b+c","La première valeur non NULL","La dernière valeur","Toujours NULL"],a:1,e:"COALESCE parcourt de gauche à droite."},
      {q:"Un INDEX sur une colonne sert à :",o:["La rendre unique","Accélérer les recherches sur cette colonne","La supprimer","La renommer"],a:1,e:"L'index optimise les performances de lecture."},
      {q:"UNION vs UNION ALL :",o:["Identiques","UNION élimine les doublons, UNION ALL les garde","UNION ALL est plus lent","UNION garde les doublons"],a:1,e:"UNION fait un DISTINCT implicite."},
      {q:"La clause LIMIT 10 OFFSET 5 :",o:["Affiche les 10 premières lignes","Affiche 10 lignes en sautant les 5 premières","Supprime 10 lignes","Affiche les lignes 1 à 15"],a:1,e:"Pagination : saute 5, prend 10."},
      {q:"CASE WHEN ... THEN ... ELSE ... END sert à :",o:["Créer une boucle","Faire du conditionnel dans une requête SELECT","Supprimer des lignes","Joindre des tables"],a:1,e:"Expression conditionnelle SQL."}
    ]}
  ]
};
