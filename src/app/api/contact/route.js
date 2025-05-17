import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST (req){
    try{
          const body = await req.json();
         const { name, email, phone, service, message,rgpd } = body;

         if (!name || !email || !message ||!rgpd) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

         const transporter = nodemailer.createTransport({
    host:  process.env.SMTP_HOST, 
    port: process.env.SMTP_PORT, 
    secure: true,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PWD,
    }
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