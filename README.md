# Moroccan Currency Converter

A modern, feature-rich currency converter application specializing in Moroccan currencies (Dirham, Riyal, Franc) with support for major world currencies. Built with Next.js 15, TypeScript, Redux Toolkit, and TanStack Query.

![Light Mode](https://img.shields.io/badge/Light%20Mode-Supported-blue)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)

## 🌟 Features

### ✨ Core Features
- **Bidirectional Conversion** - Type amounts in either the "From" or "To" field
- **Real-time Exchange Rates** - Live rates via ExchangeRate-API
- **Moroccan Currency Support** - MAD (Dirham), Riyal, and Franc with automatic conversions
- **World Currencies** - 10+ major currencies (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN)
- **Denomination Breakdown** - Visual breakdown of MAD banknotes and coins
- **Dark/Light Mode** - Full theme support with automatic system detection
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 💰 Moroccan Currency Features
- **MAD to Riyal**: 1 MAD = 20 Riyals
- **MAD to Franc**: 1 MAD = 100 Francs
- **Automatic Denomination Display**: When converting to MAD, see the exact coins and banknotes needed
- **Authentic Currency Images**: Real Moroccan currency images included

## 🎨 Design

### Light Mode
- Soft blue/indigo/purple gradient background
- Clean white cards with subtle shadows
- Blue-tinted input fields for better visual hierarchy
- Excellent contrast and readability

### Dark Mode
- Dark gray gradient background
- Dark cards with proper borders
- All text and UI elements adapt automatically
- Smooth transitions between modes

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety throughout

### State Management
- **Redux Toolkit** - Global state management
- **TanStack Query (React Query)** - Server state & caching

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Lucide Icons** - Clean, modern icon library

### API & Data
- **ExchangeRate-API** - Real-time exchange rates
- **Local Currency Data** - Pre-configured Moroccan currency rates

## 📁 Project Structure

```
currencito/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   ├── CurrencyConverter.tsx    # Main converter component
│   ├── CurrencySelect.tsx       # Currency dropdown
│   └── DenominationBreakdown.tsx # MAD denomination display
│
├── lib/                          # Core logic & utilities
│   ├── api/
│   │   └── exchangeRates.ts     # API client
│   ├── currency/
│   │   ├── converter.ts         # Conversion logic
│   │   ├── denominations.ts     # Denomination calculations
│   │   ├── constants.ts         # Currency metadata
│   │   └── types.ts             # TypeScript types
│   ├── query/
│   │   └── hooks/
│   │       └── useExchangeRates.ts # React Query hook
│   └── store/
│       ├── index.ts             # Redux store
│       ├── hooks.ts             # Typed Redux hooks
│       └── slices/
│           └── converterSlice.ts # Converter state
│
└── public/
    └── currency/                 # Currency images
        ├── mad-200-note.jpg
        ├── mad-100-note.jpg
        └── ... (coins & notes)
```

## 🏗️ Architecture

### State Management

#### Redux Toolkit (UI State)
Manages user input and currency selections:
```typescript
interface ConverterState {
  amount: string;        // From amount
  toAmount: string;      // To amount
  fromCurrency: Currency;
  toCurrency: Currency;
}
```

**Actions:**
- `setAmount(value)` - Set from amount (clears to amount)
- `setToAmount(value)` - Set to amount (clears from amount)
- `setFromCurrency(currency)` - Change from currency
- `setToCurrency(currency)` - Change to currency
- `swapCurrencies()` - Swap currencies and amounts

#### TanStack Query (Server State)
Handles exchange rate fetching with caching:
- **Cache Time**: 5 minutes
- **Stale Time**: 1 minute
- **Refetch**: On window focus
- **API**: ExchangeRate-API (free tier)

### Currency Conversion Logic

#### World Currencies
```typescript
convertCurrency(amount, fromCurrency, toCurrency, rates)
```
Uses the USD as the base currency:
1. Convert from currency to USD
2. Convert USD to target currency

#### Moroccan Internal Conversions
```typescript
// Direct conversions (no API needed)
MAD ↔ Riyal: multiply/divide by 20
MAD ↔ Franc: multiply/divide by 100
Riyal ↔ Franc: multiply/divide by 5
```

### Denomination Algorithm
Greedy algorithm to calculate minimum coins/notes:
```typescript
calculateDenominations(amount: number): Denomination[]
```

**MAD Denominations:**
- Notes: 200, 100, 50, 20
- Coins: 10, 5, 2, 1, 0.5, 0.2, 0.1

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd currencito
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
```
http://localhost:3002
```

### Production Build

```bash
pnpm build
pnpm start
```

## 📖 Usage Guide

### Basic Conversion

1. **Enter amount** in the "From" field
2. **Select currencies** from dropdowns
3. **View result** in the "To" field automatically

### Bidirectional Input

1. Type in **either field** - the other updates automatically
2. Start typing in one field, the other clears
3. Perfect for "how much would I need" calculations

### Swap Currencies

Click the **swap button** (↔) between fields to:
- Exchange the from/to currencies
- Swap the amounts
- Quick reverse calculation

### Denomination Breakdown

When converting **to MAD**:
- Automatic denomination breakdown appears below
- Shows exact banknotes and coins needed
- Displays authentic Moroccan currency images
- Calculates minimum number of denominations

### Dark Mode

- **Automatic**: Follows system preference
- **Manual**: Toggle in browser/system settings
- **Smooth**: Instant theme switching

## 🔧 Configuration

### Exchange Rate API

Located in `lib/api/exchangeRates.ts`:

```typescript
const API_KEY = 'YOUR_API_KEY'; // Free tier available
const BASE_URL = 'https://v6.exchangerate-api.com/v6';
```

Get your free API key at: https://www.exchangerate-api.com/

### Moroccan Currency Rates

Hardcoded in `lib/currency/constants.ts`:

```typescript
export const MOROCCAN_RATES = {
  MAD_TO_RIYAL: 20,
  MAD_TO_FRANC: 100,
} as const;
```

### Supported Currencies

**Moroccan:**
- MAD - Moroccan Dirham (🇲🇦)
- RIYAL - Moroccan Riyal (🇲🇦)
- FRANC - Moroccan Franc (🇲🇦)

**World:**
- USD - US Dollar (🇺🇸)
- EUR - Euro (🇪🇺)
- GBP - British Pound (🇬🇧)
- JPY - Japanese Yen (🇯🇵)
- CAD - Canadian Dollar (🇨🇦)
- AUD - Australian Dollar (🇦🇺)
- CHF - Swiss Franc (🇨🇭)
- CNY - Chinese Yuan (🇨🇳)
- INR - Indian Rupee (🇮🇳)
- MXN - Mexican Peso (🇲🇽)

## 🎯 Component API

### CurrencyConverter

Main converter component with all logic.

**State:**
- Manages amounts (from/to)
- Handles currency selection
- Fetches exchange rates
- Calculates conversions

**Features:**
- Bidirectional input
- Real-time conversion
- Denomination breakdown
- Exchange rate display

### CurrencySelect

Currency dropdown selector.

**Props:**
```typescript
interface CurrencySelectProps {
  value: Currency;
  onChange: (value: Currency) => void;
}
```

**Features:**
- Grouped currencies (Moroccan/World)
- Flag icons
- Currency codes and names
- Dark mode support

### DenominationBreakdown

Visual display of MAD denominations.

**Props:**
```typescript
interface DenominationBreakdownProps {
  denominations: Denomination[];
  total: number;
}
```

**Features:**
- Currency images
- Count display
- Total calculation
- Responsive grid

## 🧪 Type Definitions

### Currency Type
```typescript
type Currency = 
  | 'MAD' | 'RIYAL' | 'FRANC'  // Moroccan
  | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' 
  | 'AUD' | 'CHF' | 'CNY' | 'INR' | 'MXN'; // World
```

### Currency Info
```typescript
interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  isMoroccan: boolean;
}
```

### Denomination
```typescript
interface Denomination {
  value: number;
  count: number;
  type: 'note' | 'coin';
  imageUrl: string;
}
```

## 🎨 Customization

### Adding New Currencies

1. **Add to types** in `lib/currency/types.ts`:
```typescript
type Currency = ... | 'NEW_CURRENCY';
```

2. **Add metadata** in `lib/currency/constants.ts`:
```typescript
NEW_CURRENCY: {
  code: 'NEW',
  name: 'New Currency',
  symbol: 'N$',
  flag: '🏳️',
  isMoroccan: false,
}
```

3. **Add to groups** in `lib/currency/constants.ts`:
```typescript
export const WORLD_CURRENCIES = [..., 
  CURRENCIES.NEW_CURRENCY
];
```

### Styling

**Theme Colors:**
- Edit `tailwind.config.ts` for global theme
- Component styles use Tailwind utilities
- Dark mode variants: `dark:` prefix

**Gradients:**
```typescript
// Light mode
bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50

// Dark mode
dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
```

## 📊 Performance

- **React Query Caching** - Reduces API calls
- **Optimized Re-renders** - Redux selectors
- **Code Splitting** - Next.js automatic splitting
- **Image Optimization** - Next.js Image component (if used)

## 🔒 Security

- No sensitive data stored
- API key can be environment variable
- Client-side only calculations
- No user authentication required

## 🐛 Known Issues

- Exchange rates update every 24 hours on free API tier
- Some currency symbols may not display on all systems
- Denomination images require manual addition

## 🚧 Future Enhancements

- [ ] Historical exchange rate charts
- [ ] Multiple currency comparison
- [ ] Favorite currency pairs
- [ ] Conversion history
- [ ] Offline mode with cached rates
- [ ] PWA support
- [ ] Currency alerts/notifications
- [ ] Export conversion results

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for the Moroccan community**

🇲🇦 Supporting MAD, Riyal, and Franc conversions since 2026
