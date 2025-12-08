import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center text-center text-white px-6 py-20">
      <div className=" text-[#050305] space-y-6 max-w-xl">
        <h1 className="text-6xl font-bold text-[#E58BD3]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Oups... Cette page n'existe pas.</h2>
        <p className= "text-sm md:text-base leading-relaxed">
          On dirait que vous êtes arrivé(e) sur une page qui n’existe pas ou plus.<br />
          Mais pas de panique, on vous remet sur le bon chemin !
        </p>
       
      </div>

      <div className="mt-10 w-full max-w-md">
        <img
          src="https://illustrations.popsy.co/pink/working-vacation.svg"
          alt="Chat perdu sur une page 404"
          className="w-full object-contain"
        />
         <Link
          href="/"
          className="inline-block mt-6 bg-[#E58BD3] text-[#050305] px-6 py-3 rounded-sm hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 font-semibold"
        >
          Revenir à l'accueil
        </Link>
      </div>
    </section>
  );
}
