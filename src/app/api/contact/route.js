import { checkRateLimit } from "@/src/libs/rate-limit";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  phone: Joi.string().allow(''),
  service: Joi.string().allow(''),
  message: Joi.string().min(5).required(),
  rgpd: Joi.boolean().valid(true).required(),
});

export async function POST (req){
    try{

       const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const rate = checkRateLimit(ip);

    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Trop de tentatives. Réessaie dans ${rate.retryAfter} secondes.`,
        },
        { status: 429 }
      );
    }
          const body = await req.json();

          const sanitizedBody = {};
    Object.keys(body).forEach((key) => {
      if (typeof body[key] === "string") {
        sanitizedBody[key] = sanitizeHtml(body[key], {
          allowedTags: [],
          allowedAttributes: {},
        });
      } else {
        sanitizedBody[key] = body[key]; // e.g. boolean for rgpd
      }
    });

         const { error, value } = contactSchema.validate(body, { abortEarly: false });

         if (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation échouée",
          details: error.details.map((d) => d.message)
        },
        { status: 400 }
      );
    }
         const { name, email, phone, service, message,rgpd } = body;

         

         if (!name || !email || !message ||!rgpd) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }


         const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // car tu utilises le port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
  tls: {
    rejectUnauthorized: false, // ← pour corriger l’erreur de certificat auto-signé
  },
});

   await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: "📬 Nouveau message via le formulaire de contact",
      html: `
        <h2>📩 Nouveau message reçu depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Prestation souhaitée :</strong> ${service}</p>` : ""}
        <p><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="font-size: 0.85rem; color: gray;">RGPD accepté : ✅</p>
      `
    });

    return NextResponse.json({ success: true });

    } catch (error){
         console.error('[CONTACT ERROR]', error);
    return NextResponse.json({ success: false, error: 'Erreur lors de l’envoi du mail' }, { status: 500 });
    }
}