import React from 'react';
import { ContextoInicio } from '../../Contexto';
const MensajeAlUsuario = () => {
    const { contadorPuntos } = React.useContext(ContextoInicio)

    return (
        <div className="mensaje">
            {contadorPuntos == 0 && <h2>¡Cuidado con los globos negros!</h2>}

            {contadorPuntos <= 10 && contadorPuntos != 0  && <h2>¡Buen intento!</h2>}

            {contadorPuntos > 10 && contadorPuntos < 25 && <h2>¡Muy bien!</h2>}

            {contadorPuntos > 25 && <div>
                    <h2>⭐ ¡Eres un maestro explotando globos!</h2>
                    <p>
                        Demostraste muy buenos reflejos.
                        Lograste explotar la mayoría de los globos positivos
                        evitando gran parte de los globos negros.
                    </p>
                </div>}
        </div>
    );
}

export { MensajeAlUsuario }