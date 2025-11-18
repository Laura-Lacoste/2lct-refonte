
import Image from "next/image";
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent";
import Faq from "@/src/components/Faq";
import Link from "next/link";
import { Service, VariationService, DetailVariationService, Advantage, Question } from '@/src/models';

export async function generateMetadata({ params }) {
    const { slug } = await params

  try {
    // Récupération minimale côté serveur via Sequelize (nom, short_description, image)
    const prestation = await Service.findOne({
      where: { slug },
      attributes: ['name', 'short_description', 'image'],
    })
    
    return {
      title: `${prestation.name} | Prestations 2LCT - Développeuse web freelance à Toulouse`,
      description:
        prestation.short_description ||
        `Découvrez la prestation ${prestation.name} proposée par 2LCT : création de sites web et accompagnement digital à Toulouse.`,
      alternates: {
        canonical: `https://www.2lct.fr/prestations/${slug}`,
      },
      openGraph: {
        title: `${prestation.name} | Prestations 2LCT - Création de site web à Toulouse`,
        description:
          prestation.short_description ||
          `Prestation ${prestation.name} proposée par 2LCT, développeuse web freelance à Toulouse.`,
        url: `https://www.2lct.fr/prestations/${slug}`,
        siteName: '2LCT',
        images: [
          {
            url:
              prestation.image
                ? `https://www.2lct.fr/${prestation.image}`
                : 'https://www.2lct.fr/2lct_homepage.webp',
            width: 1200,
            height: 630,
            alt: `${prestation.name} - Service web 2LCT à Toulouse`,
          },
        ],
        locale: 'fr_FR',
        type: 'website',
      },
    };
  } catch (error) {
    return {
       title: 'Prestation | 2LCT - Développeuse web freelance à Toulouse',
      description:
        "Découvrez les prestations proposées par 2LCT : création, refonte et optimisation de sites web à Toulouse et en Haute-Garonne.",
      alternates: {
        canonical: `https://www.2lct.fr/prestations/${slug}`,
      },
      openGraph: {
        title: 'Prestation | 2LCT - Création de site web à Toulouse',
        description:
          "Découvrez les prestations proposées par 2LCT : création, refonte et accompagnement digital à Toulouse et alentours.",
        url: `https://www.2lct.fr/prestations/${slug}`,
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


export default async function PrestationsClient({params}) {
    const {slug} = await params

    // Récupération directe via Sequelize (remplace les fetch vers les routes API)
    const prestation = await Service.findOne({
      where: { slug },
      include: [
        {
          model: VariationService,
          as: 'variation_services',
          separate: true,
          order: [['id', 'ASC']],
          include: [
            {
              model: DetailVariationService,
              as: 'details',
              order: [['detail_id', 'ASC']],
            },
          ],
        },
        {
          model: Advantage,
          as: 'servicesToAdvantage',
          order: [['id', 'ASC']],
        },
        {
          model: Question,
          as: 'servicesToQuestion',
        },
      ],
    });

    const allPrestations = await Service.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: VariationService,
          as: 'variation_services',
          separate: true,
          order: [['id', 'ASC']],
          limit: 3,
        },
      ],
    });

    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={prestation.name} />
            <section className=' px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14' >
                <div className="flex flex-col gap-10 lg:flex-row flex-wrap justify-between h-auto">
                {prestation.image && (
                            <Image
              src={`/${prestation.image}`}
                alt={`Prestation ${prestation.name} - service web Haute-Garonne`} 
                width={600}
                height={400}
                className="w-full lg:w-2/3 h-72 object-cover rounded-md shadow-sm"
                            />
                        )}
                    <div className="w-full lg:w-1/5 flex flex-col justify-evenly gap-6 border-l-4 border-[#E58BD3] bg-[#FCFAFC] px-4 py-6 shadow-sm h-72 text-sm">
                    <h2 className=" text-center font-bold text-base">Toutes les prestations</h2>
                    <div className="flex flex-col gap-2">
                {allPrestations && allPrestations.length > 0 ? (
                allPrestations.map((element) => (
                    <Link
                      key={element.slug}
                      href={`/prestations/${element.slug}`}
                      className="bg-white px-2 py-2 rounded-md shadow-sm hover:text-[#E58BD3] hover:cursor-pointer hover:shadow-md transition-all"
                    >
                      {element.name} ➔
                    </Link>
                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center'><span className="bg-[#843E76] w-24 h-1"></span>Description de la prestation<span className="bg-[#843E76] w-24 h-1"></span></h2>
                <p>{prestation.long_description}</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-10 w-full lg:w-2/3">
                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#843E76] w-24 h-1"></span>Les variantes de la prestation<span className="bg-[#843E76] w-24 h-1"></span></h2>
                <p>{prestation.short_description}</p>
                {prestation.variation_services?.length > 0 ? (
                prestation.variation_services.map((element) => (
                    <div key={element.id} className="flex flex-col lg:flex-row border-l-4 border-[#E58BD3] bg-[#FCFAFC] p-4 shadow-sm w-full gap-14 ">
                        <div className="flex flex-col w-full lg:w-96 gap-4">
      <h4 className="text-[#843E76] font-semibold text-xl ">{element.name}</h4>
      {element.wordpress_price && (
        <div className="flex flex-col gap-2">
            <p className="text-sm"><b>Prix Wordpress -</b> à partir de {element.wordpress_price}</p>
            <p className="text-sm"><b>Prix développement -</b> à partir de {element.development_price}</p>
        </div>
      )}   
         </div>
         <div className="text-sm">
      {element.details?.sort((a,b) => a.id -b.id).map(detail =>(
        <p key={detail.id}>➔ {detail.name}</p>
      ))}   
      </div>
</div>

                )) ) : (
                    <p>Chargement des prestations</p>
                )}
                
                </div>

                <div className="relative flex flex-col mt-10 lg:mt-0 gap-10 p-10 bg-[url('/2lct-besoin-daide-contact.svg')] bg-cover bg-center w-full lg:w-1/5 justify-center items-center rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-[#FCFAFC]/70 z-0 rounded-xl"></div>
                <div className="absolute inset-0 bg-[#E58BD3]/30 z-0 rounded-xl"></div>
                <h2 className="relative z-10 uppercase  text-shadow-sm font-bold">Contacter</h2>
                <p className="relative z-10 uppercase text-2xl bold font-bold">Besoin d'aide ?</p>
                <a href="/contact" className='relative z-10 bg-[#E58BD3] text-base py-2 px-4 rounded hover:bg-white hover:text-[#843E76] border border-[#E58BD3] hover:border-[#843E76] transition-all duration-300 w-fit'>Poser une question</a>
                </div>

                </div>

                <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#843E76] w-24 h-1"></span>Les bénéfices de la prestation<span className="bg-[#843E76] w-24 h-1"></span></h2>
                
                {prestation.servicesToAdvantage?.length > 0 ? (
  <div className="flex flex-wrap gap-6 justify-center">
    {prestation.servicesToAdvantage.map((element) => (
      <div
        key={element.id}
        className="bg-white w-64 p-6 rounded-xl flex flex-col justify-center shadow-lg"
      >
        <h3 className="text-[#843E76] font-semibold text-base text-center">{element.name}</h3>
        <p className="text-sm text-center">{element.description}</p>
      </div>
    ))}
  </div>
) : (
  <p>Chargement des avantages...</p>
)}

                <Faq prestation={prestation} />
                
            </section>
        </main>
    )
}
