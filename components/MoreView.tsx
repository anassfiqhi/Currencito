'use client';

import { Card, CardContent } from '@/components/ui/card';

export function MoreView() {
    return (
        <div className="space-y-6 p-4 pb-24">
            <h1 className="text-2xl font-bold mb-6">More</h1>

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">About Moroccan Currencies</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">🇲🇦</span>
                            <div>
                                <h3 className="font-semibold">Moroccan Dirham</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">The official currency of Morocco (MAD).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">💰</span>
                            <div>
                                <h3 className="font-semibold">Rial (Riyal)</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">A traditional unit of account. 1 Dirham equals 20 Rials.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-2xl">💵</span>
                            <div>
                                <h3 className="font-semibold">Franc</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">A historical colonial unit. 1 Dirham equals 100 Francs.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2">Privacy & Terms</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        We value your privacy. Currencito does not store any personal data.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
