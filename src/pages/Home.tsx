export function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-9rem)] w-full bg-gray-200 font-poppins">
      <section className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative bg-[url('/assets/background.jpg')] bg-no-repeat bg-cover bg-center z-0">
        <div className="h-full w-full bg-black bg-opacity-85 absolute top-0 bottom-0 left-0 right-0 z-10">{' '}</div>
        <h2 className="md:block hidden text-white text-center lg:text-[2vw] md:text-3xl text-2xl font-semibold z-20 animate-fadeInLeft">ESPAÇO NANDI | FORMAÇÃO DE ATORES</h2>
        <h2 className="md:hidden block text-white text-center text-2xl font-semibold z-20 animate-fadeInLeft">ESPAÇO NANDI <br /> FORMAÇÃO DE ATORES</h2>
        <img src="/assets/cover.jpg" alt="Background cover" className="w-[85%] md:w-fit mt-16 z-20 animate-fadeInLeft" />
        <p className="max-w-[720px] xl:text-[1vw] sm:text-base text-sm mt-12 text-white font-semibold z-20 text-center px-6 animate-fadeInLeft">Escola de teatro fundada em 2014 no Rio de janeiro pela renomada atriz Ittala Nandi. O Espaço Nandi Formação de Atores oferece curso de teatro profissionalizante com DRT de ator em 18 meses e cursos livres de teatro, TV, cinema e dublagem, para todos que buscam aperfeiçoamento.</p>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen sm:gap-24 gap-12 py-16">
        <h2 className="text-center lg:text-[2vw] md:text-3xl text-2xl font-semibold">NOSSA HISTÓRIA</h2>
        <div className="flex md:flex-row flex-col items-center max-w-[1080px] lg:gap-16 gap-12 px-12">
          <img src="/assets/ittala.jpg" alt="Ittala" className="h-72 md:h-80" />
          <p className="lg:text-lg sm:text-base text-sm text-justify">Ittala Nandi tem uma vasta experiência na área de educação, em 1993 assumiu a Coordenação da Escola de Formação de Atores de Teatro, Cinema e TV na Faculdade da Cidade do Rio de Janeiro, além de ministrar a matéria de Artes Cênicas onde permaneceu até 2002; em 2003 recebeu o Notório Saber em Artes Cênicas, outorgado pelo Ministério da Educação, através da Universidade do Rio de Janeiro – UNIRIO; no ano de 2005 fundou a Escola Sul Americana de Cinema e TV do Paraná – CINETVPR na Capital Curitiba/PR e em 9 de novembro de 2011, recebeu do governo federal a insígnia de Comendadora pela Ordem do Mérito Cultural. Hoje Ittala Nandi é atriz contratada exclusiva da Rede Record de televisão onde aplica com maestria todo seu conhecimento adquirido em mais de 50 anos de carreira em teatro, cinema e tv.</p>
        </div>
      </section>
    </div>
  )
}