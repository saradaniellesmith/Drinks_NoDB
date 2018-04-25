import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import Drinks from './components/drinks/Drinks';
import Favdrinks from './components/Favdrinks/Favdrinks';
import Savedrink from './components/Savedrink/Savedrink';
import Home from './components/Home/Home';
import Favs from './components/Favs/Favs';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drinks" component={Drinks} /> 
        <Route path="/favs" component={Favs} />
    </Switch>
);