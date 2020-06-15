import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './Home'
import Play from './Play'
import { Layout } from './Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
      </Switch>
    </Layout>
  );
}

export default App;
