import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function Page({ params }) {
  // 1. Await params (Required in Next.js 15)
  const { cabinId } = await params;

  // 2. Fetch data
  const cabin = await getCabin(cabinId);

  if (!cabin) return null;

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 pb-20 md:pb-32">
      {/* Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-12 lg:gap-20 border border-primary-800 py-6 md:py-12 px-6 md:px-14 mb-24 items-center">
        {/* IMAGE SECTION: Modern Editorial Style */}
        <div className="relative aspect-square lg:scale-[1.15] lg:-translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover border border-primary-800 shadow-2xl"
            alt={`Cabin ${name}`}
            priority
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="relative">
          {/* Overlapping Heading: Desktop only pop-out */}
          <h3 className="text-accent-100 font-black text-4xl md:text-6xl lg:text-7xl mb-6 lg:translate-x-[-15%] bg-primary-950 lg:p-6 lg:pb-1 lg:w-[120%] z-10 relative leading-tight">
            Cabin {name}
          </h3>

          <p className="text-base md:text-lg text-primary-300 mb-10 leading-relaxed italic">
            {description}
          </p>

          <ul className="flex flex-col gap-5 mb-7">
            <li className="flex gap-4 items-center group">
              <UsersIcon className="h-6 w-6 text-primary-600 transition-colors group-hover:text-accent-500" />
              <span className="text-base md:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <MapPinIcon className="h-6 w-6 text-primary-600 transition-colors group-hover:text-accent-500" />
              <span className="text-base md:text-lg">
                Located in the heart of the{" "}
                <span className="font-bold text-accent-400">Dolomites</span>
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <EyeSlashIcon className="h-6 w-6 text-primary-600 transition-colors group-hover:text-accent-500" />
              <span className="text-base md:text-lg">
                Privacy{" "}
                <span className="font-bold uppercase tracking-widest text-sm">
                  100% guaranteed
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Heading */}
      <div className="border-t border-primary-900 pt-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-accent-400">
          Reserve today. Pay on arrival.
        </h2>
        <div className="flex justify-center">
          {/* Placeholder for future Calendar/Form */}
        </div>
      </div>
    </div>
  );
}
