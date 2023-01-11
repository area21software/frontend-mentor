type FilterCardProps = {
  handleSelectCategory: (selectedCatgory: string) => void
}

const FilterCard = ({ handleSelectCategory }: FilterCardProps) => {
  return (
    <div className="bg-white rounded-lg w-56 sm:mx-0 sm:mt-0 sm:overflow-hidden mt-6  lg:mt-8">
      <div className="flex flex-wrap pl-4 pr-4 pb-4 justify-start">
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl"
          onClick={(e) => handleSelectCategory("all")}
        >
          All
        </button>
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl"
          onClick={(e) => handleSelectCategory("ui")}
        >
          UI
        </button>
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl"
          onClick={(e) => handleSelectCategory("ux")}
        >
          UX
        </button>
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl"
          onClick={(e) => handleSelectCategory("enhancement")}
        >
          Enhancement
        </button>
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2 rounded-xl"
          onClick={(e) => handleSelectCategory("bug")}
        >
          Bug
        </button>
        <button
          className="bg-pfOffWhite text-pfDarkBlue font-semibold px-4 py-2 mt-4 mr-2  rounded-xl"
          onClick={(e) => handleSelectCategory("feature")}
        >
          Feature
        </button>
      </div>
    </div>
  )
}

export default FilterCard
