import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Let's add a cool font
import "./globals.css";
import SmoothScroll from "./components/providers/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Dammy | Frontend Developer",
  description: "A comprehensive portfolio built with Next.js & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}







