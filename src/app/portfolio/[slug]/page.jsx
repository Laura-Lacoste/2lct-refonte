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
    console.log(project.project_images)
    console.log(allProjects)

    const OPTIONS = {};
const SLIDE_ARRAY = project.project_images || [];
const SLIDES = SLIDE_ARRAY.map(item => item.image)

console.log('images', SLIDES)

    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={project.name}/>
            <section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14">
                <div className="flex flex-col gap-2 lg:flex-row flex-wrap justify-center h-auto">
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
            
            </section>
        </main>
    )
}