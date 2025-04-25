export default function HeadPageComponent ({title}) {
    return(
        <div className="relative w-full h-48 md:h-56 lg:h-64 mt-32 bg-[url('/2lct-background-title-setup.svg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black/70 z-0"></div>
  <div className="relative z-10 flex items-center justify-center h-full px-4">
    <h1 className="text-white text-center text-lg md:text-2xl lg:text-3xl font-semibold leading-snug max-w-3xl">
      {title}
    </h1>
  </div>
</div>
    )
}