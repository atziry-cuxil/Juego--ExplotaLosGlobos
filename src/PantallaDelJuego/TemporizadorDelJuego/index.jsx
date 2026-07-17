import React from 'react';
import { useState } from 'react';
import { ContextoInicio } from '../../Contexto' 

const Temporizador = () => {
    const {estadoFinal, segundos, actualizarSegundos, actualizarEstadoFinal} = React.useContext(ContextoInicio)

    React.useEffect(() => {
        let contador = 30
        let tiempo = setInterval(() => {
            contador--
            actualizarSegundos(contador)
            if (contador == 0) {
                clearInterval(tiempo)
                actualizarEstadoFinal()
            }
        }, 1000)
    }, [estadoFinal] )

    return (
        <div className="info tiempo">
            <h3>⏳ Tiempo</h3>
            <p id="tiempo">{segundos}s</p>
        </div>
    )
}

export { Temporizador }