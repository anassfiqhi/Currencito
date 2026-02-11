import { openDB, IDBPDatabase } from 'idb';
import type { ExchangeRates } from '@/lib/currency/types';

const DB_NAME = 'currencito-db';
const STORE_NAME = 'rates';

let dbInstance: IDBPDatabase | null = null;

export async function getDB() {
    if (dbInstance) return dbInstance;
    dbInstance = await openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        },
    });
    return dbInstance;
}

export async function saveRates(rates: ExchangeRates): Promise<void> {
    const db = await getDB();
    // We store rates with a fixed ID 'latest' since we only care about the current rates
    await db.put(STORE_NAME, { id: 'latest', ...rates, timestamp: Date.now() });
}

export async function getCachedRates(): Promise<ExchangeRates | null> {
    const db = await getDB();
    const data = await db.get(STORE_NAME, 'latest');
    if (!data) return null;

    // Remove the internal ID and timestamp before returning if strictly typed
    // For now, we return the data which encompasses ExchangeRates structure
    const { id, timestamp, ...rates } = data;
    return rates as ExchangeRates;
}
