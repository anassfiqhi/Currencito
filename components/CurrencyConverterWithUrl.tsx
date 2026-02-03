'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { initializeFromUrl } from '@/lib/store/slices/converterSlice';
import { CurrencyConverter } from './CurrencyConverter';

/**
 * Wrapper component that syncs converter state with URL parameters
 * Enables shareable links and state persistence on refresh
 */
export function CurrencyConverterWithUrl() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    const { amount, toAmount, fromCurrency, toCurrency } = useAppSelector(
        (state) => state.converter
    );

    const isInitialMount = useRef(true);

    // Initialize state from URL on mount
    useEffect(() => {
        if (isInitialMount.current) {
            const urlParams = {
                from: searchParams.get('from') || undefined,
                to: searchParams.get('to') || undefined,
                amount: searchParams.get('amount') || undefined,
            };

            // Only dispatch if we have URL params
            if (urlParams.from || urlParams.to || urlParams.amount) {
                dispatch(initializeFromUrl(urlParams));
            }

            isInitialMount.current = false;
        }
    }, [searchParams, dispatch]);

    // Sync state changes to URL (debounced)
    useEffect(() => {
        // Skip initial mount
        if (isInitialMount.current) {
            return;
        }

        const params = new URLSearchParams();

        // Only add params if they differ from defaults
        if (fromCurrency !== 'MAD') {
            params.set('from', fromCurrency);
        }
        if (toCurrency !== 'USD') {
            params.set('to', toCurrency);
        }

        // Use the 'from' amount if it exists, otherwise don't add to URL
        if (amount && amount !== '') {
            params.set('amount', amount);
        }

        // Build the new URL
        const paramString = params.toString();
        const newUrl = paramString ? `${pathname}?${paramString}` : pathname;

        // Update URL without full page reload
        router.replace(newUrl, { scroll: false });
    }, [amount, toAmount, fromCurrency, toCurrency, pathname, router]);

    return <CurrencyConverter />;
}
