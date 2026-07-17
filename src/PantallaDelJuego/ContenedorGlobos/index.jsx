import React from 'react';
import './ContenedorGlobos.css'
import { Globo } from '../Globo'
import { GloboInvisible } from '../Globo/globoInvisible'
import { ContextoInicio } from '../../Contexto'

const ContenedorGlobos = () => {
    const {globos} = React.useContext(ContextoInicio)    

    return (
        <section id="areaJuego">
            <div id='area-globos'>
                {globos.map(globo => (
                    globo.estado ?
                        <Globo
                            key={globo.id}
                            id={globo.id}
                            color={globo.color}
                        />
                        :
                        <GloboInvisible key={globo.id} />
                ))
                }
            </div>

        </section>
    );
}

export { ContenedorGlobos };