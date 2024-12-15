import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import { Drawer } from "./Drawer";

const PAGES = [
  {
    name: 'HOME',
    link: '/'
  },
  {
    name: 'CURSOS',
    link: '/cursos'
  },
  {
    name: 'PROFESSORES',
    link: '/professores'
  },
  {
    name: 'VIDEOBOOK',
    link: '/videobook'
  },
  {
    name: 'CONTATOS',
    link: '/contatos'
  },
]

export function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className="flex flex-row items-center justify-between w-full h-20 p-4 bg-black fixed top-0 z-50">
      <a href="/">
        <img src="/assets/logo.webp" alt="Logo" className="h-8 lg:h-12" />
      </a>
      <nav className="hidden md:flex flex-row gap-4">
        {PAGES.map(page => (
          <a href={page.link} key={page.name}>
            <p className={`text-white text-sm font-poppins cursor-pointer transition-all hover:opacity-85 hover:underline ${pathname === page.link && 'text-yellow-400 underline'}`}>{page.name}</p>
          </a>
        ))}
      </nav>
      <div className="flex flex-row gap-4">
        <a className="hidden md:flex w-7 ml-auto" href="https://wa.me/5521970401732" target="_blank">
          <IoLogoWhatsapp size={28} color="lime" className="cursor-pointer transition-all hover:scale-110" />
        </a>
        <a className="hidden md:flex w-8 ml-auto" href="https://www.instagram.com/espaconandi/" target="_blank">
          <IoLogoInstagram size={32} color="#E1306C" className="cursor-pointer transition-all hover:scale-110" />
        </a>
      </div>
      <div className="flex md:hidden">
        <button
          className="hover:opacity-75 active:opacity-60 transition ml-auto"
          onClick={() => setDrawerOpen((prevState) => !prevState)}
        >
          <IoMenuOutline className="text-white" size={32} />
        </button>
      </div>
      <Drawer pages={PAGES} isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
    </header>
  )
}