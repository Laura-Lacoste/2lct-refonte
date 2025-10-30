import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'node:stream'
import * as fs from 'node:fs'

// ⚙️ URL de base de ton site
const BASE_URL = 'https://www.2lct.fr'

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`)
    if (!res.ok) throw new Error(`Erreur de récupération de ${endpoint}`)
    return await res.json()
  } catch (err) {
    console.error(`❌ Erreur lors du fetch de ${endpoint} :`, err)
    return []
  }
}

async function generateSitemap() {
  try {
    // ✅ Liens statiques
    const links = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/a-propos', changefreq: 'monthly', priority: 0.8 },
      { url: '/prestations', changefreq: 'monthly', priority: 0.8 },
      { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    ]

    // ✅ Liens dynamiques pour les prestations et projets
    const [services, projects] = await Promise.all([
      fetchData('services'),
      fetchData('projects'),
    ])

    // 🔹 Ajoute les pages dynamiques de prestations
    services.forEach(service => {
      if (service.slug) {
        links.push({
          url: `/prestations/${service.slug}`,
          changefreq: 'monthly',
          priority: 0.6,
        })
      }
    })

    // 🔹 Ajoute les pages dynamiques de projets
    projects.forEach(project => {
      if (project.slug) {
        links.push({
          url: `/portfolio/${project.slug}`,
          changefreq: 'monthly',
          priority: 0.6,
        })
      }
    })

    // ✅ Génération du sitemap
    const stream = new SitemapStream({ hostname: BASE_URL })
    const sitemap = await streamToPromise(Readable.from(links).pipe(stream))
    fs.writeFileSync('./public/sitemap.xml', sitemap.toString())
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap :', error)
  }
}

// Exécute le script
generateSitemap()
