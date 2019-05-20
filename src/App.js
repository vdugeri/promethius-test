import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Countries from './components/Countries.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/regions/:name" component={Countries} />
      </Switch>

    </div>
  );
}

export default App;
