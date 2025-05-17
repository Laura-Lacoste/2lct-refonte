import { NextResponse } from 'next/server'
import { Technology, Service, Project, VariationService, DetailVariationService  } from "../../../models/index.js";

export async function GET() {

    try {
        const technologies = await Technology.findAll({
            order: [["id", "ASC"]]
        });
        const services = await Service.findAll({
            order: [["id", "ASC"]],
            include: [
        {
          model: VariationService,
          as: 'variation_services',
          order: [['id', 'ASC']],
          include: [
            {
              model: DetailVariationService,
              as: 'details',
              order: [['detail_id', 'ASC']]
            }
          ]
        }
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