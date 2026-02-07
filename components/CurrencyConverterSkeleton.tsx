import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function CurrencyConverterSkeleton() {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            <Card className="w-full bg-card border-border shadow-2xl">
                <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* From Section Skeleton */}
                        <div className="flex-1 w-full p-4 rounded-xl border border-input bg-secondary/50">
                            <Skeleton className="h-4 w-12 mb-2" /> {/* Label */}
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-8 flex-1" /> {/* Input */}
                                <Skeleton className="h-8 w-16" /> {/* Select */}
                            </div>
                        </div>

                        {/* Swap Button Skeleton */}
                        <Skeleton className="shrink-0 h-12 w-12 rounded-full" />

                        {/* To Section Skeleton */}
                        <div className="flex-1 w-full p-4 rounded-xl border border-input bg-muted/50">
                            <Skeleton className="h-4 w-12 mb-2" /> {/* Label */}
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-8 flex-1" /> {/* Input */}
                                <Skeleton className="h-8 w-16" /> {/* Select */}
                            </div>
                        </div>
                    </div>

                    {/* Rate Display Skeleton */}
                    <div className="mt-6 pt-6 border-t border-border">
                        <div className="space-y-2">
                            <Skeleton className="h-6 w-48" />
                            <Skeleton className="h-4 w-64" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Denomination Breakdown Skeleton */}
            <div className="mt-8 space-y-4">
                <Skeleton className="h-[200px] w-full rounded-xl" />
            </div>
        </div>
    );
}
