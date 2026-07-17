import React from 'react';
import { ContextoInicio } from '../../Contexto';

const Globo = ({ color, id }) => {
    const {actualizarPuntaje} = React.useContext(ContextoInicio)
    return (
        <div className="divGlobo">
            <div className={`globo ${color} d-none`}
                data-id={color}
                id={id}
                onClick={(event) => actualizarPuntaje(event)}
            ></div>
        </div>
    );
}

export { Globo }