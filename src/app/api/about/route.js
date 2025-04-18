import { NextResponse } from 'next/server'
import { Technology } from "../../../../models/index.js";

export const aboutController = {
    async  aboutPage(req, res) { 
        const technologies = await Technology.findAll({
            order: [["id", "ASC"]]
        });
        return NextResponse.json({technologies});
    }
};