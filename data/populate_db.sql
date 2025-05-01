BEGIN;

TRUNCATE TABLE "service",
"variation_service",
"service_question",
"question",
"service_advantage", 
"advantage",
"project",
"project_image",
"technology_project",
"technology";


INSERT INTO "service" ("id", "icon", "name", "slug", "card_description", "image", "short_description", "long_description") VALUES
(1, 'fa-solid fa-laptop-code', 'Création de Site Web', 'creation-site',
'Conception de sites vitrine WordPress ou sur-mesure (React/Next.js), avec des packs clairs et des options personnalisées.',
'2lct-description-creation-site.svg',
'Lancez votre présence en ligne avec un site professionnel, responsive et optimisé pour vos clients. Chaque site est pensé pour refléter votre identité et répondre à vos besoins réels.',
'Inclus : design personnalisé, optimisation mobile & SEO de base, accompagnement humain et formation à la prise en main.'
),

(2, 'fa-solid fa-hammer', 'Refonte & Optimisation', 'refonte-optimisation',
'Refonte graphique et/ou technique de votre site existant pour moderniser votre présence en ligne.',
'2lct-description-refonte-site.svg',
'Votre site n’est plus à jour ? Je vous propose une refonte ciblée ou globale, avec un audit UX et une optimisation des performances.',
'Inclus : audit technique/UX, refonte graphique ou structurelle, optimisation SEO, accompagnement sur mesure.'
),

(3, 'fa-solid fa-keyboard', ' Référencement naturel (SEO)', 'seo',
'Optimisation technique et éditoriale pour améliorer votre visibilité sur les moteurs de recherche.',
'2lct-description-seo.svg',
'Attirez les bons visiteurs au bon moment avec un site optimisé pour le référencement naturel.',
'Inclus : audit SEO, optimisation on-page et technique, stratégie de contenu, conseils mots-clés et netlinking (en option).'
),

(4, 'fa-solid fa-headset', 'Maintenance & Support', 'maintenance-support',
'Suivi technique, mises à jour, sécurité et évolutions pour garder votre site performant dans le temps.',
'2lct-description-maintenance.svg',
'Je vous accompagne dans la gestion technique de votre site avec des forfaits de maintenance adaptés à vos besoins.',
'Inclus : mises à jour régulières, corrections techniques, assistance réactive et suivi personnalisé.'
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

INSERT INTO "question" ("id", "question", "answer") VALUES
(1, 'Quel type de site web réalisez-vous ?', 'Je propose des sites vitrines, e-commerce et portfolios, tous personnalisés selon vos besoins.'),
(2, 'Combien de temps prend la création d’un site ?', 'En moyenne 3 à 4 semaines pour un site vitrine, un peu plus pour un e-commerce ou un projet sur mesure.'),
(3, 'Puis-je modifier mon site moi-même ?', 'Oui, je vous forme à l’utilisation de votre site via un CMS simple.'),

(4, 'Pourquoi refaire mon site ?', 'Parce qu’un site obsolète peut freiner votre crédibilité, votre référencement et vos conversions.'),
(5, 'Combien de temps dure une refonte ?', 'Entre 4 et 8 semaines selon l’ampleur des modifications.'),
(6, 'Une refonte est-elle forcément coûteuse ?', 'Pas forcément : je propose des audits pour cibler ce qu’il faut vraiment améliorer.'),

(7, 'Quand commencer le SEO ?', 'Le plus tôt possible ! Idéalement dès la création du site.'),
(8, 'Les résultats SEO sont-ils rapides ?', 'Non, ils apparaissent en général entre 3 et 6 mois.'),
(9, 'Le SEO fonctionne-t-il sur tous les sites ?', 'Oui, avec une stratégie adaptée à votre activité et votre cible.'),

(10, 'Pourquoi faire de la maintenance ?', 'Pour garantir la sécurité, les performances et la compatibilité de votre site.'),
(11, 'Quelle est la différence entre maintenance et support ?', 'La maintenance est préventive (mise à jour, sécurité), le support est curatif (bug, problème technique).'),
(12, 'Proposez-vous des forfaits ?', 'Oui, mensuels ou ponctuels selon vos besoins. Contactez-moi pour en discuter.');

INSERT INTO "service_question" ("service_id", "question_id") VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8), (3, 9),
(4, 10), (4, 11), (4, 12);

INSERT INTO "advantage" ("id", "name", "description") VALUES
(1, 'Site 100% Personnalisé', 'Chaque site est conçu sur mesure pour refléter votre identité et vos objectifs.'),
(2, 'Design Responsive', 'Votre site est optimisé pour tous les écrans, du mobile au desktop.'),
(3, 'Optimisé pour le SEO', 'Les meilleures pratiques SEO sont intégrées dès la création.'),

(4, 'Audit Complet', 'Je détecte les points faibles de votre site avant d’agir.'),
(5, 'Design Modernisé', 'Un look à jour qui inspire confiance et attire les visiteurs.'),
(6, 'Performances Améliorées', 'Votre site est plus rapide, plus clair et plus fluide.'),

(7, 'Plus de Visibilité', 'Votre site apparaît mieux dans les résultats de recherche.'),
(8, 'Contenu Stratégique', 'Des textes pensés pour séduire les moteurs et vos visiteurs.'),
(9, 'Trafic Ciblé', 'J’attire les bons visiteurs, ceux qui sont réellement intéressés.'),

(10, 'Sécurité Renforcée', 'Des mises à jour régulières pour éviter les failles.'),
(11, 'Support Réactif', 'Je suis dispo en cas de bug ou de problème technique.'),
(12, 'Sérénité Totale', 'Je m’occupe du site pendant que vous gérez votre activité.');

INSERT INTO "service_advantage" ("service_id", "advantage_id") VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8), (3, 9),
(4, 10), (4, 11), (4, 12);

INSERT INTO "project" ("id", "image", "name", "slug", "card_description", "short_description", "long_description") VALUES
(1, 'cabilat_homepage.png', 'Cabilat du Canton d''Oust', 'refonte-cabilat', 'Refonte du site institutionnel du Cabilat d''Oust sous WordPress', 'Modernisation du site vitrine du Cabilat, facilitant la navigation et la gestion de contenu.', 'Refonte complète du site officiel du Cabilat du Canton d’Oust. Objectif : proposer une interface claire, accessible et responsive pour les habitants et visiteurs. Intégration WordPress avec back-office personnalisé pour simplifier la gestion du contenu. Le design a été modernisé tout en respectant l''identité visuelle locale.'),
(2, 'lesbiscuitsdazas_homepage.png', 'Les Biscuits d''Azas', 'creation-biscuitsdazas', 'Création du site e-commerce Les Biscuits d''Azas avec React et Node.js', 'Boutique artisanale en ligne développée sur-mesure avec React et un back-end Node.js.', 'Site de vente en ligne pour une biscuiterie artisanale. Développé en React (frontend) avec une API Node.js (Express). Intégration de la gestion des produits, commandes, panier et paiement. L’interface est optimisée pour les mobiles avec une navigation fluide et chaleureuse pour refléter l’univers de la marque.'),
(3, '2lct_homepage.png', '2LCT', 'refonte-2lct', 'Refonte du site 2LCT avec Next.js', 'Refonte technique et visuelle du site de l''entreprise 2LCT spécialisée en logistique.', 'Mise à jour complète du site existant de 2LCT avec Next.js pour plus de performance et de modernité. Nouvelle charte graphique, sections clarifiées, SEO amélioré. Intégration responsive avec animations légères et code optimisé. L’objectif était de renforcer la crédibilité de la marque en ligne tout en améliorant l’expérience utilisateur.');

INSERT INTO "project_image" ("id", "image", "project_id") VALUES
(1, '2lct_homepage.jpg', 1),
(2, '2lct_services_page.jpg', 1),
(3, '2lct_contact_page.jpg', 1),
(4, '2lct_portfolio_page.jpg', 1),
(5, 'ecom_shop_homepage.jpg', 2),
(6, 'ecom_shop_product_page.jpg', 2),
(7, 'ecom_shop_checkout_page.jpg', 2),
(8, 'art_portfolio_gallery.jpg', 3),
(9, 'art_portfolio_about_page.jpg', 3),
(10, 'art_portfolio_contact_page.jpg', 3);


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
(1, 7),       -- WordPress
(2, 9),       -- React
(2, 4),       -- Node.js
(2, 23),      -- PostgreSQL
(3, 32),      -- Next.js
(3, 9),       -- React
(3, 33);      -- Tailwind CSS

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

