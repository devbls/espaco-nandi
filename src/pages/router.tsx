import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Courses } from "./Courses";
import { Teachers } from "./Teachers";
import { Archive } from "./Archive";
import { Videobook } from "./Videobook";
import { Contacts } from "./Contacts";
import { NavbarWrapper } from "../components/Navbar/Wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cursos",
        element: <Courses />,
      },
      {
        path: "/professores",
        element: <Teachers />,
      },
      {
        path: "/arquivo",
        element: <Archive />,
      },
      {
        path: "/videobook",
        element: <Videobook />,
      },
      {
        path: "/contatos",
        element: <Contacts />,
      },
    ]
  },
]);
