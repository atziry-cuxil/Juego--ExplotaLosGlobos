import React from 'react';
import ReactDOM from "react-dom";

function PantallaInicio({ children }) {
    return ReactDOM.createPortal(<>
            {children}
        </>,
        document.querySelector("#pantallaInicio")
    )
}

export { PantallaInicio }