import { Link } from "react-router-dom"

import { IoIosArrowUp } from "react-icons/io"
import { BsFillChatFill } from "react-icons/bs"

import { Request } from "../model/Request"

type FeedbackCardProps = {
  feedbackRequest: Request
}

const FeedbackCard = ({ feedbackRequest }: FeedbackCardProps) => {
  const capitalize = (str: string): string => {
    const capitalizeStr = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalizeStr
  }

  return (
    <Link to={`/feedback/${feedbackRequest.id}`} state={feedbackRequest}>
      <div className="bg-white rounded-lg mt-4">
        <div className="px-6 py-6">
          <h2 className="font-semibold text-b3">{feedbackRequest.title}</h2>
          <p className="font-regular text-b3 text-pfDarkBlueGrey2 mt-2 mb-4">
            {feedbackRequest.description}
          </p>
          <label className=" bg-pfOffWhite text-pfDarkBlue font-semibold rounded-xl py-2 px-4 mt-2">
            {capitalize(feedbackRequest.category)}
          </label>
          <div className="flex items-center justify-between mt-6">
            <button className="inline-flex items-center bg-pfOffWhite font-bold text-b3 rounded-xl py-2 px-4">
              <IoIosArrowUp className="fill-pfDarkBlue" />
              {feedbackRequest.upvotes}
            </button>
            <button className="inline-flex items-center font-bold text-b3">
              <BsFillChatFill className="fill-gray-400 mr-2" />
              {`${
                feedbackRequest.comments ? feedbackRequest.comments.length : 0
              }`}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeedbackCard
