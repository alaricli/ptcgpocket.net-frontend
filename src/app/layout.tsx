import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";

export const metadata: Metadata = {
  title: "ptcgpocket.net",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
