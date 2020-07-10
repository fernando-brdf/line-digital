import React from 'react';
import './style.css'
import { AiOutlineLinkedin, AiOutlineInstagram, AiTwotoneMail } from 'react-icons/ai'

export default function RodapeComponent() {


    return (
        <div className="rodape">

            <div className="container">
                <div className="row">
                    <div className="col col-ms-6">
                        <p className="contados">Criadores</p>
                        <div className="row">
                            <div className="col col-2">
                                <a href="#something"><AiOutlineLinkedin className='rounded-circle social linkedin' /></a>
                            </div>
                            <div className="col col-10">
                                <a className="link" href="https://www.linkedin.com/in/fernando-araújo-a33304182">https://www.linkedin.com/in/fernando-araújo-a33304182</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-2">
                                <a href="#something"><AiOutlineInstagram className='rounded-circle social instagram' /></a>
                            </div>
                            <div className="col col-10">
                                <a className="link" href="https://www.instagram.com/_menezeslobo/">https://www.instagram.com/_menezeslobo/</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-ms-6">
                        <p className="contados">Contato</p>
                        <div className="row">
                            <div className="col col-2">
                                <a href="#something"><AiTwotoneMail className='rounded-circle social email' /></a>
                            </div>
                            <div className="col col-10">
                                <a className="link" href="mailto:linedigitalmkt@gmail.com">linedigitalmkt@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fim">
                    <p className="txt-fim text-center">© Line Digital Marketing - 2020</p>
                </div>
            </div>
        </div>


    );
}