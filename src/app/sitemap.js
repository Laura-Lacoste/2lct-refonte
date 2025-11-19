import { Service } from "@/src/models/service.model";
import { Project } from "@/src/models/project.model";

export default async function sitemap() {
  const baseUrl = "https://www.2lct.fr";

  // Récupération DB (direct via Sequelize)
  const services = await Service.findAll({ order: [["id", "ASC"]] });
  const projects = await Project.findAll({ order: [["id", "ASC"]] });

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
