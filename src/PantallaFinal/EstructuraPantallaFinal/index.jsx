import { BotonReiniciar } from '../BotonReiniciar';
import { EstadisticasGlobos } from '../EstadisticasGlobos';
import { MensajeAlUsuario } from '../MensajeAlUsuario';
import { NombreJugador } from '../NombreJugador';
import { PuntajeFinal } from '../PuntajeFinal';
import './EstructuraPantallaFinal.css'

const EstructuraPantallaFinal = () => {
    return (
        <div className="contenedor">
            <h1>🎉 ¡Juego Terminado! 🎉</h1>
            <p className="subtitulo">
                Estos son los resultados de tu partida.
            </p>
            <div className="panel-superior">
                <NombreJugador/>
                <PuntajeFinal/>
            </div>
            <EstadisticasGlobos/>
            <MensajeAlUsuario/>
        <BotonReiniciar/>
        </div>
    );
}

export { EstructuraPantallaFinal }