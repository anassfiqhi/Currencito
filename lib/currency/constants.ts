import type { Currency, CurrencyInfo, Denomination } from './types';

// Moroccan currency internal conversion rates
export const MOROCCAN_RATES = {
    MAD_TO_RIYAL: 20,
    MAD_TO_FRANC: 100,
} as const;

// Denominations for all currencies
export const CURRENCY_DENOMINATIONS: Record<Currency, Omit<Denomination, 'count'>[]> = {
    // Moroccan Dirham
    MAD: [
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'coin' },
        { value: 5, type: 'coin' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
    ],
    // US Dollar
    USD: [
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'note' },
        { value: 1, type: 'note' },
        { value: 0.5, type: 'coin' },
        { value: 0.25, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
        { value: 0.01, type: 'coin' },
    ],
    // Euro
    EUR: [
        { value: 500, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
        { value: 0.02, type: 'coin' },
        { value: 0.01, type: 'coin' },
    ],
    // British Pound
    GBP: [
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
        { value: 0.02, type: 'coin' },
        { value: 0.01, type: 'coin' },
    ],
    // Japanese Yen
    JPY: [
        { value: 10000, type: 'note' },
        { value: 5000, type: 'note' },
        { value: 2000, type: 'note' },
        { value: 1000, type: 'note' },
        { value: 500, type: 'coin' },
        { value: 100, type: 'coin' },
        { value: 50, type: 'coin' },
        { value: 10, type: 'coin' },
        { value: 5, type: 'coin' },
        { value: 1, type: 'coin' },
    ],
    // Australian Dollar
    AUD: [
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
    ],
    // Canadian Dollar
    CAD: [
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.25, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
    ],
    // Swiss Franc (CHF)
    CHF: [
        { value: 1000, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'coin' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
    ],
    // Chinese Yuan (CNY)
    CNY: [
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 1, type: 'note' },
        { value: 0.5, type: 'note' }, // 5 jiao
        { value: 0.1, type: 'note' }, // 1 jiao
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.1, type: 'coin' },
    ],
    // Indian Rupee (INR)
    INR: [
        { value: 2000, type: 'note' },
        { value: 500, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 20, type: 'coin' },
        { value: 10, type: 'coin' },
        { value: 5, type: 'coin' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
    ],
    // Saudi Riyal (SAR)
    SAR: [
        { value: 500, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.25, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' }, // 5 and 1 halalas often rarely used
        { value: 0.01, type: 'coin' },
    ],
    // UAE Dirham (AED)
    AED: [
        { value: 1000, type: 'note' },
        { value: 500, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.25, type: 'coin' },
    ],
    // Brazilian Real (BRL)
    BRL: [
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'note' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.25, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
    ],
    // Mexican Peso (MXN)
    MXN: [
        { value: 1000, type: 'note' },
        { value: 500, type: 'note' },
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 20, type: 'coin' }, // Also note
        { value: 10, type: 'coin' },
        { value: 5, type: 'coin' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
    ],
    // South African Rand (ZAR)
    ZAR: [
        { value: 200, type: 'note' },
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 20, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'coin' },
        { value: 2, type: 'coin' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' }, // 50c
        { value: 0.2, type: 'coin' }, // 20c
        { value: 0.1, type: 'coin' }, // 10c
    ],
    // South Korean Won (KRW)
    KRW: [
        { value: 50000, type: 'note' },
        { value: 10000, type: 'note' },
        { value: 5000, type: 'note' },
        { value: 1000, type: 'note' },
        { value: 500, type: 'coin' },
        { value: 100, type: 'coin' },
        { value: 50, type: 'coin' },
        { value: 10, type: 'coin' },
    ],
    // Singapore Dollar (SGD)
    SGD: [
        { value: 1000, type: 'note' }, // Rarely used
        { value: 100, type: 'note' },
        { value: 50, type: 'note' },
        { value: 10, type: 'note' },
        { value: 5, type: 'note' },
        { value: 2, type: 'note' },
        { value: 1, type: 'coin' },
        { value: 0.5, type: 'coin' },
        { value: 0.2, type: 'coin' },
        { value: 0.1, type: 'coin' },
        { value: 0.05, type: 'coin' },
    ],
    // Legacy/Sub units
    RIYAL: [], // Handled via MAD conversion conceptually, but not really denominated
    FRANC: [],
};

// Backwards compatibility
export const MAD_DENOMINATIONS = CURRENCY_DENOMINATIONS.MAD;

// Currency metadata
export const CURRENCIES: Record<Currency, CurrencyInfo> = {
    // Moroccan Currencies
    MAD: {
        code: 'MAD',
        name: 'Moroccan Dirham',
        symbol: 'د.م.',
        flag: '🇲🇦',
        isMoroccan: true,
    },
    RIYAL: {
        code: 'RIYAL',
        name: 'Moroccan Riyal',
        symbol: 'ر',
        flag: '🇲🇦',
        isMoroccan: true,
    },
    FRANC: {
        code: 'FRANC',
        name: 'Moroccan Franc',
        symbol: 'Fr',
        flag: '🇲🇦',
        isMoroccan: true,
    },

    // World Currencies
    USD: {
        code: 'USD',
        name: 'US Dollar',
        symbol: '$',
        flag: '🇺🇸',
        isMoroccan: false,
    },
    EUR: {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
        flag: '🇪🇺',
        isMoroccan: false,
    },
    GBP: {
        code: 'GBP',
        name: 'British Pound',
        symbol: '£',
        flag: '🇬🇧',
        isMoroccan: false,
    },
    JPY: {
        code: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥',
        flag: '🇯🇵',
        isMoroccan: false,
    },
    AUD: {
        code: 'AUD',
        name: 'Australian Dollar',
        symbol: 'A$',
        flag: '🇦🇺',
        isMoroccan: false,
    },
    CAD: {
        code: 'CAD',
        name: 'Canadian Dollar',
        symbol: 'C$',
        flag: '🇨🇦',
        isMoroccan: false,
    },
    CHF: {
        code: 'CHF',
        name: 'Swiss Franc',
        symbol: 'CHF',
        flag: '🇨🇭',
        isMoroccan: false,
    },
    CNY: {
        code: 'CNY',
        name: 'Chinese Yuan',
        symbol: '¥',
        flag: '🇨🇳',
        isMoroccan: false,
    },
    INR: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: '₹',
        flag: '🇮🇳',
        isMoroccan: false,
    },
    SAR: {
        code: 'SAR',
        name: 'Saudi Riyal',
        symbol: 'ر.س',
        flag: '🇸🇦',
        isMoroccan: false,
    },
    AED: {
        code: 'AED',
        name: 'UAE Dirham',
        symbol: 'د.إ',
        flag: '🇦🇪',
        isMoroccan: false,
    },
    BRL: {
        code: 'BRL',
        name: 'Brazilian Real',
        symbol: 'R$',
        flag: '🇧🇷',
        isMoroccan: false,
    },
    MXN: {
        code: 'MXN',
        name: 'Mexican Peso',
        symbol: 'Mex$',
        flag: '🇲🇽',
        isMoroccan: false,
    },
    ZAR: {
        code: 'ZAR',
        name: 'South African Rand',
        symbol: 'R',
        flag: '🇿🇦',
        isMoroccan: false,
    },
    KRW: {
        code: 'KRW',
        name: 'South Korean Won',
        symbol: '₩',
        flag: '🇰🇷',
        isMoroccan: false,
    },
    SGD: {
        code: 'SGD',
        name: 'Singapore Dollar',
        symbol: 'S$',
        flag: '🇸🇬',
        isMoroccan: false,
    },
};

export const MOROCCAN_CURRENCIES = Object.values(CURRENCIES).filter(c => c.isMoroccan);
export const WORLD_CURRENCIES = Object.values(CURRENCIES).filter(c => !c.isMoroccan);
