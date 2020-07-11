import React, { useEffect, useState } from 'react';
import './style.css';

import { IoIosArrowDown } from 'react-icons/io';
import CardPostComponent from '../../../component/card-post';
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';

export default function ListaPosts() {

    const [cardsState, setCardsState] = useState([]);


    useEffect(() => {
        const itensRequisicao = [{
            titulo: "O QUE É O MARKETING DE AFILIADOS?",
            texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
            link: "o-que-e-o-marketing-de-afiliados",
            _id: "a1a1a1"
        },
        {

            titulo: "O QUE É O MARKETING DE AFILIADOS?",
            texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
            link: "o-que-e-o-marketing-de-afiliados",
            _id: "a2a1a1"
        },
        {

            titulo: "O QUE É O MARKETING DE AFILIADOS?",
            texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
            link: "o-que-e-o-marketing-de-afiliados",
            _id: "a3a1a1"
        },
        {

            titulo: "O QUE É O MARKETING DE AFILIADOS?",
            texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
            link: "o-que-e-o-marketing-de-afiliados",
            _id: "a4a1a1"
        }]
        setCardsState(conjuntoCard(itensRequisicao));
    }, []);

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

                <div className="text-center bt-mais-posts botao botao-animacao" onClick={(e) => clickMaisPosts(e)}>
                    <p>Mais Posts</p>
                    <IoIosArrowDown className="bt-mais-icon" />
                </div>

            </main>

            <RodapeComponent />
        </>
    );

    function clickMaisPosts(e) {
        e.preventDefault();

        const reqCards = [
            {
                titulo: "O QUE É O MARKETING DE AFILIADOS?",
                texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
                link: "o-que-e-o-marketing-de-afiliados",
                _id: "a5a1a1"
            },
            {
                titulo: "O QUE É O MARKETING DE AFILIADOS?",
                texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
                link: "o-que-e-o-marketing-de-afiliados",
                _id: "a6a1a1"
            },
            {
                titulo: "O QUE É O MARKETING DE AFILIADOS?",
                texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
                link: "o-que-e-o-marketing-de-afiliados",
                _id: "a7a1a1"
            },
            {
                titulo: "O QUE É O MARKETING DE AFILIADOS?",
                texto: "O marketing de afiliados é uma “parceria” entre você e o produtor de algum conteúdo, onde você divulga o produto de...",
                link: "o-que-e-o-marketing-de-afiliados",
                _id: "a8a1a1"
            }
        ];

        const novosCards = cardsState.map(card => card);
        conjuntoCard(reqCards).forEach((card) => {
            novosCards.push(card);
        });
        setCardsState(novosCards);
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