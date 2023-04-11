import './Producto.css'
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Datos } from '../Datos';
import { Link } from 'react-router-dom';


function Producto({ todosProductos, setTodosProductos, cantidadProducto, setCantidadProducto, total, setTotal }) {

    const [resultado, setResultado] = useState(0);
    const [numero1, setNumero1] = useState(0);
    const [enviarCarritoHandler, setEnviarCarritoHandler] = useState('');
    let cantidadInicial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [cantidad, setCantidad] = useState(cantidadInicial);

    const sumarHandler = (e) => {

        setNumero1(numero1 + 1);
        //console.log(e.currentTarget.id);
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
        //console.log(resultado)
        setCantidad(cantidades);
        //console.log(cantidad);

    }
    const restarHandler = (e) => {
        let aux = e.currentTarget.id - 1;


        setNumero1(numero1 - 1);


        //console.log(aux);
        //console.log(resultado)
        const cantidades = cantidad.map((c, i) => {
            if (i === aux) {
                //console.log(c)
                if (c >= 1) {
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

        //console.log("asdfghjk")


    }

    const addCarrito = producto => {

        if (todosProductos.find(item => item.id === producto.id)) {
            const productos = todosProductos.map(item =>
                item.id === producto.id
                    ? { ...item, num: item.num + 1 }
                    : item
            );
            setTotal(total + producto.precio * producto.num);
            setCantidadProducto(cantidadProducto + producto.num);
            console.log("total addcarrtio:" + cantidadProducto);
            return setTodosProductos([...productos]);
        }
        console.log("despues set todosP" + todosProductos)
        setTotal(total + producto.precio * producto.num);
        setCantidadProducto(cantidadProducto + producto.num);
        setTodosProductos([...todosProductos, producto]);
        console.log("despues set todosP" + total)
    }

    const restarCarrito = producto => {
        let resta,resta1,resta2;
        const productosAux = todosProductos.map(item =>
            item.id === producto.id
                ? { resta1: item.num }
                : resta2
        );
        const cantidadess = todosProductos.map(c => {
            if (c.id === producto.id) {
                console.log("ccc"+c+producto.id+"cid"+c.id)
                if (c.num >= 1) {
                    console.log("c.num"+c.num);
                    resta=true
                    return c - 1;
                } else return resta=false

            } else {console.log("c"+c+producto.id)
                // El resto no ha cambiadoconsole.log("c"+c)
                return c;
            }console.log("c"+c)
        });
        

        console.log("Valor resta: " + resta + " NUM: " + producto.num+"total"+total)

        if (resta === true) {if (todosProductos.find(item => item.id === producto.id)) {
            const productos = todosProductos.map(item =>
                item.id === producto.id
                    ? { ...item, num: item.num - 1, resta: item.num-1 }
                    : item
            );
            console.log("Valor restaaaaa: " + resta + " NUM: " + todosProductos.num)
            setTotal(total - producto.precio * producto.num);
            setCantidadProducto(cantidadProducto - producto.num);
            console.log("total addcarrtio:" + cantidadProducto);
            return setTodosProductos([...productos]);
        }

        console.log("despues set todosP" + todosProductos)
        setTotal(total - producto.precio * producto.num);
        setCantidadProducto(cantidadProducto - producto.num);
        setTodosProductos([...todosProductos, producto]);
        console.log("despues set todosP" - total)}
    }

    const addCarrito2 = producto => {
        setTodosProductos([...todosProductos, producto])
    }

    console.log(todosProductos)
    return (
        <div>
            <div className='container-productos'>

                {Datos.map(producto => (
                    <div className='item' key={producto.id}>
                        <figure>
                            <img src={producto.urlImagen} alt={producto.nombre} />
                        </figure>
                        <div className='info-producto'>
                            <h2>{producto.nombre} </h2>
                            <p className='precio'>{producto.precio} €</p>

                            <Button style={{ width: "100px", height: "40px",}} className='info-producto-boton' variant="success" id={producto.id} onClick={() => addCarrito(producto)}>+  </Button>
                            <Button style={{ width: "100px", height: "40px",}} className='info-producto-boton' variant="warning" id={producto.id} onClick={() => restarCarrito(producto)}>—</Button>
                            <Button style={{ width: "200px", height: "40px",}} className='info-producto-boton' variant="outline-dark" id={producto.id} onClick={() => restarCarrito(producto)}><Link to={`${producto.id}`}>Ver detalles</Link></Button>
                        </div>
                    </div>
                ))}


            </div>
        </div>


    );
}

export default Producto;