import React from 'react';
import { ContextoInicio } from "../../Contexto";

const BotonReiniciar = () => {
    const {actualizarEstadoReiniciar, actualizarEstadoFinal, reiniciarContadores} = React.useContext(ContextoInicio)
    return (
        <button className="btn"
        onClick={() => {
            actualizarEstadoReiniciar()
            actualizarEstadoFinal()
            reiniciarContadores()
        }}
        >
            🎮 Volver a Jugar
        </button>
    );
}

export { BotonReiniciar }