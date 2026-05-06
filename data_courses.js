const COURSES_DATA = {
  "c1": {
    title: "Gestion de Projet (WBS & OBS)",
    content: `
### 1. La WBS (Work Breakdown Structure)
La WBS est l'organigramme des tâches du projet. Elle se représente sous la forme d'une arborescence hiérarchique.
- **Principe de détail** : Chaque niveau descendant apporte plus de détails.
- **Le Work Package** : Niveau le plus bas de la WBS, estimable en coût et en temps.
- **La Règle des 100%** : La WBS doit couvrir 100% du périmètre du projet.

### 2. L'OBS (Organization Breakdown Structure)
L'OBS organise le projet selon les responsabilités des équipes.
- Elle identifie les unités responsables (personnes, équipes, départements).

### 3. Le croisement WBS / OBS (Matrice RACI)
On croise la WBS (le travail) avec l'OBS (les équipes) pour définir "Qui fait Quoi".
- **R** = Réalisateur, **A** = Approbateur, **C** = Consulté, **I** = Informé.
    `
  },
  "c2": {
    title: "Systèmes d'Information (SI) et Réseaux",
    content: `
### 1. Le Système d'Information (SI)
Un SI collecte, traite, stocke et diffuse l'information pour aider à la prise de décision.
- **ERP** : Logiciel de gestion intégré (finances, production, RH).

### 2. Les métiers du SI
- **Architecte SI** : Conçoit la structure globale.
- **Administrateur Réseaux** : Gère câblage, routeurs, commutateurs, sécurité.
- **Administrateur Systèmes** : Garantit le bon fonctionnement des serveurs.
- **DBA** : Assure l'intégrité, la performance et la sauvegarde des données.

### 3. Infrastructures et Réseaux
- **Client-serveur** : Plusieurs clients accèdent à des ressources partagées.
- **LAN** : Réseau local dans une zone géographique restreinte.
- **Routeur** : Dirige les paquets vers leur destination.
- **Pare-feu** : Filtre les paquets entrants et sortants.
- **VPN** : Tunnel sécurisé pour les communications.
- **Adresse IP** : Identifiant numérique d'un appareil dans un réseau.
- **Virtualisation** : Plusieurs machines virtuelles sur un même serveur physique.
- **Cloud Public** : Gestion simplifiée sans infrastructure interne.
    `
  },
  "c3": {
    title: "Bases de Données & Modélisation",
    content: `
### 1. Concepts fondamentaux
- **SGBD** : Système de Gestion de Bases de Données (MySQL, Oracle).
- **Base relationnelle** : Données en tables interconnectées via des clés étrangères.
- **Schéma** : Structure des tables, relations et contraintes.
- **Tuple** : Une ligne (enregistrement) dans une table.

### 2. Les Clés et les Dépendances
- **Clé Primaire** : Identifie de manière unique chaque enregistrement.
- **Clé Étrangère** : Fait le lien entre deux tables relationnelles.
- **Dépendance fonctionnelle** : La valeur d'un attribut dépend d'un autre.

### 3. La Normalisation
Objectifs : minimiser la redondance et éviter les anomalies de mise à jour.

### 4. Modélisation MCD
- **Entité** : Rectangle. Identifiant souligné en premier.
- **Association** : Lien verbal dans un ovale. Peut avoir ses propres attributs.
- **Cardinalités** : (min, max). Ex: (0,n) (1,1).
- **Passage au MLD** : Relation (n,m) → nouvelle table. Relation (1,n)-(1,1) → migration de clé étrangère.

<div class="warning-box"><strong>Attention :</strong> Les clés étrangères n'apparaissent que dans le MLD, jamais dans le MCD.</div>
    `
  },
  "c4": {
    title: "Le Langage SQL",
    content: `
### 1. LDD (Langage de Définition des Données)
- Ajouter une colonne : ALTER TABLE t ADD COLUMN col type
- Créer depuis requête : CREATE TABLE t AS SELECT ...

### 2. GROUP BY
Obligatoire avec les fonctions d'agrégation (MAX, MIN, SUM, COUNT, AVG).

### 3. Les Jointures
- **NATURAL JOIN** : Lie deux tables ayant des colonnes du même nom.
- **LEFT JOIN** : Garde toutes les lignes de gauche. WHERE col IS NULL pour les orphelins.

### 4. Requêtes imbriquées
- IN / NOT IN pour filtrer avec une sous-requête.
- DELETE FROM Livres WHERE id NOT IN (SELECT DISTINCT id FROM Ventes)

### 5. Les Fonctions Stockées
- DELIMITER $$ pour changer le séparateur.
- DECLARE var TYPE pour déclarer une variable.
- SELECT ... INTO var pour stocker un résultat.
- RETURN var pour renvoyer le résultat.
    `
  }
};

const FICHES_DATA = {
  "c1": [
    {r:"WBS",v:"Work Breakdown Structure : Décomposition hiérarchique des livrables du projet."},
    {r:"Règle des 100%",v:"La WBS doit couvrir absolument 100% du travail défini par le périmètre du projet."},
    {r:"Work Package",v:"Lot de travail. Niveau le plus bas de la WBS, estimable en temps et en coût."},
    {r:"OBS",v:"Organization Breakdown Structure : Organigramme fonctionnel des équipes et responsabilités."},
    {r:"Matrice RACI",v:"Tableau issu du croisement WBS × OBS : Réalisateur, Approbateur, Consulté, Informé."},
    {r:"Phase",v:"Grand regroupement de tâches dans une WBS (ex: Conception, Développement, Déploiement)."},
    {r:"Jalon (Milestone)",v:"Point de contrôle clé dans le planning. Marque la fin d'une phase ou d'un livrable."},
    {r:"Livrable",v:"Produit tangible ou résultat mesurable d'une phase du projet."},
    {r:"Périmètre du projet",v:"L'ensemble du travail nécessaire pour livrer le produit final. Défini par la WBS."},
    {r:"Chef de Projet",v:"Responsable de la planification, de l'exécution et de la clôture du projet."},
    {r:"Estimation ascendante",v:"Méthode qui calcule le budget total en estimant chaque Work Package individuellement."},
    {r:"Décomposition",v:"Action de diviser un livrable en sous-composants plus petits et plus gérables."},
    {r:"Dictionnaire de la WBS",v:"Document décrivant chaque élément de la WBS (description, responsable, critères)."},
    {r:"Sponsor",v:"Personne ou groupe qui fournit les ressources financières pour le projet."},
    {r:"Arborescence",v:"Structure en arbre utilisée pour représenter visuellement la WBS et l'OBS."}
  ],
  "c2": [
    {r:"SI",v:"Système d'Information : Ensemble organisé pour collecter, traiter, stocker et diffuser l'info."},
    {r:"ERP",v:"Enterprise Resource Planning : Progiciel de gestion intégré (SAP, Oracle)."},
    {r:"Client-Serveur",v:"Modèle où des postes clients demandent des services à un serveur centralisé."},
    {r:"Routeur",v:"Équipement dirigeant les paquets de données vers leur bonne destination réseau."},
    {r:"VPN",v:"Virtual Private Network : Tunnel chiffré sécurisant les communications sur Internet."},
    {r:"Pare-feu (Firewall)",v:"Dispositif filtrant le trafic réseau entrant/sortant pour protéger le système."},
    {r:"Adresse IP",v:"Identifiant numérique unique d'un appareil sur un réseau (ex: 192.168.1.1)."},
    {r:"LAN",v:"Local Area Network : Réseau local connectant des machines dans une zone restreinte."},
    {r:"WAN",v:"Wide Area Network : Réseau étendu reliant des sites géographiquement éloignés (ex: Internet)."},
    {r:"Virtualisation",v:"Technologie permettant de créer plusieurs machines virtuelles sur un seul serveur physique."},
    {r:"Cloud Computing",v:"Fourniture de ressources informatiques à la demande via Internet (IaaS, PaaS, SaaS)."},
    {r:"IaaS",v:"Infrastructure as a Service : Le cloud fournit le matériel (serveurs, stockage, réseau)."},
    {r:"PaaS",v:"Platform as a Service : Le cloud fournit la plateforme de développement."},
    {r:"SaaS",v:"Software as a Service : Le cloud fournit le logiciel final (ex: Gmail, Office 365)."},
    {r:"DBA",v:"Database Administrator : Responsable de l'intégrité, performance et sauvegarde des BDD."}
  ],
  "c3": [
    {r:"SGBD",v:"Système de Gestion de Bases de Données (MySQL, PostgreSQL, Oracle)."},
    {r:"Clé Primaire",v:"Identifiant unique d'un enregistrement dans une table. Ne peut être NULL."},
    {r:"Clé Étrangère",v:"Attribut faisant référence à la clé primaire d'une autre table."},
    {r:"Tuple",v:"Une ligne (enregistrement) dans une table relationnelle."},
    {r:"Attribut",v:"Une colonne dans une table relationnelle (ex: Nom, Prénom, Email)."},
    {r:"Normalisation",v:"Processus réduisant la redondance et évitant les anomalies de mise à jour."},
    {r:"1FN",v:"1ère Forme Normale : Chaque attribut est atomique (pas de valeurs multiples)."},
    {r:"2FN",v:"2ème Forme Normale : 1FN + tout attribut non-clé dépend de la totalité de la clé primaire."},
    {r:"3FN",v:"3ème Forme Normale : 2FN + aucune dépendance transitive entre attributs non-clé."},
    {r:"MCD",v:"Modèle Conceptuel des Données : Schéma avec entités, associations et cardinalités."},
    {r:"MLD",v:"Modèle Logique des Données : Traduction du MCD en tables avec clés étrangères."},
    {r:"Cardinalité",v:"Couple (min,max) indiquant combien de fois une entité participe à une association."},
    {r:"Association (n,m)",v:"Relation plusieurs-à-plusieurs. Génère une table de liaison lors du passage au MLD."},
    {r:"Entité",v:"Objet du monde réel modélisé dans le MCD (rectangle avec attributs)."},
    {r:"Intégrité référentielle",v:"Contrainte garantissant qu'une clé étrangère pointe vers un enregistrement existant."}
  ],
  "c4": [
    {r:"SELECT",v:"Commande SQL pour extraire des données d'une ou plusieurs tables."},
    {r:"GROUP BY",v:"Clause obligatoire avec les fonctions d'agrégation (MAX, SUM, COUNT, AVG)."},
    {r:"LEFT JOIN",v:"Jointure gardant toutes les lignes de gauche, même sans correspondance (→ NULL)."},
    {r:"NATURAL JOIN",v:"Jointure automatique sur les colonnes ayant le même nom dans les deux tables."},
    {r:"NOT IN",v:"Opérateur excluant les valeurs retournées par une sous-requête."},
    {r:"DELIMITER $$",v:"Change le séparateur standard (;) pour coder des fonctions/procédures stockées."},
    {r:"WHERE vs HAVING",v:"WHERE filtre avant GROUP BY. HAVING filtre après le regroupement (sur les agrégats)."},
    {r:"DISTINCT",v:"Mot-clé éliminant les doublons dans le résultat d'un SELECT."},
    {r:"ALTER TABLE",v:"Commande LDD pour modifier la structure d'une table existante (ajouter/supprimer colonne)."},
    {r:"CREATE TABLE AS",v:"Crée une nouvelle table à partir du résultat d'une requête SELECT."},
    {r:"DELETE FROM",v:"Supprime des lignes d'une table selon une condition WHERE."},
    {r:"INSERT INTO",v:"Ajoute de nouvelles lignes dans une table."},
    {r:"UPDATE",v:"Modifie les valeurs d'une ou plusieurs colonnes dans des lignes existantes."},
    {r:"COUNT(DISTINCT x)",v:"Compte le nombre de valeurs uniques de x (élimine les doublons avant comptage)."},
    {r:"LIKE",v:"Opérateur de filtrage par motif. % = N caractères, _ = exactement 1 caractère."}
  ]
};
