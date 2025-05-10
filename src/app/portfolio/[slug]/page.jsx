'use client'

import { useEffect, useState } from "react"
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent"
import '../../../styles/embla.css'
import EmblaCarousel from "@/src/components/EmblaCarousel"
import Link from "next/link"

export default function PorfolioDetailPage({params}) {
    const [project, setProject] = useState({})
    const [allProjects, setAllProjects] = useState({})
    

    useEffect(() => {
        const fetchServices = async () => {
        try{
            const res = await fetch (`/api/project/${params.slug}`)
            const data = await res.json()
            setProject(data)
            const resAll = await fetch('/api/projects')
            const dataAll = await resAll.json()
            setAllProjects(dataAll)
        } catch (error) {
            console.error("Erreur lors du fetch:", error)
        }
    }
    fetchServices()
    }, [])
    console.log(project)


    const OPTIONS = {};
const SLIDE_ARRAY = project.project_images || [];
const SLIDES = SLIDE_ARRAY.map(item => item.image)


    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={project.name}/>
            <section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14">
            <div className="flex flex-col gap-6">
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold text-center'><span className="bg-[#E58BD3] w-24 h-1"></span>Description de la prestation<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                <p>{project.short_description}</p>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row flex-wrap justify-between h-auto">
                <div className="w-full lg:w-2/3">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
            <div className="w-full lg:w-1/5 flex flex-col justify-evenly gap-6 border-l-4 border-[#E58BD3] bg-[#FCFAFC] px-4 py-6 shadow-sm h-72 text-sm">
            <h2 className=" text-center font-bold text-base">Tous les projets</h2>
                    <div className="flex flex-col gap-2">
                {allProjects && allProjects.length > 0 ? (
                allProjects.map((element) => (
                    <Link
                      key={element.slug}
                      href={`/portfolio/${element.slug}`}
                      className="bg-white px-2 py-2 rounded-md shadow-sm hover:text-[#E58BD3] hover:cursor-pointer hover:shadow-md transition-all"
                    >
                      {element.name} ⭢
                    </Link>
                )) ) : (
                    <p>Chargement des projets</p>
                )}
                    </div>
            </div>
                </div>


                <div className="flex flex-col lg:flex-row justify-between">

                <div className="flex flex-col gap-10 w-full lg:w-2/3">
                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#E58BD3] w-24 h-1"></span>Détail<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: project.long_description }} />
                </div>
                <div className="relative flex flex-col mt-10 lg:mt-0 gap-10 p-10 bg-[url('/2lct-besoin-daide-contact.svg')] bg-cover bg-center w-full lg:w-1/5 justify-center items-center rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-[#FCFAFC]/70 z-0 rounded-xl"></div>
                <div className="absolute inset-0 bg-[#E58BD3]/30 z-0 rounded-xl"></div>
                <h2 className="relative z-10 uppercase  text-shadow-sm font-bold">Contacter</h2>
                <p className="relative z-10 uppercase text-2xl bold font-bold">Besoin d'aide ?</p>
                <a href="/contact" className='relative z-10 bg-[#E58BD3] text-white py-2 px-4 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'>Poser une question</a>
                </div>
                </div>

                <h2 className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#E58BD3] w-24 h-1"></span>Les technologies utilisées<span className="bg-[#E58BD3] w-24 h-1"></span></h2>
                
  {project.technologies?.length > 0 ? (
    <div className="flex flex-wrap gap-6 justify-center">
      {project.technologies.map((tech) => (
        <div
          key={tech.id}
          className="bg-white w-48 p-4 rounded-xl flex flex-col justify-center items-center shadow-md"
        >
          <i className={`${tech.icon} text-3xl text-[#E58BD3]`}></i>
          <p className="text-sm font-medium mt-2 text-center">{tech.name}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">Aucune technologie listée pour ce projet</p>
  )}

            </section>
        </main>
    )
}