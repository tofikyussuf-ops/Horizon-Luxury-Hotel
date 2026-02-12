import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-light.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo} // Using the imported object allows Next.js to prevent "Layout Shift"
        height={60}
        width={60}
        quality={100} // High quality for that luxury feel
        alt="Horizon Luxury Hotel logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Horizon Luxury Hotel
      </span>
    </Link>
  );
}

export default Logo;
