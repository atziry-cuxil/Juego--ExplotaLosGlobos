import { FormNombreJugador } from "../FormNombreJugador";
import './PantallaInico.css'
const EstructuraPantallaInicio = () => {
    return (
        <div className="contenedorInicio">

            <h1>🎈 ¡Explota los Globos! 🎈</h1>

            <p className="descripcionInicio">
                ¡Haz clic en todos los globos antes de que desaparezcan!
                Consigue la mayor cantidad de puntos antes de que el tiempo termine.
            </p>

            <FormNombreJugador/>
            <div className="instruccionesInicio">
                <h2>📖 Instrucciones</h2>
                <ul>
                    <li>Haz clic sobre los globos antes de que desaparezcan.</li>
                    <li>Cada color tiene un valor diferente.</li>
                    <li>¡Cuidado con los globos negros!</li>
                    <li>Cuando el tiempo llegue a cero, el juego terminará.</li>
                    <li>Tienes 30 segundos!!!</li>
                </ul>
            </div>
            <div className="puntajesInicio">
                <h2>🎯 Valor de los Globos</h2>
                <div className="globoInicio rojoInicio">
                    <span></span>
                    <p>Globo Rojo <strong>+1 punto</strong></p>
                </div>
                <div className="globoInicio verdeInicio">
                    <span></span>
                    <p>Globo Verde <strong>+2 puntos</strong></p>
                </div>
                <div className="globoInicio azulInicio">
                    <span></span>
                    <p>Globo Azul <strong>+5 puntos</strong></p>
                </div>
                <div className="globoInicio negroInicio">
                    <span></span>
                    <p>Globo Negro <strong>-3 puntos</strong></p>
                </div>
            </div>
        </div>
    );
}

export { EstructuraPantallaInicio }