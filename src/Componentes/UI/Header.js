import './Header.css';

function Header() {
    return (
        <p>
        <div className='header'>
            <h1>Tienda de Componetes</h1>
             
        
        <div class="container-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
				<div class="count-productos">
					<span id="contador-productos">0</span>
				</div>

				<div class="container-cart-productos hidden-cart">
					<div class="cart-producto">
						<div class="info-cart-producto">
                            <span class="cantidad-producto-carrito">1</span>
                            <p class="titulo-producto-carrito">Zapatos Nike</p>
                            <span class="precio-producto-carrito">$80</span>
                        </div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="icon-close"
						>
							<path
								stroke-Linecap="round"
								stroke-Linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
                    <div class="cart-total">
                        <h3>Total:</h3>
                        <span class="total-pagar">$200</span>
                    </div>
				</div>
			</div>
            </div>
        </p>
    )
}

export default Header;