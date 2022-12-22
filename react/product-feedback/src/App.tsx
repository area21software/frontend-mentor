import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"

import NavigationBar from "./NavigationBar"

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => {
    console.log("Toggle")
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="font-jost">
      <div className="relative">
        <header className="flex gradient1 h-20 bg-red-600">
          <div className="flex items-center justify-between w-full px-6">
            <div>
              <p className="font-bold text-b2 text-white">Frontend Mentor</p>
              <p className="text-b3 text-pfOffWhite">Feedback Board</p>
            </div>
            <button onClick={toggle}>
              <HiMenuAlt3 className="h-6 w-6 text-white" />
            </button>
          </div>
        </header>
        <NavigationBar isOpen={isOpen} />
      </div>
    </div>
  )
}

export default App
