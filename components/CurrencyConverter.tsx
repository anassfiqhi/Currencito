'use client';

import { useState } from 'react';
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
import { cn } from '@/lib/utils';

export function CurrencyConverter() {
    const dispatch = useAppDispatch();
    const [isRotated, setIsRotated] = useState(false);
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
        setIsRotated(!isRotated);
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
            <Card className="w-full bg-card border-border shadow-2xl">
                <CardContent className="p-6 md:p-8">
                    {/* Amount Input Fields */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* From Section */}
                        <div className="flex-1 w-full p-4 rounded-xl border border-input bg-secondary/50 transition-all hover:border-primary/60 focus-within:border-primary">
                            <label className="block text-xs font-medium text-muted-foreground mb-2">
                                From
                            </label>
                            <div className="flex items-stretch gap-3">
                                <Input
                                    type="text"
                                    inputMode="decimal"
                                    value={fromValue}
                                    onChange={handleFromAmountChange}
                                    className="text-2xl font-bold border-0 bg-transparent p-0 h-auto text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
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
                            className={cn(
                                "shrink-0 h-12 w-12 rounded-full border border-input bg-background hover:bg-muted transition-all duration-300 hover:scale-110",
                                isRotated ? "rotate-180" : "rotate-0"
                            )}
                            data-testid="swap-button"
                        >
                            <ArrowRightLeft className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                        </Button>

                        {/* To Section */}
                        <div className="flex-1 w-full p-4 rounded-xl border border-input bg-muted/50 transition-all hover:border-primary/50 focus-within:border-primary">
                            <label className="block text-xs font-medium text-muted-foreground mb-2">
                                To
                            </label>
                            <div className="flex items-stretch gap-3">
                                <Input
                                    type="text"
                                    inputMode="decimal"
                                    value={toValue}
                                    onChange={handleToAmountChange}
                                    className="text-2xl font-bold border-0 bg-transparent p-0 h-auto text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
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
                        <div className="mt-6 pt-6 border-t border-border">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                <div>
                                    <p className="text-lg md:text-xl font-semibold text-foreground">
                                        1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
                                    </p>
                                    {exchangeRates && (
                                        <p className="text-sm text-muted-foreground mt-1">
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
