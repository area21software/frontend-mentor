import Empty from "../assets/illustration-empty.svg"

const EmptyFeedback = () => {
  return (
    <div className="flex flex-col items-center  bg-white rounded-lg">
      <div className="flex flex-col items-center px-6 pt-20 pb-20 max-w-[410px]">
        <img src={Empty} className="h-28 w-28" />
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-hs text-pfDarkBlueGrey2 mt-10">
            There is no feedback yet.
          </h2>
          <p className="font-regular text-b3 text-pfDarkBlueGrey2 mt-4 text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <button className="text-b3 font-semibold w- text-white bg-pfDarkPink px-4 py-2 mt-6 rounded-lg">
            + Add Feedback
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmptyFeedback
