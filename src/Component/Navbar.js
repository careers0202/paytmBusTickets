import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navbar(props) {

    const handleLogin = () => {
        props.history.push('/login')
    }

    return (
        <div>
            <header className="d-flex">
                <Link to='bus-tickets'>
                    <img src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png" width="180px"
                        alt="paytm logo" />
                </Link>
                <nav>
                    <b>Paytm for Consumer</b>
                    <b>Paytm For Business</b>
                    <b>Investor Relations</b>
                    <b>Company</b>
                    <b>Career</b>
                    <b><Link to="/mybookings">MyBookings</Link></b>
                </nav>
                <a href="https://paytm.com/care/bustickets/">link</a>
                <div className="loginBtn" onClick={() => handleLogin()}>
                    <span>Sign in</span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/loginImg.svg" alt="profilelogo" />
                </div>
            </header>
        </div>
    )
}

export default withRouter(Navbar);
