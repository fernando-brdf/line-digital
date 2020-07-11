import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';


export default function CardPostComponent(props) {

    const {
        titulo,
        texto,
        link,
        grayscale,
        blur
    } = props,
        history = useHistory();


    let caminhoImg = 'https://picsum.photos/286/180';

    if (grayscale) {
        caminhoImg = caminhoImg + '?grayscale';
        if (blur) {
            caminhoImg = caminhoImg + '&blur=' + blur;
        }
    } else if (blur) {
        caminhoImg = caminhoImg + '?blur=' + blur;
    }

    return (
        <div className="card-item-comp card botao col-sm mr-2 botao-foco shadow-lg" onClick={() => history.push('/posts/' + link)}>
            <img className="card-img-top" src={caminhoImg} alt="Imagem de capa do card" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
            </div>
        </div>
    );

}


