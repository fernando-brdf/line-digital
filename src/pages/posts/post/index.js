import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'
import './style.css'

import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import CardPostComponent from '../../../component/card-post';

import api from '../../../services/api'
import Helper from '../../../helper';
import LoadingComponent from '../../../component/loading-component';

export default function Post() {

    const history = useHistory();

    const [topicos, setTopicos] = useState([]);
    const [propagandas, setPropagandas] = useState([]);
    const [titulo, setTitulo] = useState("");

    const [tituloTag, setTituloTag] = useState("");
    const [descricaoTag, setDescricaoTag] = useState("");
    const [palavraChaveTag, setPalavraChaveTag] = useState("");

    const [postsRelacionados, setPostsRelacionados] = useState("");
    const [palavrasChaveState, setPalavrasChaveState] = useState("");

    const [loading, setLoading] = useState(<LoadingComponent />);


    useEffect(() => {
        buscarPost();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Seo />
            {loading}

            <div className="posts">

                <NavBarComponent />

                <main className="conteudo">

                    <section>
                        <article>
                            <div className="conteudo-topo">
                                <h1 className="titulo">{titulo}</h1>
                                <div className="fundo img-fluid rounded" alt="fundo"></div>
                            </div>
                        </article>

                        <article className='topicos'>
                            {
                                topicos.map(topico =>
                                    <article key={topico._id}>
                                        {
                                            topico.titulo ? <h3>{topico.titulo}</h3> : ""
                                        }
                                        {converterTxt_p(topico.texto)}
                                    </article>
                                )
                            }
                        </article>
                        <br />
                        <aside>
                            {propagandas.map((propaganda) => <>{converterTxt_p(propaganda)}</>)}
                        </aside>
                    </section>

                    <section className="container-palavra-chave">
                        {palavrasChaveState}
                    </section>

                    {postsRelacionados}

                    <section>
                        {/*{comentarios}*/}
                    </section>
                </main>

                <RodapeComponent />
            </div>
        </>
    );

    function buscarPost() {
        api.get("posts/" + Helper.rota()).then((result) => {
            const post = result.data.doc;
            if ((result.data.length || post.length) === 0) throw new Error()

            SeoTags(post);

            setTitulo(post.titulo);
            setTopicos(post.conteudos);
            setPropagandas(post.propagandas);
            setPostsRelacionados(<PostRelacionados posts={post.relacionados}>{() => { buscarPost() }}</PostRelacionados>);
            setPalavrasChaveState(<PalavrasChave history={history} palavrachave={post.palavras_chave} />)

            setLoading("");
        }).catch(() => {
            history.push('/pagina-nao-encontrado')
        });
    }

    function converterTxt_p(texto) {
        return <p dangerouslySetInnerHTML={{ __html: texto }}></p>;
    }

    function SeoTags(post) {
        setTituloTag(String(post.titulo).replace('?', '') + " | Line Digital Marketing");
        setDescricaoTag(post.conteudos[0].texto);

        let palavraChaveTxt = "";
        post.palavras_chave.forEach((p) => {
            palavraChaveTxt = palavraChaveTxt + p + ", "
        })
        setPalavraChaveTag(palavraChaveTxt)
    }

    function Seo() {

        const url_atual = window.location.href;

        return (

            <Helmet
                defaultTitle="Line Digital Marketing"
                title={tituloTag} >

                <meta name="author" content="" />
                <meta name="description" content={descricaoTag} />

                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={palavraChaveTag} />

                <link rel="canonical" href={url_atual} />
                <meta property="og:type" content="article" />
                <meta property="article:section" content="Tudo Sobre Marketing" />
                <meta property="og:title" content={tituloTag} />
                <meta property="og:description" content={descricaoTag} />
                <meta property="og:url" content={url_atual} />
                <meta property="og:site_name" content="Line Marketing Digital" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={descricaoTag} />
                <meta name="twitter:title" content={tituloTag} />
            </Helmet>
        )
    }
}


function PostRelacionados(props) {

    const funcaoClick = props.children;
    const { posts } = props;

    if (!posts) return "";

    try {
        return (
            <section>
                <h4 className="titulo-relacionados">Posts relacionados</h4>

                <div className="row relacionados">
                    <CardPostComponent
                        titulo={posts[0].titulo}
                        texto={Helper.removerStrong(posts[0].conteudos[0].texto)}
                        link={posts[0].link}
                        grayscale={true}
                        funcaoClick={funcaoClick}
                    />

                    <CardPostComponent
                        titulo={posts[1].titulo}
                        texto={Helper.removerStrong(posts[1].conteudos[0].texto)}
                        link={posts[1].link}
                        funcaoClick={funcaoClick}
                    />
                </div>
            </section>
        )
    } catch (e) {
        return "";
    }

}

function PalavrasChave(props) {
    const { history, palavrachave } = props;

    return (
        <ul>
            {palavrachave.map((item, index) => {
                return (
                    <li key={index} className='botao' onClick={() => history.push('/posts?buscar=' + item)}>
                        <p className="palavra-chave col">{item}</p>
                    </li>
                )
            })}

        </ul>
    )
}