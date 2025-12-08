'use client'

import { use, useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {


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
        rgpd,
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
<form onSubmit={handleContactSubmit} className="flex flex-col gap-6 bg-[#FCFAFC] p-10 border-l-4 border-[#E58BD3] shadow-sm">
      <input
        type="text"
        name="name"
        placeholder="Votre nom et prénom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded-sm"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Votre téléphone (optionnel)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded-sm"
    />
    <input
        type="text"
        name="service"
        placeholder="Prestation souhaitée (optionnel)"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border p-2 rounded-sm"
    />
      <textarea
        name="message"
        placeholder="Votre message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 rounded-sm"
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
        className="bg-[#E58BD3] text-base px-4 py-2 rounded-sm hover:bg-white hover:text-[#843E76] border border-[#E58BD3] hover:border-[#843E76] transition"
      >
        Envoyer
      </button>
      </form>
    )}