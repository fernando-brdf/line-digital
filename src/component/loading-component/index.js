import React from 'react';
import './style.css';

export default function LoadingComponent() {
    return (
        <div className="d-flex align-items-center loading-component">
            <div className="caixa">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}