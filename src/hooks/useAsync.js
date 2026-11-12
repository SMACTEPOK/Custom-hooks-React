import { useState, useCallback } from 'react';
export function useAsync(asyncFunction) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const execute = useCallback(async (...args) => {
    setStatus('pending'); setData(null); setError(null);
    try {
      const response = await asyncFunction(...args);
      setData(response); setStatus('success'); return response;
    } catch (err) {
      setError(err.message || 'Помилка'); setStatus('error'); throw err;
    }
  }, [asyncFunction]);
  const reset = useCallback(() => { setStatus('idle'); setData(null); setError(null); }, []);
  return { status, data, error, execute, reset };
}
