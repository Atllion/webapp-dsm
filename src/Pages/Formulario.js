import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'


const Formulario = ({ todosProductos, setTodosProductos, total, setTotal, cantidadProducto, setCantidadProducto }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const navegar=useNavigate();
    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const [activo, setActivo] = useState(false);

	{
		if (todosProductos.length > 0) {
			{ console.log("siiuuuuu") }
		} else console.log("siiuuuuu" + todosProductos.length)
	}

	
    
    const apellidoHandler = (event) => {
        setApellido(event.target.value);
    }

    const direccionHandler = (event) => {
        setDireccion(event.target.value);
    }

	const vaciarCarritoHandler = () => {
		setTodosProductos([]);
		setTotal(0);
		setCantidadProducto(0);
	};

    const submitHandler = (event) => {
        event.preventDefault();
        const venta = {
            id: 1,
            name: name,
            direccion: direccion,

        }
        console.log(venta);
        setShow(false);
        vaciarCarritoHandler();

navegar('/nuevoPedido');
    }

    return (
        <p>
        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col md='7'><Form.Label>Nombre: </Form.Label>
                        <p><Col></Col></p>
                        <Form.Control onChange={nameHandler} type='text' value={name} /></Col>
                    <p><Col></Col></p>
                </Row>
                <p><Col></Col></p>
                <Row>
                    <Col md='7'><Form.Label>Apellido: </Form.Label>
                        <p><Col></Col></p>
                        <Form.Control onChange={apellidoHandler} type='text' value={apellido} /></Col>
                </Row>
                <p><Col></Col></p>
                <Row>
                    <Col md='7'>
                        <p><Col></Col></p>
                        <Form.Label>Direccion: </Form.Label>
                        <Form.Control onChange={direccionHandler} type='text' value={direccion} /></Col>
                </Row>
                <p><Col></Col></p>
                <Row>
                    <Col>
                        <p><Col></Col></p>
                        <Button variant="primary" onClick={handleShow}>
                            COMPRAR
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>FINALIZAR COMPRA</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Confirmar compra</Modal.Body>
                            <Modal.Footer>
                                <Button style={{ width: "100px", height: "40px",}} variant="secondary" onClick={handleClose}>
                                    NO
                                </Button>
                                <Button style={{ width: "100px", height: "40px",}} variant="danger" onClick={ submitHandler}>
                                    SI
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </Form>

              </p>
    )
}



export default Formulario;