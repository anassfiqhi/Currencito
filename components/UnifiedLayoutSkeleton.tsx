import { Skeleton } from "@/components/ui/skeleton";
import { CurrencyConverterSkeleton } from "./CurrencyConverterSkeleton";

export function UnifiedLayoutSkeleton() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center">
            {/* Desktop Navigation Skeleton */}
            <div className="hidden md:flex w-full border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
                <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <Skeleton className="h-6 w-32" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-md" />
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="w-full flex-1 md:py-8">
                {/* Mobile View Skeleton */}
                <div className="md:hidden h-full flex flex-col">
                    <div className="flex-1 px-4 pt-8">
                        <div className="text-center mb-8 flex flex-col items-center gap-2">
                            <Skeleton className="h-8 w-48" />
                            <Skeleton className="h-4 w-32" />
                        </div>

                        {/* Converter Skeleton */}
                        <CurrencyConverterSkeleton />
                    </div>

                    {/* Mobile Tabs Skeleton */}
                    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full bg-background border-t border-border">
                        <div className="flex-1 flex flex-col items-center justify-center gap-1 border-t-2 border-transparent">
                            <Skeleton className="h-5 w-5" />
                            <Skeleton className="h-3 w-8" />
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center gap-1 border-t-2 border-transparent">
                            <Skeleton className="h-5 w-5" />
                            <Skeleton className="h-3 w-10" />
                        </div>
                    </div>
                </div>

                {/* Desktop View Skeleton */}
                <div className="hidden md:block max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12 flex flex-col items-center gap-4">
                        <Skeleton className="h-12 w-3/4 max-w-lg" />
                        <Skeleton className="h-6 w-1/2 max-w-md" />
                    </div>

                    <div className="max-w-xl mx-auto space-y-4">
                        <CurrencyConverterSkeleton />
                    </div>
                </div>
            </div>
        </div>
    );
}
