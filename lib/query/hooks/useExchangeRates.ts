'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates } from '@/lib/api/exchangeRates';
import type { ExchangeRates } from '@/lib/currency/types';

export function useExchangeRates() {
    return useQuery<ExchangeRates>({
        queryKey: ['exchangeRates'],
        queryFn: fetchExchangeRates,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    });
}
