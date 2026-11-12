import React, { useState, useEffect } from 'react'; import { useLocalStorageState } from '../hooks/useLocalStorageState';
export function LocalStorageTTLDemo() {
  const [value, setValue] = useLocalStorageState('ttl-demo', 'Початкове', 5000);
  const [timeLeft, setTimeLeft] = useState(5); const [input, setInput] = useState(value);
  useEffect(() => {
    setTimeLeft(5); const int = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000); return () => clearInterval(int);
  }, [value]);
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">05 / useLocalStorageState (TTL 5s)</h2>
      <p className="demo-text">Значення: <b>{value}</b></p>
      <p className="demo-text" style={{ color: 'var(--color-danger)' }}>Залишилось: {timeLeft} с</p>
      <div className="lab-controls">
        <input className="lab-input" value={input} onChange={e => setInput(e.target.value)} />
        <button className="btn" onClick={() => setValue(input)}>Зберегти</button>
      </div>
    </div>
  );
}
