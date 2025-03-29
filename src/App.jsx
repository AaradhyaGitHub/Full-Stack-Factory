import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { 
          index: true, 
          element: <HomePage /> 
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;