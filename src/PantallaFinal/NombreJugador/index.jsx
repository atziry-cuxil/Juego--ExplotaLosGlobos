import React from 'react';
import { ContextoInicio } from '../../Contexto';

const NombreJugador = () => {
    const {nombreUsuario} = React.useContext(ContextoInicio)
    return (
        <div className="card">
            <h3>🧑 Jugador</h3>
            <span>{nombreUsuario}</span>
        </div>
    );
}

export { NombreJugador }