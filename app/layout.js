import { Josefin_Sans } from "next/font/google"; // Import the font
import Header from "./_components/Header";
import "./_style/globals.css";
export const metadata = {
  title: {
    // This is the title for the homepage
    default: "Horizon Luxury Hotel | Tropical Paradise",
    // This creates a template: "Cabins | Horizon Luxury Hotel"
    template: "%s | Horizon Luxury Hotel",
  },
  description:
    "Experience the ultimate luxury stay at Horizon. Located in the heart of the wilderness, our suites offer unmatched comfort and stunning views.",
  keywords: [
    "luxury hotel",
    "cabin rentals",
    "tropical vacation",
    "boutique hotel",
  ],
  authors: [{ name: "Your Name" }],
  // OpenGraph makes your site look good when shared on WhatsApp/social media
  openGraph: {
    title: "Horizon Luxury Hotel",
    description: "The finest luxury suites for your stay.",
    siteName: "Horizon Luxury Hotel",
    images: [
      {
        url: "/icon.png", // Next.js looks in the /public folder
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* bg-primary-950: This sets the deep blue background for the whole app */}
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />

        <main className="max-w-7xl mx-auto py-12 px-8">{children}</main>
      </body>
    </html>
  );
}
