import { Geist, Geist_Mono } from "next/font/google";
import SeoSchema from "./seo-schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.skn-tec.com/"), // change to real domain

  title: {
    default: "SKN Tec Tuition Center | Odanavattam Society Junction",
    template: "%s | SKN Tec Tuition Center",
  },
    viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description:
    "SKN Tec Tuition Center at Odanavattam Society Junction offers expert coaching, workshops, and skill-based training. Call 9400278298 for admissions.",

  keywords: [
    "tuition center Odanavattam",
    "Society Junction tuition classes",
    "best tuition near Odanavattam",
    "computer courses Odanavattam",
    "coding classes Kerala",
    "student coaching center Society Junction",
    "SKN Tec tuition",
    "workshops for students Kerala",
    "training institute Odanavattam",
  ],

  authors: [{ name: "SKN Tec Tuition Center" }],

  creator: "SKN Tec",
  publisher: "SKN Tec",

  openGraph: {
    title: "SKN Tec Tuition Center - Odanavattam",
    description:
      "Join SKN Tec Tuition Center at Society Junction, Odanavattam. Quality coaching, workshops and skill training. Contact 9400278298.",
    url: "https://skn-tec.com/",
    siteName: "SKN Tec Tuition Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/skn-tec-logo.webp",
        width: 1200,
        height: 630,
        alt: "SKN Tec Tuition Center",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SKN Tec Tuition Center",
    description:
      "Top tuition and skill training center at Odanavattam Society Junction.",
    images: ["/skn-tec-logo.webp"],
  },

  icons: {
    icon: "/skn-tec-logo.webp",
    shortcut: "/skn-tec-logo.webp",
    apple: "/skn-tec-logo.webp",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.skn-tec.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}