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
// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col px-8`}
      >
        <Header />

        {/* The wrapper that takes up all remaining space */}
        <div className="flex-1 flex flex-col">
          {/* The centered main container */}
          <main className="max-w-7xl mx-auto w-full pt-32">{children}</main>
        </div>
      </body>
    </html>
  );
}
