const FilterCard = () => {
  return (
    <div className="bg-white rounded-lg w-56 sm:mx-0 sm:mt-0 sm:overflow-hidden mt-6  lg:mt-8">
      <div className="flex flex-wrap pl-4 pr-4 pb-4 justify-start">
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          All
        </button>
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          UI
        </button>
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          UX
        </button>
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          Enhancement
        </button>
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          Bug
        </button>
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2  rounded-xl">
          Feature
        </button>
      </div>
    </div>
  )
}

export default FilterCard
