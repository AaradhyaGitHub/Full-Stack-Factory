import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar.jsx";

export default function RootLayout() {
  const NAVLINKS = [
    {
      navItem: "Home",
      navDest: "/",
      icon: "🏠"
    },
    {
      navItem: "About",
      navDest: "/about",
      icon: "ℹ️"
    },
    {
      navItem: "Contribute",
      navDest: "/contribute",
      icon: "🤝"
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