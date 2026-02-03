import type { Denomination } from './types';
import { MAD_DENOMINATIONS } from './constants';

/**
 * Calculate the minimum number of coins and banknotes needed for a given amount in MAD
 * Uses greedy algorithm (works because denominations follow a decreasing pattern)
 */
export function calculateDenominations(amount: number): Denomination[] {
    if (amount <= 0 || !isFinite(amount)) {
        return [];
    }

    const result: Denomination[] = [];
    let remaining = Math.round(amount * 10) / 10; // Round to 1 decimal place

    for (const denom of MAD_DENOMINATIONS) {
        if (remaining >= denom.value) {
            const count = Math.floor(remaining / denom.value);
            remaining = Math.round((remaining - count * denom.value) * 10) / 10;

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
