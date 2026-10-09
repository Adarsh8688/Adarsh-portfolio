import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080b11",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adarsh | Data Science & Machine Learning Portfolio",
  description:
    "Personal portfolio of Adarsh, Data Science postgraduate student based in Berlin. Specializing in Machine Learning, Spatio-Temporal Graph Neural Networks, and scalable data analytics pipelines.",
  keywords: [
    "Adarsh",
    "Mamidala Adarsh",
    "Data Science Portfolio",
    "Machine Learning Berlin",
    "Spatio-Temporal Graph Neural Networks",
    "Traffic Speed Forecasting",
    "Python",
    "SQL",
    "Streamlit",
    "Data Engineering",
  ],
  authors: [{ name: "Adarsh (Mamidala Adarsh)" }],
  openGraph: {
    title: "Adarsh | Data Science & Machine Learning Portfolio",
    description:
      "Explore machine learning projects, spatio-temporal graph neural networks research, analytics dashboards, and data platforms by Adarsh, Berlin.",
    url: "https://adarsh-portfolio.vercel.app",
    siteName: "Adarsh Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh | Data Science & Machine Learning Portfolio",
    description:
      "M.Sc. Data Science student based in Berlin. Machine learning, Spatio-temporal GNN research, and data platforms.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080b11] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
