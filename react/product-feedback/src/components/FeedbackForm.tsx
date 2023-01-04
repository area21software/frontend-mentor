import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import IconNewFeedback from "../assets/shared/icon-new-feedback.svg"
import IconCheck from "../assets/shared/icon-check.svg"

import { useNavigate } from "react-router-dom"

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]

const FeedbackForm = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [selectedCategory, setCategory] = useState("Feature")
  // WIll NEED FOR EDIT FEEDBACK
  //   const [isStatusOpen, setIsStatusOpen] = useState(false)
  const navigate = useNavigate()

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prevValue) => !prevValue)
  }

  const handleSelected = (index: number) => {
    const selectedCategory = categories[index]
    setCategory(selectedCategory)
    toggleCategoryDropdown()
  }

  // WIll NEED FOR EDIT FEEDBACK
  //   const handleIsStatusOpen = () => {
  //     setIsStatusOpen((prevValue) => !prevValue)
  //   }

  return (
    <div className="max-w-[540px] m-auto">
      <button
        className="flex items-center text-pfGrey font-bold text-b3 pt-9 ml-6"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="fill-pfDarkBlue mr-2 " />
        Go Back
      </button>
      <div className="relative mt-12">
        <img
          src={IconNewFeedback}
          className="absolute -top-5 left-12 h-10 w-10"
        />
        <div className="bg-white rounded-xl mx-6">
          <div className="px-6">
            <h1 className="text-pfDarkBlueGrey2 font-bold text-hs pt-11">
              Create New Feedback
            </h1>
            <div className="flex flex-col mt-6">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Feedback Title
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Add a short, descriptive headline
              </p>
              <textarea className="h-12 bg-pfOffWhite rounded-lg mt-4" />
            </div>
            <div className="relative flex flex-col mt-6">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Category
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Choose a category for your feedback
              </p>
              <button
                className="relative inline-flex pl-6 bg-pfOffWhite text-b2 text-pfDarkBlueGrey2 rounded-md h-12 items-center justify-between mt-4"
                onClick={toggleCategoryDropdown}
              >
                {selectedCategory}
                {isCategoryOpen ? (
                  <IoIosArrowUp className="fill-pfDarkBlue mr-6" />
                ) : (
                  <IoIosArrowDown className="fill-pfDarkBlue mr-6" />
                )}
              </button>
              {isCategoryOpen && (
                <div className="absolute -bottom-64 h-60  shadow-md bg-white rounded-lg w-full">
                  <ul>
                    {categories.map((category, index) => (
                      <div className="flex items-center justify-between border-b-[1px] border-pfOffWhite w-full">
                        <li
                          key={index}
                          className="text-b1 font-regular pl-6 py-3 w-full"
                          onClick={() => handleSelected(index)}
                        >
                          {category}
                        </li>
                        {selectedCategory === categories[index] ? (
                          <img src={IconCheck} className="h-2 w-3 mr-6" />
                        ) : null}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-6">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Feedback Detail
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea className="h-32 bg-pfOffWhite rounded-lg mt-4" />
            </div>
            <div className="flex flex-col space-y-2 mt-10 pb-6">
              <button className="bg-pfDarkPink text-white py-2 rounded-xl">
                Add Feedback
              </button>
              <button className="bg-pfDarkBlueGrey2 text-white py-2 rounded-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm

// WILL NEED FOR EDIT FEEDBACK
/*
<div className="flex flex-col mt-6">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Update Status
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Change feature state
              </p>
              <button
                className="inline-flex pl-6 bg-pfOffWhite text-b2 text-pfDarkBlueGrey2 rounded-md h-12 items-center justify-between mt-4"
                onClick={handleIsStatusOpen}
              >
                Planned
                {isStatusOpen ? (
                  <IoIosArrowUp className="fill-pfDarkBlue mr-6" />
                ) : (
                  <IoIosArrowDown className="fill-pfDarkBlue mr-6" />
                )}
              </button>
              {isStatusOpen && <div className="h-20 w-20">status</div>}
            </div>
*/
