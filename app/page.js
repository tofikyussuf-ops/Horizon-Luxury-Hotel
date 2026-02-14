import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Home",
};
// src/app/page.js
// src/app/page.js git add .

/* git commit -m "feat:implelemting the cabin detail ui"
git push origin main */
export default function Page() {
  return (
    /* -mt-32 pulls the content up to ignore the layout's padding
       w-screen and the margin/left trick makes it break out of the max-w-7xl */
    <main className="relative h-screen -mt-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two luxury cabins"
      />

      <div className="absolute inset-0 bg-primary-950/40" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="inline-block border border-accent-500 px-10 py-5 text-accent-500 text-sm uppercase tracking-[0.3em] font-medium hover:bg-accent-500 hover:text-primary-950 transition-all duration-500 ease-out"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
