import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRAFTRIX — Premium Garment Manufacturing",
  description:
    "From precision-tailored uniforms to bold custom streetwear — CRAFTRIX delivers premium garments built to your exact specification.",
  metadataBase: new URL("https://craftrix.com"),
  openGraph: {
    title: "CRAFTRIX — Premium Garment Manufacturing",
    description:
      "Crafted for every occasion. Custom uniforms, sportswear, and corporate apparel.",
    url: "https://craftrix.com",
    siteName: "CRAFTRIX",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
