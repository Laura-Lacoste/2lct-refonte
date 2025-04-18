import { NextResponse } from 'next/server'
import { Project } from "../../../../models/index.js";

export const projectsController = {
    async projectsPage(req, res) { 
        const projects = await Project.findAll({
			order: [["id", "ASC"]],
		});
        return NextResponse.json(projects);
    }
};