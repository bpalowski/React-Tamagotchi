import React from 'react';
import Header from './Header';
import Stats from './Stats';
import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';
import Moment from 'moment';

function App() {

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Stats} />
      </Switch>
    </div>
  );

}

export default App;
