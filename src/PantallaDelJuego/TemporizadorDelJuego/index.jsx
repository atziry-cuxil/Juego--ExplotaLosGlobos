import React from 'react';
import { useState } from 'react';
import { ContextoInicio } from '../../Contexto' 

const Temporizador = () => {
    const {estadoReiniciar, segundos, actualizarSegundos, actualizarEstadoFinal} = React.useContext(ContextoInicio)

    React.useEffect(() => {
        let contador = 0
        let tiempo = setInterval(() => {
            contador++
            actualizarSegundos(contador)
            console.log(contador)
            if (contador == 30) {
                clearInterval(tiempo)
                actualizarEstadoFinal()
            }
        }, 1000)
    }, [estadoReiniciar] )

    return (
        <div className="info tiempo">
            <h3>⏳ Tiempo</h3>
            <p id="tiempo">{segundos}s</p>
        </div>
    )
}

export { Temporizador }