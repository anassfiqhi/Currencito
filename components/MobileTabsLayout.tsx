'use client';

import * as React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Settings } from 'lucide-react';
import { CurrencyConverterWithUrl } from './CurrencyConverterWithUrl';
import { SettingsView } from './SettingsView';

export function MobileTabsLayout() {
    return (
        <Tabs defaultValue="converter" className="w-full h-full">
            <div className="h-full overflow-y-auto">
                <TabsContent value="converter" className="m-0 h-full">
                    {/* Reusing existing Converter, adding padding for bottom nav */}
                    <div className="pb-24">
                        <div className="text-center mb-8 px-4 pt-8">
                            <h1 className="text-3xl font-bold text-foreground mb-2">
                                Currencito
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                World Currency Converter
                            </p>
                        </div>
                        <React.Suspense fallback={<div className="text-center text-muted-foreground">Loading converter...</div>}>
                            <CurrencyConverterWithUrl />
                        </React.Suspense>
                    </div>
                </TabsContent>
                <TabsContent value="settings" className="m-0 h-full">
                    <SettingsView />
                </TabsContent>
            </div>

            <TabsList className="sticky bottom-0 left-0 right-0 z-50 flex justify-around h-16! w-full bg-background border-t border-border rounded-none pb- safe-area-inset-bottom">
                <TabsTrigger value="converter" className="flex flex-col items-center justify-center gap-1 h-full flex-1 data-[state=active]:text-primary data-[state=active]:bg-transparent rounded-none border-t-2 border-transparent data-[state=active]:border-primary transition-none text-muted-foreground">
                    <Home className="h-5 w-5" />
                    <span className="text-xs">Home</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex flex-col items-center justify-center gap-1 h-full flex-1 data-[state=active]:text-primary data-[state=active]:bg-transparent rounded-none border-t-2 border-transparent data-[state=active]:border-primary transition-none text-muted-foreground">
                    <Settings className="h-5 w-5" />
                    <span className="text-xs">Settings</span>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
