const COURSES = [
  {
    name: 'CURSO TÉCNICO EM ARTE DRAMÁTICA',
    duration: 'Duração: 18 meses (800 horas: MEC)',
    description: 'Destinado a alunos matriculados ou egressos do ensino médio, com a finalidade de proporcionar a habilitação, qualificação técnica e especialização, quando pertinentes, de acordo com as competências definidas no perfil profissional de conclusão, segundo itinerário formativo modularizado, observando as orientações do eixo tecnológico do Catálogo Nacional de Cursos Técnicos do MEC. É um nível de formação muito requisitado pelo mercado de trabalho por ser constituído na formação de uma sólida base técnico-científica.',
    link: 'cursos/tecnico-profissionalizante'
  },
  {
    name: 'CURSOS DE EXTENSÃO',
    duration: null,
    description: 'São cursos com duração média de 40 horas, que têm objetivos de aprofundar ou agregar novos conhecimentos ao profissional para possibilitar o exercício de outras funções. As aulas são focadas em temas específicos, para garantir que o aluno desenvolva novas competências e amplie o leque de oportunidades no mercado de trabalho.',
    link: 'cursos/aperfeicoamento'
  }
]

export function Courses() {
  return (
    <section className="min-h-[calc(100vh-9rem)] flex flex-col items-center py-16 px-8 font-poppins">
      <h1 className="text-4xl font-bold text-center animate-fadeIn">NOSSOS CURSOS</h1>
      <div className="flex md:flex-row flex-col flex-wrap gap-12 mt-16">
        {COURSES.map(course => (
          <div className="flex flex-col md:w-[40vw] bg-gray-100 p-4 rounded animate-fadeInBottom">
            <h2>{course.name}</h2>
            {course.duration && <p>{course.duration}</p>}
            <hr className="h-[2px] bg-gray-400 my-1" />
            <p className="text-sm mb-4">{course.description}</p>
            <a href={course.link} className="mt-auto">
              <button className="w-fit h-6 mx-auto bg-yellow-300 rounded-xl px-4 text-sm font-semibold transition-all hover:bg-yellow-400">SAIBA MAIS</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}