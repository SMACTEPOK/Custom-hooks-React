import { useState } from 'react';
export function useLocalStorageState(key, initialValue, ttlMs = 10000) {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return initialValue;
      const parsed = JSON.parse(item);
      if (parsed.expiry && Date.now() > parsed.expiry) {
        localStorage.removeItem(key); return initialValue;
      }
      return parsed.value;
    } catch { return initialValue; }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      localStorage.setItem(key, JSON.stringify({ value: valueToStore, expiry: Date.now() + ttlMs }));
    } catch (e) { console.error(e); }
  };
  return [state, setValue];
}
