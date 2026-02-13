import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
function Header() {
  return (
    // Changed z-10 to z-20 to stay on top of the Home page content
    <header className="absolute top-0 left-0 w-full z-20 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
