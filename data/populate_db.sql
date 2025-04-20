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
'Je conçois des sites vitrines, e-commerce ou portfolios sur-mesure, pensés pour valoriser votre activité et faciliter la navigation.',
'2lct-description-creation-site.svg',
'Lancez votre présence en ligne avec un site professionnel, responsive et optimisé pour vos clients. Chaque site est pensé pour refléter votre identité et répondre à vos besoins réels.',
'Inclus : design personnalisé, optimisation mobile & SEO de base, accompagnement humain et formation à la prise en main.'
),

(2, 'fa-solid fa-hammer', 'Refonte & Optimisation', 'refonte-optimisation',
'Modernisez votre site existant avec une refonte graphique, technique ou complète.',
'2lct-description-refonte-site.svg',
'Votre site n’est plus à jour ? Je vous propose une refonte ciblée ou globale, avec un audit UX et une optimisation des performances.',
'Inclus : audit technique/UX, refonte graphique ou structurelle, optimisation SEO, accompagnement sur mesure.'
),

(3, 'fa-solid fa-keyboard', 'Visibilité & Référencement', 'visibilite-seo',
'Améliorez votre positionnement sur Google grâce à une optimisation SEO complète.',
'2lct-description-seo.svg',
'Attirez les bons visiteurs au bon moment avec un site optimisé pour le référencement naturel.',
'Inclus : audit SEO, optimisation on-page et technique, stratégie de contenu, conseils mots-clés et netlinking (en option).'
),

(4, 'fa-solid fa-headset', 'Maintenance & Support', 'maintenance-support',
'Gardez votre site rapide, sécurisé et toujours opérationnel avec une maintenance fiable.',
'2lct-description-maintenance.svg',
'Je vous accompagne dans la gestion technique de votre site avec des forfaits de maintenance adaptés à vos besoins.',
'Inclus : mises à jour régulières, corrections techniques, assistance réactive et suivi personnalisé.'
);

INSERT INTO "variation_service" ("id", "name", "service_id") VALUES
(1, 'Site Vitrine', 1),
(2, 'Site E-commerce', 1),
(3, 'Portfolio Créatif', 1),

(4, 'Audit Technique', 2),
(5, 'Audit UX/UI', 2),
(6, 'Refonte Graphique', 2),
(7, 'Refonte Technique', 2),

(8, 'SEO On-page', 3),
(9, 'SEO Technique', 3),
(10, 'Stratégie de Contenu', 3),
(11, 'Netlinking', 3),

(12, 'Maintenance Préventive', 4),
(13, 'Maintenance Corrective', 4),
(14, 'Support Technique', 4);

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
(1, '2lct-image.png', '2lct', 'refonte-2lct', 'Refonte complète du site 2lct', '2lct est un projet de refonte visant à moderniser le site d’une entreprise spécialisée dans la gestion de la logistique et du transport.', 'Le projet 2lct avait pour objectif de repenser complètement le site existant. J''ai travaillé sur l''optimisation de l''expérience utilisateur, en améliorant l''interface de navigation, l''ergonomie, ainsi que la performance du site. J''ai également intégré des fonctionnalités spécifiques pour simplifier la gestion des transports et logistiques, tout en améliorant la visibilité de l''entreprise sur le web. Cette refonte a permis une meilleure interaction avec les clients et a optimisé les processus internes.'),
(2, 'ecom_shop_image.jpg', 'Ecom Shop', 'creation-ecomshop', 'Création d''une boutique en ligne moderne', 'Ecom Shop est un site de e-commerce développé pour une marque de vêtements. Le projet incluait un design responsive et une optimisation SEO.', 'Ecom Shop est un projet de développement complet d’une boutique en ligne. J''ai travaillé sur la création d''un site intuitif et visuellement attractif pour permettre aux utilisateurs de parcourir et d’acheter facilement des produits. J''ai aussi intégré un système de paiement sécurisé, un module de gestion des stocks et un tableau de bord personnalisé pour suivre les ventes. L''optimisation SEO a amélioré la visibilité du site, attirant plus de clients.'),
(3, 'art_portfolio_image.jpg', 'Art Portfolio', 'creation-artportfolio', 'Site portfolio pour un artiste contemporain', 'Art Portfolio est un projet destiné à un artiste souhaitant présenter ses œuvres en ligne via une interface moderne et élégante.', 'Le projet Art Portfolio consistait à créer un site web mettant en valeur les œuvres d''un artiste. J''ai conçu une galerie visuelle dynamique, permettant aux utilisateurs de visualiser des œuvres avec des descriptions détaillées et des images haute résolution. J''ai également intégré une section blog et un formulaire de contact personnalisé pour faciliter la communication entre l''artiste et ses admirateurs. Le design épuré et minimaliste reflète parfaitement l''identité visuelle de l''artiste.'),
(4, 'startup_hub_image.jpg', 'Startup Hub', 'refonte-startuphub', 'Refonte du site pour une startup tech', 'Startup Hub est un projet de refonte d''un site pour une entreprise tech, améliorant l''UX et la présentation des services.', 'Startup Hub était un projet de refonte complète d''un site internet pour une startup dans le domaine de la technologie. Le site a été repensé pour offrir une navigation fluide et intuitive, avec une mise en avant des services technologiques proposés par l’entreprise. J''ai optimisé le parcours utilisateur et implémenté une stratégie de contenu pour mieux convertir les visiteurs en clients. De plus, j''ai intégré des fonctionnalités de blog et de newsletter pour permettre à l’entreprise de garder ses utilisateurs informés des dernières innovations.'),
(5, 'fitness_blog_image.jpg', 'Fitness Blog', 'creation-fitnessblog', 'Création d''un blog pour une coach fitness', 'Fitness Blog est un projet de création de blog pour une coach fitness, avec des articles optimisés SEO et des vidéos d''entraînement.', 'Le projet Fitness Blog visait à créer une plateforme en ligne pour une coach fitness, où elle pourrait partager ses conseils et programmes d''entraînement. Le site inclut une section blog, des vidéos d’entraînement intégrées, ainsi qu’un calendrier des sessions de coaching. J''ai optimisé le site pour les moteurs de recherche afin de capter un trafic qualifié et encourager la conversion des visiteurs en clients. Le design dynamique et énergique reflète l''esprit de la coach et incite les utilisateurs à s''inscrire à ses services de coaching.'),
(6, 'consultancy_site_image.jpg', 'Consultancy Pro', 'creation-consultancypro', 'Site vitrine pour un consultant en business', 'Consultancy Pro est un site vitrine créé pour un consultant en stratégie d''entreprise, avec une présentation claire des services et une section contact.', 'Consultancy Pro est un site vitrine conçu pour un consultant en business qui souhaitait mettre en avant ses services de manière professionnelle. Le site propose une navigation simple avec des sections dédiées à ses différentes expertises, des témoignages clients et un formulaire de prise de contact. J''ai conçu un design élégant et moderne, en accord avec l''image professionnelle que le consultant souhaitait véhiculer. Des fonctionnalités telles que l''intégration de calendriers pour les rendez-vous en ligne et une section blog ont été ajoutées pour augmenter l''interaction avec ses clients potentiels.');

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
(10, 'art_portfolio_contact_page.jpg', 3),
(11, 'startup_hub_services.jpg', 4),
(12, 'startup_hub_team_page.jpg', 4),
(13, 'startup_hub_contact.jpg', 4),
(14, 'fitness_blog_workout.jpg', 5),
(15, 'fitness_blog_nutrition_tips.jpg', 5),
(16, 'fitness_blog_testimonials.jpg', 5),
(17, 'consultancy_pro_homepage.jpg', 6),
(18, 'consultancy_pro_services_page.jpg', 6),
(19, 'consultancy_pro_testimonials.jpg', 6),
(20, 'consultancy_pro_contact_page.jpg', 6);


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
(31, 'fa-brands fa-ubuntu', 'Ubuntu');


INSERT INTO "technology_project" ("project_id", "technology_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 10),
(1, 11),
(1, 12),
(1, 14),
(1, 16),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 10),
(2, 11),
(2, 12),
(2, 14),
(2, 16),
(2, 17),
(2, 21),
(2, 22),
(2, 23),
(2, 24),
(2, 28),
(2, 29),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(5, 3),
(5, 4);

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

