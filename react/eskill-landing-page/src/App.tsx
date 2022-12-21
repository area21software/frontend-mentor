import Logo from "./assets/logo-dark.svg"
import MobileHero from "./assets/image-hero-mobile.png"
import Animation from "./assets/icon-animation.svg"

const App = () => {
  return (
    <div className="font-plus-jakarta-sans relative bg-offWhite">
      <div className="mt-6 mx-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} className="h-6" />
          </div>
          <button className="bg-darkBlue text-white px-6 p-3  rounded-full">
            Get Started
          </button>
        </div>
        {/* Header */}
        {/* Section */}
        <div className="mt-10">
          <h1 className="text-hl font-extrabold">
            Maximize skill, minimize budget
          </h1>
          <p className="font-medium text-bs text-grayBlue mt-6">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className="gradient1 text-white px-6 p-3  rounded-full mt-6">
            Get Started
          </button>
        </div>
        {/* Section */}
        {/* Mobile Hero */}
        <div>
          <img src={MobileHero} className="mt-12" />
        </div>
        {/* Mobile Hero */}
        {/* Skills Section */}
        <div>
          <h3 className="gradient1 px-8 pt-6 pb-8 text-hs text-white font-extrabold rounded-lg">
            Check out our most popular courses!
          </h3>
          {/* Skill Card */}
          <div className="relative bg-white rounded-lg drop-shadow-sm mt-10">
            <img src={Animation} className="absolute -top-7 left-7" />
            <div className="px-7 pt-14 pb-8">
              <h4 className="text-hs font-extrabold">Animation</h4>
              <p className="text-bs font-medium text-grayBlue mt-4">
                Learn the latest animation techniques to create stunning motion
                design and captivate your audience.
              </p>
              <a href="#" className="block text-ePink text-bm font-bold mt-6">
                Get Started
              </a>
            </div>
          </div>
          {/* Skill Card */}
          {/* Skill Card */}
          <div className="relative bg-white rounded-lg drop-shadow-sm mt-10">
            <img src={Animation} className="absolute -top-7 left-7" />
            <div className="px-7 pt-14 pb-8">
              <h4 className="text-hs font-extrabold">Animation</h4>
              <p className="text-bs font-medium text-grayBlue mt-4">
                Learn the latest animation techniques to create stunning motion
                design and captivate your audience.
              </p>
              <a href="#" className="block text-ePink text-bm font-bold mt-6">
                Get Started
              </a>
            </div>
          </div>
          {/* Skill Card */}
        </div>
      </div>
    </div>
  )
}

export default App
