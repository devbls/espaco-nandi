import { Outlet } from "react-router-dom";

import { Navbar } from ".";
import { Footer } from "../Footer";

export function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}