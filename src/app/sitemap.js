import { Service } from "@/src/models/service.model";
import { Project } from "@/src/models/project.model";



export default async function sitemap() {
    const isProdServer = process.env.ENVIRONMENT === "production";
  const baseUrl = "https://www.2lct.fr";


  // Liens statiques
  const routes = [
    "",
    "/a-propos",
    "/prestations",
    "/portfolio",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  
  // 📌 En local → PAS de DB !
  if (!isProdServer) {
    return routes;
  }
  
  // Récupération DB (direct via Sequelize)
  const services = await Service.findAll({ order: [["id", "ASC"]] });
  const projects = await Project.findAll({ order: [["id", "ASC"]] });

  // Liens dynamiques - Prestations
  const servicesRoutes = services.map((service) => ({
    url: `${baseUrl}/prestations/${service.slug}`,
    lastModified: new Date(),
  }));

  // Liens dynamiques - Projets
  const projectsRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...servicesRoutes, ...projectsRoutes];
}
