// Simple localStorage cache utility for module detail data
// Usage: cache.get(key), cache.set(key, value), cache.clear(key)

const CACHE_PREFIX = 'ecg_module_detail_';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export const cache = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;
      const entry: CacheEntry<T> = JSON.parse(raw);
      if (Date.now() - entry.timestamp > CACHE_TTL) {
        localStorage.removeItem(CACHE_PREFIX + key);
        return null;
      }
      return entry.data;
    } catch {
      return null;
    }
  },
  set<T>(key: string, data: T) {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry));
  },
  clear(key: string) {
    localStorage.removeItem(CACHE_PREFIX + key);
  }
};
