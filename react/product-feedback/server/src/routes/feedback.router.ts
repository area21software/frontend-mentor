import express, { Router } from "express"

import feedbackController from "./feedback.controller"

const feedbackRouter: Router = express.Router()

feedbackRouter.get("/", feedbackController.httpGetAllFeedback)
feedbackRouter.post("/feedback", feedbackController.httpAddFeedback)

export default feedbackRouter
