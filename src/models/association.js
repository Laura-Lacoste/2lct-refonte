import { Advantage } from "./advantage.model.js";
import { Project } from "./project.model.js";
import { Service } from "./service.model.js";
import { VariationService } from "./variationService.model.js";
import { Question } from "./question.model.js";
import { ProjectImage } from "./projectImage.model.js";
import { Technology } from "./technology.model.js";
import { DetailVariationService } from "./detailVariationService.model.js";

Service.hasMany(VariationService,{
    foreignKey: "service_id",
    as: "variation_services"
});

VariationService.belongsTo(Service,{
    foreignKey: "service_id",
    as: "service"
})

Service.belongsToMany(Question, {
    through: "service_question",
    foreignKey: "service_id",
    as: "servicesToQuestion"
})

Question.belongsToMany(Service, {
    through: "service_question",
    foreignKey: "question_id",
    as: "questions"
})

Service.belongsToMany(Advantage, {
    through: "service_advantage",
    foreignKey: "service_id",
    as: "servicesToAdvantage"
})

Advantage.belongsToMany(Service, {
    through: "service_advantage",
    foreignKey: "advantage_id",
    as: "advantages"
})

Project.hasMany(ProjectImage,{
    foreignKey: "project_id",
    as: "project_images"
});

ProjectImage.belongsTo(Project,{
    foreignKey: "project_id",
    as: "project"
})

Project.belongsToMany(Technology, {
    through: "technology_project",
    foreignKey: "project_id",
    as: "technologies"
})

Technology.belongsToMany(Project, {
    through: "technology_project",
    foreignKey: "technology_id",
    as: "projects"
})

DetailVariationService.belongsToMany(VariationService, {
    through: "variation_detail",
    foreignKey: "detail_id",
    as: "varations"
})

VariationService.belongsToMany(DetailVariationService, {
    through: "variation_detail",
    foreignKey: "variation_id",
    as: "details"
})

export {Service, VariationService, Question, Advantage, Project, ProjectImage, Technology, DetailVariationService};
