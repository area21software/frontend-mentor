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
        <div className="sm:flex sm:items-center px-6 py-6">
          <div className="sm:order-2">
            <h2 className="font-semibold text-b3">{feedbackRequest.title}</h2>
            <p className="font-regular text-b3 text-pfDarkBlueGrey2 mt-2 mb-4">
              {feedbackRequest.description}
            </p>
            <label className=" bg-pfOffWhite text-pfDarkBlue font-semibold rounded-lg py-1 px-4 mt-2">
              {capitalize(feedbackRequest.category)}
            </label>
          </div>
          <div className="inline-block mt-6 sm:order-1 sm:mr-10 sm:mt-0">
            <button className="inline-flex items-center sm:flex sm:flex-col bg-pfOffWhite font-bold text-b3 rounded-xl py-2 px-4 sm:px-2">
              <IoIosArrowUp className="fill-pfDarkBlue mr-2 sm:mr-0 " />
              {feedbackRequest.upvotes}
            </button>
          </div>
          <div className="float-right mt-8 justify-end sm:float-none sm:mt-0 sm:order-3 sm:ml-auto">
            <button className="inline-flex items-center font-bold text-b3 ">
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
