import React from 'react';
import { Calculator } from './features/counter/Calculator';
import { InfoPanel } from './features/counter/InfoPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="app-title">Creatinine Clearance Calculator</div>
        <InfoPanel />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
