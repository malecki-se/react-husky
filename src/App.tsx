import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [first] = useState(1);
  const getVal = useMemo(() => {
    return first
  }, [first]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {getVal}
        </a>
      </header>
    </div>
  );
}

export default App;
