import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/main';
import Generico from './pages/posts/generico';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/generico'exact  component={Generico}/>
            </Switch>
        </BrowserRouter>
    );
}