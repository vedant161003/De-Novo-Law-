import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/providers/LenisProvider";

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-caslon",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denovolawfirm.in"),
  title: {
    default: "De Novo Law Firm | Architecting Legal Certainty",
    template: "%s | De Novo Law Firm",
  },
  description:
    "De Novo Law Firm delivers precision-engineered legal counsel for the world's most complex corporate landscapes. Corporate M&A, Litigation, IP, Real Estate & more.",
  keywords: [
    "De Novo Law Firm",
    "corporate law India",
    "M&A lawyers",
    "intellectual property lawyers",
    "litigation India",
    "startup law",
    "real estate law",
    "Bangalore law firm",
  ],
  authors: [{ name: "De Novo Law Firm" }],
  creator: "De Novo Law Firm",
  publisher: "De Novo Law Firm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://denovolawfirm.in",
    siteName: "De Novo Law Firm",
    title: "De Novo Law Firm | Architecting Legal Certainty",
    description:
      "Precision-engineered corporate legal counsel. From complex M&A to IP protection — De Novo architects certainty for India's elite enterprises.",
    images: [
      {
        url: "/images/hero-interior.png",
        width: 1200,
        height: 630,
        alt: "De Novo Law Firm — Premium Legal Counsel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "De Novo Law Firm | Architecting Legal Certainty",
    description:
      "Precision-engineered corporate legal counsel for the world's most complex legal landscapes.",
    images: ["/images/hero-interior.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslonText.variable} ${hankenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
