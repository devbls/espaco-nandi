const TEACHERS = [
  {
    image: '/assets/ittala2.webp',
    name: 'ITTALA NANDI',
    description: 'Currículo com trinta e duas peças teatrais, 29 filmes, realizadora, autora, roteirista, diretora. Prêmio Melhor Atriz Coadjuvante pela APCT Associação Paulista de Críticos Teatrais, Melhor Atriz Prêmio Coruja de Ouro pelo filme de Ruy Guerra “Os Deuses e os Mortos”, Prêmio Air France de Melhor Atriz com o filme “Guerra Conjugal” de Joaquim Pedro de Andrade,  representa o Brasil no Festival de Cannes com o filme de Arnaldo Jabor “Pindorama”, como educadora  coordena a Escola de Formação de Atores da UniverCidade do Rio de Janeiro, cria, coordena e da aulas na Escola de Teatro e Cinema do Paraná CINETVPR, como realizadora cria o Festival de Cinema do Paraná, recebe o título Notório Saber Dra. em Artes Cênicas através da UNIRIO, é admitida na Ordem do Mérito Cultural recebendo o título de Comendadora pela República Brasileira, recebe o Prêmio Arte Qualidade Brasil em 2013 por sua brilhante carreira.'
  },
  {
    image: '/assets/nandi.webp',
    name: 'GIULIANNO NANDI',
    description: 'Filho do cineasta André Faria e da atriz Ittala Nandi, Giuliano iniciou sua carreira artística em 1979, aos sete anos, em uma pequena participação no filme “Amor e Traição” dirigido por Pedro Camargo. Formado pela ETEC – RJ. Cursou a Oficina de Atores da Rede Globo. Profissionalizou-se como ator em 1995 e como diretor teatral em 2002. Nos palcos trabalhou com diretores como Carlos Wilson e Bibi ferreira entre outros. Na TV participou de séries como "Você Decide", "Confissões de Adolescente", "Joana e Marcelo Amor (Quase) Perfeito" e das novelas "Zazá" e "Estrela Guia", tendo seu maior destaque com o personagem "Street" na novelinha "Malhação" com direção de Wolf Maya em 1996. Em 1998 é contratado pela UniverCidade do Rio de Janeiro como assistente de coordenação do Curso de Formação de Atores onde permaneceu até 2002. Em 2005 dirigiu o Sitcom "Sonhos Urbanos" de Ricardo Kelmer. De 2007 a 2009 Giuliano fez parte, como assistente de direção, da equipe do diretor Alexandre Avancini na Rede Record. Em 2010 foi assistente de direção do projeto "Xuxa Só Para Baixinhos 10". Em 2013 dirigiu o curtas metragem"Estatísticas" protagonizado por Luciano Szafir , produzido por Marcio Rosario.'
  },
  {
    image: '/assets/michele.webp',
    name: 'MICHELE COSENDEY',
    description: 'Atriz-pesquisadora, Preparadora Corporal e Diretora de movimento. Integrante do Limiar Grupo de Teatro. Pós-graduada em preparação de atores pela Faculdade Angel Vianna. • No capo da pesquisa: participou de oficinas com Roberta Carreri (Odin Teatret), Eve Doe Bruce (Theatre Du Soleil), Fabianna Mello Souza (Cia Bondrés), Hugo Moss e Thais Loureiro (Michael Chekhov Brasil), Ana Cristina Colla, Raque Scotti e Renato Ferracini (LUME Teatro). • No campo da atuação: circula com o espetáculo infantil “Molho”– Direção de Carolina Pismel e Natalie Rodrigues - pelos espaços SESCs e Festivais pelo Brasil; atuou na websérie RG - A Revolução – Direção de Tainã Stinghen (2014), no espetáculo “A decisão” – Direção e dramaturgia de Nelson Rodrigues Filho (2014); no Festival Home Theatre – Direção: Kerry Michael (2015) e no curta metragem “À Vera” – Direção: Luis Augusto Guedes (2015). • No campo da preparação corporal e Direção de movimento, atuou nos seguintes projetos: “A mulher sem face” – Direção de Fred Tolipan (2012); “Os perdedores” – Direção Iuri Kruschewsky (2014), “A clara e o pombo” – Direção Gabriel Cortez (2015), "Cabras Cabras" - Direção Fernando Philbert (2014), “Me fale de Sarah” (curta metragem) – Direção Taina Stinghen (2015) e "Ser ou não ser Hamlet" - Direção Cico Caseira (2016). Dentre outros trabalhos na área artística.'
  },
  {
    image: '/assets/ana.webp',
    name: 'ANAMELIA ROCHA',
    description: 'Atriz, formada pela Escola Estadual de Teatro Martins Pena . Educadora Artística com Licenciatura Plena e Habilitação em Artes Cênicas pela UNIRIO, especialista em Teatro terapia pela UCAM. TRABALHA COM FORMAÇÃO DE ATOR E PREPARAÇÃO DE ELENCO DESDE 2006. FORMAÇÃO ACADÊMICA : PESQUISADORA DA PSICOLOGIA DO ATOR;PSICÓLOGA  - UFRJ 2012; ESPECIALISTA EM TEATROTERAPIA - UCAM 2007;LICENCIATURA PLENA EM ARTES CÊNICAS - UNIRIO 2006;ATRIZ FORMADA PELA E.T MARTINS PENA 2000.'
  },
  {
    image: '/assets/roberjane.webp',
    name: 'ROBERJANE ANDRADE',
    description: 'Fonoaudióloga pós-graduada em psicopedagogia, atriz e dubladora. Trabalha com suporte técnico vocal para voz falada de atores, dubladores e locutores. Preparação de voz em cursos, workshops e preparação de elenco.'
  }
]

export function Teachers() {
  return (
    <section className="min-h-[calc(100vh-9rem)] flex flex-col items-center py-20 px-12 font-poppins">
      <h1 className="text-4xl font-bold text-center animate-fadeIn">NOSSOS PROFESSORES</h1>
      <div className="max-w-[1280px] flex flex-col gap-24 md:gap-16 mt-16">
        {TEACHERS.map((teacher, index) => (
          <div key={teacher.name} className={`flex ${index % 2 === 0 ? 'md:flex-row animate-fadeInBottom md:animate-fadeInLeft' : 'md:flex-row-reverse animate-fadeInBottom md:animate-fadeInRight'} flex-col gap-8 items-center`}>
            <img src={teacher.image} alt="Picture" className="h-fit min-w-[132px]" />
            <div className={`${index % 2 !== 0 && 'md:text-end'}`}>
              <h2 className={`md:text-lg font-semibold text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{teacher.name}</h2>
              <p className="md:text-base text-sm mt-4">{teacher.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}