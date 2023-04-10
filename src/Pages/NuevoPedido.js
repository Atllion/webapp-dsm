import { Link, useSearchParams } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

const NuevoPedido = () => {

    

    return (
        <>
        {['success'].map((variant) => (
          <Alert key={variant} variant={variant}>
            Gracias por la compra.

            Enviaremos el producto en el menor tiempo posible.
          </Alert>
        ))}
        <Button variant="danger" onClick><Link to='/productos'>Nuevo Pedido</Link></Button>
      </>
    )
}

export default NuevoPedido;