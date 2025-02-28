import { Map, Marker } from "@vis.gl/react-google-maps";

export function Contacts() {
  return (
    <section className="min-h-[calc(100vh-9rem)] flex flex-col items-center py-16 px-8 font-poppins">
      <p className="text-center text-sm sm:text-base animate-fadeIn">O Espaço Nandi fica no shopping <b>Map Band</b>, na Estrada dos Bandeirantes 8591, sala 327.</p>
      <p className="text-center text-sm sm:text-base mt-1 animate-fadeIn">Jacarepaguá. Rio de Janeiro. RJ Cep 22783-115 (na altura do Riocentro, no shopping do McDonald's)</p>
      <br />
      <div className="flex flex-col md:flex-row gap-12 text-sm sm:text-base mt-4 animate-fadeIn">
        <div className="flex flex-col items-center">
          <p className="text-center">Entre em contato conosco e tire suas dúvidas:</p>
          <b className="mt-1">Telefone: (21) 3500-4262</b>
          <b>WhatsApp: (21) 97040-1732</b>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center">Horário de funcionamento da Secretaria do curso:</p>
          <b className="mt-1">Seg, Qua e Sextas das 14h às 20h</b>
          <b>Sábados das 10h às 20h</b>
        </div>
      </div>
      <div className="flex mt-8 animate-fadeInBottom">
        <Map
          style={{width: '75vw', height: '50vh'}}
          defaultCenter={{lat: -22.974440140183365, lng: -43.41392066462158}}
          defaultZoom={16}
          gestureHandling={'greedy'}
        >
          <Marker position={{lat: -22.974440140183365, lng: -43.41392066462158}} />
        </Map>
      </div>
    </section>
  )
}