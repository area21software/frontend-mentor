import { User } from "./User"
import { Reply } from "./Reply"

export interface Comment {
  id: number
  content: string
  user: User
  replies: Reply[]
}
