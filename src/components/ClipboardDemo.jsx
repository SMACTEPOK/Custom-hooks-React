import React, { useState } from 'react'; import { useClipboard } from '../hooks/useClipboard';
export function ClipboardDemo() {
  const { copy, paste, copied, error } = useClipboard(); const [text, setText] = useState(''); const [pasted, setPasted] = useState('');
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">ІНДИВІДУАЛЬНЕ / useClipboard</h2>
      <div className="lab-controls">
        <input type="text" className="lab-input" placeholder="Текст..." value={text} onChange={e => setText(e.target.value)} />
        <button className="btn" onClick={() => copy(text)}>{copied ? 'Скопійовано!' : 'Копіювати'}</button>
      </div>
      <div className="lab-controls">
        <button className="btn" onClick={async () => { const res = await paste(); if (res) setPasted(res); }}>Вставити</button>
        <span className="demo-text">Вставлено: {pasted}</span>
      </div>
      {error && <div className="status-msg status-msg--error">{error}</div>}
    </div>
  );
}
