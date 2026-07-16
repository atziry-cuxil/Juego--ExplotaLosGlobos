import React from 'react';
import './PantallaDelJuego.css'
import { ContenedorGlobos } from './ContenedorGlobos';
import { Temporizador } from './TemporizadorDelJuego';

const PantallaDelJuego = () => {
    return (
        <div className="juego">
            <header className="panel">
                <div className="info jugador">
                    <h3>👦 Jugador</h3>
                    <p id="nombreJugador">Juan</p>
                </div>
                <Temporizador/>
                <div className="info puntaje">
                    <h3>🏆 Puntaje</h3>
                    <p id="puntaje">0</p>
                </div>
            </header>
            <ContenedorGlobos />
        </div>
    );
}

export { PantallaDelJuego }