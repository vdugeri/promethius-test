import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Countries } from './components/Countries.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/regions/:name" component={Countries} />
      </Switch>

    </div>
  );
}

export default App;
