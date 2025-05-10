import { NextResponse } from 'next/server'
import { Service } from "../../../models/index.js";

export async function GET() {
	try {
	  const services = await Service.findAll({ 
		order: [['id', 'ASC']],
		include:[{ association : "variation_services", separate:true, order: [['id', 'ASC']], limit:3 }]
	   })
	  return NextResponse.json(services)
	} catch (error) {
	  console.error('[API ERROR]', error)
	  return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
	}
  }