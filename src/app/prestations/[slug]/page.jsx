'use client'

import { useEffect, useState } from "react"
import Image from "next/image";
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent";


export default function PrestationsDetailPage({params}) {
    const [prestation, setPrestation] = useState({});
    const [allPrestations, setAllPrestations] = useState({});

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
        <main>
            <HeadPageComponent title={prestation.name} />
            <section className=' px-5 py-10 lg:px-32 lg:py-36 flex flex-col gap-14' >
                <div className="flex flex-wrap justify-between">
                {prestation.image && (
                            <Image
                            src={`/${prestation.image}`}
                                alt={prestation.name}
                                width={600}
                                height={400}
                                className="w-[70%] h-[40vh] object-cover rounded-md shadow-sm"
                            />
                        )}
                    <div className="w-[25%] flex flex-col justify-evenly gap-6 bg-[#FCFAFC] px-4 py-6 rounded-md shadow-sm">
                    <h2 className=" text-center font-bold">Les autres prestations</h2>
                    <div className="flex flex-col gap-6">
                {allPrestations && allPrestations.length > 0 ? (
                allPrestations.map((element) => (
                    <div key={element.id} className="bg-white px-2 py-4 rounded-md hover:text-[#E58BD3] hover:cursor-pointer hover:shadow-sm">
                        {element.name} ⭢
                    </div>
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

                <div className="flex justify-between items-center">
                <div className="flex flex-col gap-10">
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les variantes de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
               
                {prestation.variation_services?.length > 0 ? (
                prestation.variation_services.map((element) => (
                    <div key={element.id} className="flex gap-4">
                        <p>{element.id}</p>
                        <p>{element.name}</p>
                    </div>
                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                <p>{prestation.short_description}</p>
                </div>

                <div className="relative rounded-md flex flex-col gap-10 p-10 bg-[url('/2lct-besoin-daide-contact.svg')] bg-cover bg-center w-[25%] justify-center items-center rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-[#FCFAFC]/70 z-0 "></div>
                <div className="absolute inset-0 bg-[#E58BD3]/30 z-0 "></div>
                <h2 className="relative z-10 uppercase  text-shadow-sm font-bold">Contacter</h2>
                <p className="relative z-10 uppercase text-2xl bold font-bold">Besoin d'aide ?</p>
                <a href="/contact" className='relative z-10 bg-[#E58BD3] text-white py-2 px-4 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'>Poser une question</a>
                </div>

                </div>

                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les bénéfices de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>

                <h2></h2>
                
                {prestation.servicesToAdvantage?.length > 0 ? (
                prestation.servicesToAdvantage.map((element) => (
                    <div key={element.id}>
                        {element.name}
                    </div>
                )) ) : (
                    <p>Chargement des avantages</p>
                )}
                
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Les questions récurrentes<span className="bg-[#E58BD3] w-24 h-1"></span></h2>

                <h2></h2>
                {prestation.servicesToQuestion?.length > 0 ? (
                prestation.servicesToQuestion.map((element) => (
                    <div key={element.id}>
                        {element.question}
                        {element.answer}
                    </div>
                )) ) : (
                    <p>Chargement des questions</p>
                )}
            </section>
        </main>
    )
}