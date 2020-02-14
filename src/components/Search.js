import React, { Component } from 'react'
import { Container, Col, Button, Form } from 'react-bootstrap'
import Calender from 'react-calendar'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotelId: 0,
            checkIn: '',
            nights: 0,
            hotels: [{ "Hotel Baqueira Val de Neu": 44069509 },
            { "Hotel Moderno": 10030559 },
            { "Hotel Grand Luxor": 100376478 }]
        }
    }
    handleSelectChange = e => {
        this.setState({
            hotelId: e.target.value
        })
    }
    onChangeDate = date => {
        let day = String
        let month = String
        let year = `${date.getFullYear()}`
        date.getDate() < 10 ? day = `0${date.getDate()}` : day = `${date.getDate()}`
        date.getMonth() + 1 < 10 ? month = `0${date.getMonth() + 1}` : month = `${date.getMonth() + 1}`
        this.setState({
            checkIn: `${day}/${month}/${year}`
        })
    }
    handleInputChange = e => {
        this.setState({
            nights: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const hotelId = this.state.hotelId
        const checkin = this.state.checkIn
        const nights = this.state.nights
        this.props.getRates(hotelId, checkin, nights)
        this.props.history.push('/result')
    }

    render() {
        return (
            <>
                <h1>Selecciona un Hotel, fecha y duración de tu estadía</h1>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Hotel</Form.Label>
                                <Form.Control as="select" onChange={this.handleSelectChange} value={this.state.hotelId}>
                                    <option>Elige un Hotel</option>
                                    {this.state.hotels.map((elm, idx) => (
                                        <option value={Object.values(elm)[0]} key={idx}>{Object.keys(elm)[0]}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Calender
                                onChange={this.onChangeDate}
                                minDate={new Date()}
                            />
                        </Form.Row>
                        <Form.Row>
                            <Form.Label>Número de Noches</Form.Label>
                            <Form.Control placeholder="Máximo de 30 noches" onChange={this.handleInputChange}></Form.Control>
                        </Form.Row>
                        <Button className="button" type="submit" disabled={this.state.nights > 30}>Buscar</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default Search