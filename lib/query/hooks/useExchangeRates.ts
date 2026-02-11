'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates } from '@/lib/api/exchangeRates';
import type { ExchangeRates } from '@/lib/currency/types';
import { getCachedRates, saveRates } from '@/lib/db';

async function fetchWithCache(): Promise<ExchangeRates> {
    try {
        const rates = await fetchExchangeRates();
        await saveRates(rates);
        return rates;
    } catch (error) {
        console.warn('Network error, attempting to load from cache...', error);
        const cached = await getCachedRates();
        if (cached) return cached;
        throw error;
    }
}

export function useExchangeRates() {
    return useQuery<ExchangeRates>({
        queryKey: ['exchangeRates'],
        queryFn: fetchWithCache,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchInterval: 5 * 60 * 1000,
    });
}
