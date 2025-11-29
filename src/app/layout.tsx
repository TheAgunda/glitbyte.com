import type { Metadata } from "next";
import {
  Syne, Titillium_Web, Gugi
} from "next/font/google";
import "@/styles/globals.css";
const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
  subsets: ["latin"],
});

const sync = Syne({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sync",
  subsets: ["latin"],
})
const gugi = Gugi({
  weight: ["400"],
  variable: "--font-gugi",
  subsets: ["latin"],
});

const title = "GlitByte | App Development & Digital Transformation Company";
const description = "GlitByte is a global mobile app development company. We offer innovative digital solutions to startups, enterprises and government clients across industries."
const url = "https://glitbyte.com/";
const siteName = "GlitByte";
const image = "https://appinventiv.com/wp-content/uploads/2019/11/minimal-app-design.png";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: siteName,
    images: {
      url: image,
      // secureUrl?: string | URL | undefined;
      // alt?: string | undefined;
      type: "image/png",
      width: 1200,
      height: 600
    }
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: {
      url: image,
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable} ${sync.variable} ${gugi.variable} antialiased`}  >
        {children}
      </body>
    </html >
  );
}
