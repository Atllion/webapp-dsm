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

                        </div>
                    </div>
                ))}
            </div>
            </div>
          

    );
}

export default Producto;