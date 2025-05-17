'use client'
import { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Joi from "joi";


import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent";

export const metadata = {
  title: 'Contact | 2LCT',
  description:
    "Un projet web en tête ? Contactez-moi pour discuter de vos besoins, de votre public cible et des solutions adaptées.",
  openGraph: {
    title: 'Contact | 2LCT',
    description: "Discutons ensemble de votre futur site web !",
    url: 'https://www.2lct.fr/contact',
  },
};


export default function Contact () {
    const title = "Contact";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [service, setService] = useState("");
    const [rgpd, setRgpd] = useState(false);

    

    const handleContactSubmit = async (event) => {
        event.preventDefault();

        if (!name) {
      toast.error('Le champ "Nom/Prénom" est obligatoire.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    if (!email) {
      toast.error('Le champ "email" est obligatoire.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    if (!message) {
      toast.error('Le champ "Message" est obligatoire.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

     if (!rgpd) {
       toast.error("Veuillez accepter la Politique de Confidentialité avant d'envoyer la demande.", {
         position: "bottom-right",
         autoClose: 5000,
        hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
       });
       return;
     }



    try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
        rgpd
      }),
    });

    let data;

    try {
    data = await res.json(); // protège l'appel
  } catch {
    toast.error("Réponse invalide du serveur.");
    return;
  }

    if (res.status === 429) {
  toast.error(data.error || "Trop de tentatives, réessaie plus tard.");
  return;
}

    if (data.success) {
      toast.success("Message envoyé avec succès !");
       setName("");
       setEmail("");
       setPhone("");
       setService("");
       setMessage("");
       setRgpd(false);
    } else {
      toast.error("Une erreur est survenue, veuillez réessayer.");
    }
  } catch (error) {
    console.error("Erreur lors de l’envoi :", error);
    toast.error("Erreur réseau. Réessaie plus tard.");
  }
};


    return (
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={title}/>
            <section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col md:flex-row gap-10 lg:gap-28 justify-center">
                <div className="w-full border-l-8 border-[#E58BD3] justify-center items-center lg:w-[20%] flex flex-col gap-6 bg-[#FCFAFC] p-6 shadow-sm text-sm">
  <div className="flex flex-col gap-1 items-center ">
    <h2 className="text-[#E58BD3] font-semibold text-base uppercase tracking-wide">Adresse</h2>
    <p className="text-[#050305]">Montastruc-la-Conseillère (31)</p>
  </div>
  <div className="flex flex-col gap-1 items-center">
    <h2 className="text-[#E58BD3] font-semibold text-base uppercase tracking-wide">Email</h2>
    <p className="text-[#050305]">laura@2lct.fr</p>
  </div>
  <div className="flex flex-col gap-1 items-center">
    <h2 className="text-[#E58BD3] font-semibold text-base uppercase tracking-wide">Téléphone</h2>
    <p className="text-[#050305]">07 86 20 15 20</p>
  </div>  
        </div>

         <div className="w-full lg:w-[60%] flex flex-col  gap-6">
            <h2 className="text-2xl font-bold text-[#E58BD3]">Vous avez des questions ?</h2>
             <p className="text-base text-[#050305]">N'hésitez pas à me contacter, je vous réponds rapidement.</p>
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 bg-[#FCFAFC] p-10 border-l-4 border-[#E58BD3] shadow-sm">
      <input
        type="text"
        name="name"
        placeholder="Votre nom et prénom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Votre téléphone (optionnel)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
    />
    <input
        type="text"
        name="service"
        placeholder="Prestation souhaitée (optionnel)"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border p-2 rounded"
    />
      <textarea
        name="message"
        placeholder="Votre message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={rgpd}
                onChange={(e) => setRgpd(e.target.checked)}
              />
              J'accepte la Politique de Confidentialité
            </label>
      <button
        type="submit"
        className="bg-[#E58BD3] text-white px-4 py-2 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition"
      >
        Envoyer
      </button>
      </form>
                </div>
            </section>
            <ToastContainer/>
        </main>
    )
}
