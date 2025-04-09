import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContributePage from "./pages/ContributePage.jsx";
import CourseLandingPage from "./pages/CourseLandingPage.jsx";
import UnitPage from "./pages/UnitPage.jsx";
import CourseSidebarLayout from "./pages/CourseSidebarLayout.jsx";

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
          element: <AboutPage />
        },
        {
          path: "contribute",
          element: <ContributePage />
        },
        {
          path: "courses/:courseId",
          element: <CourseSidebarLayout><CourseLandingPage /></CourseSidebarLayout>
        },
        {
          path: "courses/:courseId/unit/:unitId",
          element: <CourseSidebarLayout><UnitPage /></CourseSidebarLayout>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;