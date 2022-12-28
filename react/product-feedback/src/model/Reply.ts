import { User } from "./User"

export interface Reply {
  content: string
  replyingTo: string
  user: User
}
