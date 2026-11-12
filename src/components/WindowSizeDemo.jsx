import React from 'react'; import { useWindowSize } from '../hooks/useWindowSize';
export function WindowSizeDemo() {
  const { width, height } = useWindowSize();
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">01 / useWindowSize</h2>
      <p className="demo-text">Змініть розмір вікна:</p>
      <div className="demo-stats">
        <div className="stat-box"><h3>Width</h3><p className="stat-number">{width} px</p></div>
        <div className="stat-box"><h3>Height</h3><p className="stat-number">{height} px</p></div>
      </div>
    </div>
  );
}
