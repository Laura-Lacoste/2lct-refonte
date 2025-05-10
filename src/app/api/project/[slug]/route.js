import { NextResponse } from 'next/server'
import { Project } from "../../../../models/index.js";

export async function GET(req, {params}) {
	try {
		const projectSlug = params.slug;
		const project = await Project.findOne({
			where: { slug: projectSlug },
			include: [{ association: "project_images", separate: true, order: [['id', 'ASC']] },
				{ association: "technologies" }
			],
		});
	
		return NextResponse.json(project);
	} catch(error){
		console.error('[API ERROR]', error)
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
	}
    };


