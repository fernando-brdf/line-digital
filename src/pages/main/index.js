import React from 'react';
import Helmet from 'react-helmet';

import NavBarComponent from '../../component/navbar';
import RodapeComponent from '../../component/rodape';

import './style.css';

export default function Main() {

    let descricaoTag = "O mais novo site de marketing digital para você! Posts que irão te ajudar a sair do zero e abrir novos horizontes em marketing digital. Line Digital Marketing"
    let tituloTag = "Line Digital Marketing | Marketing Digital do básico ao avançado.";
    return (

        <>
            <Helmet>
                <title>{tituloTag}</title>
                <meta name="description" content={descricaoTag} />

                <meta name="robots" content="index" />
                <meta name="keywords" content={tituloTag} />
                <link rel="canonical" href="https://linedigitalmarketing.com/" />

                <meta property="article:section" content="Tudo Sobre Marketing" />
                <meta property="og:title" content={tituloTag} />
                <meta property="og:description" content={descricaoTag} />
                <meta property="og:url" content="https://linedigitalmarketing.com/" />
                <meta property="og:site_name" content="Line Marketing Digital" />
                <meta property="og:image" content="/img/logo.png" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="/img/logo.png" />
                <meta name="twitter:description" content={descricaoTag} />
                <meta name="twitter:title" content={tituloTag} />
                <meta name="twitter:site" content="https://linedigitalmarketing.com/" />
            </Helmet>
            <div className="main">

                <NavBarComponent />

                <div className="conteudo">
                    <h3>O que é o marketing digital?</h3>
                    <p>Marketing Digital é fazer uso das mídias digitais para promover produtos ou marcas.</p>
                    <p>Existem muitas formas de trabalhar com o marketing, como ser afiliado a um produto, ser produtor, coprodutor, entre outras. Quer saber mais sobre esse mercado que cresce a cada dia? Nós da Line Digital ajudaremos você!</p>

                    <h3>Qual é o diferencial da Line Digital Marketing?</h3>
                    <p>Disponibilizamos conteúdo do básico ao avançado, tanto para quem quer conhecer mais sobre o mercado, quanto para quem deseja postar conteúdos de valor nas redes sociais. E você poderá controlar o seu progresso nas postagens.</p>

                    <h3>Qual é a importância de postar conteúdo?</h3>
                    <p>Postar conteúdos de valor nas redes sociais faz com que você tenha mais relevância no mercado digital, e, dessa forma venderá mais os seus produtos relacionados ao marketing, porque o seu público confiará mais na sua palavra.</p>

                </div>
                <RodapeComponent />
            </div>

        </>
    );
}
