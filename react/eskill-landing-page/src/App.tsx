import DarkLogo from "./assets/logo-dark.svg"
import LightLogo from "./assets/logo-light.svg"
import MobileHero from "./assets/image-hero-mobile.png"
import Animation from "./assets/icon-animation.svg"
import Design from "./assets/icon-design.svg"
import Crypto from "./assets/icon-crypto.svg"
import Business from "./assets/icon-business.svg"
import Photography from "./assets/icon-photography.svg"

import SkillCard from "./SkillCard"

const App = () => {
  return (
    <div className="font-plus-jakarta-sans relative bg-offWhite">
      <div className="mt-6 mx-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <img src={DarkLogo} className="h-6" />
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
          <SkillCard
            icon={Animation}
            skill="Animation"
            description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          />

          <SkillCard
            icon={Design}
            skill="Design"
            description="Create beautiful, usable interfaces to help shape the future of how the web looks."
          />

          <SkillCard
            icon={Photography}
            skill="Photography"
            description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
          />

          <SkillCard
            icon={Crypto}
            skill="Crypto"
            description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          />

          <SkillCard
            icon={Business}
            skill="Business"
            description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          />
        </div>
      </div>
      <footer className="flex justify-center h-32 bg-darkBlue">
        <div className="flex w-full items-center justify-between mx-4">
          <div>
            <img src={LightLogo} className="h-6" />
          </div>
          <button className="gradient2 text-white px-6 p-3  rounded-full">
            Get Started
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
