import React from 'react';
import { WindowSizeDemo } from '../components/WindowSizeDemo';
import { AsyncDemo } from '../components/AsyncDemo';
import { PreviousDemo } from '../components/PreviousDemo';
import { ClickOutsideDemo } from '../components/ClickOutsideDemo';
import { LocalStorageTTLDemo } from '../components/LocalStorageTTLDemo';
import { ClipboardDemo } from '../components/ClipboardDemo';
import './Lab8Page.css';

export default function Lab8Page() {
  return (
    <div className="lab-page">
      <header className="lab-header">
        <h1 className="lab-title">CUSTOM HOOKS</h1>
        <p className="lab-subtitle">Створення власних хуків</p>
      </header>
      <main className="lab-main">
        <WindowSizeDemo />
        <AsyncDemo />
        <PreviousDemo />
        <ClickOutsideDemo />
        <LocalStorageTTLDemo />
        <ClipboardDemo />
      </main>
    </div>
  );
}
