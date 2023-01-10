import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Bussearch from '../Component/BusSearch/bussearch';
import Electricity from '../Component/Electricity';
import Home from '../Component/Home/Home'
import Login from '../Component/Login/Login';
import Mobile from '../Component/Mobile';
import Mybookings from '../Component/Mybookings';
import Navbar from '../Component/Navbar';
import PageNotFound from '../Component/PageNotFound';

export default class RouteComp extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/bus-tickets" component={Home} />
                    <Route path="/recharge" component={Mobile} />
                    <Route path="/electricitybill" component={Electricity} />
                    <Route path="/404" component={PageNotFound} />
                    <Route path="/bus-tickets/search/:source/:destination/:date" component={Bussearch} />
                    <Route path="/mybookings" component={Mybookings} />
                    <Route path="/login" component={Login} />
                    <Redirect to="/404" />
                    {/* <Route />
                    <Route /> */}
                </Switch>
            </Router>
        )
    }
}
