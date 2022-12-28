import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"

import FeedbackCard from "./FeedbackCard"
import Comments from "./Comments"

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { state: feedbackRequest } = useLocation()
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <button
          className="flex items-center text-pfGrey font-bold"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="fill-pfDarkBlue mr-2 " />
          Go Back
        </button>
        <button className="text-b3 font-bold w- text-white bg-pfDarkBlue px-4 py-2 rounded-lg">
          Edit Feedback
        </button>
      </div>
      <FeedbackCard feedbackRequest={feedbackRequest} />
      {feedbackRequest.comments && (
        <Comments comments={feedbackRequest.comments} />
      )}
      <div className="flex flex-col bg-white rounded-lg mt-6">
        <div className="p-6">
          <h2 className="font-bold text-hs text-pfDarkBlueGrey2">
            Add Comment
          </h2>
          <textarea
            placeholder="Type your comment here"
            className="bg-pfOffWhite h-20 w-full rounded-lg mt-6 p-4"
          />
          <div className="flex items-center justify-between mt-4">
            <p>250 Characters left</p>
            <button className="text-b3 font-bold w- text-white bg-pfDarkPink px-4 py-2 rounded-lg">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackDetail