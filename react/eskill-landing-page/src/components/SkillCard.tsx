type SkillCardProps = {
  icon: string
  skill: string
  description: string
}

const SkillCard = ({ icon, skill, description }: SkillCardProps) => {
  return (
    <div className="relative bg-white rounded-lg drop-shadow-sm mt-10">
      <img src={icon} className="absolute -top-7 left-7" />
      <div className="px-7 pt-14 pb-8">
        <h4 className="text-hs font-extrabold">{skill}</h4>
        <p className="text-bs font-medium text-grayBlue mt-4">{description}</p>
        <a href="#" className="block text-ePink text-bm font-bold mt-6">
          Get Started
        </a>
      </div>
    </div>
  )
}

export default SkillCard
