import React from 'react';
import { useState } from 'react';

const Temporizador = () => {
    const [estadoReiniciar, setEstadoReiniciar] = React.useState(true)
    const [segundos, setsegundos] = React.useState(0)

    React.useEffect(() => {
        let contador = 0
        let tiempo = setInterval(() => {
            contador++
            setsegundos(contador)
            console.log(contador)
            if (contador == 30) {
                clearInterval(tiempo)
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