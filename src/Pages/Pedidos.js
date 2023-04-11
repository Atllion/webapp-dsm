import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

const Pedidos = (id) => {
    const navegar = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pedidos, setPedidos] = useState([]);

    const borrarPedidoHandler = (id) => {
        axios.delete('https://webapp-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + id + '.json/')
            .then((response) => {console.log(id); alert('Producto borrado pedidos')});
            setShow(false);
            
            navegar('/pedidos');
            
    }

    useEffect(() => {
        axios.get('https://webapp-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
            .then((response) => {
                //console.log(response.data);
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        name: response.data[key].name,
                        apellido: response.data[key].apellido,
                        direccion: response.data[key].direccion,
                        total: response.data[key].total
                    })
                }
                console.log(arrayProductos);
                setPedidos(arrayProductos);
            }).catch((error) => {
                alert('Se ha producido un error');
            })
    }, []);

    return (
        <p className='precio'>
            <p></p>
            <Container>
                <Row>
                    <Col>Tus pedidos almacenados son los siguientes:</Col>
                    <p></p>
                    {pedidos.map(encargo => (
                        <div>
                            <p></p>
                            <h6>Nombre: {encargo.name} {encargo.apellido}</h6>
                            <h6>Total: {encargo.total} €</h6>
                            <h6> Direccion: {encargo.direccion}</h6>
                            <Button variant="primary" onClick={handleShow}>
                                ELIMINAR PEDIDO
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>ELIMINAR PEDIDO</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Está seguro de que quiere elimar el pedido</Modal.Body>
                                <Modal.Footer>
                                    <Button style={{ width: "100px", height: "40px", }} variant="secondary" onClick={handleClose}>
                                        NO
                                    </Button>
                                    <Button style={{ width: "100px", height: "40px", }} onClick={handleClose} variant="danger"  >
                                    <Link to={`${encargo.id}`}>SI</Link>
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <p></p>
                        </div>
                    ))}
                </Row>
            </Container>

        </p>
    )
}
export default Pedidos;