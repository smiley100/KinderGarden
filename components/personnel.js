import path from 'path';
import fs from 'fs/promises';
import React from 'react';

async function Personnel() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  if (!Array.isArray(data)) {
    return <div>Erreur: Les données ne sont pas sous la forme attendue.</div>;
  }

  return (
    <div>
      <h1>Notre cher personnel</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.prenom} {item.nom}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personnel;
