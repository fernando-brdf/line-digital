import React from 'react';
import './style.css'
import { MdAddShoppingCart } from 'react-icons/md'
import { RiLoginBoxLine } from 'react-icons/ri'

export default function NavBarComponent() {

    return (
        <div className="nav-comp">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="#something" className="navbar-brand">
                    <img src="/img/logo-bar.png" /* width="30" height="30" */
                        className="d-inline-block align-top"
                        alt="Line digital marketing" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-2">
                            <a className="nav-link botao" href="#something"
                                data-toggle="modal"
                                data-target="#login-modal">
                                Login
                                <RiLoginBoxLine className="ml-2" />
                            </a>
                        </li>
                        <li className="nav-item botao">
                            <a href="#something" className="nav-link" >
                                Cursos
                                <MdAddShoppingCart className="ml-2" />
                            </a>
                        </li>
                    </ul>
                </div>


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
    );
}