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
        <Button style={{ width: "200px", height: "40px",}} variant="danger" ><Link to='/productos'>COMPRAR</Link></Button>
      </>
    )
}

export default NuevoPedido;