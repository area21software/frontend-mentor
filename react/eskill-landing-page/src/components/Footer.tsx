import LightLogo from "../assets/logo-light.svg"

const Footer = () => {
  return (
    <footer className="flex justify-center h-32 bg-darkBlue mt-20 md:mt-32 lg:mt-36">
      <div className="flex w-full items-center justify-between mx-4">
        <div>
          <img src={LightLogo} className="h-6" />
        </div>
        <button className="gradient2 text-white px-6 p-3  rounded-full">
          Get Started
        </button>
      </div>
    </footer>
  )
}

export default Footer
