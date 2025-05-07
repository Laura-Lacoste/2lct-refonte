import { NextResponse } from 'next/server'
import { Project } from "../../../models/index.js";

export async function GET(){
    try{
        const projects = await Project.findAll({
            order: [['id', 'DESC']],
        })
        return NextResponse.json(projects);
    }catch (error) {
        console.error('[API ERROR]', error)
	  return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
    } 
};