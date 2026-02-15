import { Suspense } from "react";
import CabinList from "../_components/CabinsList";
import Filter from "../_components/Filter";
import Spinner from "../_components/Spinner";
export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const { capacity } = await searchParams;
  const filter = capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10 leading-relaxed">
        Experience the ultimate intersection of nature and sophistication at
        Horizon Luxury. Perched high in the heart of the Swiss Alps, our cabins
        offer a front-row seat to the most iconic peaks and crystalline lakes in
        the world. Whether you&apos;re watching the sunset paint the Matterhorn
        from your private terrace or finding serenity in the pristine alpine
        meadows, this is where the horizon meets your sanctuary. Welcome to your
        alpine paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
