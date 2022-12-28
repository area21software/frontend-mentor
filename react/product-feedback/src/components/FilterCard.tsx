const FilterCard = () => {
  return (
    <div className="bg-white rounded-lg mx-6 mt-6 overflow-auto sm:h-44 sm:w-56 sm:mx-0 sm:mt-0 sm:overflow-hidden">
      <div className="flex flex-wrap px-6 py-4 justify-start">
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
        <button className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl">
          Feature
        </button>
      </div>
    </div>
  )
}

export default FilterCard
