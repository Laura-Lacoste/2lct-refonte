import { SitemapStream, streamToPromise } from "sitemap"
import { Readable } from "node:stream"
import * as fs from "node:fs"

// 👉 Import direct des modèles Sequelize
import { Service, Project } from "./src/models/index.js"

const BASE_URL = "https://www.2lct.fr"

async function generateSitemap() {
  try {
    // 🔹 Liens statiques
    const links = [
      { url: "/", changefreq: "weekly", priority: 1.0 },
      { url: "/a-propos", changefreq: "monthly", priority: 0.8 },
      { url: "/prestations", changefreq: "monthly", priority: 0.8 },
      { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.7 },
    ]

    // 👉 Requêtes directes à la base
    const services = await Service.findAll({ attributes: ["slug"] })
    const projects = await Project.findAll({ attributes: ["slug"] })

    // 🔹 Prestations dynamiques
    services.forEach(s => {
      if (s.slug) {
        links.push({
          url: `/prestations/${s.slug}`,
          changefreq: "monthly",
          priority: 0.6,
        })
      }
    })

    // 🔹 Projets dynamiques
    projects.forEach(p => {
      if (p.slug) {
        links.push({
          url: `/portfolio/${p.slug}`,
          changefreq: "monthly",
          priority: 0.6,
        })
      }
    })

    // 👉 Génération finale
    const stream = new SitemapStream({ hostname: BASE_URL })
    const sitemap = await streamToPromise(Readable.from(links).pipe(stream))

    fs.writeFileSync("./public/sitemap.xml", sitemap.toString())
    console.log("✔️ Sitemap généré avec succès")
  } catch (error) {
    console.error("❌ Erreur lors de la génération du sitemap :", error)
  }
}

generateSitemap()
