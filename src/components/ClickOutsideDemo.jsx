import React, { useState, useRef } from 'react'; import { useOnClickOutside } from '../hooks/useOnClickOutside';
export function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false); const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">04 / useOnClickOutside</h2>
      <p className="demo-text">Клікніть поза меню:</p>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Закрити' : 'Відкрити'}</button>
        {isOpen && <div ref={ref} className="dropdown-menu"><ul><li>Пункт 1</li><li>Пункт 2</li></ul></div>}
      </div>
    </div>
  );
}
