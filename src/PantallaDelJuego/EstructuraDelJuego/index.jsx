import React from 'react';
import './PantallaDelJuego.css'
import { ContenedorGlobos } from '../ContenedorGlobos';
import { Temporizador } from '../TemporizadorDelJuego';
import { NombreDelJugador } from '../NombreDelJugador';

const EstructuraDelJuego = () => {
    return (
        <div className="juego">
            <header className="panel">
                <NombreDelJugador />
                <Temporizador />
                <div className="info puntaje">
                    <h3>🏆 Puntaje</h3>
                    <p id="puntaje">0</p>
                </div>
            </header>
            <ContenedorGlobos />
        </div>
    );
}

export { EstructuraDelJuego }