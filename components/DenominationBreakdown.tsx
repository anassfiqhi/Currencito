'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Denomination, Currency } from '@/lib/currency/types';
import Image from 'next/image';

interface DenominationBreakdownProps {
    denominations: Denomination[];
    total: number;
    currency: Currency;
}

export function DenominationBreakdown({
    denominations,
    total,
    currency,
}: DenominationBreakdownProps) {
    const notes = denominations.filter((d) => d.type === 'note' && d.count && d.count > 0);
    const coins = denominations.filter((d) => d.type === 'coin' && d.count && d.count > 0);

    return (
        <Card className="backdrop-blur-lg bg-card/40 border-border shadow-2xl">
            <CardHeader className="border-b border-border/50">
                <CardTitle className="text-xl font-bold text-primary">
                    💵 Cash Breakdown - {total.toFixed(2)} {currency}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Minimum coins and banknotes needed
                </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
                {notes.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Banknotes
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {notes.map((denom) => (
                                <div
                                    key={denom.value}
                                    className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-3 hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
                                >
                                    {denom.imageUrl ? (
                                        <div className="aspect-2/1 relative mb-2 rounded overflow-hidden">
                                            <Image
                                                src={denom.imageUrl}
                                                alt={`${denom.value} ${currency} note`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-2/1 relative mb-2 rounded overflow-hidden flex items-center justify-center border border-emerald-500/20 bg-emerald-500/10 shadow-sm">
                                            <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                                                {denom.value}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-foreground">
                                            {denom.value} {currency}
                                        </span>
                                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                            {denom.count}×
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {coins.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Coins
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                            {coins.map((denom) => (
                                <div
                                    key={denom.value}
                                    className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-2 hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
                                >
                                    {denom.imageUrl ? (
                                        <div className="aspect-square relative mb-2 rounded overflow-hidden">
                                            <Image
                                                src={denom.imageUrl}
                                                alt={`${denom.value} ${currency} Coin`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-square relative mb-2 rounded-full overflow-hidden flex items-center justify-center border border-amber-500/20 bg-amber-500/10 shadow-sm">
                                            <span className="text-lg font-bold text-amber-700 dark:text-amber-400">
                                                {denom.value}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {denom.value}
                                        </span>
                                        <Badge variant="secondary" className="text-xs">
                                            {denom.count}×
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
                }
            </CardContent >
        </Card >
    );
}
