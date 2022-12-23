import { IoIosArrowUp } from "react-icons/io"
import { BsFillChatFill } from "react-icons/bs"

const FeedbackCard = () => {
  return (
    <div className="bg-white rounded-lg mt-4">
      <div className="px-6 py-6">
        <h2 className="font-semibold text-b3">Add tags for solutions</h2>
        <p className="font-regular text-b3 text-pfDarkBlueGrey2 mt-2 mb-4">
          Easier to search for solutions based on a specific stack.
        </p>
        <label className=" bg-pfOffWhite text-pfDarkBlue font-semibold rounded-xl py-2 px-4 mt-2">
          Enhancement
        </label>
        <div className="flex items-center justify-between mt-6">
          <button className="inline-flex items-center bg-pfOffWhite font-bold text-b3 rounded-xl py-2 px-4">
            <IoIosArrowUp className="fill-pfDarkBlue" />
            112
          </button>
          <button className="inline-flex items-center font-bold text-b3">
            <BsFillChatFill className="fill-gray-400 mr-2" />2
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
