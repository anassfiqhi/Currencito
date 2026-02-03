'use client';

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

interface CurrencySelectProps {
    value: Currency;
    onChange: (value: Currency) => void;
}

export function CurrencySelect({ value, onChange }: CurrencySelectProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger
                className="w-auto border-0 bg-transparent p-0 h-auto hover:bg-transparent focus:ring-0"
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
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
