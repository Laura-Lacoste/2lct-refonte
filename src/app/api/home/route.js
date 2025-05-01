import { NextResponse } from 'next/server'
import { Technology, Service, Project } from "../../../models/index.js";

export async function GET() {
    try {
        const technologies = await Technology.findAll({
            order: [["id", "ASC"]]
        });
        const services = await Service.findAll({
            order: [["id", "ASC"]],
            include: [{ association: "variation_services", separate:true, order: [['id', 'ASC']],
                include: [{association : "details", order: [['detail_id', 'ASC']]}]
              },
            
        ]
        });
        const projects = await Project.findAll({
            order: [["id", "DESC"]]
        })

        return NextResponse.json({technologies, services, projects});
    } catch (error) {
        console.error('[API ERROR]', error)
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
      }
};