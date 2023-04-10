import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



const Formulario = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const apellidoHandler = (event) => {
        setApellido(event.target.value);
    }

    const direccionHandler = (event) => {
        setDireccion(event.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();
        const producto = {
            id: 1,
            name: name,
            direccion: direccion,

        }

    }

    return (
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
                                <Modal.Title>fINALIZAR COMPRA</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Confirmar compra</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    NO
                                </Button>
                                <Button variant="danger" onClick={handleClose}>
                                    SI
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}



export default Formulario;