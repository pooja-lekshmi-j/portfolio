import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "Pooja Lekshmi J | Senior Software Engineer";
const SOCIAL_DESCRIPTION =
  "Senior Software Engineer building fast, reliable, and user-friendly web applications with modern technologies.";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Pooja Lekshmi J — Senior Software Engineer. I build fast, reliable, user-friendly web apps.",
  metadataBase: new URL("https://poojalekshmij.dev"),
  openGraph: {
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
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
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
