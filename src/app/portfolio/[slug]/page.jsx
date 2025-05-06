'use client'

import { useEffect, useState } from "react"
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent"

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
    console.log(allProjects)
    return(
        <main>
            <HeadPageComponent title={project.name}/>
        </main>
    )
}