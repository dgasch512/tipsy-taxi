import React from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import { stories } from './stories';


function App() {
  return (
    <div className="App">
      <div>
        <Blog stories={ stories }/>
      </div>
    </div>
  );
}

export default App;
