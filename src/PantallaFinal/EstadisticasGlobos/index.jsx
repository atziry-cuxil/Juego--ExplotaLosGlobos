const EstadisticasGlobos = () => {
    return (
        <div className="estadisticas">
            <h2>📊 Resumen de la Partida</h2>
            <div className="fila">
                <span>Total de globos explotados</span>
                <strong>42</strong>
            </div>
            <div className="fila">
                <span>Globos positivos</span>
                <strong className="verde">38</strong>
            </div>
            <div className="fila">
                <span>Globos negros</span>
                <strong className="negro">4</strong>
            </div>
        </div>
    );
}

export { EstadisticasGlobos }