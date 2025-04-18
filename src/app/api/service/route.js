import { NextResponse } from 'next/server'
import { Service, VariationService } from "../../../../models/index.js";

export const serviceController = {
	async servicePage(req, res) {
		const serviceSlug = req.params.slug;
		const service = await Service.findOne({
			where: { slug: serviceSlug },
			include: [{ association: "variation_services", order: [['id', 'ASC']]  },
				{ association: "servicesToAdvantage",
					order: [['id', 'ASC']] },
				{ association: "servicesToQuestion" }
			],
		});


		return NextResponse.json(service)
	},
};

