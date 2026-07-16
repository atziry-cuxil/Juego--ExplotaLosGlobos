import React from 'react';
import { ContextoInicio } from "../../Contexto";

const BotonReiniciar = () => {
    const {actualizarEstadoReiniciar, actualizarEstadoFinal} = React.useContext(ContextoInicio)
    return (
        <button className="btn"
        onClick={() => {
            actualizarEstadoReiniciar()
            actualizarEstadoFinal()
        }}
        >
            🎮 Volver a Jugar
        </button>
    );
}

export { BotonReiniciar }