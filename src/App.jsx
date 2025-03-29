import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContributePage from "./pages/ContributePage.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "about",
          index: true,
          element: <AboutPage />
        },
        {
          path: "contribute",
          index: true,
          element: <ContributePage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
