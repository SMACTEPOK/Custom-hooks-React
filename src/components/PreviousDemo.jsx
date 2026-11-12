import React, { useState } from 'react'; import { usePrevious } from '../hooks/usePrevious';
export function PreviousDemo() {
  const [count, setCount] = useState(0); const prev = usePrevious(count);
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">03 / usePrevious</h2>
      <div className="demo-stats">
        <div className="stat-box"><h3>Поточне</h3><p className="stat-number">{count}</p></div>
        <div className="stat-box"><h3>Попереднє</h3><p className="stat-number" style={{ color: 'var(--color-muted)' }}>{prev !== undefined ? prev : '—'}</p></div>
      </div>
      <button className="btn" onClick={() => setCount(c => c + 1)} style={{ marginTop: '20px' }}>Збільшити</button>
    </div>
  );
}
