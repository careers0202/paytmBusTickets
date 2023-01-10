import axios from 'axios'
import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './mybookings.css'

export default class Mybookings extends Component {
    constructor() {
        super();
        this.state = {
            bookings: [],
            open: false,
            mobileNumber: '',
            bookingID: ''
        }
    }

    async componentDidMount() {
        const cookies = new Cookies();
        const authtoken = cookies.get('authToken')
        const results = await axios.get('http://localhost:8081/mybookings', { // authenticated api
            headers: {
                token: authtoken
            }
        })
        console.log(results)
        if (results.status == 200) {
            this.setState({
                bookings: results.data
            })
        }
    }

    handleTicketCancel = async (bookingId) => {
        const resp = await axios.delete(`http://localhost:8081/ticketdelete/${bookingId}`);
        console.log(resp)
        this.setState({
            bookings: resp.data.data
        })
    }

    openModal = (bookingid) => {
        this.setState({
            open: true,
            bookingID: bookingid
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    updateNumber = (e) => {
        this.setState({
            mobileNumber: e.target.value
        })

    }

    handleUpdate = async () => {
        const resp = await axios.put(`http://localhost:8081/ticketupdate/${this.state.bookingID}`, {
            number: this.state.mobileNumber
        })


        this.setState({
            open: false,
            msg: resp.data.msg
        })

        console.log(resp)
    }

    render() {
        const { bookings, open, msg } = this.state;
        return (
            <div>
                <p className="text-success">{msg}</p>
                {bookings.map(bus => {
                    return (

                        <div className="bookedItem">
                            <span>Booking ID : {bus.bookingid}</span>
                            <div className="busDetails">
                                <h4>{bus.type}</h4>
                                <p>Timings:{bus.time}</p>
                                <b>Price:{bus.price}</b>
                                <span onClick={() => this.openModal(bus.bookingid)}><i class="fas fa-pen"></i></span>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => this.handleTicketCancel(bus.bookingid)}>
                                    Cancel Ticket
                                </button>
                            </div>
                        </div>
                    )
                })
                }
                <Modal show={open} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Info!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Enter New mobile Number:</h6>
                        <input className="form-control" type="number" placeholder="mobile number" onChange={(e) => this.updateNumber(e)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleUpdate}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
