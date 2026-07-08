import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteDescription, siteName, siteUrl } from "@/src/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Dhea Aprila",
    "MyLove",
    "website romantis",
    "surat cinta digital",
    "kenangan pasangan",
    "kapsul cinta",
  ],
  authors: [{ name: "Hakim" }],
  creator: "Hakim",
  publisher: "Hakim",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/images/mylove1.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhea Aprila MyLove",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/mylove1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
