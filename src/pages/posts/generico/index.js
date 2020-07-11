import React from 'react';
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import './style.css'
import ComentariosComponent from '../../../component/comentarios';

export default function Generico() {

    const comentarios = [
        { nome: "Fernando Jorge", comentario: "Muito bom, continue assim 👈🏼" },
        { nome: "Joao Jorge", comentario: "Você pode setar o a propriedade length para truncar um array a qualquer momento. Quando você extende um array mudando sua propriedade length, o numero de elementos atuais não é incrementado; por exemplo, se você setar o tamanho para 3 quando ele é atualmente 2, o array continua somente com 2 elementos. Assim, a propriedade length não diz nada sobre o tamanho de valores definidos no array" },
        { nome: "Maria Jorge", comentario: "Muito bom, continue assim 👈🏼" },
        { nome: "Fredi Jorge", comentario: "Você pode setar o a propriedade length para truncar um array a qualquer momento. Quando você extende um array mudando sua propriedade length, o numero de elementos atuais não é incrementado; por exemplo, se você " },
        { nome: "Joelma Jorge", comentario: "Muito bom, continue assim 👈🏼" }
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
                <div className="card botao col-sm mr-2 botao-foco shadow-lg">
                    <img className="card-img-top" src="https://picsum.photos/286/180?grayscale" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">O QUE É O MARKETING DE AFILIADOS?</h5>
                        <p className="card-text">O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...</p>
                    </div>
                </div>

                <div className="card botao col-sm ml-2 botao-foco shadow-lg">
                    <img className="card-img-top" src="https://picsum.photos/286/180" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">O QUE É O MARKETING DE AFILIADOS?</h5>
                        <p className="card-text">O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...</p>
                    </div>
                </div>
            </div>
        </section>
    )

}