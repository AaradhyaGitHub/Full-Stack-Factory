import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

try {
  const entryPoint = document.getElementById("root");
  
  if (!entryPoint) {
    console.error("Could not find root element");
    throw new Error("Root element not found");
  }

  ReactDOM.createRoot(entryPoint).render(<App />);
} catch (error) {
  console.error("Error in rendering:", error);
}