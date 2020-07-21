import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home.jsx';
import Settings from 'pages/Settings.jsx';
import Display from 'pages/Display.jsx';
import NotFound from 'pages/NotFound.jsx';

import './app.scss';


const App = (props) => {
  return (
    <div className='app'>
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