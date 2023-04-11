import { useParams } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const BorrarPedido = () => {

    const parametros = useParams();
    const navegar = useNavigate();

    const borrarPedidoHandler = (parametros) => {
        console.log("+++++++++++++++++"+parametros);
        console.log(parametros);
        axios.delete('https://webapp-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos/'+parametros.id+'.json/')
            .then((response) => {console.log(parametros);console.log('idididididididididididi')});
            <p><Button style={{ width: "100px", height: "40px", }} variant="danger"> VOLVER</Button></p>

    }
    return (

        <>
            {['success'].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Se ha borrado correctamente el pedido.
                </Alert>
            ))}
            <Button style={{ width: "200px", height: "40px", }} variant="danger" onClick={borrarPedidoHandler(parametros)} ><Link to='/pedidos'>PEDIDOS</Link></Button>

        </>
    )
}

export default BorrarPedido;