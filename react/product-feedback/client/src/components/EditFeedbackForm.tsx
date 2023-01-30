import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import IconEditFeedback from "../assets/shared/icon-edit-feedback.svg"
import IconCheck from "../assets/shared/icon-check.svg"

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]
const statuses = ["Planned", "Suggestion", "In-Progress", "Live"]

const EditFeedbackForm = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [selectedCategory, setCategory] = useState("Feature")
  const [selectedStatus, setStatus] = useState("Planned")
  const [isStatusOpen, setIsStatusOpen] = useState(false)

  const navigate = useNavigate()
  const { state: feedbackRequest } = useLocation()

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen((prevValue) => !prevValue)
  }

  const toggleStatusDropdown = () => {
    setIsStatusOpen((prevValue) => !prevValue)
  }

  const handleSelectedCategory = (index: number) => {
    const selectedCategory = categories[index]
    setCategory(selectedCategory)
    toggleCategoryDropdown()
  }

  const handleSelectedStatus = (index: number) => {
    const selectedStatus = statuses[index]
    setStatus(selectedStatus)
    toggleStatusDropdown()
  }

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
          src={IconEditFeedback}
          className="absolute -top-5 left-12 h-10 w-10"
        />
        <div className="bg-white rounded-xl mx-6">
          <div className="px-6">
            <h1 className="text-pfDarkBlueGrey2 font-bold text-hs pt-11">
              {`Editing '${feedbackRequest.title}'`}
            </h1>
            <div className="flex flex-col mt-16">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Feedback Title
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Add a short, descriptive headline
              </p>
              <textarea className="h-12 pt-3 pl-3 bg-pfOffWhite rounded-lg mt-4" />
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
                <div className="absolute -bottom-64 h-60 z-30  shadow-md bg-white rounded-lg w-full">
                  <ul>
                    {categories.map((category, index) => (
                      <div className="flex items-center justify-between border-b-[1px] border-pfOffWhite w-full">
                        <li
                          key={index}
                          className="text-b1 font-regular pl-6 py-3 w-full"
                          onClick={() => handleSelectedCategory(index)}
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

            <div className="relative flex flex-col mt-6">
              <h2 className="font-bold text-pfDarkBlueGrey2 text-b3">
                Update Status
              </h2>
              <p className="font-regular text-pfGrey text-b3">
                Change feature state
              </p>
              <button
                className="relative inline-flex pl-6 bg-pfOffWhite text-b2 text-pfDarkBlueGrey2 rounded-md h-12 items-center justify-between mt-4"
                onClick={toggleStatusDropdown}
              >
                {selectedStatus}
                {isCategoryOpen ? (
                  <IoIosArrowUp className="fill-pfDarkBlue mr-6" />
                ) : (
                  <IoIosArrowDown className="fill-pfDarkBlue mr-6" />
                )}
              </button>
              {isStatusOpen && (
                <div className="absolute -bottom-52  shadow-md bg-white rounded-lg w-full">
                  <ul>
                    {statuses.map((status, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b-[1px] border-pfOffWhite w-full"
                      >
                        <li
                          className="text-b1 font-regular pl-6 py-3 w-full"
                          onClick={() => handleSelectedStatus(index)}
                        >
                          {status}
                        </li>
                        {selectedStatus === statuses[index] ? (
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
              <textarea className="h-32 pt-3 pl-3 bg-pfOffWhite rounded-lg mt-4" />
            </div>
            <div className="flex flex-col space-y-2 mt-10 pb-6 md:flex-row md:space-y-0 ">
              <button className="bg-pfDarkPink text-white py-2 md:px-6 rounded-xl md:order-3">
                Add Feedback
              </button>
              <button
                className="bg-pfDarkBlueGrey2 text-white py-2 md:px-6 md:mr-4 md:order-2 
                md:ml-auto rounded-xl"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 md:px-6 md:mr-4 md:order-1 rounded-xl"
                onClick={() => console.log("Delete")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFeedbackForm
