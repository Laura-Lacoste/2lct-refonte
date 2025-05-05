'use client'

import { useEffect, useState } from "react"
import Image from "next/image";
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent";
import Link from "next/link";


export default function PrestationsDetailPage({params}) {
    const [prestation, setPrestation] = useState({});
    const [allPrestations, setAllPrestations] = useState({});
    const [activeQuestionId, setActiveQuestionId] = useState(null);

     useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch (`/api/service/${params.slug}`)
                const data = await res.json()
                setPrestation(data)
                const resAll = await fetch ('/api/services')
                const dataAll = await resAll.json()
                setAllPrestations(dataAll)
            } catch (error) {
                console.error("Erreur lors du fetch :", error)
            }
        }
        fetchServices()
     }, [])

     console.log(prestation)
    return(
        <main className="text-base">
            <HeadPageComponent title={prestation.name} />
            <section className=' px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14' >
                <div className="flex flex-col lg:flex-row flex-wrap justify-between h-72">
                {prestation.image && (
                            <Image
                            src={`/${prestation.image}`}
                                alt={prestation.name}
                                width={600}
                                height={400}
                                className="w-full md:w-2/3 h-72 object-cover rounded-md shadow-sm"
                            />
                        )}
                    <div className="w-1/5 flex flex-col justify-evenly gap-6 border-l-4 border-[#E58BD3] bg-[#FCFAFC] px-4 py-6 shadow-sm h-72 text-sm">
                    <h2 className=" text-center font-bold text-base">Toutes les prestations</h2>
                    <div className="flex flex-col gap-2">
                {allPrestations && allPrestations.length > 0 ? (
                allPrestations.map((element) => (
                    <Link
  href={`/prestations/${element.slug}`}
  className="bg-white px-2 py-2 rounded-md shadow-sm hover:text-[#E58BD3] hover:cursor-pointer hover:shadow-md transition-all"
>
  {element.name} ⭢
</Link>
                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Description de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                <p>{prestation.long_description}</p>
                </div>

                <div className="flex justify-between">
                <div className="flex flex-col gap-10 w-2/3">
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les variantes de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                <p>{prestation.short_description}</p>
                {prestation.variation_services?.length > 0 ? (
                prestation.variation_services.map((element) => (
                    <div className="flex border-l-4 border-[#E58BD3] bg-[#FCFAFC] p-4 shadow-sm w-full gap-14 ">
                        <div className="flex flex-col w-96 gap-4">
      <h4 className="text-[#E58BD3] font-semibold text-xl ">{element.name}</h4>
      {element.wordpress_price && (
        <div className="flex flex-col gap-2">
            <p className="text-sm"><b>Prix Wordpress -</b> à partir de {element.wordpress_price}</p>
            <p className="text-sm"><b>Prix développement -</b> à partir de {element.development_price}</p>
        </div>
      )}   
         </div>
         <div className="text-sm">
      {element.details?.sort((a,b) => a.id -b.id).map(detail =>(
        <p>{detail.name}</p>
      ))}   
      </div>
</div>

                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                
                </div>

                <div className="relative flex flex-col gap-10 p-10 bg-[url('/2lct-besoin-daide-contact.svg')] bg-cover bg-center w-1/5 justify-center items-center rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-[#FCFAFC]/70 z-0 rounded-xl"></div>
                <div className="absolute inset-0 bg-[#E58BD3]/30 z-0 rounded-xl"></div>
                <h2 className="relative z-10 uppercase  text-shadow-sm font-bold">Contacter</h2>
                <p className="relative z-10 uppercase text-2xl bold font-bold">Besoin d'aide ?</p>
                <a href="/contact" className='relative z-10 bg-[#E58BD3] text-white py-2 px-4 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'>Poser une question</a>
                </div>

                </div>

                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les bénéfices de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                
                {prestation.servicesToAdvantage?.length > 0 ? (
  <div className="flex flex-wrap gap-6 justify-center">
    {prestation.servicesToAdvantage.map((element) => (
      <div
        key={element.id}
        className="bg-white w-64 p-6 rounded-xl flex flex-col justify-center shadow-lg"
      >
        <h3 className="text-[#E58BD3] font-semibold text-base text-center">{element.name}</h3>
        <p className="text-sm text-center">{element.description}</p>
      </div>
    ))}
  </div>
) : (
  <p>Chargement des avantages...</p>
)}

                
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les questions récurrentes<span className="bg-[#E58BD3] w-24 h-1"></span></h2>

                {prestation.servicesToQuestion?.length > 0 ? (
                prestation.servicesToQuestion.map((element) => (
                    <div key={element.id} className="flex flex-col border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
                        <button onClick={() => setActiveQuestionId(activeQuestionId === element.id ? null : element.id)} className="flex justify-between items-center w-full font-bold">
                        {element.question}
                        <span className="text-2xl text-[#E58BD3]">  {activeQuestionId === element.id ? "−" : "+"}</span>
                        </button>
                            {activeQuestionId === element.id && (
        <p className="mt-2 text-sm">{element.answer}</p>
      )}                        
                    </div>
                )) ) : (
                    <p>Chargement des questions</p>
                )}
            </section>
        </main>
    )
}