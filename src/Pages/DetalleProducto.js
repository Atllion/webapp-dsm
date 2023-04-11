import { useParams } from "react-router-dom";
import { Datos } from '../Datos';
import './DetalleProducto.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const DetalleProducto = ({ todosProductos, setTodosProductos, cantidadProducto, setCantidadProducto, total, setTotal, products, setTodosProducts   }) => {
    
    const parametros = useParams();
    

    return (
        <>
            <h2>Detalle del producto: </h2>
            <p>Información del producto.</p>


            <div >
            
                {products.map(producto => (
                    <div key={producto.id}>
                        {console.log("productoid"+producto.id+" parametrosid"+ parametros.id)}
                        {console.log(producto.id)}
                        {Number(producto.id) === Number(parametros.id) ? (
                            <p>
                            <figure>
                            <center> <img alt="centered image" className="mediana" src={producto.urlImagen}  /></center>
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
            <Button style={{ width: "200px", height: "40px", }}  variant="dark" ><Link to='/productos'>VOLVER</Link></Button>
        </>
    )
}

export default DetalleProducto;