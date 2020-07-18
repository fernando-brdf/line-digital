import React, { useEffect, useState } from 'react';
import 'react-router-dom';
import './style.css';

import { IoIosArrowDown } from 'react-icons/io';
import CardPostComponent from '../../../component/card-post';
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import api from '../../../services/api'
import Helper from '../../../helper';

export default function ListaPosts(props) {

    const [cardsState, setCardsState] = useState([]);
    const [paginacao, setPaginacao] = useState(1);

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
                }).catch((err) => {

                });

        }
        // eslint-disable-next-line
    }, [paginacao])

    useEffect(() => {
        api.get('/posts?_page=1&buscar=' + buscar).then((res) => {
            const cards = res.data.doc;
            setCardsState((formatarCardsRequisicao(cards)));
        }).catch((err) => {
            console.log("erro")
        });
        // eslint-disable-next-line
    }, []);


    function formatarCardsRequisicao(cards, itensRequisicao = []) {

        cards.forEach(card => {
            itensRequisicao.push({
                titulo: card.titulo,
                texto: Helper.limitarTexto(card.conteudos[0].texto, 102) + "...",
                link: card.link,
                _id: card._id
            });
        });

        return conjuntoCard(itensRequisicao);

    }

    return (
        <>
            <NavBarComponent />
            <main className="conteudo list-posts">

                {
                    cardsState.map((item, i) => {
                        return (
                            <div className="row">
                                <CardPostComponent
                                    titulo={item[0].titulo}
                                    texto={Helper.limitarTexto(item[0].texto)}
                                    link={item[0].link}
                                    blur={i % 2}
                                    grayscale={true} />
                                {item.length === 2 ?
                                    <CardPostComponent
                                        titulo={item[1].titulo}
                                        texto={Helper.limitarTexto(item[1].texto)}
                                        link={item[1].link}
                                        blur={i % 2} />
                                    : ""
                                }
                            </div>
                        )
                    })
                }

                <div className="text-center bt-mais-posts botao botao-animacao" onClick={(e) => {
                    clickMaisPosts(e);
                }}>
                    <p>Mais Posts</p>
                    <IoIosArrowDown className="bt-mais-icon" />
                </div>

            </main>

            <RodapeComponent />
        </>
    );

    function clickMaisPosts(e) {
        e.preventDefault();

        if (paginacao > 0) {
            setPaginacao(paginacao + 1);
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