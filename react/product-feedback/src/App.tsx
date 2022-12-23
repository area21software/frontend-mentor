import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import NavigationBar from "./NavigationBar"
import SuggestionHeader from "./SuggestionHeader"
import FeedbackCard from "./FeedbackCard"

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="font-jost bg-pfOffWhite">
      <div className="">
        <header className="flex gradient1 h-20 bg-red-600">
          <div className="flex items-center justify-between w-full px-6">
            <div>
              <p className="font-bold text-b2 text-white">Frontend Mentor</p>
              <p className="text-b3 text-pfOffWhite">Feedback Board</p>
            </div>
            {isMobileNavOpen ? (
              <AiOutlineClose
                onClick={toggleMobileNav}
                className="h-6 w-6 text-white"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMobileNav}
                className="h-6 w-6 text-white"
              />
            )}
          </div>
        </header>
        <SuggestionHeader
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        >
          <NavigationBar isOpen={isMobileNavOpen} />
        </SuggestionHeader>
      </div>
      <div className="flex flex-col px-6 pt-8 pb-16">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  )
}

export default App

/*

*/
