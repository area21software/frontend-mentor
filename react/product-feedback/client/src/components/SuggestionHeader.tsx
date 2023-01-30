import { ReactNode, useState } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { RiLightbulbFlashLine } from "react-icons/ri"
import IconCheck from "../assets/shared/icon-check.svg"

import { useNavigate } from "react-router-dom"

const sortOptions = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
]

type SuggestionProps = {
  children?: ReactNode
  suggestionCount: number
  toggleDropdown: () => void
  isDropdownOpen: boolean
}

const SuggestionHeader = ({
  children,
  toggleDropdown,
  isDropdownOpen,
  suggestionCount,
}: SuggestionProps) => {
  //   const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)
  const [selectedSortOption, setSelectedSortOption] = useState("")
  const navigate = useNavigate()

  return (
    <div className="relative bg-pfDarkBlueGrey2 h-14 sm:mt-12 sm:rounded-lg sm:mx-6">
      <div className="flex items-center justify-between py-2 px-6">
        <div className="hidden sm:flex items-center text-white ml-6">
          <RiLightbulbFlashLine className="h-6 w-6 mr-4" />
          <p className="font-bold text-hs">{`${suggestionCount} Suggestions`}</p>
        </div>
        <div>
          <button
            className="relative flex font-regular text-b3 text-gray-300 w-40"
            onClick={toggleDropdown}
          >
            Sort by :
            <span
              className={`pl-2 flex  items-center text-b3 font-semibold ${
                isDropdownOpen ? "text-gray-300" : "text-white"
              } `}
            >
              Most Upvotes
              {isDropdownOpen ? (
                <IoIosArrowUp className="fill-white ml-2" />
              ) : (
                <IoIosArrowDown className="fill-white ml-2" />
              )}
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute -bottom-52 h-48 z-30  shadow-md bg-white rounded-lg w-64">
              <ul>
                {sortOptions.map((sortOption, index) => (
                  <div className="flex items-center justify-between border-b-[1px] border-pfOffWhite w-full">
                    <li
                      key={index}
                      className="text-b1 font-regular pl-6 py-3 w-full"
                      onClick={() => {}}
                    >
                      {sortOption}
                    </li>
                    {selectedSortOption === sortOption[index] ? (
                      <img src={IconCheck} className="h-2 w-3 mr-6" />
                    ) : null}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          className="text-b3 font-semibold w- text-white bg-pfDarkPink px-4 py-2 rounded-lg"
          onClick={() => navigate("/feedback")}
        >
          + Add Feedback
        </button>
      </div>
      {children}
    </div>
  )
}

export default SuggestionHeader
