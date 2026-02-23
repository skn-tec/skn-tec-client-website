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
  metadataBase: new URL("https://www.skn-tec.com/"),

  title: {
    default: "SKN TEC |  Coaching Odanavattam Society Junction",
    template: "%s | SKN TEC",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  description:
    "SKN TEC at Odanavattam Society Junction provides Computer Science Tuition, Diploma CS subjects, BTech (CS & IT) coaching, School Tuition for Maths Physics CS, Special Classes, Arrear Classes, Exam-oriented coaching and Crash courses. Call 9400278298.",

  keywords: [
    "SKN TEC Odanavattam",
    "Computer Science Tuition Odanavattam",
    "Diploma CS subjects coaching Kerala",
    "BTech CS IT coaching Society Junction",
    "School tuition Maths Physics CS Odanavattam",
    "Arrear classes CS Kerala",
    "Exam oriented coaching Odanavattam",
    "Crash course computer science Kerala",
    "Special classes computer science students",
  ],

  authors: [{ name: "SKN TEC" }],
  creator: "SKN TEC",
  publisher: "SKN TEC",

  openGraph: {
    title: "SKN TEC Coaching Odanavattam",
    description:
      "Computer Science Tuition, Diploma CS, BTech CS & IT coaching, School Maths Physics CS, Special Classes, Arrear Coaching and Crash Courses at Odanavattam Society Junction.",
    url: "https://www.skn-tec.com/",
    siteName: "SKN TEC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/skn-tec-logo.webp",
        width: 1200,
        height: 630,
        alt: "SKN TEC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SKN TEC",
    description:
      "Computer Science Tuition, Diploma CS, BTech CS & IT coaching and exam-oriented crash courses at Odanavattam.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}