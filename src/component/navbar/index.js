import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import { MdAddShoppingCart } from 'react-icons/md'
/* import { RiLoginBoxLine } from 'react-icons/ri' */
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineFile } from 'react-icons/ai'
import Helper from '../../helper';

export default function NavBarComponent() {

    const history = useHistory();

    let botaoHomePages, botaoPosts;
    if (window.location.pathname !== '/')
        botaoHomePages = (
            <li className="nav-item mr-2 botao botao-animacao">
                <a className="nav-link" href={Helper.href()} onClick={() => { redirecionar('/') }}>
                    <TiHomeOutline className="mr-2 home-icon" />
                Home
                </a>
            </li>
        )
    if (window.location.pathname !== '/posts')
        botaoPosts = (
            <li className="nav-item mr-2 botao botao-animacao">
                <a className="nav-link" href={Helper.href()}
                    onClick={() => { redirecionar('/posts') }}>
                    <AiOutlineFile className="mr-2 home-icon" />
                Posts
                </a>
            </li>
        )

    return (
        <>
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

                            {botaoHomePages}

                            {botaoPosts}

                            {/* <li className="nav-item mr-2 botao botao-animacao">
                                <a className="nav-link" href={Helper.href()}
                                    data-toggle="modal"
                                    data-target="#login-modal">
                                    <RiLoginBoxLine className="mr-2" />
                                    Login
                                </a>
                            </li> */}
                            <li className="nav-item botao botao-animacao">
                                <a href={Helper.href()} className="nav-link"
                                    data-toggle="modal"
                                    data-target="#ModalCursos">
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
            <ModalCursos />
        </>
    );

    function redirecionar(caminho) {
        history.push(caminho)
    }
}

function ModalCursos() {

    return (
        <div className="modal fade cursos-modal" id="ModalCursos" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCursos" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="TituloModalCursos">Os melhores cursos de Marketing Digital aqui!!!</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <br />
                        <h4 className="text-center"><span role="img" aria-label='emoji'>🤑</span> Fórmula Enriquecendo Online</h4>
                        <br />
                        <p className="mb-2">Aprenda do básico ao avançado do marketing digital! Treinamento completo que te ensina como ter uma renda trabalhando <strong>somente por </strong> 📱.</p>
                        <p className="text-center"><span role="img" aria-label='emoji'>👉</span> <a href='https://p.eduzz.com/401672?utm_source=cursos&a=60139752' target='_blank' rel='noopener noreferrer'>Clique aqui </a> e saiba mais.</p>
                        <p className="text-center"><span role="img" aria-label='emoji'>💰</span> <a href='https://sun.eduzz.com/401672?utm_source=cursos&a=60139752' target='_blank' rel='noopener noreferrer'>Adquira o seu aqui!</a> 💰</p>
                        <hr></hr>
                        <br />
                        <h4 className="text-center"><span role="img" aria-label='emoji'>😵</span> Fórmula Desperte Milionário</h4>
                        <br />
                        <p>Treinamento de Marketing Digital e vendas online para afiliados iniciantes e avançados: o <strong>FDM</strong> conta com mais de <span role="img" aria-label='emoji'>😍</span><strong>100 aulas práticas</strong><span role="img" aria-label='emoji'>😍</span> divididas em módulos em um <strong>PASSO A PASSO</strong> que tem como objetivo ensinar pessoas comuns a iniciar no mercado digital.
                            <br />Principais conteúdos:
                            <ul>
                                <li>Como desenvolver uma mentalidade empreendedora.</li>
                                <li>Como se cadastrar nas plataformas de venda.</li>
                                <li>Como gerar tráfego nas principais redes sociais e conseguir clientes.</li>
                                <li>Como montar uma estrutura básica de vendas nas redes sociais.</li>
                                <li> Como criar um canal e posicionar bem os seus vídeos no YouTube.</li>
                                <li> Como chamar a atenção do seu público no YouTube.</li>
                                <li> Como desenvolver a persuasão para conversar com os seus clientes.</li>
                            </ul> Além de conteúdos avançados:
                                <ul>
                                <li>Como criar campanhas profissionais usando Facebook Ads.</li>
                                <li>Como fazer campanhas de e-mail Marketing.</li>
                            </ul>.Temos também grupos <strong>VIP</strong> de <strong>suporte</strong> no TELEGRAM e aulas ao vivo durante a semana para tirar dúvidas e ajudar alunos e afiliados!
                        </p>
                        <p className="text-center"><span role="img" aria-label='emoji'>👉</span> <a href='https://p.eduzz.com/383261?utm_source=cursos&a=60139752' target='_blank' rel='noopener noreferrer'>Clique aqui </a> e saiba mais.</p>
                        <p className="text-center"><span role="img" aria-label='emoji'>💰</span> <a href='https://sun.eduzz.com/383261?utm_source=cursos&a=60139752' target='_blank' rel='noopener noreferrer'>Adquira o seu aqui!</a> <span role="img" aria-label='emoji'>💰</span></p>
                        <br />
                    </div>
                </div>
            </div>
        </div>)
}