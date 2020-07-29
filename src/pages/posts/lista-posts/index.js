import React, { useEffect, useState } from 'react';
import 'react-router-dom';
import './style.css';

import { IoIosArrowDown } from 'react-icons/io';
import CardPostComponent from '../../../component/card-post';
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import api from '../../../services/api'
import Helper from '../../../helper';
import LoadingComponent from '../../../component/loading-component'

export default function ListaPosts(props) {

    const [cardsState, setCardsState] = useState([]);
    const [paginacao, setPaginacao] = useState(1);
    const [loading, setLoading] = useState(<LoadingComponent />);
    const [botaoMaisPosts, setBotaoMaisPosts] = useState(true);


    const search = props.location.search;
    const params = new URLSearchParams(search);
    let buscar = params.get('buscar') || "";


    useEffect(() => {

        if (paginacao > 1) {
            api.get(`/posts?_page=${paginacao}&buscar=${buscar}`)
                .then((result) => {

                    const cards = result.data.doc;
                    const novosCards = cardsState.map(card => card);

                    formatarCardsRequisicao(cards).forEach(card => {
                        novosCards.push(card);
                    })
                    setCardsState(novosCards);

                    if (cards.length < 4) setPaginacao(0);
                    setLoading("");
                }).catch((err) => {
                    setLoading("");
                });
        }
        // eslint-disable-next-line
    }, [paginacao])

    useEffect(() => {
        api.get('/posts?_page=1&buscar=' + buscar).then((res) => {

            const cards = res.data.doc;
            setCardsState((formatarCardsRequisicao(cards)));
            setLoading("");
        }).catch((err) => {
            setLoading("");
        });
        // eslint-disable-next-line
    }, []);


    function formatarCardsRequisicao(cards, itensRequisicao = []) {

        cards.forEach(card => {
            itensRequisicao.push({
                titulo: card.titulo,
                texto: card.conteudos[0].texto,
                link: card.link,
                _id: card._id
            });
        });

        return conjuntoCard(itensRequisicao);

    }

    return (
        <>
            {loading}
            <NavBarComponent />
            <main className="conteudo list-posts">

                <section hidden={(buscar) ? false : true}>
                    <br />
                    <p>
                        <strong>Termos pesquisado: </strong> {Helper.minusculo(buscar)}
                    </p>
                </section>

                <section>
                    {
                        cardsState.map((item, i) => {
                            return (
                                <div className="row">
                                    <CardPostComponent
                                        titulo={item[0].titulo}
                                        texto={item[0].texto}
                                        link={item[0].link}
                                        blur={i % 2}
                                        grayscale={true} />
                                    {item.length === 2 ?
                                        <CardPostComponent
                                            titulo={item[1].titulo}
                                            texto={item[1].texto}
                                            link={item[1].link}
                                            blur={i % 2} />
                                        : ""
                                    }
                                </div>
                            )
                        })
                    }
                </section>

                <section className="text-center bt-mais-posts botao botao-animacao" hidden={!botaoMaisPosts} onClick={(e) => {
                    clickMaisPosts(e);
                }}>
                    <p>Mais Posts</p>
                    <IoIosArrowDown className="bt-mais-icon" />
                </section>

            </main>

            <RodapeComponent />
        </>
    );

    function clickMaisPosts(e) {
        e.preventDefault();

        if (paginacao > 0) {
            setLoading(<LoadingComponent />);
            setPaginacao(paginacao + 1);
        } else {
            setBotaoMaisPosts(false);
        }
    }

    function conjuntoCard(itensCard) {
        let temp = [], result = [];
        itensCard.forEach((item, index) => {
            if (index % 2 === 0) {
                temp.push(item);
            } else {
                temp.push(item)
                result.push(temp);
                temp = [];
            }
        })

        if (itensCard.length % 2 !== 0) {
            result.push([itensCard.pop()]);
        }

        return result;
    }
}