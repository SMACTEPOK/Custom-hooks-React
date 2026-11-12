import React, { useState } from 'react'; import { useAsync } from '../hooks/useAsync';
const fakeApiCall = (fail) => new Promise((res, rej) => setTimeout(() => fail ? rej(new Error('500')) : res({ message: 'Успіх', id: Math.random() }), 1500));
export function AsyncDemo() {
  const [fail, setFail] = useState(false);
  const { status, data, error, execute, reset } = useAsync(() => fakeApiCall(fail));
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">02 / useAsync</h2>
      <div className="lab-controls">
        <label className="checkbox-label"><input type="checkbox" checked={fail} onChange={e => setFail(e.target.checked)} /> Помилка</label>
        <button className="btn" onClick={execute} disabled={status === 'pending'}>Запустити</button>
        <button className="btn" onClick={reset}>Скинути</button>
      </div>
      <div className={`status-msg ${status === 'error' ? 'status-msg--error' : status === 'success' ? 'status-msg--success' : ''}`}>
        Статус: <b>{status}</b> {data && ` | ID: ${data.id.toFixed(4)}`} {error && ` | ${error}`}
      </div>
    </div>
  );
}
