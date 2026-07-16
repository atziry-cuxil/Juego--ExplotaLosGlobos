import React from 'react';
import {ContextoInicio} from '../../Contexto'
const PuntajeFinal = () => {
    const {contadorPuntos} = React.useContext(ContextoInicio)
    return (
        <div className="card">
            <h3>🏆 Puntaje Final</h3>
            <span>{contadorPuntos}</span>
        </div>
    );
}

export { PuntajeFinal }