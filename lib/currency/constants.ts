import type { Currency, CurrencyInfo, Denomination } from './types';

// Moroccan currency internal conversion rates
export const MOROCCAN_RATES = {
    MAD_TO_RIYAL: 20,
    MAD_TO_FRANC: 100,
} as const;

// Moroccan Dirham denominations (in descending order for greedy algorithm)
export const MAD_DENOMINATIONS: Omit<Denomination, 'count'>[] = [
    { value: 200, type: 'note', imageUrl: '/currency/svg/mad-200-note.svg' },
    { value: 100, type: 'note', imageUrl: '/currency/svg/mad-100-note.svg' },
    { value: 50, type: 'note', imageUrl: '/currency/svg/mad-50-note.svg' },
    { value: 20, type: 'note', imageUrl: '/currency/svg/mad-20-note.svg' },
    { value: 10, type: 'coin', imageUrl: '/currency/mad-10-coin.png' },
    { value: 5, type: 'coin', imageUrl: '/currency/mad-5-coin.png' },
    { value: 2, type: 'coin', imageUrl: '/currency/mad-2-coin.png' },
    { value: 1, type: 'coin', imageUrl: '/currency/mad-1-coin.png' },
    { value: 0.5, type: 'coin', imageUrl: '/currency/mad-050-coin.png' },
    { value: 0.2, type: 'coin', imageUrl: '/currency/mad-020-coin.png' },
    { value: 0.1, type: 'coin', imageUrl: '/currency/mad-010-coin.png' },
];

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
