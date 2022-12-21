import DarkLogo from "../assets/logo-dark.svg"

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <img src={DarkLogo} className="h-6" />
      </div>
      <button className="bg-darkBlue text-white px-6 p-3  rounded-full">
        Get Started
      </button>
    </header>
  )
}

export default Header
