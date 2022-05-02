import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';

const App = () => (
  <div className="App">
    <Task1 />
    <Task2 />
    <Task3 />
  </div>
);

export default App;
