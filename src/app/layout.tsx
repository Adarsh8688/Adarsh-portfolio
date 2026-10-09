import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
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
  themeColor: "#0B1120",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adarsh | Data Science, Machine Learning & AI",
  description:
    "Portfolio of Adarsh, M.Sc. Data Science graduate based in Germany (completed August 2026). Spatio-Temporal Graph Neural Networks, Machine Learning, and Big Data Engineering.",
  keywords: [
    "Adarsh",
    "Mamidala Adarsh",
    "Data Science Germany",
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
      "Explore machine learning research, spatio-temporal graph neural networks, and data platforms by Adarsh, Germany.",
    url: "https://adarsh-portfolio.vercel.app",
    siteName: "Adarsh Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh | Data Science, Machine Learning & AI",
    description:
      "M.Sc. Data Science graduate based in Germany (completed August 2026). Machine Learning & AI practitioner.",
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-theme-page text-theme-primary font-sans antialiased selection:bg-[#2563EB]/20 selection:text-[#2563EB] dark:selection:bg-[#2563EB]/30 dark:selection:text-[#22D3EE] transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
