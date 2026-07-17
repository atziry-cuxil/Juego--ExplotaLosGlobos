import React from 'react';
import { useContext } from 'react';
import { ContextoInicio } from '../../Contexto';

const FormNombreJugador = () => {
    const { actualizarValores, AccionesFormulario, nombreUsuario } = React.useContext(ContextoInicio)
    return (
        <form className="jugadorInicio" onSubmit={() => {
            event.preventDefault()
            AccionesFormulario(event)
        }}>
            <h2>👦 Información del Jugador</h2>

            <div className="campoInicio">
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
            <button id="btnJugarInicio" type="submit">
                🎮 ¡Comenzar Juego!
            </button>
        </form>
    );
}

export { FormNombreJugador }