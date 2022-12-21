import Animation from "../assets/icon-animation.svg"
import Design from "../assets/icon-design.svg"
import Crypto from "../assets/icon-crypto.svg"
import Business from "../assets/icon-business.svg"
import Photography from "../assets/icon-photography.svg"

import SkillCard from "./SkillCard"

const SkillList = () => {
  return (
    <>
      <h3 className="gradient1 px-8 pt-6 pb-8 md:mt-10 md:pt-14 text-hs text-white font-extrabold rounded-lg">
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
    </>
  )
}

export default SkillList
