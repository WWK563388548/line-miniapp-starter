import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ResetStyle } from './globalStyles'

import Home from 'pages/Home';
import Settings from 'pages/Settings';
import Display from 'pages/Display';
import NotFound from 'pages/NotFound';

// import * as styles from './app.scss';

const App = (props: any) => {
  return (
    <div>
      <ResetStyle />
      <Switch>
        <Route path='/settings' component={ Settings } />
        <Route path='/display' component={ Display } />
        <Route exact path='/' component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  )
}

export default App;