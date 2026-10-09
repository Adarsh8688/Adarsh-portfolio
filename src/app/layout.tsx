import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adarsh | Data Science, Machine Learning & AI",
  description:
    "Portfolio of Adarsh, Data Science postgraduate student based in Berlin. Spatio-Temporal Graph Neural Networks, Machine Learning, and Big Data Engineering.",
  keywords: [
    "Adarsh",
    "Mamidala Adarsh",
    "Data Science Berlin",
    "Machine Learning",
    "Artificial Intelligence",
    "Graph Neural Networks",
    "Traffic Speed Forecasting",
    "Python",
    "SQL",
  ],
  authors: [{ name: "Adarsh (Mamidala Adarsh)" }],
  openGraph: {
    title: "Adarsh | Data Science, Machine Learning & AI",
    description:
      "Explore machine learning research, spatio-temporal graph neural networks, and data platforms by Adarsh, Berlin.",
    url: "https://adarsh-portfolio.vercel.app",
    siteName: "Adarsh Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh | Data Science, Machine Learning & AI",
    description:
      "Data Science postgraduate student based in Berlin. Machine Learning & AI practitioner.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030508] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
