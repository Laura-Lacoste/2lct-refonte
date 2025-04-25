'use client'

import { useEffect, useState } from "react"
import Image from "next/image";


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
            <section className=' px-5 py-10 lg:px-32 lg:py-36' >
                <h1>{prestation.name}</h1>
                {/* <Image src={prestation.image}></Image> */}
                <h2>Les autres prestations</h2>
                {allPrestations && allPrestations.length > 0 ? (
                allPrestations.map((element) => (
                    <div key={element.id}>
                        {element.name}
                    </div>
                )) ) : (
                    <p>Chargement des prestations</p>
                )}

                <h2>Description prestation</h2>
                <p>{prestation.long_description}</p>

                <h2>Les variantes de la prestation</h2>
                <ul>
                {prestation && prestation.length > 0 ? (
                prestation.variation_services.map((element) => (
                    <div key={element.id}>
                        {element.name}
                    </div>
                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                </ul>
            </section>
        </main>
    )
}