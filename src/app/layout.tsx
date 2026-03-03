import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import LoadingHandler from "@/components/providers/LoadingHandler";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "MRI & Radiology Centre - Leaders in Whole Body Imaging",
  description: "Advanced diagnostic imaging practice in Harare, Zimbabwe. Specialized MRI, CT, Ultrasound, and Mammography services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased font-jakarta bg-bg-primary text-body selection:bg-primary/20 selection:text-primary`}
      >
        <LoadingHandler>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LoadingHandler>
      </body>
    </html>
  );
}



