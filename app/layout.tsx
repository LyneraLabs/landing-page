import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Lynera - Innovative Technology Solutions",
  description: "Lynera is an umbrella company creating innovative technology products. Discover our flagship product EngX and learn more about our team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
