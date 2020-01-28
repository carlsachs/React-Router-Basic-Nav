import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}>
        <Home />
    </Route>
    <Route exact path="/about" component={About}>
        <About />
    </Route>
    <Route exact path="/contact" component={Contact}>
        <Contact />
    </Route>
  </div>
);

export default App;
