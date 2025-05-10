import { NextResponse } from 'next/server'
import { Service, VariationService } from "../../../../models/index.js";

export async function GET(req, {params}) {
	try {
		const serviceSlug = params.slug;
		const service = await Service.findOne({
			where: { slug: serviceSlug },
			include: [{ association: "variation_services", separate: true, order: [['id', 'ASC']],
				include: [{association : "details", order: [['detail_id', 'ASC']]}]
			  },
				{ association: "servicesToAdvantage",
					order: [['id', 'ASC']] },
				{ association: "servicesToQuestion" }
			],
		});


		return NextResponse.json(service)
	}catch(error){
		console.error('[API ERROR]', error)
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
	}
};

