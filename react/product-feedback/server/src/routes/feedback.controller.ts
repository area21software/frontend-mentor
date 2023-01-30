import { Request, Response } from "express"

import feedbackModel from "../model/feedback.model"

function httpGetAllFeedback(req: Request, res: Response) {
  const feedback = feedbackModel.getAllFeedback()

  return res.status(200).json(feedback)
}

function httpAddFeedback(req: Request, res: Response) {
  const newFbReq = req.body
  const newFb = feedbackModel.addFeedback(newFbReq)

  return res.status(201).json(newFb)
}

export default {
  httpGetAllFeedback,
  httpAddFeedback,
}
