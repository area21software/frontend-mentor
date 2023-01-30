import express, { Express, Request, Response } from "express"
import cors from "cors"

import feedbackRouter from "./routes/feedback.router"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.use(feedbackRouter)

export default app
