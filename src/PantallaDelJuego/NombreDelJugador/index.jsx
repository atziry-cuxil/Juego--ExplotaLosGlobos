import React from 'react';
import { ContextoInicio } from "../../Contexto";

const NombreDelJugador = () => {
    const { nombreUsuario } = React.useContext(ContextoInicio)
    return (
        <div className="info jugador">
            <h3>👦 Jugador</h3>
            <p id="nombreJugador">{nombreUsuario}</p>
        </div>
    );
}

export { NombreDelJugador }