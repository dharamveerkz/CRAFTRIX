import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Use environment variable for flexibility (Vercel auto-injects NEXT_PUBLIC_SITE_URL)
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://craftrixlkr.vercel.app";

export const metadata: Metadata = {
  title: "CRAFTRIX — Premium Garment Manufacturing",
  description:
    "From precision-tailored uniforms to bold custom streetwear — CRAFTRIX delivers premium garments built to your exact specification.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CRAFTRIX — Premium Garment Manufacturing",
    description:
      "Crafted for every occasion. Custom uniforms, sportswear, and corporate apparel.",
    url: siteUrl,
    siteName: "CRAFTRIX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add this file to /public folder
        width: 1200,
        height: 630,
        alt: "CRAFTRIX — Premium Garment Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAFTRIX — Premium Garment Manufacturing",
    description: "Custom uniforms, sportswear, and corporate apparel.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to MongoDB Atlas for faster DB calls (optional) */}
        <link rel="preconnect" href="https://cluster0.umndbix.mongodb.net" />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
