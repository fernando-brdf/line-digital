import RodapeComponent from "../../component/rodape";

import React from 'react';
import './style.css';
import Helper from '../../helper'

export default function PagNaoEncontrada() {

    return (
        <div className="pag-n">
            <div className="nav-comp">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a href={Helper.href()} className="navbar-brand">
                        <img src="/img/logo-bar.png" /* width="30" height="30" */
                            className="d-inline-block align-top"
                            alt="Line digital marketing" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">

                                <div className="modal-body">
                                    {/*<h3 className="text-center login-titulo col-8">LOGIN</h3>*/}
                                    <div className="img">
                                        <img src="/img/logo-bar.png"
                                            alt="Line digital marketing" />
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                        </div>
                                        <button type="button" className="btn btn-primary btn-sm btn-block">Entrar</button>
                                        <div className="form-group form-check text-center">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Clique em mim</label>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="conteudo">
                <h1>Erro 404 - Página não encontrada</h1>
                <p>Ir para <a href="/">Home</a></p>
            </div>
            <RodapeComponent reduzido="true" />
            
        </div>
    );
}