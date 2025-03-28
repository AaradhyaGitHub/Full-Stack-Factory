import { Outlet } from "react-router-dom";
import RootNav

export default function RootLayout() {
  return (
    <>
      <main>
        <nav>
          <li>
            <RootNa />
          </li>
        </nav>
        <Outlet />
      </main>
    </>
  );
}
