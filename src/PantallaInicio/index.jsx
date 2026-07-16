import React from 'react';
import ReactDOM from "react-dom";
import { EstructuraPantallaInicio } from './EstructuraPantallaInicio';

function PantallaInicio() {
    return ReactDOM.createPortal(<>
            <EstructuraPantallaInicio/>
        </>,
        document.querySelector("#pantallaInicio")
    )
}

export { PantallaInicio }