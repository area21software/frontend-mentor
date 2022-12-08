import { createRoot } from "react-dom/client"
import App from "./App"

const container = document.getElementById("root")
if (!container) throw Error("No root container found")

const root = createRoot(container)

root.render(<App />)
