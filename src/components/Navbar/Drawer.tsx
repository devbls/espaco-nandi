import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {
  pages: {
    name: string;
    link: string;
  }[]
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const Drawer = ({ pages, isOpen, setOpen }: Props) => {
  return (
    <div
      className={
        "flex flex-col fixed overflow-hidden z-10 bg-black inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <nav
        className={
          "flex flex-col gap-8 items-center py-16 w-screen max-w-screen-md h-full shadow-xl delay-200 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        {pages.map(page => (
          <a href={page.link} onClick={() => setOpen(false)}>
            <span className="font-poppins text-2xl text-white transition-all">
              {page.name}
            </span>
          </a>
        ))}
        <a href="https://wa.me/5521970401732" target="_blank">
          <button className="flex flex-row items-center gap-2 h-10 mt-8 bg-green rounded-full px-4 text-white font-poppins">
            <FaWhatsapp size={20} />
            ENTRE EM CONTATO
          </button>
        </a>
      </nav>
      <button
        className={`w-8 h-8 absolute top-6 right-4 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <IoMdClose size={32} color="white" />
      </button>
    </div>
  );
};
