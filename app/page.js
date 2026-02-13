import Link from "next/link";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div>
      <h1>Horizion luxury Hotel</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
