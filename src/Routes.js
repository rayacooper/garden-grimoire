import React from 'react';
import {Switch, Route} from 'browser-router';

import About from './Components/About/About';
import Main from './Components/Main/Main';

export default (
    <Switch>
        <Route component={About} path="/about" />
        <Route component={Main} path="/" />
    </Switch>
)