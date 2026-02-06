'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function SettingsView() {
    return (
        <div className="space-y-4 p-4 pb-24">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Appearance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="font-medium">Theme</p>
                            <p className="text-sm text-gray-500">Customize how the app looks</p>
                        </div>
                        {/* Placeholder for Theme Toggle - functionality can be added later if needed */}
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="font-medium">Default Currency</p>
                            <p className="text-sm text-gray-500">Set your preferred starting currency</p>
                        </div>
                        <Button variant="outline" disabled>Coming Soon</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">App Info</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500">Version 1.0.0</p>
                </CardContent>
            </Card>
        </div>
    );
}
