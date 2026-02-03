// Moroccan Currency Types
export type MoroccanCurrency = 'MAD' | 'RIYAL' | 'FRANC';

// Popular World Currencies (ISO 4217)
export type WorldCurrency =
    | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD'
    | 'CHF' | 'CNY' | 'INR' | 'SAR' | 'AED' | 'BRL'
    | 'MXN' | 'ZAR' | 'KRW' | 'SGD';

export type Currency = MoroccanCurrency | WorldCurrency;

export interface CurrencyInfo {
    code: Currency;
    name: string;
    symbol: string;
    flag: string; // Emoji flag
    isMoroccan: boolean;
}

export interface Denomination {
    value: number;
    type: 'note' | 'coin';
    imageUrl: string;
    count?: number;
}

export interface ExchangeRates {
    base: string;
    date: string;
    rates: Record<string, number>;
}

export interface ConversionResult {
    from: Currency;
    to: Currency;
    amount: number;
    result: number;
    rate: number;
    denominations?: Denomination[];
}
