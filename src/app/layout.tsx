import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/NavBar/NavBar";
import { navItems } from "@/constants/navbar/navbar";
import { FloatingDock } from "@/components/Docks/FloatingDock";
import { contactDockItems } from "@/constants/dock/contact";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo Vargas Bermudez",
  description: "Pablo Vargas Bermudez backend engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
        <div className="flex fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
          <FloatingDock items={contactDockItems} />
        </div>
      </body>
    </html>
  );
}
