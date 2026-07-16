import React from 'react';
import { useContext } from 'react';
import { ContextoInicio } from '../../Contexto';

const FormNombreJugador = () => {
    const { actualizarValores, AccionesFormulario, nombreUsuario } = React.useContext(ContextoInicio)
    return (
        <form className="jugador" onSubmit={() => {
            event.preventDefault()
            AccionesFormulario(event)
        }}>
            <h2>👦 Información del Jugador</h2>

            <div className="campo">
                <label>Nombre</label>
                <input
                    name='Nombre'
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombreUsuario}
                    onChange={actualizarValores}
                    required
                />
            </div>
            {/* <div className="campo">
                <label>Edad</label>
                <input
                    name='Edad'
                    type="number"
                    placeholder="Edad"
                    value={nombreUsuario}
                    onChange={actualizarValores}
                />
            </div> */}
            <button id="btnJugar" type="submit">
                🎮 ¡Comenzar Juego!
            </button>
        </form>
    );
}

export { FormNombreJugador }