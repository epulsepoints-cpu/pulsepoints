// Simple localStorage cache utility for module detail data
// Usage: cache.get(key), cache.set(key, value), cache.clear(key)
const CACHE_PREFIX = 'ecg_module_detail_';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms
export const cache = {
    get(key) {
        try {
            const raw = localStorage.getItem(CACHE_PREFIX + key);
            if (!raw)
                return null;
            const entry = JSON.parse(raw);
            if (Date.now() - entry.timestamp > CACHE_TTL) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return null;
            }
            return entry.data;
        }
        catch {
            return null;
        }
    },
    set(key, data) {
        const entry = { data, timestamp: Date.now() };
        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry));
    },
    clear(key) {
        localStorage.removeItem(CACHE_PREFIX + key);
    }
};
