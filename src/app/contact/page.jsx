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


import { ToastContainer, toast } from 'react-toastify';


import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent";
import ContactForm from '@/src/components/Contact';



export default function Contact () {
      const title = "Contacter 2LCT";
    return (
      <main className="text-base overflow-hidden">
            <HeadPageComponent title={title}/>
            <section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col md:flex-row gap-10 lg:gap-28 justify-center">
                <div className="w-full border-l-8 border-[#E58BD3] justify-center items-center lg:w-[20%] flex flex-col gap-6 bg-[#FCFAFC] p-6 shadow-sm text-sm">
  <div className="flex flex-col gap-1 items-center ">
    <h2 className="text-[#843E76] font-semibold text-base uppercase tracking-wide">Adresse</h2>
    <p className="text-[#050305]">Montastruc-la-Conseillère (31)</p>
  </div>
  <div className="flex flex-col gap-1 items-center">
    <h2 className="text-[#843E76] font-semibold text-base uppercase tracking-wide">Email</h2>
    <p className="text-[#050305]">laura@2lct.fr</p>
  </div>
  <div className="flex flex-col gap-1 items-center">
    <h2 className="text-[#843E76] font-semibold text-base uppercase tracking-wide">Téléphone</h2>
    <p className="text-[#050305]">07 86 20 15 20</p>
  </div>  
        </div>

         <div className="w-full lg:w-[60%] flex flex-col  gap-6">
            <h2 className="text-2xl font-bold text-[#843E76]">Vous avez des questions ?</h2>
             <p className="text-base text-[#050305]">N'hésitez pas à me contacter, je vous réponds rapidement.</p>
          <ContactForm/>
                </div>
            </section>
            <ToastContainer/>
        </main>
        
    )
}
