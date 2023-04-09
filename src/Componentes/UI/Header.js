import { useState } from 'react';
import './Header.css';
import { Alert } from 'bootstrap';
import Producto from '../../Products/Producto';
import { Button } from 'react-bootstrap';

function Header({todosProductos, setTodosProductos, total, setTotal, cantidadProducto, setCantidadProducto}) {
//
	const [activo, setActivo] = useState(false);

	{if (todosProductos.length > 0) {
		{console.log("siiuuuuu")}
	}else console.log("siiuuuuu"+todosProductos.length) }

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
				<h1>Tienda de Componetes</h1>
				<div className="container-icon" onClick={() => setActivo(!activo)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor"  viewBox="-1 -2 16 16" className='icon-cart'>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
					<div className="count-productos">
						<span id="contador-productos">{cantidadProducto} {console.log("*****"+cantidadProducto+"  total "+total)}</span>
					</div>
					<div className={`container-cart-productos ${activo ? '' : 'hidden-cart'}`}>
						{console.log("todos length"+todosProductos.length)}						
						{todosProductos.length ? (
							<>
								<div className='row-producto'>
									{todosProductos.map(producto => (										
										<div className="cart-producto" key={producto.id}>
											{console.log(producto)}
											<div className="info-cart-producto" >
												<span className="cantidad-producto-carrito">{producto.num}</span>																											
												<span className="precio-producto-carrito">{producto.nombre} €</span>
												<span className="precio-producto-carrito">{producto.precio} €</span>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close" onClick={() => borrarHandler(producto)}>
												<path stroke-Linecap="round" stroke-Linejoin="round" d="M6 18L18 6M6 6l12 12"/>
											</svg>
										</div>
									))}
								</div>
								<div className="cart-total">
									<h3>Total:</h3>
									<span className="total-pagar">{total} €</span>
								</div>
								<div><Button>COMPRAR</Button></div>
							</>
						) : (
							<p>Carrito vacío</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header;