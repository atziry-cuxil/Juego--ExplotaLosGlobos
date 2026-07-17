import './ContenedorGlobos.css'
import { Globo } from '../Globo'
const ContenedorGlobos = () => {
    const indices = [1, 2, 3, 4, 5, 6, 7, 8.9, 10]
    let indice = Math.ceil(Math.random() * 50)

    let globos = [
        { id: 1, color: 'negro' },
        { id: 2, color: 'verde' },
        { id: 3, color: 'rojo' },
        { id: 4, color: 'azul' },
        { id: 5, color: 'negro' },
        { id: 6, color: 'verde' },
        { id: 7, color: 'rojo' },
        { id: 8, color: 'azul' },
        { id: 9, color: 'negro' },
        { id: 10, color: 'verde' },
        { id: 11, color: 'rojo' },
        { id: 12, color: 'azul' },
        { id: 13, color: 'negro' },
        { id: 14, color: 'verde' },
        { id: 15, color: 'rojo' },
        { id: 16, color: 'azul' },
        { id: 17, color: 'negro' },
        { id: 18, color: 'verde' },
        { id: 19, color: 'rojo' },
        { id: 20, color: 'azul' },
        { id: 21, color: 'negro' },
        { id: 22, color: 'verde' },
        { id: 23, color: 'rojo' },
        { id: 24, color: 'azul' },
        { id: 25, color: 'negro' },
        { id: 26, color: 'verde' },
        { id: 27, color: 'rojo' },
        { id: 28, color: 'azul' },
        { id: 29, color: 'negro' },
        { id: 30, color: 'verde' },
        { id: 31, color: 'rojo' },
        { id: 32, color: 'azul' },
        { id: 33, color: 'negro' },
        { id: 34, color: 'verde' },
        { id: 35, color: 'rojo' },
        { id: 36, color: 'azul' },
        { id: 37, color: 'negro' },
        { id: 38, color: 'verde' },
        { id: 39, color: 'rojo' },
        { id: 40, color: 'azul' },
        { id: 41, color: 'negro' },
        { id: 42, color: 'verde' },
        { id: 43, color: 'rojo' },
        { id: 44, color: 'azul' },
        { id: 45, color: 'negro' },
        { id: 46, color: 'verde' },
        { id: 47, color: 'rojo' },
        { id: 48, color: 'azul' },
        { id: 49, color: 'negro' },
        { id: 50, color: 'verde' },
        { id: 51, color: 'negro' },
        { id: 52, color: 'verde' },
        { id: 53, color: 'rojo' },
        { id: 54, color: 'azul' },
        { id: 55, color: 'negro' },
        { id: 56, color: 'verde' },
        { id: 57, color: 'rojo' },
        { id: 58, color: 'azul' },
        { id: 59, color: 'negro' },
        { id: 60, color: 'verde' },
    ]
    return (
        <section id="areaJuego">
            <div id='area-globos'>
                {globos.map(globo => (
                    <Globo
                        key={globo.id}
                        id={globo.id}
                        color={globo.color}
                    />
                ))
                }

                {/* <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo negro" ></div>

                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo negro"></div>
                <div className="globo rojo" ></div>
                <div className="globo negro"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className='globo negro'></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className='globo negro'></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className='globo negro'></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo rojo"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className='globo negro'></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className='globo negro'></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo verde"></div>
                <div className='globo negro'></div>
                <div className="globo verde"></div>
                <div className="globo rojo" ></div>
                <div className="globo rojo"></div>
                <div className="globo rojo" ></div>
                <div className='globo negro'></div>
                <div className="globo verde"></div>
                <div className="globo verde"></div>                
                <div className="globo verde"></div>
                <div className="globo azul"></div>
                <div className="globo rojo" ></div>
                <div className="globo negro"></div>
                <div className="globo azul" ></div>
                <div className='globo negro'></div>
                <div className="globo verde"></div>
                <div className="globo negro"></div> */}
            </div>

        </section>
    );
}

export { ContenedorGlobos };