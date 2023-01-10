import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import './Home.scss'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            from: '',
            to: '',
            date: '',
            errorMsg: ''
        }

        console.log('initilisation phase ----> constructor')
    }

    // componentWillMount() {
    //     console.log('Mounting Phase----> componentWillMount')
    // }

    handleData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRoute = () => {
        const { from, to, date } = this.state;
        if (from && to && date) {
            const url = `/bus-tickets/search/${from}/${to}/${date}`;
            this.props.history.push(url)
            // go to search
        } else {
            this.setState({
                errorMsg: 'Please enter all required details'
            })
        }
    }

    componentDidMount() {
        console.log('Mounting Phase ----> componentDidMount');
        // API calls
        this.count = 0; // global variable declaration
        this.timer = setInterval(() => {
            this.count = this.count + 1
        }, 1000)
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    // componentWillUpdate() {
    //     console.log('Updating Phase ----> compoentWillUpdate');
    // }

    componentDidUpdate() {
        console.log('Updating Phase ----> compoentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Unmounting phase--->componentWillUnmount')
        console.log('time spent', this.count)
        clearInterval(this.timer)
    }

    render() {
        console.log('render called');
        const { from, to, date, errorMsg } = this.state;
        return (
            <div>
                <div>
                    <b>No Wallet KYC Required</b>
                    <span>&#128522;</span>
                    <span>to pay using UPI on Paytm.</span>
                    <b>Learn more.</b>mn
                </div>

                <div className="paytmOptions">
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <Link to="/recharge"><p>Mobile</p></Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <Link to="/electricitybill"><p>Electricity</p></Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <Link to="/dth-recharge"><p>DTH</p></Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <p>Gas</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <p>Fees</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-mobile-screen"></i>
                        <p>Gold</p>
                    </div>
                </div>

                <div className="container">
                    <div className="bookingform">
                        <div className="travelOptions">
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/b2411b61.svg" />
                                <span>Flights</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/21b54170.svg" />
                                <span>Bus</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/05113c67.svg" />
                                <span>Trains</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/b2411b61.svg" />
                                <span>International Flights</span>
                            </div>
                        </div>
                        <div>
                            <h4>Book Bus tickets</h4>
                            <input type="radio" id="oneway" name="journeytype" checked />
                            <label for="oneway">One way</label>
                            <input type="radio" id="roundtrip" name="journeytype" />
                            <label for="roundtrip">Round way</label>
                        </div>
                        <div className="journeyDates">
                            <input type="text" name="from" placeholder="From" onChange={(event) => this.handleData(event)} />
                            <span className="avatar">
                                <img src="//drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/cce6cd0a.svg" />
                            </span>

                            <input type="text" name="to" placeholder="To" onChange={(event) => this.handleData(event)} />
                            <input type="date" name="date" onChange={(event) => this.handleData(event)} />
                            <input type="date" />
                            <button type="button" onClick={() => this.handleRoute()}>
                                Search</button>
                        </div>
                        <p className="text-danger">{errorMsg}</p>

                    </div>

                    <div className="offerContainer">
                        <h3>Offers</h3>
                        <div className="offers">
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                            <div>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1629292559088.jpg" />
                                <p>Use promocode: Happy Bus</p>
                            </div>
                        </div>

                    </div>
                    <section>
                        <div>
                            <h3>Book Bus Tickets with Paytm</h3>
                            <p>
                                Now,
                                <b>book your bus tickets</b>
                                on Paytm and make your bus booking experience smoother and more affordable. Paytm
                                allows you to <b>book tickets</b> from anywhere in India at the lowest price.
                            </p>
                            <p>To book your bus tickets on Paytm, just fill in the requisite information in the required fields and
                                customise
                                your trip. Paytm gives you the privilege to plan your trip on your own. We provide you an array of
                                options
                                for
                                your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer,
                                for
                                your
                                trip. You can search for availability of the bus by entering the time and date of the ticket
                                reservation. We
                                also facilitate you to choose the seat you want from all available seats in the bus.
                            </p>
                            <p>Thanks to our autofill function, you don’t have to enter your details while doing your bookings
                                again.
                                Advanced
                                traveller details prediction will prompt profile information based on your past ticket reservation
                                history.
                            </p>
                        </div>

                        <div>
                            <h3>Easy Booking and Payment Options</h3>
                            <p>Paytm ensures smooth payment experience for the users by making wallet payment secure and quicker. On
                                Paytm,
                                you
                                can book your bus tickets in less than a minute without any hassle. Make sure that you have enough
                                balance
                                in
                                your Paytm wallet, as it helps you in faster checkout. Having a registered Paytm wallet can also
                                offer
                                you
                                loads
                                of benefits.

                                You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking.
                                In
                                case
                                of
                                failed booking, your money is refunded back to your wallet in less than 15 minutes. For any
                                assistance,
                                you
                                can
                                visit our dedicated 24/7 helpline service on <a href="http://m.p-y.tm/hlpsprt"
                                    target="_blank">http://m.p-y.tm/hlpsprt</a>
                                for helpline numbers and any
                                kind of
                                customer support. So, skip the long queues at the bus booking counters now and book tickets on
                                Paytm,
                                from
                                the
                                comfort of your home.</p>
                        </div>

                        <div>
                            <h3>Why Make Bus Reservations With Paytm</h3>
                            <p className="highlight">Paytm has an edge over the other online bus ticket booking platforms in India as we
                                keep implementing
                                new
                                features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses
                                to
                                Volvo
                                AC
                                buses and other luxury buses, you can book all types of bus tickets on Paytm.</p>
                            <ul>
                                <li>Free Cancellation</li>
                                <li>Instant Refunds</li>
                                <li>Easy & Quick Bus Booking</li>
                                <li>24/7 Customer Assistance</li>
                            </ul>
                        </div>
                    </section>

                    <div className="card m-4 p-4">
                        <h4>Top Routes</h4>
                        <section className="d-flex flex-wrap">
                            <div className="d-flex w-50 justify-content-between align-items-center mb-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                        </section>

                        <section className="row">
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center mb-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center my-2">
                                <span>Bengaluru To Hyderabad</span>
                                <button type="button" className="btn btn-outline-primary">Book Now</button>
                            </div>

                        </section>
                    </div>
                    <div className="chatbot">
                        <img src="https://static.abhibus.com/chatbot/chat-pop.png" />
                    </div>
                    <div className="offerNote">Paytm will provide best offers always offercode: HAPPY REACT</div>
                </div>
                <footer>
                    <b>Be Safe. Be Vilgilant</b>
                    <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information with
                        anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such
                        communications & report to us at cybercell@paytmbank.com</p>

                </footer>

            </div>
        )
    }
}

export default withRouter(Home);
