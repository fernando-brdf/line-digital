import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/main';
import Generico from './pages/posts/generico';
import PagNaoEncontrada from './pages/pagina-nao-encontrada';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/posts/o-que-e-o-marketing-de-afiliados' component={Generico}/>
                <Route path='/posts'exact  component={Generico}/>
                <Route path='*'exact  component={PagNaoEncontrada}/>
            </Switch>
        </BrowserRouter>
    );
}