import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Currency } from '@/lib/currency/types';

interface ConverterState {
    amount: string;
    toAmount: string;
    fromCurrency: Currency;
    toCurrency: Currency;
}

const initialState: ConverterState = {
    amount: '100',
    toAmount: '',
    fromCurrency: 'MAD',
    toCurrency: 'USD',
};

const converterSlice = createSlice({
    name: 'converter',
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
            state.toAmount = ''; // Clear to amount when from changes
        },
        setToAmount: (state, action: PayloadAction<string>) => {
            state.toAmount = action.payload;
            state.amount = ''; // Clear from amount when to changes
        },
        setFromCurrency: (state, action: PayloadAction<Currency>) => {
            state.fromCurrency = action.payload;
        },
        setToCurrency: (state, action: PayloadAction<Currency>) => {
            state.toCurrency = action.payload;
        },
        swapCurrencies: (state) => {
            const temp = state.fromCurrency;
            state.fromCurrency = state.toCurrency;
            state.toCurrency = temp;
            // Swap amounts too
            const tempAmount = state.amount;
            state.amount = state.toAmount;
            state.toAmount = tempAmount;
        },
        initializeFromUrl: (state, action: PayloadAction<{
            from?: string;
            to?: string;
            amount?: string;
        }>) => {
            const { from, to, amount } = action.payload;

            // Validate and set from currency
            if (from && isValidCurrency(from)) {
                state.fromCurrency = from as Currency;
            }

            // Validate and set to currency
            if (to && isValidCurrency(to)) {
                state.toCurrency = to as Currency;
            }

            // Validate and set amount
            if (amount && /^\d*\.?\d*$/.test(amount) && amount !== '') {
                state.amount = amount;
                state.toAmount = '';
            }
        },
    },
});

// Helper function to validate currency codes
function isValidCurrency(code: string): boolean {
    const validCurrencies = [
        'MAD', 'RIYAL', 'FRANC',
        'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD',
        'CHF', 'CNY', 'INR', 'SAR', 'AED', 'BRL',
        'MXN', 'ZAR', 'KRW', 'SGD'
    ];
    return validCurrencies.includes(code);
}

export const { setAmount, setToAmount, setFromCurrency, setToCurrency, swapCurrencies, initializeFromUrl } =
    converterSlice.actions;

export default converterSlice.reducer;
