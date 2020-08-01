import React from 'react';
import Navigation from './components/Navigation';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Particles from 'react-particles-js';
import { particlesOptions } from './components/random/Particles';
import './App.css';
import Scroll from './components/random/Scroll';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Scroll>
          <Router />  
        </Scroll>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
