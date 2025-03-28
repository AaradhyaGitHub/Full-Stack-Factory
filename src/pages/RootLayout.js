import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar/Navbar";

export default function RootLayout() {
  const NAVLINKS = [
    {
      navItem: "Home",
      navDest: "/"
    },
    {
      navItem: "About",
      navDest: "/"
    },
    {
      navItem: "Contribute",
      navDest: "/"
    }
  ];
  return (
    <>
      <NavBar tags={NAVLINKS} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
