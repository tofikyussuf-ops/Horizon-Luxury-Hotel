import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Spinner />
      <p className="text-primary-200 text-sm uppercase tracking-widest">
        Updating view...
      </p>
    </div>
  );
}
