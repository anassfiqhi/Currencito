'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Settings, Coins } from 'lucide-react';
import { CurrencyConverterWithUrl } from './CurrencyConverterWithUrl';
import { SettingsView } from './SettingsView';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function UnifiedLayout() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
                <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Coins className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Currencito
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                                    <Settings className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <div className="mt-6">
                                    <SettingsView />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (Tabs) & Desktop Content */}
            <div className="w-full flex-1 md:py-8">
                {/* Mobile View */}
                <div className="md:hidden h-full">
                    <Tabs defaultValue="converter" className="w-full h-full flex flex-col">
                        <div className="flex-1 overflow-y-auto">
                            <TabsContent value="converter" className="m-0 h-full pb-20">
                                <div className="text-center mb-8 px-4 pt-8">
                                    <h1 className="text-3xl font-bold text-foreground mb-2">
                                        Currencito
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        World Currency Converter
                                    </p>
                                </div>
                                <CurrencyConverterWithUrl />
                            </TabsContent>
                            <TabsContent value="settings" className="m-0 h-full pb-20">
                                <SettingsView />
                            </TabsContent>
                        </div>

                        <TabsList className="fixed bottom-0 left-0 right-0 z-50 flex h-16! w-full bg-background border-t border-border rounded-none pb-safe">
                            <TabsTrigger value="converter" className="flex-1 flex flex-col gap-1 h-full rounded-none data-[state=active]:text-primary! data-[state=active]:bg-transparent border-t-2 border-transparent data-[state=active]:border-primary transition-none">
                                <Home className="h-5 w-5" />
                                <span className="text-xs font-medium">Home</span>
                            </TabsTrigger>
                            <TabsTrigger value="settings" className="flex-1 flex flex-col gap-1 h-full rounded-none data-[state=active]:text-primary! data-[state=active]:bg-transparent border-t-2 border-transparent data-[state=active]:border-primary transition-none">
                                <Settings className="h-5 w-5" />
                                <span className="text-xs font-medium">Settings</span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 mb-4">
                            World Currency Converter
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Convert instantly world currencies with real-time exchange rates.
                        </p>
                    </div>

                    <CurrencyConverterWithUrl />
                </div>
            </div>
        </div>
    );
}
