import React from 'react';
import { ContextoInicio } from '../../Contexto';

const EstadisticasGlobos = () => {
    const {contadorPositivos, contadorNegativos} = React.useContext(ContextoInicio)
    return (
        <div className="estadisticas">
            <h2>📊 Resumen de la Partida</h2>
            <div className="fila">
                <span>Total de globos explotados</span>
                <strong>{contadorPositivos + contadorNegativos}</strong>
            </div>
            <div className="fila">
                <span>Globos positivos</span>
                <strong>{contadorPositivos}</strong>
            </div>
            <div className="fila">
                <span>Globos negros</span>
                <strong>{contadorNegativos}</strong>
            </div>
        </div>
    );
}

export { EstadisticasGlobos }