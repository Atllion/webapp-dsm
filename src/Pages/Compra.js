import { useState } from 'react';
import './Compra.css';
import { Alert } from 'bootstrap';
import Producto from '../Products/Producto';
import { Button } from 'react-bootstrap';
const Compra = ({ todosProductos, setTodosProductos, total, setTotal, cantidadProducto, setCantidadProducto }) => {

    const [activo, setActivo] = useState(false);

	{
		if (todosProductos.length > 0) {
			{ console.log("siiuuuuu") }
		} else console.log("siiuuuuu" + todosProductos.length)
	}

	const borrarHandler = producto => {
		const resultado = todosProductos.filter(
			item => item.id !== producto.id
		);

		setTotal(total - producto.precio * producto.num);
		setCantidadProducto(cantidadProducto - producto.num);
		setTodosProductos(resultado);
	};


    return (
        <>
            <h2>El pedido contiene lo siguiente</h2>
            

            <div className="count-productos">
						
					</div>
					
						{console.log("todos length" + todosProductos.length)}
						{todosProductos.length ? (
							<>
                            <p>Cantidad de producto.</p>
								<div className='row-producto'>
									{todosProductos.map(producto => (
										<div className="cart-producto" key={producto.id}>
											{console.log(producto)}
											<div className="info-cart-producto" >
                                            <span className="precio-producto-carrito">{producto.num}u</span>
												<span className="precio-producto-carrito">{producto.nombre} </span>
												<span className="precio-producto-carrito">{producto.precio} €/u</span>
												<span className="precio-producto-carrito">{producto.num*producto.precio} €</span>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close" onClick={() => borrarHandler(producto)}>
												<path stroke-Linecap="round" stroke-Linejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</div>
									))}
								</div>
								<div className="cart-total">
									Total:
									<span className="total-pagar">{total} €</span>
								</div>
								<div><Button variant="danger">CONTINUAR</Button></div>
							</>
						) : (
							<p>Carrito vacío</p>
						)}
					
        </>
    )
}

export default Compra;