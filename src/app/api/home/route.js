import { NextResponse } from 'next/server'
import { Technology, Service, Project } from "../../../models/index.js";

export async function GET() {
    try {
        const technologies = await Technology.findAll({
            order: [["id", "ASC"]]
        });
        const services = await Service.findAll({
            order: [["id", "ASC"]]
        });
        const projects = await Project.findAll({
            order: [["id", "ASC"]]
        })

        return NextResponse.json({technologies, services, projects});
    } catch (error) {
        console.error('[API ERROR]', error)
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
      }
};