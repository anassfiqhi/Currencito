import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store/StoreProvider";
import { QueryProvider } from "@/lib/query/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Moroccan Currency Converter | MAD Exchange Rates",
  description: "Convert Moroccan Dirham (MAD), Riyal, and Franc to world currencies with real-time exchange rates. See exact breakdown of coins and banknotes needed.",
  keywords: ["Moroccan Dirham", "MAD", "currency converter", "exchange rate", "Morocco", "Riyal", "Franc"],
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
