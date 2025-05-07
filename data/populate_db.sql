BEGIN;

TRUNCATE TABLE 
"variation_detail",
"detail_variation_service",
"service" ,
"variation_service",
"service_question",
"question",
"service_advantage", 
"advantage",
"project",
"project_image",
"technology_project",
"technology" ;


INSERT INTO "service" ("id", "icon", "name", "slug", "card_description", "image", "short_description", "long_description") VALUES
(1, 'fa-solid fa-laptop-code', 'Création de Site Web', 'creation-site',
'Des sites modernes, sur-mesure, bien pensés. WordPress ou dev spécifique, selon vos besoins.',
'2lct-description-creation-site.svg',
'Je conçois des sites vitrines professionnels, efficaces et modernes.
Chaque site est adapté à votre activité, vos objectifs et votre image.
Je propose des packs clairs, avec un accompagnement sur-mesure.
Votre site est responsive, rapide et prêt à évoluer.
WordPress ou développement sur-mesure selon vos besoins.',
'Je réalise des sites internet professionnels, clairs, élégants et performants.
Chaque projet commence par un échange pour cerner vos attentes.
Je propose WordPress pour la simplicité ou développement sur-mesure pour la performance.
Je conçois le design, j’intègre le contenu, je structure pour le SEO.
Chaque site est responsive, rapide à charger, facile à faire évoluer.
Formulaires, blog, galerie, CMS : tout est personnalisable.
Votre site devient un vrai outil de communication, pensé pour durer.
Un accompagnement complet, du début à la mise en ligne.'
),

(2, 'fa-solid fa-hammer', 'Refonte & Optimisation', 'refonte-optimisation',
'Modernisez votre site actuel. Nouveau design, meilleures performances, plus de visibilité.',
'2lct-description-refonte-site.svg',
'Votre site est en ligne, mais il ne vous ressemble plus ou ne performe pas ?
Je vous propose une refonte visuelle et/ou technique.
Objectif : un site plus rapide, plus lisible, plus efficace.
Je retravaille le design, le contenu et l’expérience utilisateur.
Votre site devient un vrai levier digital.',
'Je modernise les sites existants pour les rendre plus attractifs et plus performants.
Refonte graphique pour un design actuel, responsive et élégant.
Optimisation technique pour améliorer la vitesse et la structure.
Meilleure hiérarchisation des contenus, meilleure lisibilité.
Adaptation aux normes SEO pour remonter dans les résultats Google.
Je vous accompagne de l’audit à la mise en ligne.
Votre site devient plus clair, plus efficace, plus crédible.
Pas besoin de repartir de zéro pour repartir du bon pied.'
),

(3, 'fa-solid fa-keyboard', ' Référencement naturel (SEO)', 'seo',
'Améliorez votre position sur Google.
Contenu, technique, performance : un SEO solide.',
'2lct-description-seo.svg',
'Un bon site doit être visible.
Je vous accompagne pour améliorer votre référencement naturel.
Je travaille les mots-clés, les contenus, les balises et la structure.
L’objectif : plus de visiteurs, mieux ciblés, sans pub payante.
Un SEO clair, propre, durable.',
'e vous aide à améliorer votre positionnement sur Google grâce au référencement naturel.
J’analyse votre site, vos contenus, vos mots-clés et votre structure technique.
Je retravaille les titres, balises, textes, images et vitesse de chargement.
Je mets en place un maillage interne efficace et une hiérarchie claire.
Le SEO permet d’attirer des visiteurs qualifiés sans budget publicitaire.
Je vous propose une stratégie adaptée à votre activité et vos objectifs.
Votre site devient plus visible, plus crédible, plus performant.
Un vrai levier de trafic, durable et rentable.'
),

(4, 'fa-solid fa-headset', 'Maintenance & Support', 'maintenance-support',
'Un site qui tourne sans souci.
Mises à jour, sécurité, évolutions.',
'2lct-description-maintenance.svg',
'Je m’occupe de la santé de votre site au quotidien.
Mises à jour, sauvegardes, surveillance sécurité, support technique.
Vous avez l’esprit tranquille, je gère les aspects techniques.
Je reste disponible pour faire évoluer votre site.
Un accompagnement fiable, à long terme.',
'Un site professionnel doit rester sécurisé, stable et performant.
Je propose un service de maintenance pour vous libérer des tâches techniques.
Je réalise les mises à jour WordPress, plugins, ou dépendances.
Je mets en place des sauvegardes automatiques et des outils de surveillance.
Je corrige les bugs rapidement, je reste disponible pour toute question.
Je propose aussi des évolutions techniques ou fonctionnelles selon vos besoins.
Votre site est entre de bonnes mains, avec un vrai suivi humain.
Moins de stress, plus de fiabilité.'
);

INSERT INTO "variation_service" ("id", "name", "wordpress_price","development_price", "service_id") VALUES
(1, 'Pack page unique', '950 €', '1 100 €', 1),
(2, 'Pack site simple', '1 500 €', '1 700 €', 1),
(3, 'Pack site avancé', '2 600 €', '3 200 €', 1),
(4, 'Options disponibles',NULL, NULL, 1),

(5, 'Pack mini optimisation', '300 €', '350 €', 2),
(6, 'Pack refonte graphique', '1 200 €', '1 400 €', 2),
(7, 'Pack refonte graphique et technique', '1 800 €', '2 200€', 2),
(8, 'Options disponibles',NULL, NULL, 2),

(9, 'Pack SEO de base', '400 €', '400 €', 3),
(10, 'Pack SEO complet', '750 €', '750 €', 3),
(11, 'Pack SEO et Rédaction 3 pages', '1 100 €', '1 100€', 3),
(12, 'Options disponibles',NULL, NULL, 3),

(13, 'Maintenance de base', '30 € / mois', '35 € /mois', 4),
(14, 'Maintenance avancée', '60 € / mois', '65 € /mois', 4),
(15, 'Maintenance premium', '90 € / mois', '95 € /mois', 4);

INSERT INTO "detail_variation_service" ("id", "name") VALUES
(1,'Arborescence & zoning'),
(2, 'Wireframe par page'),
(3, 'Design page accueil'),
(4, 'Intégration accueil'),
(5, 'Responsive par page'),
(6, 'Formulaire de contact basique'),
(7, 'SEO de base'),
(8, 'Configuration + Mise en ligne'),
(9, 'Wireframes pour 3 pages principales'),
(10, 'Design des pages intérieures (2 pages)'),
(11,'Intégration pages intérieures'),
(12,'Responsive'),
(13,'Wireframes pour 5 pages principales'),
(14,'Design des pages intérieures (4 pages)'),
(15,'Formulaire de contact avancé'),
(16,'Blog'),
(17,'Galerie'),
(18,'SEO avancé'),
(19,'Formation client'),
(20,'Page supplémentaire'),
(21,'Compte client'),
(22,'E-commerce simple (max 10 produits)'),
(23,'E-commerce complet (max 50 produits)'),
(24,'Dashboard client personnalisé'),
(25,'Back-office personnalisé'),
(26,'Optimisation performances avancées'),
(27,'Mise en conformité RGPD simplifiée'),
(28,'Accessibilité légère'),
(29,'Animation spécifique'),
(30,'Fonctionnalité spécifique'),
(31,'Audit SEO + performances'),
(32,'Optimisation SEO de base'),
(33,'Optimisation performance rapide'),
(34,'Audit site existant'),
(35,'Intégration front (3 pages)'),
(36, 'Wireframes 5 pages principales'),
(37,'Intégration front (5 pages)'),
(38,'Accessibilité RGAA'),
(39,'Mise en conformité RGPD'),
(40,'Audit SEO technique simplifié'),
(41,'Optimisation métadonnées (title/description)'),
(42,'Optimisation structure Hn (titres)'),
(43,'Google Analytics + Search Console'),
(44,'Rapport simple'),
(45,'Audit SEO complet'),
(46,'Recherche mots-clés ciblés'),
(47,'Maillage interne optimisé'),
(48,'Plan du site XML + robots.txt'),
(49,'Google Analytics + Search Console'),
(50,'Rapport final + conseils évolutifs'),
(51,'Tout le Pack SEO complet'),
(52,'Rédaction optimisée 3 pages principales'),
(53,'Rédaction SEO page supplémentaire'),
(54,'Optimisation d''image SEO (balises alt)'),
(55,'SEO local Google My Business'),
(56,'SEO mensuel (optimisation & rapport)'),
(57,'Mise à jour CMS & plugins chaque mois'),
(58,'Sauvegarde externe mensuelle'),
(59,'Mise à jour de sécurité trimestrielle'),
(60,'Sauvegarde hebdomadaire'),
(61,'Mise à jour sécurité mensuelle'),
(62,'Monitoring uptime'),
(63,'2 interventions correctives/an'),
(64,'Toutes les actions du Pack Évolutif'),
(65,'5 interventions correctives/an'),
(66,'Prise en charge des incidents en priorité');

INSERT INTO "variation_detail" ("variation_id" , "detail_id" ) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(2,1),
(2,9),
(2,3),
(2,10),
(2,4),
(2,11),
(2,12),
(2,6),
(2,7),
(2,8),
(3,1),
(3,13),
(3,3),
(3,14),
(3,4),
(3,11),
(3,12),
(3,15),
(3,16),
(3,17),
(3,18),
(3,19),
(3,8),
(4,20),
(4,15),
(4,16),
(4,17),
(4,21),
(4,22),
(4,23),
(4,24),
(4,25),
(4,26),
(4,18),
(4,27),
(4,28),
(4,29),
(4,30),
(5,31),
(5,32),
(5,33),
(6,34),
(6,1),
(6,3),
(6,10),
(6,35),
(6,12),
(6,8),
(7,34),
(7,1),
(7,36),
(7,3),
(7,14),
(7,12),
(7,7),
(7,26),
(7,8),
(8,20),
(8,18),
(8,38),
(8,39),
(8,29),
(9,40),
(9,41),
(9,42),
(9,43),
(9,44),
(10,45),
(10,46),
(10,41),
(10,42),
(10,47),
(10,48),
(10,49),
(10,50),
(11,51),
(11,52),
(12,53),
(12,54),
(12,55),
(12,56),
(13,57),
(13,58),
(13,59),
(14,57),
(14,60),
(14,61),
(14,62),
(14,63),
(15,64),
(15,65),
(15,66);

INSERT INTO "question" ("id", "question", "answer") VALUES
(1, 'Quels types de sites proposez-vous ?', 'Je propose des sites vitrines, one page ou multi-pages, sur WordPress ou en développement sur-mesure, selon vos objectifs et votre budget.'),
(2, 'Quelle est la différence entre WordPress et le développement sur-mesure ?', 'WordPress est plus rapide à mettre en place et facile à modifier. Le développement sur-mesure offre plus de flexibilité, de performance et de personnalisation.'),
(3, 'Combien coûte un site ?', 'Les tarifs dépendent du type de site, du nombre de pages, des fonctionnalités et des options choisies. Je propose des packs clairs et des devis sur mesure.'),
(4, 'Combien de temps faut-il pour créer un site ?', 'En moyenne, entre 2 et 6 semaines selon la complexité du projet. Je vous donne un planning précis avant le démarrage.'),
(5, 'Le site sera-t-il optimisé pour le SEO et le mobile ?', 'Oui, tous mes sites sont responsive et incluent une optimisation SEO de base (balises, vitesse, structure).'),

(6, 'Quand faut-il envisager une refonte de site ?', 'Quand le design est dépassé, que le site est lent, non responsive, mal référencé ou ne reflète plus votre activité actuelle.'),
(7, 'Dois-je repartir de zéro pour une refonte ?', 'Pas forcément. Je peux conserver ce qui fonctionne et améliorer le reste : design, structure, performance, SEO.'),
(8, 'Comment se déroule une refonte ?', 'Je commence par un audit complet, puis on valide une nouvelle arborescence, un design et un plan d’action. Ensuite je m’occupe de tout.'),
(9, 'Le contenu du site sera-t-il retravaillé ?', 'Oui, si besoin. Je vous aide à reformuler les textes pour plus d’impact, de clarté et de pertinence SEO.'),
(10, 'Une refonte améliore-t-elle vraiment le référencement ?', 'Oui, car on repart sur une base saine, rapide et structurée, avec un contenu optimisé et une hiérarchie claire.'),

(11, 'Le SEO est-il inclus dans la création du site ?', 'Oui, une optimisation de base est prévue : structure, balises, performance. Je propose aussi des options SEO avancées.'),
(12, 'Est-ce que le SEO fonctionne sur un site WordPress ?', 'Oui, très bien, surtout avec un thème bien conçu et des contenus optimisés. Je configure les bons outils dès le départ.'),
(13,'Peut-on améliorer le SEO d’un site existant ?','Bien sûr. J’analyse le site, les mots-clés, la structure et je vous propose des optimisations concrètes.'),
(14,'Combien de temps faut-il pour voir des résultats ?','Le SEO prend du temps. On commence à voir des effets au bout de 2 à 6 mois selon la concurrence et l’effort fourni.'),
(15,'Proposez-vous un accompagnement SEO ?','Oui, sous forme de missions ponctuelles ou de suivi mensuel, avec rapports, conseils et ajustements réguliers.'),

(16,'Pourquoi la maintenance est-elle importante ?','Pour garder votre site sécurisé, à jour, rapide et compatible avec les navigateurs et outils actuels.'),
(17,'Qu’inclut votre maintenance ?','Mises à jour, sauvegardes, veille sécurité, correctifs techniques et support en cas de souci.'),
(18,'Intervenez-vous si je rencontre un bug ?','Oui, je suis réactive en cas de problème technique, que vous soyez sous maintenance ou ponctuellement en demande.'),
(19,'Puis-je ajouter la maintenance après la création du site ?','Oui, à tout moment. Je propose plusieurs formules selon vos besoins.'),
(20,'Y a-t-il un engagement sur la durée ?','Non. Vous pouvez choisir une intervention ponctuelle, un mois d’essai, ou un abonnement mensuel sans engagement.');

INSERT INTO "service_question" ("service_id", "question_id") VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
(2, 6), (2, 7), (2, 8), (2, 9), (2, 10),
(3, 11), (3, 12), (3, 13), (3, 14), (3, 15),
(4, 16), (4, 17), (4, 18), (4, 19), (4, 20);

INSERT INTO "advantage" ("id", "name", "description") VALUES
(1, 'Site 100% Personnalisé', 'Chaque site est conçu sur mesure pour refléter votre identité et vos objectifs.'),
(2, 'Design Responsive', 'Votre site est optimisé pour tous les écrans, du mobile au desktop.'),
(3, 'Optimisé pour le SEO', 'Les meilleures pratiques SEO sont intégrées dès la création.'),
(4, 'Expérience Utilisateur Fluide', 'Navigation intuitive pour convertir les visiteurs en clients.'),
(5, 'Identité Visuelle Cohérente', 'Le design est en harmonie avec votre branding et vos valeurs.'),

(6, 'Audit Complet', 'Je détecte les points faibles de votre site avant d’agir.'),
(7, 'Design Modernisé', 'Un look à jour qui inspire confiance et attire les visiteurs.'),
(8, 'Performances Améliorées', 'Votre site est plus rapide, plus clair et plus fluide.'),
(9, 'Optimisation Technique', 'Je nettoie le code, j’optimise la structure, pour de meilleures bases.'),
(10, 'Contenu Réajusté', 'Vos textes sont retravaillés pour être plus efficaces et engageants.'),

(11, 'Plus de Visibilité', 'Je suis dispo en cas de bug ou de problème technique.'),
(12, 'Contenu Stratégique', 'Je m’occupe du site pendant que vous gérez votre activité.'),
(13,'Trafic Ciblé','J’attire les bons visiteurs, ceux qui sont réellement intéressés.'),
(14,'Hiérarchie Optimisée','Une structure claire qui aide les moteurs à comprendre votre site.'),
(15,'Suivi & Ajustement','Des recommandations évolutives selon vos résultats SEO.'),

(16,'Sécurité Renforcée','Des mises à jour régulières pour éviter les failles.'),
(17,'Support Réactif','Je suis dispo en cas de bug ou de problème technique.'),
(18,'Sérénité Totale','Je m’occupe du site pendant que vous gérez votre activité.'),
(19,'Mises à Jour Sans Douleur','Tout est testé et validé avant d’être mis en ligne.'),
(20,'Monitoring Proactif','Je surveille les indicateurs techniques clés pour anticiper les problèmes.');

INSERT INTO "service_advantage" ("service_id", "advantage_id") VALUES
(1, 1),  
(1, 2),  
(1, 3),  
(1, 4),  
(1, 5),  

(2, 6),  
(2, 7),  
(2, 8),  
(2, 9),  
(2, 10), 

(3, 11), 
(3, 12), 
(3, 13), 
(3, 14), 
(3, 15), 

(4, 16), 
(4, 17), 
(4, 18), 
(4, 19), 
(4, 20);
INSERT INTO "project" ("id", "image", "name", "slug", "card_description", "short_description", "long_description") VALUES
(1, 'cabilat_homepage.png', 'Cabilat du Canton d''Oust', 'refonte-cabilat',
'Refonte du site institutionnel du Cabilat d''Oust sous WordPress',
'Modernisation du site vitrine du Cabilat, facilitant la navigation et la gestion de contenu.',
'
Refonte complète du site du <b>Cabilat du Canton d''Oust</b>, une association de pêche ariégeoise. L’ancien site était un <b>Joomla gratuit</b> peu visible sur les moteurs de recherche. Le besoin : <b>améliorer la visibilité</b> en ligne, moderniser le design et <b>faciliter la gestion du contenu</b>.<br><br>

Le site s’adresse aux <b>pêcheurs</b> en recherche de <b>coins de pêche</b> ou d’une <b>carte d’adhésion</b>. Il contient <b>6 pages</b> : accueil, présentation, actualités, points de vente, zones de pêche et galerie photos. J’ai structuré l’arborescence, <b>rédigé tous les contenus</b> et assuré leur cohérence SEO.<br><br>

Le site a été conçu sous <b>WordPress</b>, avec un <b>back-office adapté</b> permettant à l’association de mettre à jour facilement les actualités et photos.<br><br>

J’ai imaginé une <b>identité graphique complète</b> (palette, typographie, icônes) à partir du logo existant, en utilisant <b>Canva</b> et <b>Coolors</b>. Le site est <b>responsive</b>, <b>optimisé SEO</b>, et <b>hébergé</b> par mes soins.<br><br>

Une <b>formation rapide</b> a été donnée aux membres de l’association pour garantir leur autonomie. Résultat : une <b>meilleure visibilité en ligne</b>, un site accessible depuis Google, et une image plus professionnelle.
'),
(2, 'lesbiscuitsdazas_homepage.png', 'Les Biscuits d''Azas', 'creation-biscuitsdazas',
'Création du site e-commerce Les Biscuits d''Azas avec React et Node.js',
'Boutique artisanale en ligne développée sur-mesure avec React et un back-office Node.js.',
'
Le site <b>Les Biscuits d''Azas</b> a été créé pour une <b>biscuiterie artisanale</b> qui ne disposait pas encore de site vitrine. L’objectif : offrir une <b>meilleure visibilité</b> que celle des réseaux sociaux, et surtout <b>simplifier la prise de commande</b> (qui se faisait jusque-là uniquement par message privé).<br><br>

Le site s’adresse aux <b>habitants des villages autour d’Azas (31380)</b>. Il devait être <b>simple, rapide et fluide</b> pour que les visiteurs découvrent facilement les produits et puissent passer commande. La <b>page de réservation</b> est une vraie <b>interface de commande dynamique</b> : formulaire d’identité, sélection des produits, calcul automatique, retrait ou livraison selon la zone, filtrage par code postal…<br><br>

J’ai conçu un <b>back-office sur-mesure</b> permettant à la cliente de gérer : les <b>produits</b>, la <b>galerie</b>, les <b>actualités</b>, et les <b>commandes</b>. Le système déclenche des <b>emails automatiques</b>.<br><br>

J’ai également rédigé tout le contenu, conçu les maquettes dans <b>Figma</b>, et développé le site en <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>Sequelize</b> et <b>PostgreSQL</b>.<br><br>

Le site est <b>rapide</b>, <b>responsive</b>, <b>accessible</b> et <b>référencé</b> (SEO). Il est en ligne et hébergé par mes soins. Une <b>formation post-livraison</b> a été faite pour garantir l’autonomie de la cliente.<br><br>

Aujourd’hui, <b>le site est visible</b> sur Google et les commandes se font directement en ligne.
'),
(3, '2lct_homepage.png', '2LCT', 'refonte-2lct',
'Refonte du site 2LCT avec Next.js',
'Refonte technique et visuelle du site de mon auto-entreprise 2LCT, spécialisée en création et refonte de sites web.',
'
<b>Refonte complète</b> du site vitrine <b>2LCT</b>, mon auto-entreprise spécialisée dans la <b>création</b> et la <b>refonte</b> de sites web. Cette refonte visait à mettre en cohérence l’image du site avec ma <b>stratégie globale</b>, mes <b>valeurs</b> et mon <b>positionnement professionnel</b>. Elle m’a également permis de montrer concrètement mes <b>compétences techniques</b> en <b>Next.js</b> et <b>Tailwind CSS</b>.<br><br>

Le site s’adresse aux <b>entrepreneurs, artisans, indépendants</b> et <b>petites entreprises</b>, et a été pensé pour leur permettre de :<br>
– comprendre rapidement mon offre,<br>
– se projeter dans leur propre projet digital,<br>
– et me contacter facilement.<br><br>

Le site comprend <b>6 pages principales</b> (accueil, prestations, portfolio, gestion de projet, à propos, contact), avec un <b>formulaire de contact optimisé</b> et des pages de services structurées pour le <b>référencement naturel (SEO)</b>.<br>
Le <b>contenu</b> a été entièrement <b>rédigé et structuré</b> par moi.<br><br>

Côté design, j’ai réalisé une <b>refonte graphique complète</b> : <b>nouveau logo</b>, <b>palette de couleurs</b>, <b>typographie</b> et <b>iconographie</b>. J’ai utilisé <b>Figma</b> pour les maquettes et <b>Canva</b> pour la communication visuelle.<br><br>

Le site a été développé avec <b>Next.js</b>, <b>Tailwind CSS</b> et est entièrement <b>responsive</b>, <b>rapide</b>, <b>accessible</b> et <b>léger</b>. Il n’intègre pas de back-office, car je gère moi-même les contenus et l’infrastructure.<br><br>

J’ai pris en charge <b>l’hébergement</b> et la <b>mise en ligne</b>, avec pour objectif une <b>expérience utilisateur fluide</b> et une <b>image professionnelle forte</b>.<br><br>

Aujourd’hui, ce site représente ma <b>vitrine</b>, mon <b>terrain d’expérimentation</b> et un <b>support de démonstration client</b>. Il reflète ma <b>vision du web</b> : <b>clair, moderne, humain et performant</b>.
');

INSERT INTO "project_image" ("id", "image", "project_id") VALUES
(1, 'cabilat_homepage.png', 1),
(2, 'cabilat_a_propos.png', 1),
(3, 'cabilat_actualites.png', 1),
(4, 'cabilat_ou_pecher.png', 1),

(5, 'lesbiscuitsdazas_homepage.png', 2),
(6, 'lesbiscuitsdazas_liste_produits.png', 2),
(7, 'lesbiscuitsdazas_detail_biscuits.png', 2),
(8, 'lesbiscuitsdazas_reservation.png', 2),

(9, '2lct_homepage.png', 3),
(10, '2lct_page_detail_presta.png', 3),
(11, '2lct_portfolio.png',3),
(12, '2lct_homepage.png',3);


INSERT INTO "technology" ("id", "icon", "name") VALUES
(1, 'fa-brands fa-html5', 'HTML'),
(2, 'fa-brands fa-css3-alt', 'CSS'),
(3, 'fa-brands fa-js-square', 'JavaScript'),
(4, 'fa-brands fa-node', 'Node.js'),
(5, 'fa-brands fa-js-square', 'Express'),
(6, 'fa-solid fa-database', 'Sequelize'),
(7, 'fa-brands fa-wordpress', 'WordPress'),
(8, 'fa-solid fa-cart-shopping', 'Magento'),
(9, 'fa-brands fa-react', 'React'),
(10, 'fa-solid fa-laptop-code', 'Responsive Design'),
(11, 'fa-solid fa-file-code', 'Web Development'),
(12, 'fa-solid fa-server', 'Web Hosting'),
(13, 'fa-brands fa-docker', 'Docker'),
(14, 'fa-brands fa-trello', 'Trello'),
(15, 'fa-brands fa-slack', 'Slack'),
(16, 'fa-brands fa-git-alt', 'Git'),
(17, 'fa-solid fa-search', 'Semrush'),
(18, 'fa-solid fa-chart-line', 'Google Analytics'),
(19, 'fa-solid fa-bullhorn', 'Google Ads'),
(20, 'fa-brands fa-google', 'Google My Business'),
(21, 'fa-brands fa-google', 'Google Search Console'),
(22, 'fa-brands fa-microsoft', 'Microsoft Office'),
(23, 'fa-solid fa-database', 'PostgreSQL'),
(24, 'fa-brands fa-figma', 'Figma'),
(25, 'fa-solid fa-cloud-upload-alt', 'FTP'),
(26, 'fa-solid fa-pen-nib', 'Content Creation'),
(27, 'fa-solid fa-search-dollar', 'SEO'),
(28, 'fa-solid fa-paint-brush', 'Canva'),
(29, 'fa-brands fa-npm', 'npm'),
(30, 'fa-brands fa-windows', 'Windows OS'),
(31, 'fa-brands fa-ubuntu', 'Ubuntu'),
(32, 'fa-brands fa-react', 'Next.js'),
(33, 'fa-solid fa-wind', 'Tailwind CSS');


INSERT INTO "technology_project" ("project_id", "technology_id") VALUES
(1, 7), 
(1,27),
(1,10),
(1,28),
(1,12),      
(2, 9),       
(2, 4),       
(2, 5), 
(2,23),
(2,1),
(2,2),
(2,3),
(2,24),
(2,16),
(2,27),
(2,12),     
(3, 32),      
(3, 33),       
(3, 1),
(3,2),
(3,3),
(3,16),
(3,24),
(3,28),
(3,27),
(3,10),
(3,12);      

COMMIT;

 
BEGIN;

SELECT setval('service_id_seq', (SELECT MAX(id) from "service"));
SELECT setval('variation_service_id_seq', (SELECT MAX(id) from "variation_service"));
SELECT setval('question_id_seq', (SELECT MAX(id) from "question"));
SELECT setval('advantage_id_seq', (SELECT MAX(id) from "advantage"));
SELECT setval('project_id_seq', (SELECT MAX(id) from "project"));
SELECT setval('project_image_id_seq', (SELECT MAX(id) from "project_image"));
SELECT setval('technology_id_seq', (SELECT MAX(id) from "technology"));

COMMIT;

