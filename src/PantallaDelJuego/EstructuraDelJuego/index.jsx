import React from 'react';
import './PantallaDelJuego.css'
import { ContenedorGlobos } from '../ContenedorGlobos';
import { Temporizador } from '../TemporizadorDelJuego';
import { NombreDelJugador } from '../NombreDelJugador';
import { Puntaje } from '../Puntaje';

const EstructuraDelJuego = () => {
    return (
        <div className="juego">
            <header className="panel">
                <NombreDelJugador />
                <Temporizador />
                <Puntaje />
            </header>
            <ContenedorGlobos />
        </div>
    );
}

export { EstructuraDelJuego }