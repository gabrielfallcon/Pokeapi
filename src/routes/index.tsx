import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProfilePokemon from '../pages/ProfilePokemon';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile/:indice+" component={ProfilePokemon}/>
    </Switch>
  </BrowserRouter>
);

export default Routes