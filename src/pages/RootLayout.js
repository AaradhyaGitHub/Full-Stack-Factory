import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar/Navbar";

export default function RootLayout() {
  const NAVLINKS = [
    {
      navItem: "React",
      navDest: "/"
    },
    {
      navItem: "DSA",
      navDest: "/"
    },
    {
      navItem: "javaScript",
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
