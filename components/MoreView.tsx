'use client';

import { Card, CardContent } from '@/components/ui/card';

export function MoreView() {
    return (
        <div className="space-y-6 p-4 pb-24">
            <h1 className="text-2xl font-bold mb-6">More</h1>

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
