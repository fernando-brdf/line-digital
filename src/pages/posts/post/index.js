import React, { useState, useEffect } from 'react';
import './style.css'

import { useHistory } from 'react-router-dom'
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
/* import ComentariosComponent from '../../../component/comentarios';
 */import CardPostComponent from '../../../component/card-post';
import api from '../../../services/api'
import Helper from '../../../helper';

export default function Post() {

    const history = useHistory();

    const [topicos, setTopicos] = useState([]);
    const [propagandas, setPropagandas] = useState([]);
    const [titulo, setTitulo] = useState("");

    /*     const [comentarios, setcomentarios] = useState("");*/
    const [postsRelacionados, setPostsRelacionados] = useState("");
    const [palavrasChaveState, setPalavrasChaveState] = useState("");


    useEffect(() => {
        buscarPost();
        // eslint-disable-next-line
    }, []);

    return (
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
    );
    function buscarPost() {
        api.get("posts/" + Helper.rota()).then((result) => {
            const post = result.data.doc;
            if ((result.data.length || post.length) === 0) throw new Error()

            setTitulo(post.titulo);
            setTopicos(post.conteudos);
            setPropagandas(post.propagandas);
            /*setcomentarios(<ComentariosComponent comentarios={post.comentarios} />);*/
            setPostsRelacionados(<PostRelacionados posts={post.relacionados}>{() => { buscarPost() }}</PostRelacionados>);
            setPalavrasChaveState(<PalavrasChave history={history} palavrachave={post.palavras_chave} />)
        }).catch(() => {
            history.push('/pagina-nao-encontrado')
        });
    }

    function converterTxt_p(texto) {
        return <p dangerouslySetInnerHTML={{ __html: texto }}></p>;
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
