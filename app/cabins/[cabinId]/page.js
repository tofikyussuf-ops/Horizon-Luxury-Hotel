import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservations";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
// 1. Dynamic Metadata Function

export async function generateMetadata({ params }) {
  // Await params if you are using Next.js 15+
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) return { title: "Cabin Not Found" };

  return {
    title: `Cabin ${cabin.name}`,
    description: `Discover the luxury and comfort of ${cabin.name}, located in the heart of the woods.`,
    // You can even add dynamic OpenGraph images here
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const params = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return params;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) return null;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 pb-12">
      <Cabin cabin={cabin} />

      {/* Action Section */}
      <div className="border-t border-primary-900 pt-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-accent-400 mb-8">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
