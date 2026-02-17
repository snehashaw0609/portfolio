import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sneha Kumari Shaw | Portfolio",
  description:
    "Portfolio of Sneha Kumari Shaw — BCA Student & Aspiring Web Developer. Explore projects, skills, and get in touch.",
  keywords: [
    "Sneha Kumari Shaw",
    "portfolio",
    "web developer",
    "BCA student",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
