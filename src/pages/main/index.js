import React from 'react';
import NavBarComponent from '../../component/navbar';
import RodapeComponent from '../../component/rodape';
import './style.css'

export default function Main() {


    return (
        <div className="main">

            <NavBarComponent />

            <div className="conteudo">
                <h3>Tenha conteúdos de valor para postar</h3>
                <p>Se você não se depara com nenhum dos problemas descritos acima, ou se ainda não se sente confortável usando ferramentas JavaScript, considere simplesmente adicionar uma tag script numa página HTML, opcionalmente usando JSX.</p>
                <h3>Por que postar conteúdos</h3>
                <p>Se você não se depara com nenhum dos problemas descritos acima, ou se ainda não se sente confortável usando ferramentas JavaScript, considere simplesmente adicionar uma tag script numa página HTML, opcionalmente usando JSX.</p>
                <h3>Mas afinal, qual é o diferenciál da line digital marketing?</h3>
                <p>Se você não se depara com nenhum dos problemas descritos acima, ou se ainda não se sente confortável usando ferramentas JavaScript, considere simplesmente adicionar uma tag script numa página HTML, opcionalmente usando JSX.</p>

            </div>

            <RodapeComponent/>
        </div>
    );
}