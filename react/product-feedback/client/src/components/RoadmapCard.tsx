const RoadmapCard = () => {
  return (
    <div className="bg-white rounded-lg w-56 mt-6 sm:mx-0 sm:mt-0 lg:mt-8">
      <div className="p-6">
        <div className="flex w-full justify-between">
          <h2 className="font-bold text-hs">Roadmap</h2>
          <button className="text-pfDarkBlue border-b-2 border-pfDarkBlue font-semibold text-b3">
            View
          </button>
        </div>
        <div className="mt-6">
          <div className="flex w-full items-center mt-2">
            <span className="h-2 w-2 rounded-full bg-pfOrange mr-2" />
            <p className="text-b1 text-pfGrey">Planned</p>
            <p className="ml-auto font-bold text-b1 text-pfGrey">2</p>
          </div>
          <div className="flex w-full items-center mt-2">
            <span className="h-2 w-2 rounded-full bg-pfDarkPink mr-2" />
            <p className="text-b1 text-pfGrey">In-Progress</p>
            <p className="ml-auto font-bold text-b1 text-pfGrey">3</p>
          </div>
          <div className="flex w-full items-center mt-2">
            <span className="h-2 w-2 rounded-full bg-pfLightBlue mr-2" />
            <p className="text-b1 text-pfGrey">Live</p>
            <p className="ml-auto font-bold text-b1 text-pfGrey">1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard
