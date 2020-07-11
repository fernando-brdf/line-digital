import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import { MdAddShoppingCart } from 'react-icons/md'
import { RiLoginBoxLine } from 'react-icons/ri'
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineFile } from 'react-icons/ai'
import Helper from '../../helper';

export default function NavBarComponent() {

    const history = useHistory();

    let botaoHomePages;
    if (window.location.pathname !== '/') {
        botaoHomePages =
            <a className="nav-link" href={Helper.href()} onClick={()=>{redirecionar('/')}}>
                <TiHomeOutline className="mr-2 home-icon" />
                Home
            </a>
    } else {
        botaoHomePages =
            <a className="nav-link" href={Helper.href()} onClick={()=>{redirecionar('/posts')}}>
                <AiOutlineFile className="mr-2 home-icon" />
                Posts
            </a>
    }

    return (
        <header className="nav-comp">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href={Helper.href()} className="navbar-brand">
                    <img src="/img/logo-bar.png" /* width="30" height="30" */
                        className="d-inline-block align-top"
                        alt="Line digital marketing" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-2 botao botao-animacao">
                            {botaoHomePages}
                        </li>
                        <li className="nav-item mr-2 botao botao-animacao">

                        </li>
                        <li className="nav-item mr-2 botao botao-animacao">
                            <a className="nav-link" href={Helper.href()}
                                data-toggle="modal"
                                data-target="#login-modal">
                                <RiLoginBoxLine className="mr-2" />
                                Login
                            </a>
                        </li>
                        <li className="nav-item botao botao-animacao">
                            <a href={Helper.href()} className="nav-link" >
                                <MdAddShoppingCart className="mr-2" />
                                Cursos
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body rounded">
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
                                        <label className="form-check-label" htmlFor="exampleCheck1">Salvar login</label>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>


            </nav>
        </header>
    );

    function redirecionar(caminho){
        history.push(caminho)
    }
}