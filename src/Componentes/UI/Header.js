import { useState } from 'react';
import './Header.css';
import { Alert } from 'bootstrap';
import Producto from '../../Products/Producto';
import { Button } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header({ todosProductos, setTodosProductos, total, setTotal, cantidadProducto, setCantidadProducto }) {
	//
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
			<div className='header'>
				<h1>Tienda de Componentes</h1>

				<div className="container-icon" onClick={() => setActivo(!activo)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" viewBox="-1 -2 16 16" className='icon-cart'>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
					<div className="count-productos">
						<span id="contador-productos">{cantidadProducto} {console.log("*****" + cantidadProducto + "  total " + total)}</span>
					</div>
					<div className={`container-cart-productos ${activo ? '' : 'hidden-cart'}`}>
						{console.log("todos length" + todosProductos.length)}
						{todosProductos.length ? (
							<>
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
								<span className="precio-producto-carrito">Total:</span>
									<span className="total-pagar">{total} €</span>
								</div>
								<div><Button variant="danger"><Link to='/compra'>REALIZAR PEDIDO</Link></Button></div>
							</>
						) : (<><p></p>
							<p className="precio-producto-carrito">Carrito vacío</p>
							</>
						)}
					</div>
				</div>

			</div>

			<Nav className="nav-item" justify variant="tabs" menuVariant='dark'>
				<Nav.Item >
					<Nav.Link className='dropdown-item' menuVariant='dark' eventKey="/home"  > <Link to='/' style={{ textDecoration: 'none' }}><li>INICIO</li></Link></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='dropdown-item' menuVariant='dark' eventKey="productos"  ><Link to='/productos' style={{ textDecoration: 'none' }}><li>PRODUCTOS</li></Link></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='dropdown-item' menuVariant='dark' eventKey="pedidos"  ><Link to='/pedidos' style={{ textDecoration: 'none' }}><li>PEDIDOS</li></Link></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='dropdown-item' menuVariant='dark' eventKey="compra"  ><Link to='/compra' style={{ textDecoration: 'none' }}><li>COMPRA</li></Link></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='dropdown-item' menuVariant='dark' eventKey="contact"  ><Link to='/contacto' style={{ textDecoration: 'none' }}><li>CONTACTO</li></Link></Nav.Link>
				</Nav.Item>

			</Nav>
			<p></p>
		</>

	)
}

export default Header;