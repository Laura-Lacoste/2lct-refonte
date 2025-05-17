import { NextResponse } from 'next/server'
import { Service, VariationService, DetailVariationService, Advantage, Question } from "../../../../models/index.js";

export async function GET(req, {params}) {
	try {
		const serviceSlug = params.slug;
		const service = await Service.findOne({
      where: { slug: serviceSlug },
      include: [
        {
          model: VariationService,
          as: 'variation_services',
          separate: true,
          order: [['id', 'ASC']],
          include: [
            {
              model: DetailVariationService,
              as: 'details',
              order: [['detail_id', 'ASC']],
            },
          ],
        },
        {
          model: Advantage,
          as: 'servicesToAdvantage',
          order: [['id', 'ASC']],
        },
        {
          model: Question,
          as: 'servicesToQuestion',
        },
      ],
    });


		return NextResponse.json(service)
	}catch(error){
		console.error('[API ERROR]', error)
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
	}
};

