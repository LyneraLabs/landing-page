import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Lynera - Innovative Technology Solutions",
  description: "Lynera is an umbrella company focused on creating innovative technology solutions. Featuring EngX and more cutting-edge products.",
  keywords: ["Lynera", "EngX", "Technology", "Innovation", "Software Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
