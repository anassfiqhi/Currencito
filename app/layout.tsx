import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store/StoreProvider";
import { QueryProvider } from "@/lib/query/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2A6EFE",
};

export const metadata: Metadata = {
  title: "Currencito - World Currency Converter",
  description: "Convert world currencies with real-time exchange rates. See exact breakdown of coins and banknotes needed.",
  keywords: ["currency converter", "exchange rate", "world currencies"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Currencito",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StoreProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
