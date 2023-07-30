import React from 'react';
import './App.css';
import Router from './Components/Router/Router';
import Context from './Context/Context';

function App() {
  return (
    <>
      <Context>
        <Router />
      </Context>
    </>
  );
}

export default App;
