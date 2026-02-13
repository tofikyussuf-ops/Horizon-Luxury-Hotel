import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-light.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 group">
      <div className="shrink-0">
        <Image
          src={logo}
          height={60}
          width={60}
          quality={100}
          alt="Horizon Luxury Hotel logo"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* text-primary-100: Your light luxury blue
         group-hover:text-accent-400: Shifts to gold on hover
      */}
      <span className="text-xl font-semibold text-primary-100 transition-colors duration-300 group-hover:text-accent-400 tracking-tight">
        Horizon Luxury Hotel
      </span>
    </Link>
  );
}

export default Logo;
