import { createRoot } from "react-dom/client"
import App from "./App"

const appContainer = document.getElementById("app")
if (!appContainer) throw Error("Can not find App!")

const root = createRoot(appContainer)

root.render(<App />)
