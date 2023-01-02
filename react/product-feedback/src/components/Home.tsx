import { useState } from "react"

import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import { Request } from "../model/Request"

import NavigationBar from "./NavigationBar"
import SuggestionHeader from "./SuggestionHeader"
import FeedbackCard from "./FeedbackCard"
import EmptyFeedback from "./EmptyFeedback"
import FilterCard from "./FilterCard"
import RoadmapCard from "./RoadmapCard"

const data = require("../data.json")

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const productFeedbackRequests: Request[] = []
  //   const productFeedbackRequests: Request[] = data.productRequests

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden max-w-[1080px] mx-auto">
      <header className="sm:hidden flex gradient1 h-20">
        <div className="flex items-center justify-between w-full px-6 sm:hidden">
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

      <div className="hidden sm:h-48 sm:flex sm:justify-between sm:px-6 sm:mt-12 lg:flex-col lg:h-full">
        <div className="flex flex-col justify-end gradient1 w-56 rounded-lg lg:h-36">
          <div className="pl-6 pb-6">
            <p className="font-bold text-hm text-white">Frontend Mentor</p>
            <p className="text-b2 text-pfOffWhite">Feedback Board</p>
          </div>
        </div>
        <FilterCard />
        <RoadmapCard />
      </div>

      <div className="w-full">
        <SuggestionHeader
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          suggestionCount={productFeedbackRequests.length}
        >
          <NavigationBar isOpen={isMobileNavOpen} />
        </SuggestionHeader>

        <div className="flex flex-col px-6 pt-6 pb-16">
          {productFeedbackRequests.length === 0 ? (
            <EmptyFeedback />
          ) : (
            productFeedbackRequests.map((request) => (
              <FeedbackCard key={request.id} feedbackRequest={request} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
