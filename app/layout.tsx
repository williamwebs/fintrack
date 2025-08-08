import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SidebarProvider } from "@/context/SidebarContext";
import { SearchProvider } from "@/context/SearchContext";
import MainLayout from "@/components/MainLayout";
import { Suspense } from "react";
import Loading from "./loading";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Facilitating borderless transactions at the speed of light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased w-screen h-screen bg-primary-white`}
      >
        <SidebarProvider>
          <SearchProvider>
            <div className="w-full h-full relative font-public-sans">
              {/* fixed Header */}
              <Header />
              <Suspense fallback={<Loading/>}>
                <MainLayout>{children}</MainLayout>
              </Suspense>
            </div>
          </SearchProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
