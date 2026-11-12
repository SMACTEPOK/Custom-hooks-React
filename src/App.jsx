import React from 'react';
import Lab8Page from './pages/Lab8Page';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__brand-mark">✱</span>
          CRAFTMARKET
          <span className="app__brand-tag">LAB 8</span>
        </div>
      </header>
      <main className="app__main">
        <Lab8Page />
      </main>
      <footer className="app__footer">
        <p>© 2026 CRAFTMARKET · Лабораторна робота 8 · Custom Hooks</p>
      </footer>
    </div>
  );
}
export default App;
