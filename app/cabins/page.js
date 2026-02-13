import { Suspense } from "react";
import CabinsList from "../_components/CabinsList";
import Spinner from "../_components/Spinner";
export const metadata = {
  title: "Cabins",
};

export default function Page() {
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
      <Suspense fallback={<Spinner />}>
        <CabinsList />
      </Suspense>
    </div>
  );
}
