import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pediredla Sai Lokesh | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Pediredla Sai Lokesh — Full Stack Developer, Frontend Engineer, AI/ML Enthusiast building intelligent digital experiences.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Machine Learning",
    "Portfolio",
    "Pediredla Sai Lokesh",
  ],
  authors: [{ name: "Pediredla Sai Lokesh" }],
  openGraph: {
    title: "Pediredla Sai Lokesh | Full Stack Developer & AI Enthusiast",
    description:
      "Building intelligent digital experiences with modern web technologies and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[#030014] text-white antialiased selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
