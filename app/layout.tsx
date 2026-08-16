import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Edupath Library | Study Library in Vaishali",
  description:
    "A dedicated self-study space in Vaishali. Quiet, comfortable and reliable — open 7:00 AM to 3:30 PM at Shopprix Mall.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}