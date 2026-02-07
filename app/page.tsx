import { Suspense } from "react";
import { CurrencyConverterWithUrl } from "@/components/CurrencyConverterWithUrl";
import { MobileTabsLayout } from "@/components/MobileTabsLayout";

export default function Home() {
  return (
    <>
      <div className="md:hidden bg-background">
        <MobileTabsLayout />
      </div>

      <div className="hidden md:block min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
              World Currency Converter
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Convert between Dirham, Riyal, Franc, and world currencies
            </p>
          </div>

          {/* Main Converter */}
          <Suspense fallback={<div className="text-center text-muted-foreground">Loading converter...</div>}>
            <CurrencyConverterWithUrl />
          </Suspense>
        </div>
      </div>
    </>
  );
}

