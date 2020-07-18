import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/main';
import Post from './pages/posts/post';
import PagNaoEncontrada from './pages/pagina-nao-encontrada';
import ListaPosts from './pages/posts/lista-posts';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/posts/*' component={Post}/>
                <Route path='/posts'exact  component={ListaPosts}/>
                <Route path='*'exact  component={PagNaoEncontrada}/>
            </Switch>
        </BrowserRouter>
    );
}