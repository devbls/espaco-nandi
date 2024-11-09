import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";

import { Drawer } from "./Drawer";
import { IoMenuOutline } from "react-icons/io5";

const PAGES = [
  {
    name: 'HOME',
    link: '#home'
  },
  {
    name: 'CURSOS',
    link: '#cursos'
  },
  {
    name: 'PROFESSORES',
    link: '#professores'
  },
  {
    name: 'ARQUIVO',
    link: '#arquivo'
  },
  {
    name: 'VIDEOBOOK',
    link: '#videobook'
  },
  {
    name: 'CONTATOS',
    link: '#contatos'
  },
]

export function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between w-full p-4 bg-black sticky">
      <a href="/">
        <img src="/assets/logo.png" alt="Logo" className="h-12" />
      </a>
      <nav className="hidden md:flex flex-row gap-4">
        {PAGES.map(page => (
          <p className="text-white text-sm font-poppins cursor-pointer transition-all hover:opacity-85 hover:underline">{page.name}</p>
        ))}
      </nav>
      <a className="hidden md:flex" href="https://wa.me/5521970401732" target="_blank">
        <IoLogoWhatsapp size={28} color="lime" className="cursor-pointer transition-all hover:scale-110" />
      </a>
      <button
        className="block md:hidden hover:opacity-75 active:opacity-60 transition"
        onClick={() => setDrawerOpen((prevState) => !prevState)}
      >
        <IoMenuOutline className="text-white" size={32} />
      </button>
      <Drawer pages={PAGES} isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
    </header>
  )
}