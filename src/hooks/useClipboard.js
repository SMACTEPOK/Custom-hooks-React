import { useState } from 'react';
export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const copy = async (text) => {
    if (!navigator.clipboard) { setError('Не підтримується'); return; }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true); setError(null); setTimeout(() => setCopied(false), 2000);
    } catch { setError('Помилка копіювання'); }
  };
  const paste = async () => {
    if (!navigator.clipboard) { setError('Не підтримується'); return null; }
    try { const text = await navigator.clipboard.readText(); setError(null); return text; }
    catch { setError('Помилка читання'); return null; }
  };
  return { copy, paste, copied, error };
}
