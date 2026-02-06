import { Suspense } from "react";
import { CurrencyConverterWithUrl } from "@/components/CurrencyConverterWithUrl";
import { MobileTabsLayout } from "@/components/MobileTabsLayout";

export default function Home() {
  return (
    <>
      <div className="md:hidden h-screen bg-background">
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

          {/* Info Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              About Moroccan Currencies
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="text-3xl mb-3">🇲🇦</div>
                <h3 className="font-semibold text-foreground mb-1">
                  Moroccan Dirham
                </h3>
                <p className="text-sm text-muted-foreground">
                  Official currency (MAD)
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-foreground mb-1">
                  1 MAD = 20 Riyals
                </h3>
                <p className="text-sm text-muted-foreground">
                  Traditional subdivision
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="text-3xl mb-3">💵</div>
                <h3 className="font-semibold text-foreground mb-1">
                  1 MAD = 100 Francs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Historical division
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> See the exact breakdown of coins and banknotes needed for any currency!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

