"use client";

import { useState, useEffect } from 'react';

function Personnel() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Personnel List</h1>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item.nom} {item.prenom}</li>
        ))}
      </ul>
    </div>
  );
}

export default Personnel;
