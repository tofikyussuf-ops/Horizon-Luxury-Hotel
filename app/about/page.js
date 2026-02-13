import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    // Added pb-20 to ensure the bottom isn't cut off
    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-24 gap-y-32 text-lg items-center pb-20">
      {/* SECTION 1: Text */}
      <div className="col-span-1 md:col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Horizon Luxury
        </h1>

        <div className="space-y-8 leading-relaxed">
          <p>
            Where the grandeur of the Swiss Alps meets the pinnacle of refined
            living. Perched high above the clouds, Horizon Luxury is more than a
            destination; it&rsquo;s a sanctuary designed for those who seek to
            reconnect with nature without compromising on elegance.
          </p>
          <p>
            Our eight signature cabins serve as your private glass-fronted
            basecamp. Beyond the warmth of your hearth lies the vast freedom of
            the mountains. Wander through ancient pine forests, breathe the
            purest alpine air, and watch the celestial horizon light up from the
            comfort of your infinity hot tub.
          </p>
        </div>
      </div>

      {/* IMAGE 1: Smaller with max-width and margin-bottom for mobile */}
      <div className="col-span-1 md:col-span-2 max-w-[450px] mx-auto w-full mb-10 md:mb-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={image1}
            fill
            className="object-cover"
            placeholder="blur"
            alt="Family enjoying a serene evening"
          />
        </div>
      </div>

      {/* IMAGE 2: Styled same as Image 1 */}
      {/* Removed order-2 to keep text at the bottom on mobile */}
      <div className="col-span-1 md:col-span-2 max-w-[450px] mx-auto w-full mb-10 md:mb-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={image2}
            fill
            className="object-cover"
            placeholder="blur"
            alt="The founding family"
          />
        </div>
      </div>

      {/* SECTION 2: Text + The Button */}
      <div className="col-span-1 md:col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          A Legacy Written in the Stars Since 1962
        </h1>

        <div className="space-y-8 leading-relaxed">
          <p>
            For over six decades, Horizon Luxury has been a cherished family-run
            retreat. What began as a humble mountain lodge built by our
            grandparents has been meticulously evolved into a testament of Swiss
            hospitality and architectural splendor.
          </p>
          <p>
            Join us where the peaks meet the sky, and discover what it means to
            truly be at home on the horizon.
          </p>

          <div className="pt-4">
            <Link
              href="/cabins"
              className="inline-block border border-accent-500 px-10 py-5 text-accent-500 text-sm uppercase tracking-[0.3em] font-medium hover:bg-accent-500 hover:text-primary-950 transition-all duration-500 ease-out"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
