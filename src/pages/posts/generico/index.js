import React from 'react';
import './style.css'

import { useHistory } from 'react-router-dom'
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import ComentariosComponent from '../../../component/comentarios';
import CardPostComponent from '../../../component/card-post';

export default function Generico() {

    const history = useHistory();

    const comentarios = [
        { nome: "@leando22", comentario: "Massa." },
        { nome: "@fancisco25", comentario: "Muito legal o post." },
        { nome: "@mariaferreira", comentario: "Muito bom, continue assim 👈🏼" },
        { nome: "@fredi7845", comentario: "Queria um post sobre copy" },
        { nome: "@linedigitalmarketing", comentario: "@fredi7845, está saindo do forno um post sobre Copywriting, fique de olho nos nossos posts." }
    ]

    const post = {
        titulo: `O QUE É O MARKETING DE AFILIADOS ?`,
        topicos: [
            {
                conteudo: `O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de um empreendedor ou empresa e recebe comissões por vendas que você realiza`,
                _id: "1a1a1a"
            }, {
                titulo: `Como me afiliar a algum produto?`,
                conteudo: `Existem sites que oferecem esta função de intermediar o seu contato com o produtor, são eles: <a target='_blank' rel="noopener noreferrer" href='https://www.hotmart.com/pt-BR'>Hotmart</a>, <a target='_blank' rel="noopener noreferrer" href='https://monetizze.com.br'>Monetizze</a> e <a target='_blank' rel="noopener noreferrer" href='https://www.eduzz.com/'>Eduzz</a>, esses são os 3 principais e 100% confiáveis. Nesses sites, você encontra muitos produtos, assim que escolher um para se afiliar, você terá um link de divulgação que servirá de “identidade” para o sistema saber quem está vendendo o produto. `
            }, {
                conteudo: `<strong>Resumindo</strong>, quando alguém comprar o produto a partir do seu link de afiliado, você receberá a sua comissão na conta do site.`
            }
        ],
        propagandas: [
            `Aprenda do básico ao avançado do marketing digital! Treinamento completo que te ensina como ter uma renda trabalhando <strong>somente por </strong> 📱 . <a href='https://app.monetizze.com.br/r/ALE9322522' target='_blank' rel="noopener noreferrer">Clique aqui </a>👈🏼  e saiba mais.`
        ]
    }

    return (

        <div className="posts">

            <NavBarComponent />

            <main className="conteudo">
                <section>
                    <article>
                        <div className="conteudo-topo">
                            <h1 className="titulo">{post.titulo}</h1>
                            <div className="fundo img-fluid rounded" alt="fundo"></div>
                        </div>
                    </article>

                    <article className='topicos'>
                        {
                            post.topicos.map(topico =>
                                <article key={topico._id}>
                                    {
                                        topico.titulo ? <h3>{topico.titulo}</h3> : ""
                                    }
                                    {converterTxt_p(topico.conteudo)}
                                </article>
                            )
                        }
                    </article>

                    <br />
                    <aside>
                        {post.propagandas.map((propaganda, i) => <>{converterTxt_p(propaganda)}</>)}
                    </aside>
                </section>

                <section className="container-palavra-chave">
                    <ul>
                        <li className='botao' onClick={() => history.push('/posts?palavra-chave')}>
                            <p className="palavra-chave col">marketing de afiliados</p>
                        </li>
                        <li className='botao' onClick={() => history.push('/posts?palavra-chave')}>
                            <p className="palavra-chave col">AFILIADO</p>
                        </li>
                        <li className='botao' onClick={() => history.push('/posts?palavra-chave')}>
                            <p className="palavra-chave col">Hotmart</p>
                        </li>
                        <li className='botao' onClick={() => history.push('/posts?palavra-chave')}>
                            <p className="palavra-chave col">Monetizze</p>
                        </li>
                        <li className='botao' onClick={() => history.push('/posts?palavra-chave')}>
                            <p className="palavra-chave col">marketing digital</p>
                        </li>
                    </ul>
                </section>

                <PostRelacionados></PostRelacionados>

                <section>
                    <ComentariosComponent comentarios={comentarios} />
                </section>
            </main>

            <RodapeComponent />
        </div>
    );

    function converterTxt_p(texto) {
        return <p dangerouslySetInnerHTML={{ __html: texto }}></p>;
    }

}

function PostRelacionados() {

    return (
        <section>
            <h4 className="titulo-relacionados">Posts relacionados</h4>

            <div className="row relacionados">
                <CardPostComponent
                    titulo={"Mas O QUE É O MARKETING DE AFILIADOS?"}
                    texto={"O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de..."}
                    link={"o-que-e-o-marketing-de-afiliados"} 
                    grayscale={true}
                    />


                <CardPostComponent
                    titulo={"Mas O QUE É O MARKETING DE AFILIADOS?"}
                    texto={"O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de..."}
                    link={"o-que-e-o-marketing-de-afiliados"} />
            </div>
        </section>
    )

}