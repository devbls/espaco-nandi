import { Map, Marker } from "@vis.gl/react-google-maps";

export function Contacts() {
  return (
    <section className="min-h-[calc(100vh-9rem)] flex flex-col items-center py-20 px-12 font-poppins">
      <p>O Espaço Nandi fica no shopping <b>Map Band</b>, na Estrada dos Bandeirantes 8591, sala 327.</p>
      <p>Jacarepaguá. Rio de Janeiro. RJ Cep 22783-115 (na altura do Riocentro, no shopping do McDonald's)</p>
      <br />
      <div className="flex flex-row gap-12">
        <div className="flex flex-col items-center">
          <p>Entre em contato conosco e tire suas dúvidas:</p>
          <b>Telefone: (21) 3500-4262</b>
          <b>WhatsApp: (21) 97040-1732</b>
        </div>
        <div className="flex flex-col items-center">
          <p>Horário de funcionamento da Secretaria do curso:</p>
          <b>Seg, Qua e Sextas das 14h às 20h</b>
          <b>Sábados das 10h às 20h</b>
        </div>
      </div>
      <div className="flex mt-8">
        <Map
          style={{width: '70vw', height: '50vh'}}
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