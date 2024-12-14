import { createBrowserRouter } from "react-router-dom";


import { Home } from "./Home";
import { Courses } from "./Courses";
import { Vocational } from "./Courses/Vocational";
import { Teachers } from "./Teachers";
import { Videobook } from "./Videobook";
import { Contacts } from "./Contacts";
import { NavbarWrapper } from "../components/Navbar/Wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cursos",
        element: <Courses />
      },
      {
        path: "cursos/tecnico-profissionalizante",
        element: <Vocational />,
      },
      {
        path: "professores",
        element: <Teachers />,
      },
      {
        path: "videobook",
        element: <Videobook />,
      },
      {
        path: "contatos",
        element: <Contacts />,
      },
    ]
  },
]);
