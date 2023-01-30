import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const rootContainer = document.getElementById("root")
if (!rootContainer) throw Error("No root container!")

const root = createRoot(rootContainer)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
