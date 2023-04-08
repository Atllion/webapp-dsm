import './Producto.css'
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Datos } from '../Datos';


function Producto(props) {


    const [resultado, setResultado] = useState(0);
    const [numero1, setNumero1] = useState(0);
    const [enviarCarritoHandler, setEnviarCarritoHandler] = useState('');
    let cantidadInicial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [cantidad, setCantidad] = useState(cantidadInicial);

    const sumarHandler = (e) => {

        setNumero1(numero1 + 1);
        console.log(e.currentTarget.id);
        let aux = e.currentTarget.id - 1;
        //console.log(aux);
        //console.log(resultado)
        const cantidades = cantidad.map((c, i) => {
            if (i === aux) {
                setResultado(c + 1);
                return c + 1;


            } else {
                // El resto no ha cambiado
                return c;
            }
        });

        const myList = Datos.map((item) => <p>{item.id}</p>)
        console.log(resultado)
        setCantidad(cantidades);
        console.log(cantidad);

    }
    const restarHandler = (e) => {
        let aux = e.currentTarget.id - 1;
        
            
            setNumero1(numero1 - 1);

            
            //console.log(aux);
            //console.log(resultado)
            const cantidades = cantidad.map((c, i) => {
                if (i === aux) {
                    console.log(c)
                    if (c >=1) {
                    setResultado(c - 1);
                    return c - 1;
                    } else return c

                } else {
                    // El resto no ha cambiado
                    return c;
                }
            });

            const myList = Datos.map((item) => <p>{item.id}</p>)
            
            setCantidad(cantidades);

            console.log("asdfghjk")
        

    }

    return (
        <div>
            <div className='container-productos'>

                {Datos.map(producto => (
                    <div className='item' key={producto.id}>
                        <figure>
                            <img src={producto.urlImagen} alt={producto.nombre} />
                        </figure>
                        <div className='info-producto'>
                            <h2>{producto.nombre}</h2>
                            <p className='precio'>{producto.precio} €</p>


                            {cantidad.map((c, i) => {
                                if (i === producto.id - 1) {
                                    <p>sd</p>
                                    return (<p>
                                        <Button className='info-producto-boton ' variant="primary" id={producto.id} onClick={restarHandler}>—</Button>

                                        <Form.Control className='info-producto-info' type='text' value={"  "+c + " unidades = " + c * producto.precio + " €"} />
                                        <Button className='info-producto-boton' variant="primary" id={producto.id} onClick={sumarHandler}>+</Button>
                                                                          <p><Button className='info-producto-boton' variant="primary" id={producto.id} onClick={sumarHandler}>COMPRAR</Button></p>

                                    </p>
                                    )
                                    console.log(resultado)
                                }
                            })}

                        </div>
                    </div>
                ))}


            </div>
        </div>


    );
}

export default Producto;