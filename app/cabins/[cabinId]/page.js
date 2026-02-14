import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// 1. Dynamic Metadata Function
export async function generateMetadata({ params }) {
  // Await params if you are using Next.js 15+
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  // If cabin doesn't exist, Next.js handles it via not-found.js
  if (!cabin) return { title: "Cabin Not Found" };

  return {
    title: `Cabin ${cabin.name}`,
    description: `Discover the luxury and comfort of ${cabin.name}, located in the heart of the woods.`,
    // You can even add dynamic OpenGraph images here
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  // Next.js expects an array of objects: [{ cabinId: '1' }, { cabinId: '2' }, ...]

  const params = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return params;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) return null;

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 pb-12">
      {/* Container Card: Reduced padding and tightened gap */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 border border-primary-800 py-4 px-6 md:px-10 mb-16 items-start">
        {/* IMAGE SECTION: Swapped aspect-square for aspect-video for a wider look */}
        <div className="relative aspect-video lg:aspect-square w-full overflow-hidden">
          <Image
            src={image}
            fill
            className="object-cover border border-primary-800"
            alt={`Cabin ${name}`}
            priority
          />
        </div>

        {/* CONTENT SECTION: Tighter spacing */}
        <div className="py-4">
          <h3 className="text-accent-100 font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Cabin {name}
          </h3>

          <p className="text-base text-primary-300 mb-8 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-col gap-3 mb-4">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base">
                Heart of the{" "}
                <span className="font-bold text-accent-400">Dolomites</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base">
                Privacy{" "}
                <span className="font-bold uppercase tracking-widest text-xs">
                  100% guaranteed
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Action Section */}
      <div className="border-t border-primary-900 pt-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-accent-400 mb-8">
          Reserve today. Pay on arrival.
        </h2>
        {/* Booking components will go here */}
      </div>
    </div>
  );
}
