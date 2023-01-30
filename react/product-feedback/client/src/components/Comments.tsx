import { Comment } from "../model/Comment"

import CommentCard from "./CommentCard"

type CommentsProps = {
  comments: Comment[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="bg-white rounded-lg mt-6">
      <div className="p-6">
        <h1 className="text-pfDarkBlueGrey2 font-bold text-hs">{`${comments.length} Comments`}</h1>
        {comments &&
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  )
}

export default Comments
