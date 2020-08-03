import React, { } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Welcome extends React.Component {
    render() {

        return (<React.Fragment>

            <Container>

                <Row>
                    <Col xl={12}>
                        <h1><strong>Sistema de control de inventario</strong></h1>
                    </Col>
                </Row>

                <Row>
                    <Col xl>
                        <img src={this.props.fLogo} className="Futech-logo" alt="futechLogo" />
                    </Col>
                </Row>

                <Row>
                    <Col xl={{ order: 'first' }}></Col>
                    <Col xl={3}>
                        <Form>
                            <Form.Group controlId="userName">
                                <Form.Control type="email" placeholder="Usuario" />
                            </Form.Group>

                            <Form.Group controlId="userPassword">
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>

                            <Form.Group>
                                <Button variant="primary">Ingresar</Button>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col xl={{ order: 'last' }}></Col>
                </Row>

                <Row>
                    <Col xl>
                        <img src={this.props.tLogo} className="TSR-logo" alt="teseractoLogo" />
                    </Col>
                </Row>

            </Container>

        </React.Fragment>)
    }
}

export default Welcome;
