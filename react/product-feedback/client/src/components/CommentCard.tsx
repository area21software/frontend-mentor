import { Comment } from "../model/Comment"
import { User } from "../model/User"

type CommentCardProps = {
  comment: Comment
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="mt-6">
      <div className="flex item-center">
        <img
          src={`${require("../assets/user-images/image-anne.jpg")}`}
          className="h-10 w-10 mr-4 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-b2 font-bold text-pfDarkBlueGrey2">
            {comment.user.name}
          </p>
          <p className="text-b3 font-normal text-pfGrey">
            {`@${comment.user.username}`}
          </p>
        </div>
        <button className="text-pfDarkBlue ml-auto">Reply</button>
      </div>
      <div className="border-b-2 border-pfOffWhite">
        <p className="pt-4 pb-6">{comment.content}</p>
      </div>
    </div>
  )
}

export default CommentCard
