import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

export const TagCloud = () => {
  const [tags, setTags] = useState([
    'Workout Gear',
    'Digital Art',
    'Replacement',
    'Aria',
    'Fitness',
  ]);
  const [newTag, setNewTag] = useState('');

  const listTags = tags.map((tag, index) => <li key={index}>{tag}</li>);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  };

  const handleRemoveFirstTag = () => {
    const updatedTags = [...tags];
    updatedTags.shift();
    setTags(updatedTags);
  };

  return (
    <>
      <div>{listTags}</div>
      <button onClick={handleRemoveFirstTag}>Odstranit první tag</button>
      <form onSubmit={handleFormSubmit}>
        <label>
          Zadej nový tag:
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </label>
        <button type="submit">Přidat do seznamu</button>
      </form>
    </>
  );
};
