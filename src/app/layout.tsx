import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/config/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080a0f",
};

export const metadata: Metadata = {
  title: `${profile.name} — Digital Card`,
  description: `${profile.tagline} ${profile.bio}`,
  keywords: [profile.name, profile.title, "digital business card", "NFC card"],
  authors: [{ name: profile.name, url: profile.website }],
  openGraph: {
    title: `${profile.name} — Digital Card`,
    description: profile.tagline,
    url: profile.nfcUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Digital Card`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
