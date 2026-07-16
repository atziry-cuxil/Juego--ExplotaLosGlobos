import React from 'react';
import ReactDOM from 'react-dom'
import { EstructuraPantallaFinal } from './EstructuraPantallaFinal';

const PantallaFinal = () => {
    return ReactDOM.createPortal(
        <>
        <EstructuraPantallaFinal/>
        </>, document.querySelector('#pantallaFinal')
    );
}

export { PantallaFinal }