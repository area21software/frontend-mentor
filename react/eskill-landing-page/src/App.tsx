import MobileHero from "./assets/image-hero-mobile.png"
import TabletHero from "./assets/image-hero-tablet.png"
import DesktopHero from "./assets/image-hero-desktop.png"

import Header from "./components/Header"
import SkillList from "./components/SkillList"

const App = () => {
  return (
    <div className="relative font-plus-jakarta-sans bg-offWhite">
      <div className=" pt-6 px-6 mx-auto max-w-[1200px]">
        <Header />
        <section className="mt-10 md:flex">
          <div className="w-full md:mt-24 lg:mt-48 max-w-[398px]">
            <h1 className="text-hl font-extrabold">
              Maximize skill, minimize budget
            </h1>
            <p className="font-medium text-bs text-grayBlue mt-6">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="gradient1 text-white px-6 p-3  rounded-full mt-6">
              Get Started
            </button>
          </div>
          <div>
            <img src={MobileHero} className="mt-12 md:hidden" />
          </div>
          <div className="w-full">
            <img
              src={TabletHero}
              className="hidden md:block lg:hidden absolute -top-24 -right-78"
            />
            <img
              src={DesktopHero}
              className="hidden md:hidden lg:block absolute -top-40 -right-32"
            />
          </div>
        </section>
        <section className="md:grid grid-cols-2 gap-2 lg:grid lg:grid-cols-3 lg:gap-4 md:mt-48 ">
          <SkillList />
        </section>
      </div>
    </div>
  )
}

export default App
