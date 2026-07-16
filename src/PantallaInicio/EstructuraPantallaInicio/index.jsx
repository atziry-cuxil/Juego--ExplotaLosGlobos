import { FormNombreJugador } from "../FormNombreJugador";
import './PantallaInico.css'
const EstructuraPantallaInicio = () => {
    return (
        <div className="contenedor">

            <h1>🎈 ¡Atrapa Globos! 🎈</h1>

            <p className="descripcion">
                ¡Haz clic en todos los globos antes de que desaparezcan!
                Consigue la mayor cantidad de puntos antes de que el tiempo termine.
            </p>

            <FormNombreJugador/>
            <div className="instrucciones">
                <h2>📖 Instrucciones</h2>
                <ul>
                    <li>Haz clic sobre los globos antes de que desaparezcan.</li>
                    <li>Cada color tiene un valor diferente.</li>
                    <li>¡Cuidado con los globos negros!</li>
                    <li>Cuando el tiempo llegue a cero, el juego terminará.</li>
                    <li>Tienes 30 segundos!!!</li>
                </ul>
            </div>
            <div className="puntajes">
                <h2>🎯 Valor de los Globos</h2>
                <div className="globo rojo">
                    <span></span>
                    <p>Globo Rojo <strong>+1 punto</strong></p>
                </div>
                <div className="globo verde">
                    <span></span>
                    <p>Globo Verde <strong>+2 puntos</strong></p>
                </div>
                <div className="globo azul">
                    <span></span>
                    <p>Globo Azul <strong>+5 puntos</strong></p>
                </div>
                <div className="globo negro">
                    <span></span>
                    <p>Globo Negro <strong>-3 puntos</strong></p>
                </div>
            </div>
        </div>
    );
}

export { EstructuraPantallaInicio }