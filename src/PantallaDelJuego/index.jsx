import React from 'react';
import ReactDOM from 'react-dom'
import { EstructuraDelJuego } from './EstructuraDelJuego';

const PantallaDelJuego = () => {
    return ReactDOM.createPortal(
        <>
        <EstructuraDelJuego/>
        </>, document.querySelector('#root')
    );
}

export { PantallaDelJuego }