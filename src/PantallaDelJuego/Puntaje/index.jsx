import { ContextoInicio } from "../../Contexto";
import React from 'react';

const Puntaje = () => {
    const {contadorPuntos} = React.useContext(ContextoInicio)
    return (
        <div className="info puntaje">
            <h3>🏆 Puntaje</h3>
            <p id="puntaje">{contadorPuntos}</p>
        </div>
    );
}

export { Puntaje }