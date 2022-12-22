import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

const root = createRoot(rootElement);

root.render(<App />);
