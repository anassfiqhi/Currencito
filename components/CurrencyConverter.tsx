'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import {
    setAmount,
    setToAmount,
    setFromCurrency,
    setToCurrency,
    swapCurrencies,
} from '@/lib/store/slices/converterSlice';
import { useExchangeRates } from '@/lib/query/hooks/useExchangeRates';
import { convertCurrency, getExchangeRate } from '@/lib/currency/converter';
import { calculateDenominations } from '@/lib/currency/denominations';
import { CURRENCIES } from '@/lib/currency/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft } from 'lucide-react';
import { CurrencySelect } from '@/components/CurrencySelect';
import { DenominationBreakdown } from '@/components/DenominationBreakdown';
import type { Currency } from '@/lib/currency/types';

export function CurrencyConverter() {
    const dispatch = useAppDispatch();
    const { amount, toAmount, fromCurrency, toCurrency } = useAppSelector(
        (state) => state.converter
    );
    const { data: exchangeRates, isLoading } = useExchangeRates();

    const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            dispatch(setAmount(value));
        }
    };

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            dispatch(setToAmount(value));
        }
    };

    const handleFromCurrencyChange = (currency: Currency) => {
        dispatch(setFromCurrency(currency));
    };

    const handleToCurrencyChange = (currency: Currency) => {
        dispatch(setToCurrency(currency));
    };

    // Calculate result based on which field has a value
    let fromValue = '';
    let toValue = '';
    let denominationAmount = 0;

    if (amount && !toAmount) {
        const numAmount = parseFloat(amount) || 0;
        fromValue = amount;
        if (numAmount > 0 && exchangeRates) {
            const result = convertCurrency(numAmount, fromCurrency, toCurrency, exchangeRates.rates);
            toValue = result.toFixed(2);
            denominationAmount = result;
        }
    } else if (toAmount && !amount) {
        const numToAmount = parseFloat(toAmount) || 0;
        toValue = toAmount;
        if (numToAmount > 0 && exchangeRates) {
            const result = convertCurrency(numToAmount, toCurrency, fromCurrency, exchangeRates.rates);
            fromValue = result.toFixed(2);
            denominationAmount = numToAmount;
        }
    }

    const handleSwap = () => {
        if (amount && !toAmount && toValue) {
            // If we have a calculated 'to' value, use it as the new 'from' amount
            dispatch(setAmount(toValue));
            dispatch(setFromCurrency(toCurrency));
            dispatch(setToCurrency(fromCurrency));
        } else if (toAmount && !amount && fromValue) {
            // If we have a calculated 'from' value (user typed in To), use it as new 'to' amount?
            // Standard swap would make amount=toAmount, toAmount=amount(empty).
            // That puts the typed value into 'from', and clears 'to'. That's usually fine.
            // But if we want to be symmetric...
            // Standard swap: new Amount = old ToAmount. new ToAmount = old Amount (empty).
            // The new calculation will be: calculate To from Amount.
            // So 1000 MAD (typed) -> ??? USD.
            // Swap -> 1000 USD -> ??? MAD.
            // That seems correct behavior for typing in To.
            dispatch(swapCurrencies());
        } else {
            dispatch(swapCurrencies());
        }
    };

    const rate =
        exchangeRates && getExchangeRate(fromCurrency, toCurrency, exchangeRates.rates);

    const denominations = denominationAmount > 0 ? calculateDenominations(denominationAmount, toCurrency) : [];

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {/* Main Converter Card */}
            <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                    {/* Amount Input Fields */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* From Section */}
                        <div className="flex-1 w-full p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 transition-all hover:border-blue-300 dark:hover:border-blue-700 focus-within:border-blue-500 dark:focus-within:border-blue-500">
                            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                                From
                            </label>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="text"
                                    inputMode="decimal"
                                    value={fromValue}
                                    onChange={handleFromAmountChange}
                                    className="text-2xl font-bold border-0 bg-transparent p-0 h-auto text-gray-900 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder="100"
                                    data-testid="from-amount-input"
                                />
                                <div className="shrink-0">
                                    <CurrencySelect
                                        value={fromCurrency}
                                        onChange={handleFromCurrencyChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Swap Button */}
                        <Button
                            onClick={handleSwap}
                            variant="outline"
                            size="icon"
                            className="shrink-0 h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 transition-all"
                            data-testid="swap-button"
                        >
                            <ArrowRightLeft className="h-5 w-5 text-gray-700 dark:text-gray-300 rotate-90 md:rotate-0" />
                        </Button>

                        {/* To Section */}
                        <div className="flex-1 w-full p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 transition-all hover:border-gray-400 dark:hover:border-gray-500 focus-within:border-blue-500 dark:focus-within:border-blue-500">
                            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                                To
                            </label>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="text"
                                    inputMode="decimal"
                                    value={toValue}
                                    onChange={handleToAmountChange}
                                    className="text-2xl font-bold border-0 bg-transparent p-0 h-auto text-gray-900 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder={isLoading ? '...' : '0.00'}
                                    data-testid="to-amount-input"
                                />
                                <div className="shrink-0">
                                    <CurrencySelect
                                        value={toCurrency}
                                        onChange={handleToCurrencyChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exchange Rate Display */}
                    {rate && rate !== 1 && (fromValue || toValue) && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                <div>
                                    <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                        1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
                                    </p>
                                    {exchangeRates && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            Live exchange rate • Updated {new Date().toLocaleTimeString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Denomination Breakdown */}
            {denominations.length > 0 && (
                <DenominationBreakdown
                    denominations={denominations}
                    total={denominationAmount}
                    currency={toCurrency}
                />
            )}
        </div>
    );
}
