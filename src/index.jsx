import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { TagCloud } from './components/TagClouds';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Tag Clouds</h1>
      </header>
      <main>
        <TagCloud />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
