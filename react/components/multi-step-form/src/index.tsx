import { createRoot } from "react-dom/client"
import App from "./App"

const container = document.getElementById("root")
if (!container) throw Error("Cant get app container element")
const root = createRoot(container)
root.render(<App />)
