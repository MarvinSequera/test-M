import React, { Component } from 'react'
import { Container, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Tarifa extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre de la Habitación</th>
                                <th>Nombre de la Oferta</th>
                                <th>Régimen</th>
                                <th>Ocupación</th>
                                <th>Precio Neto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.existRates ? this.props.rates.map((elm, idx) => (
                                <tr key={idx}>
                                    <td>{elm.roomName}</td>
                                    <td>{elm.offerName}</td>
                                    <td>{elm.boardName}</td>
                                    <td>{`Adultos:${elm.occupancy.numAdults} Niños:${elm.occupancy.numChilds} Bebes:${elm.occupancy.numBabies}`}</td>
                                    <td>{elm.netPrice}</td>
                                </tr>
                            )) : <tr>

                                    <td colSpan='5'>Lo sentimos, no hay tarifas disponibles</td>
                                </tr>
                            }

                        </tbody>
                    </Table>
                </Col>
                <Button className="back" variant="danger" as={Link} to="/">Volver</Button>
            </Container>
        )
    }
}
export default Tarifa