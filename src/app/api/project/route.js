import { NextResponse } from 'next/server'
import { Project } from "../../../../models/index.js";

export const projectController = {
    async projectPage(req, res) { 
        const projectSlug = req.params.slug;
		const project = await Project.findOne({
			where: { slug: projectSlug },
			include: [{ association: "project_images" },
				{ association: "technologies" }
			],
		});

        const projects = await Project.findAll({
			order: [["id", "ASC"]],
		});

        return NextResponse.json({projects, project});
    }
};

