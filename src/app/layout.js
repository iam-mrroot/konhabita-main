import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";
import CustomCursor from "@/components/CustomCursor";
import AppleScrollEffect from "@/components/AppleScrollEffect";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://konhabita.com"),
  title: "Konhabita | Architecture, Landscape & Urban Design",
  description:
    "Konhabita is a multidisciplinary design studio focused on architecture, landscape architecture, urban design, interiors, sustainability, and research.",
  keywords: [
    "Konhabita",
    "Architecture",
    "Landscape Architecture",
    "Urban Design",
    "Interior Design",
    "Sustainability",
    "Architectural Design",
    "Urban Planning",
    "Landscape Design",
    "Design Studio",
  ],
  authors: [{ name: "Konhabita" }],
  creator: "Konhabita",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Konhabita | Architecture, Landscape & Urban Design",
    description:
      "A multidisciplinary design studio working across architecture, landscape architecture, urban design, interiors, sustainability, and research.",
    url: "https://konhabita.com",
    siteName: "Konhabita",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Konhabita",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafafa]">
        <div id="top" />
        <CustomCursor />
        <AppleScrollEffect />
        <ScrollProgress />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}