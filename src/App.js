import React from 'react';
import Main from './templates/main';
import persons from './data/personsData.json';

function App() {
  return (
      <Main persons={persons} />
  );
}

export default App;
