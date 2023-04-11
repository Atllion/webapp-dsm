import { useParams } from "react-router-dom";
import { Datos } from '../Datos';
import './DetalleProducto.css';

const DetalleProducto = ({ todosProductos, setTodosProductos, cantidadProducto, setCantidadProducto, total, setTotal }) => {

    const parametros = useParams();

    return (
        <>
            <h2>Detalle del productos: {parametros.id}</h2>
            <p>Información del producto.</p>


            <div >

                {Datos.map(producto => (
                    <div key={producto.id}>
                        {console.log("prodcuntoid" + producto.id + "parametroid" + parametros.id)}
                        {producto.id === Number(parametros.id) ? (
                            <p>{console.log("prodcuntoid" + producto.id + "parametroid" + parametros.id)}
                            <figure>
                            <center> <img alt="centered image" className="mediana" src={producto.urlImagen} alt={producto.nombre} /></center>
                            </figure>
                                <div className='info-producto'>
                                    <h2>{producto.nombre} </h2>
                                    <p className='precio'>{producto.precio} €</p>
                                    <p>{producto.descripcion}</p>
                                </div>
                            </p>
                        ): ("")}   
                        

                    </div>
                ))}


            </div>
        </>
    )
}

export default DetalleProducto;