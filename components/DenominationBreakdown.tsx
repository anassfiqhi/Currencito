'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Denomination } from '@/lib/currency/types';
import Image from 'next/image';

interface DenominationBreakdownProps {
    denominations: Denomination[];
    total: number;
}

export function DenominationBreakdown({
    denominations,
    total,
}: DenominationBreakdownProps) {
    const notes = denominations.filter((d) => d.type === 'note' && d.count && d.count > 0);
    const coins = denominations.filter((d) => d.type === 'coin' && d.count && d.count > 0);

    return (
        <Card className="backdrop-blur-lg bg-gray-950/40 border-gray-800/50 shadow-2xl">
            <CardHeader className="border-b border-gray-800/50">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    💵 Cash Breakdown - {total.toFixed(2)} MAD
                </CardTitle>
                <p className="text-sm text-gray-400">
                    Minimum coins and banknotes needed
                </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
                {notes.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                            Banknotes
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {notes.map((denom) => (
                                <div
                                    key={denom.value}
                                    className="group relative overflow-hidden rounded-lg border border-gray-700/50 bg-gray-900/30 p-3 hover:border-cyan-500/50 hover:bg-gray-800/40 transition-all duration-300"
                                >
                                    <div className="aspect-[2/1] relative mb-2 rounded overflow-hidden">
                                        <Image
                                            src={denom.imageUrl}
                                            alt={`${denom.value} MAD note`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-gray-300">
                                            {denom.value} MAD
                                        </span>
                                        <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30">
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
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                            Coins
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                            {coins.map((denom) => (
                                <div
                                    key={denom.value}
                                    className="group relative overflow-hidden rounded-lg border border-gray-700/50 bg-gray-900/30 p-2 hover:border-yellow-500/50 hover:bg-gray-800/40 transition-all duration-300"
                                >
                                    <div className="aspect-square relative mb-2 rounded overflow-hidden">
                                        <Image
                                            src={denom.imageUrl}
                                            alt={`${denom.value} MAD Coin`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                    {/* <div className="aspect-square relative mb-2 rounded-full overflow-hidden bg-gray-800/50">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center text-white font-bold shadow-lg">
                                                {denom.value}
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-400">
                                            {denom.value} MAD
                                        </span>
                                        <Badge variant="secondary" className="text-xs">
                                            {denom.count}×
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
