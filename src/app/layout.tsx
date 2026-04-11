import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooja Lekshmi J | Software Engineer",
  description:
    "Pooja Lekshmi J — Software Engineer. I build fast, reliable, user-friendly web apps.",
  metadataBase: new URL("https://poojalekshmij.dev"),
  openGraph: {
    title: "Pooja Lekshmi J | Software Engineer",
    description:
      "Software Engineer building fast, reliable, and user-friendly web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Lekshmi J | Software Engineer",
    description:
      "Software Engineer building fast, reliable, and user-friendly web applications with modern technologies.",
  },
  other: {
    "theme-color": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
