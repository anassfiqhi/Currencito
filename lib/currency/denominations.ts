import type { Denomination, Currency } from './types';
import { CURRENCY_DENOMINATIONS, MAD_DENOMINATIONS } from './constants';

/**
 * Calculate the minimum number of coins and banknotes needed for a given amount in MAD
 * Uses greedy algorithm (works because denominations follow a decreasing pattern)
 */
export function calculateDenominations(amount: number, currency: Currency = 'MAD'): Denomination[] {
    if (amount <= 0 || !isFinite(amount)) {
        return [];
    }

    const denominations = CURRENCY_DENOMINATIONS[currency];
    if (!denominations || denominations.length === 0) {
        return [];
    }

    const result: Denomination[] = [];
    let remaining = Math.round(amount * 100) / 100; // Round to 2 decimal places to be safe

    for (const denom of denominations) {
        if (remaining >= denom.value) {
            const count = Math.floor(remaining / denom.value);
            // Use a small epsilon for floating point comparison safety or just round carefully
            remaining = Math.round((remaining - count * denom.value) * 100) / 100;

            result.push({
                ...denom,
                count,
            });
        }
    }

    return result;
}

/**
 * Format amount with proper decimal places
 */
export function formatAmount(amount: number, decimals: number = 2): string {
    return amount.toFixed(decimals);
}
