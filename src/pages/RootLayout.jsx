import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar.jsx";

export default function RootLayout() {
  const NAVLINKS = [
    {
      navItem: "Home",
      navDest: "/",
    },
    {
      navItem: "About",
      navDest: "/about",
    },
    {
      navItem: "Contribute",
      navDest: "/contribute",
    }
  ];

  return (
    <>
      <Navbar 
        navLinks={NAVLINKS} 
        orientation="horizontal" 
        logo="Full Stack Factory" 
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}