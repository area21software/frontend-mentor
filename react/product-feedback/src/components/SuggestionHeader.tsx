import { ReactNode } from "react"

import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

type SuggestionProps = {
  children: ReactNode
  toggleDropdown: () => void
  isDropdownOpen: boolean
}

const SuggestionHeader = ({
  children,
  toggleDropdown,
  isDropdownOpen,
}: SuggestionProps) => {
  return (
    <div className="relative bg-pfDarkBlueGrey2 h-14">
      <div className="flex items-center justify-between py-2 px-6">
        <button
          className="inline-flex font-regular text-b3 text-gray-300 w-40"
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
        <button className="text-b3 font-semibold w- text-white bg-pfDarkPink px-4 py-2 rounded-lg">
          + Add Feedback
        </button>
      </div>
      {children}
    </div>
  )
}

export default SuggestionHeader
