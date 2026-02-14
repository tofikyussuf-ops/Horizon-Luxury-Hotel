import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
      <Spinner />
      <p className="text-xl text-primary-200 font-medium tracking-wide">
        Loading cabin data...
      </p>
    </div>
  );
}
