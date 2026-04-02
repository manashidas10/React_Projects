import React from 'react';
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Day 3 Assignment</h1>
      <Card />
      <ThemeButton />
    </div>
  );
}

export default App;
