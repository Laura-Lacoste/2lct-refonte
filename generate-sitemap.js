import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'node:stream';
import * as fs from 'node:fs';

// Déclare les liens statiques
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/a-propos', changefreq: 'monthly', priority: 0.8 },
  { url: '/prestations', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },

  // Routes dynamiques à générer dynamiquement plus tard :
  // { url: '/prestations/developpement-sur-mesure', changefreq: 'monthly', priority: 0.6 },
  // { url: '/portfolio/le-nom-du-projet', changefreq: 'monthly', priority: 0.6 },
];

// Crée une fonction asynchrone pour générer le sitemap
const generateSitemap = async () => {
  try {
    const stream = new SitemapStream({ hostname: 'https://www.2lct.fr' });

    const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());

  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap :', error);
  }
};

generateSitemap();
