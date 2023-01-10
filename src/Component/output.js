import React, { Component } from 'react';
import List from './List';

class Output extends Component {
    constructor() {
        super();
        this.state = {
            carsArr: [
                { name: 'TATA', price: 200 },
                { name: 'SKODA', price: 200 },
                { name: 'SUZUKI', price: 200 },
                { name: 'MG', price: 200 }
            ]
        }
    }

    render() {
        const { name, countvalue } = this.props;
        return (
            <>
                <p>{name}</p>
                <h2>Count:{countvalue}</h2>
                {/* <List cars={this.state.carsArr} /> */}
            </>
        )
    }
}

export default Output;