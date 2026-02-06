'use client';

import * as React from 'react';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CURRENCIES, MOROCCAN_CURRENCIES, WORLD_CURRENCIES } from '@/lib/currency/constants';
import type { Currency } from '@/lib/currency/types';
import { cn } from '@/lib/utils'; // Assuming cn exists, added it

interface CurrencySelectProps {
    value: Currency;
    onChange: (value: Currency) => void;
}

export function CurrencySelect({ value, onChange }: CurrencySelectProps) {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    // Avoid hydration mismatch by waiting for mount
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const CurrencyList = ({ className }: { className?: string }) => (
        <div className={cn("grid gap-2", className)}>
            <div className="px-2 py-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400">Moroccan Currencies</div>
            {MOROCCAN_CURRENCIES.map((currency) => (
                <div
                    key={currency.code}
                    onClick={() => {
                        onChange(currency.code);
                        setOpen(false);
                    }}
                    className={cn(
                        "flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                        value === currency.code && "bg-gray-100 dark:bg-gray-800"
                    )}
                >
                    <span className="text-xl">{currency.flag}</span>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold text-gray-900 dark:text-white">{currency.code}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{currency.name}</span>
                    </div>
                </div>
            ))}
            <div className="px-2 py-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 mt-2">World Currencies</div>
            {WORLD_CURRENCIES.map((currency) => (
                <div
                    key={currency.code}
                    onClick={() => {
                        onChange(currency.code);
                        setOpen(false);
                    }}
                    className={cn(
                        "flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                        value === currency.code && "bg-gray-100 dark:bg-gray-800"
                    )}
                >
                    <span className="text-xl">{currency.flag}</span>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold text-gray-900 dark:text-white">{currency.code}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{currency.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    if (!mounted) {
        // Render a placeholder or the desktop version by default to avoid layout shift if possible,
        // but for hydration safety, empty or identical server-rendered output is best.
        // Here we can render the Trigger look-alike.
        return (
            <Button variant="ghost" className="w-auto p-0 h-auto hover:bg-transparent font-normal">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{CURRENCIES[value].flag}</span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {CURRENCIES[value].code}
                    </span>
                </div>
            </Button>
        );
    }

    if (isDesktop) {
        return (
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger
                    className="w-auto border-0 bg-transparent p-0 h-auto hover:bg-transparent focus:ring-0 shadow-none data-placeholder:text-muted-foreground"
                    data-testid={`currency-select-${value}`}
                >
                    <SelectValue>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{CURRENCIES[value].flag}</span>
                            <span className="font-bold text-gray-900 dark:text-white text-sm">
                                {CURRENCIES[value].code}
                            </span>
                        </div>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 max-h-[300px]">
                    <SelectGroup>
                        <SelectLabel className="text-gray-600 dark:text-gray-400">Moroccan Currencies</SelectLabel>
                        {MOROCCAN_CURRENCIES.map((currency) => (
                            <SelectItem
                                key={currency.code}
                                value={currency.code}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{currency.flag}</span>
                                    <div className="flex flex-col items-start">
                                        <span className="font-semibold text-gray-900 dark:text-white">{currency.code}</span>
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{currency.name}</span>
                                    </div>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel className="text-gray-600 dark:text-gray-400 mt-2">World Currencies</SelectLabel>
                        {WORLD_CURRENCIES.map((currency) => (
                            <SelectItem
                                key={currency.code}
                                value={currency.code}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{currency.flag}</span>
                                    <div className="flex flex-col items-start">
                                        <span className="font-semibold text-gray-900 dark:text-white">{currency.code}</span>
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{currency.name}</span>
                                    </div>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="w-auto p-0 h-auto hover:bg-transparent font-normal shadow-none">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{CURRENCIES[value].flag}</span>
                        <span className="font-bold text-gray-900 dark:text-white text-sm">
                            {CURRENCIES[value].code}
                        </span>
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
                <div className="p-4 overflow-y-auto">
                    <CurrencyList />
                </div>
            </DrawerContent>
        </Drawer>
    );
}
