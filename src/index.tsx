import { createRoot } from "react-dom/client";
import { sum } from "./demo";
import React from "react";
import "./index.css";
function App() {
  return <div className="text-red-600">{sum(1, 2)}</div>;
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
