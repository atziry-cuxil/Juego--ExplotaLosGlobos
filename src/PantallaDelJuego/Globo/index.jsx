import React from 'react';
import { ContextoInicio } from '../../Contexto';

const Globo = ({ color, id }) => {
    const {actualizarPuntaje, UnClick} = React.useContext(ContextoInicio)
    return (
        <div className='divGlobo'>
            <div className={`globo ${color}`}
                data-id={color}
                id={id}
                onClick={(event) => {
                    actualizarPuntaje(event)
                    UnClick(event)
                }}
            ></div>
        </div>
    );
}

export { Globo }