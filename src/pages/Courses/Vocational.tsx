export function Vocational() {
  return (
    <article className="flex flex-col items-center min-h-[calc(100vh-9rem)] w-full bg-gray-200 font-poppins py-16">
      <section className="w-[80vw] h-[60vh] flex flex-col items-center justify-center relative bg-[url('/assets/aula-de-teatro.jpg')] bg-no-repeat bg-cover z-0">
        <div className="h-full w-full bg-black bg-opacity-60 absolute top-0 bottom-0 left-0 right-0 z-10">{' '}</div>
        <h1 className="text-3xl md:text-4xl text-white font-bold text-center animate-fadeIn z-20 px-4">CURSO DE TEATRO PROFISSIONALIZANTE</h1>
        <h2 className="text-2xl md:text-3xl text-white text-center animate-fadeIn z-20 mt-6">DRT definitivo em 18 meses</h2>
      </section>
      <section className="max-w-[75vw] flex flex-col items-center">
        <div className="w-[75vw] flex flex-col items-center mt-12">
          <p className="text-center">Curso de teatro profissionalizante em arte dramática mantido pela atriz <b>Ittala Nandi</b>, Notório Saber em Artes Cênicas pela Universidade Federal do Estado do Rio de Janeiro UNIRIO e Comendadora pela Ordem do Mérito Cultural da Republica Federativa do Brasil.</p>
          <p className="text-center mt-8"><b>Pré-requisitos para matrícula:</b> Ter no mínimo 16 anos e estar cursando no mínimo o segundo ano do Ensino Médio.</p>
          <p className="text-center mt-8"><b>Duração:</b> 18 meses (800 horas MEC) - Divididos em 6 módulos de 3 meses com 3 matérias por módulo.</p>
        </div>
        <div className="md:w-[50vw] lg:w-[27.5vw] flex flex-col items-center mt-16 bg-yellow-200 rounded-xl p-4">
          <b>DISCIPLINAS</b>
          <div className="grid grid-cols-2 grid-rows-4 gap-3 mt-4 items-center">
            <p className="text-center text-sm md:text-base">Interpretação Dramática</p>
            <p className="text-center text-sm md:text-base">Atuação para Câmera</p>
            <p className="text-center text-sm md:text-base">Introdução à Dublagem</p>
            <p className="text-center text-sm md:text-base">Expressão Vocal</p>
            <p className="text-center text-sm md:text-base">Expressão Corporal</p>
            <p className="text-center text-sm md:text-base">História do Teatro</p>
            <p className="text-center text-sm md:text-base">Literatura Dramática</p>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-center mt-16">- Turmas e horários -</h2>
        <div className="w- md:w-[35vw] flex flex-col items-center mt-4 gap-2">
          <p className="text-center"><b>Turmas regulares</b> durante a semana com aulas às <b>Segundas, Quartas e Sextas.</b></p>
          <p className="text-center"><b>Manhã:</b> Das 8h ao meio dia, com 15 minutos de intervalo.</p>
          <p className="text-center"><b>Tarde:</b> Das 14h às 18h, com 15 minutos de intervalo.</p>
          <p className="text-center"><b>Noite:</b> Das 18h40 às 22h40, com 15 minutos de intervalo.</p>
          <hr className="w-full h-[2px] bg-black my-2" />
          <p className="text-center"><b>Turma integral</b> aos Sábados</p>
          <p className="text-center"><b>Sábados:</b> Das 8h às 21h, com intervalo de uma hora para almoço e 3 intervalos de 15 minutos.</p>
        </div>
        <div className="w-[75vw] flex flex-col items-center mt-20">
          <p className="text-center">Para quem não tem disponibilidade durante a semana criamos uma turma de período integral aos Sábados com a mesma carga horária (12h) das turmas regulares. O aluno terá em um único dia as 3 matérias que a turma regular tem dividida em 3 dias. Aos Sábado, além dos intervalos de 15 minutos por matéria, reservamos um intervalo para o almoço das 13h às 14h.</p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-center mt-20">- Documentação exigida para matrículas -</h2>
        <div className="md:w-[35vw] flex flex-col items-center mt-4 gap-2">
          <p className="text-center">Duas foto 3x4 coloridas</p>
          <p className="text-center">Certidão de Nascimento (cópia)</p>
          <p className="text-center">RG / CPF (cópia)</p>
          <p className="text-center">Comprovante de residência (cópia)</p>
          <p className="text-center">Comprovante de obrigações militares: homens de 18 a 45 anos - Lei 4375/64 (cópia)</p>
          <p className="text-center">Atestado de saúde, com tipo sanguíneo - Lei Estadual 2097/93 (Original)</p>
          <p className="text-center">Certificado do Ensino Médio, histórico escolar e publicação do Diário Oficial ou declaração de cursando o Ensino Médio. (cópia autenticada em cartório)</p>
        </div>
      </section>
    </article>
  )
}