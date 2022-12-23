import { Comment } from "./Comment"

export interface Request {
  id: number
  title: string
  category: string
  description: string
  status: string
  upvotes: number
  comments?: Comment[]
}
