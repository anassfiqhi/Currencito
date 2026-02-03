import type { Currency, MoroccanCurrency, WorldCurrency } from './types';
import { MOROCCAN_RATES } from './constants';

/**
 * Convert between Moroccan currencies (MAD, Riyal, Franc)
 */
function convertMoroccanCurrencies(
    amount: number,
    from: MoroccanCurrency,
    to: MoroccanCurrency
): number {
    if (from === to) return amount;

    // Convert to MAD first
    let madAmount = amount;
    if (from === 'RIYAL') {
        madAmount = amount / MOROCCAN_RATES.MAD_TO_RIYAL;
    } else if (from === 'FRANC') {
        madAmount = amount / MOROCCAN_RATES.MAD_TO_FRANC;
    }

    // Convert from MAD to target
    if (to === 'RIYAL') {
        return madAmount * MOROCCAN_RATES.MAD_TO_RIYAL;
    } else if (to === 'FRANC') {
        return madAmount * MOROCCAN_RATES.MAD_TO_FRANC;
    }

    return madAmount;
}

/**
 * Convert between any currencies using exchange rates
 */
export function convertCurrency(
    amount: number,
    from: Currency,
    to: Currency,
    exchangeRates?: Record<string, number>
): number {
    if (amount <= 0 || !isFinite(amount)) return 0;
    if (from === to) return amount;

    const isMoroccanFrom = ['MAD', 'RIYAL', 'FRANC'].includes(from);
    const isMoroccanTo = ['MAD', 'RIYAL', 'FRANC'].includes(to);

    // Both Moroccan currencies
    if (isMoroccanFrom && isMoroccanTo) {
        return convertMoroccanCurrencies(
            amount,
            from as MoroccanCurrency,
            to as MoroccanCurrency
        );
    }

    // Need exchange rates for world currencies
    if (!exchangeRates) {
        throw new Error('Exchange rates required for world currency conversion');
    }

    // Convert Moroccan → World
    if (isMoroccanFrom && !isMoroccanTo) {
        // First convert to MAD
        const madAmount = convertMoroccanCurrencies(
            amount,
            from as MoroccanCurrency,
            'MAD'
        );

        // Then MAD to world currency
        const rate = exchangeRates[to];
        if (!rate) throw new Error(`No exchange rate for ${to}`);
        return madAmount * rate;
    }

    // Convert World → Moroccan
    if (!isMoroccanFrom && isMoroccanTo) {
        // First convert world currency to MAD
        const rate = exchangeRates[from];
        if (!rate) throw new Error(`No exchange rate for ${from}`);
        const madAmount = amount / rate;

        // Then MAD to target Moroccan currency
        return convertMoroccanCurrencies(madAmount, 'MAD', to as MoroccanCurrency);
    }

    // Convert World → World
    const fromRate = exchangeRates[from];
    const toRate = exchangeRates[to];
    if (!fromRate || !toRate) {
        throw new Error(`Missing exchange rates for ${from} or ${to}`);
    }

    // Convert through MAD
    const madAmount = amount / fromRate;
    return madAmount * toRate;
}

/**
 * Get exchange rate between two currencies
 */
export function getExchangeRate(
    from: Currency,
    to: Currency,
    exchangeRates?: Record<string, number>
): number {
    if (from === to) return 1;

    const isMoroccanFrom = ['MAD', 'RIYAL', 'FRANC'].includes(from);
    const isMoroccanTo = ['MAD', 'RIYAL', 'FRANC'].includes(to);

    if (isMoroccanFrom && isMoroccanTo) {
        return convertMoroccanCurrencies(1, from as MoroccanCurrency, to as MoroccanCurrency);
    }

    if (!exchangeRates) return 0;

    return convertCurrency(1, from, to, exchangeRates);
}
