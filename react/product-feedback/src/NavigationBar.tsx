import FilterCard from "./FilterCard"
import RoadmapCard from "./RoadmapCard"

type NavigationBarProps = {
  isOpen: boolean
}

const NavigationBar = ({ isOpen }: NavigationBarProps) => {
  return (
    <div className="relative">
      <div
        className={`relative  top-0 ${
          isOpen ? "right-0" : "-right-full"
        }  w-full h-screen bg-black/30`}
      >
        <div
          className={`absolute top right-0 h-screen z-10 w-3/4 bg-pfOffWhite  ${
            isOpen ? "right-0" : "-right-full"
          } smooth-transition`}
        >
          <FilterCard />
          <RoadmapCard />
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
