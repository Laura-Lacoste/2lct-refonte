'use client'

import { useState } from 'react'

export default function Pack({ services }) {
    const [openService, setOpenService] = useState(1);

    function selectedService(id) {
     setOpenService(id)
   }

return (
<>
<div className='flex flex-col gap-4'>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Des packs clairs pour chaque projet</h2>
    <p className="text-base leading-relaxed text-center text-[#050305]">
  Choisissez le pack qui vous convient et ajoutez les options nécessaires selon votre besoin.
</p>    
    </div>

    <div className='flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center'>
      {services && services.length > 0 ? (
    services.map(service => (
      <div key={service.id}
      onClick={() => selectedService(service.id)}
      className={`text-base text-left w-fit cursor-pointer hover:underline transition-colors duration-200 ${
        openService === service.id
          ? 'font-bold text-[#843E76]'
          : 'text-gray-800'
      }`}>
        {service.name}
      </div> 
    ))
    ) : (
      <p>Chargement des packs</p>
    )}
    </div>
        <div className='flex gap-6 flex-wrap justify-center'>
          {services && openService && (
        services.find(service => service.id === openService)?.variation_services?.map(variation =>(
              <div key={variation.id} className='w-full sm:w-[80%] md:w-[48%] lg:w-[22%]'>
              <div className="flex justify-between align-center flex-col gap-4 border-l-4 border-[#E58BD3] bg-white py-6 px-10 w-full shadow-lg transition-all">
                <h3 className='text-base font-bold'>{variation.name}</h3>
                {variation.wordpress_price && (<p className='bg-[#E58BD3] text-[#050305] px-2 w-fit text-center self-center rounded '>A partir de {variation.wordpress_price}</p>)}
              </div>
              <div className='border-l-4 border-[#E58BD3] bg-white leading-loose text-base py-6 px-10 shadow-lg'> 
                {variation.details?.sort((a,b) => a.id - b.id).map(detail => (
                  <p key={detail.id}>{detail.name}</p>
                ))}
              </div>
                </div>
            ))
          )}
          
        </div>
</>
)
}