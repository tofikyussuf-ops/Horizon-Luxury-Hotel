"use client"; // Must be a client component to use usePathname
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <header
      className={`absolute top-0 left-0 w-full z-20 px-8 py-5 transition-all duration-300 
        ${isHome ? "border-none" : "border-b border-primary-900"}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
