import React, { useState } from 'react';
import './style.css'

import { IoIosArrowDown } from 'react-icons/io'


export default function ComentariosComponent(props) {

    const { comentarios } = props;
    const [comentariosState, setComentariosState] = useState(comentarios);


    if (!comentarios || comentarios.length === 0) return deixarComentario(true);

    return (
        <div className="comentarios-comp">
            <h4>Comentários</h4>

            <div className='comentarios shadow '>
                {
                    comentariosState.map((c) =>
                        (
                            <div key={c.nome} className='comentario-user'>
                                <br />
                                <h6>{c.nome}</h6>
                                <p>{c.comentario}</p>
                                <hr></hr>
                                <br />
                            </div>
                        )
                    )
                }
                <div className="text-center bt-mais botao botao-animacao" onClick={(e) => clickMaisComentarios(e)}>
                    <p>Mais comentários</p>
                    <IoIosArrowDown className="bt-mais-icon" />
                </div>


            </div>

            {deixarComentario()}


        </div>
    );

    function clickMaisComentarios(e) {
        e.preventDefault()

        const novosComentarios = comentariosState.map(c => c);
        novosComentarios.push({ nome: "@marcelodantas", comentario: "Parabéns pelo trabalho." },
            { nome: "@anacarolina29", comentario: "Gostei bastante do post." })

        setComentariosState(novosComentarios);
    }
}



function deixarComentario(espacamento) {
    return (
        <div className="comentar mb-4">

            {
                espacamento ?
                    <div>
                        <br /><br /><br />
                    </div>
                    : ""
            }

            <h4>Deixe seu comentário</h4>

            <p>Somente o nome de usuário e comentário será apresentado.</p>

            <form>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="comentario-input">Comentário</label>
                        <textarea className="form-control text-area" id="comentario-input" rows="4" maxLength='300'></textarea>
                    </div>
                </div>

                <button type="button" className="btn btn-info">Enviar comentário</button>
            </form>
        </div>
    );
}