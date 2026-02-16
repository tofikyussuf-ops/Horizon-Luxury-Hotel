import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
function Header() {
  return (
    <header
      className={`absolute top-0 left-0 w-full z-20 px-8 py-5 transition-all duration-300 
       "border-b border-primary-900`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
