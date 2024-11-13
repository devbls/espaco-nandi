import { MdLocationOn } from "react-icons/md";

export function Footer() {
  return (
    <footer className="w-full flex flex-row items-center justify-between h-16 p-6 bg-black font-poppins text-white">
      <p className="text-sm">NANDI PRODUÇÕES ARTÍSTICAS LTDA<br/> CNPJ 35.883.602/0001-19</p>
      <div className="flex flex-row gap-2 items-center">
        <MdLocationOn size={24} />
        <p className="text-sm">Shopping Map Band - Estrada dos Bandeirantes 8591,<br/> sala 327. Jacarepaguá. RJ</p>
      </div>
    </footer>
  )
}