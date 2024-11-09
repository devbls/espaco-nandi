import { Outlet } from "react-router-dom";

import { Navbar } from ".";

export function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}