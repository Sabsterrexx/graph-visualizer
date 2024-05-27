// src/App.js
import React from 'react';
import './App.css';
import NetworkGraph from './components/NetworkGraph';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <NetworkGraph />
      <FormComponent/>
    </div>
  );
}

export default App;
