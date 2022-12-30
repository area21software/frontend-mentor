import FilterCard from "./FilterCard"
import RoadmapCard from "./RoadmapCard"

type NavigationBarProps = {
  isOpen: boolean
}

const NavigationBar = ({ isOpen }: NavigationBarProps) => {
  return (
    <>
      <div
        className={`${isOpen ? "h-screen bg-black/30 z-10" : "hidden"}`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-screen z-20 w-3/4 bg-pfOffWhite smooth-transition ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col h-full w-full items-center">
          <FilterCard />
          <RoadmapCard />
        </div>
      </div>
    </>
  )
}

export default NavigationBar
