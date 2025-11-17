import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent"
import '../../../styles/embla.css'
import CarouselWrapper from "@/src/components/CarouselWrapper"
import Link from "next/link"


export async function generateMetadata({ params }) {
  const { slug } = await params
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${slug}`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Erreur lors du chargement des données du projet')
    }

    const project = await res.json()

    return {
      title: `${project.name} | | Portfolio 2LCT - Développeuse web freelance à Toulouse`,
      description: project.short_description || `Découvrez le projet ${project.name} réalisé par 2LCT, développeuse web freelance à Toulouse.`,
      alternates: {
        canonical: `https://www.2lct.fr/portfolio/${slug}`,
      },
      openGraph: {
        title: `${project.name} | Portfolio 2LCT - Réalisations web à Toulouse`,
         description:
          project.short_description ||
          `Projet ${project.name} réalisé par 2LCT : création de site web sur mesure à Toulouse.`,
        url: `https://www.2lct.fr/portfolio/${slug}`,
        siteName: '2LCT',
        images: [
          {
            url:
              project.project_images?.[0]?.image
                ? `https://www.2lct.fr/${project.project_images[0].image}`
                : 'https://www.2lct.fr/2lct_homepage.webp',
            width: 1200,
            height: 630,
            alt: `${project.name} - Réalisation web 2LCT`,
          },
        ],
        locale: 'fr_FR',
        type: 'website',
      },
    }
  } catch (error) {
    return {
      title: 'Projet | Portfolio 2LCT',
      description: 'Découvrez les projets réalisés par 2LCT, développeuse web freelance à Toulouse.',
      alternates: {
        canonical: `https://www.2lct.fr/portfolio/${params.slug}`,
      },
      openGraph: {
        title: 'Projet | Portfolio 2LCT',
        description: 'Découvrez les projets web créés par 2LCT à Toulouse et en Haute-Garonne.',
        url: `https://www.2lct.fr/portfolio/${params.slug}`,
        siteName: '2LCT',
        images: [
          {
            url: 'https://www.2lct.fr/2lct_homepage.webp',
            width: 1200,
            height: 630,
            alt: '2LCT - Développeuse web freelance à Toulouse',
          },
        ],
        locale: 'fr_FR',
        type: 'website',
      },
    }
  }
}


export default async function PortfolioClient({params}) {
  const { slug } = await params

  const [resProject, resAll] = await Promise.all([
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${slug}`),
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
]);



  if (!resProject.ok) {
  console.error("Erreur API projet :", resProject.status);
  throw new Error("Erreur lors du chargement du projet");
}

  const project = await resProject.json();
  const allProjects = resAll.ok ? await resAll.json() : [];

     const OPTIONS = {};
 const SLIDE_ARRAY = project.project_images || [];
 const SLIDES = SLIDE_ARRAY.map(item => item.image)

    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={project.name}/>
            <section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14">
            <div className="flex flex-col gap-6">
                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center'><span className="bg-[#843E76] w-24 h-1"></span>Description de la prestation<span className="bg-[#843E76] w-24 h-1"></span></h2>
                <p>{project.short_description}</p>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row flex-wrap justify-between h-auto">
                <div className="w-full lg:w-2/3">
      <CarouselWrapper slides={SLIDES} options={OPTIONS} />
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
                      {element.name} ➔
                    </Link>
                )) ) : (
                    <p>Chargement des projets</p>
                )}
                    </div>
            </div>
                </div>


                <div className="flex flex-col lg:flex-row justify-between">

                <div className="flex flex-col gap-10 w-full lg:w-2/3">
                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#843E76] w-24 h-1"></span>Détail<span className="bg-[#843E76] w-24 h-1"></span></h2>
                <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: project.long_description }} />
                </div>
                <div className="relative flex flex-col mt-10 lg:mt-0 gap-10 p-10 bg-[url('/2lct-besoin-daide-contact.svg')] bg-cover bg-center w-full lg:w-1/5 justify-center items-center rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-[#FCFAFC]/70 z-0 rounded-xl"></div>
                <div className="absolute inset-0 bg-[#E58BD3]/30 z-0 rounded-xl"></div>
                <h2 className="relative z-10 uppercase  text-shadow-sm font-bold">Contacter</h2>
                <p className="relative z-10 uppercase text-2xl bold font-bold">Besoin d'aide ?</p>
                <a href="/contact" className='relative z-10 bg-[#E58BD3] text-base py-2 px-4 rounded hover:bg-white hover:text-[#843E76] border border-[#E58BD3] hover:border-[#843E76] transition-all duration-300 w-fit'>Poser une question</a>
                </div>
                </div>

                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#843E76] w-24 h-1"></span>Les technologies utilisées<span className="bg-[#843E76] w-24 h-1"></span></h2>
                
  {project.technologies?.length > 0 ? (
    <div className="flex flex-wrap gap-6 justify-center">
      {project.technologies.map((tech) => (
        <div
          key={tech.id}
          className="bg-white w-48 p-4 rounded-xl flex flex-col justify-center items-center shadow-md"
        >
          <i className={`${tech.icon} text-3xl text-[#843E76]`}></i>
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
