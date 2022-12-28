import { Route, Routes } from "react-router-dom"
import FeedbackDetail from "./components/FeedbackDetail"

import Home from "./components/Home"

const App = () => {
  return (
    <div className="font-jost min-h-full bg-pfOffWhite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
      </Routes>
    </div>
  )
}

export default App
