import { Suspense } from "react";
import { CurrencyConverterWithUrl } from "@/components/CurrencyConverterWithUrl";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            World Currency Converter
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
            Convert between Dirham, Riyal, Franc, and world currencies
          </p>
        </div>

        {/* Main Converter */}
        <Suspense fallback={<div className="text-center text-gray-600 dark:text-gray-400">Loading converter...</div>}>
          <CurrencyConverterWithUrl />
        </Suspense>

        {/* Info Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About Moroccan Currencies
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🇲🇦</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Moroccan Dirham
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Official currency (MAD)
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                1 MAD = 20 Riyals
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Traditional subdivision
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">💵</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                1 MAD = 100 Francs
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Historical division
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
              💡 <strong>Tip:</strong> See the exact breakdown of coins and banknotes needed for any currency!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

