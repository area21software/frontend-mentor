import { Route, Routes } from "react-router-dom"
import EditFeedbackForm from "./components/EditFeedbackForm"
import FeedbackDetail from "./components/FeedbackDetail"
import FeedbackForm from "./components/FeedbackForm"

import Home from "./components/Home"

const App = () => {
  return (
    <div className="font-jost min-h-full bg-pfOffWhite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
        <Route path="feedback/:id/edit" element={<EditFeedbackForm />} />
      </Routes>
    </div>
  )
}

export default App
