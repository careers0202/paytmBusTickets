import React, { Component } from 'react';

class Count extends Component {
    render() {
        return (
            <div>
                {/* <p>{this.props.handleClick}</p> */}
                <button type="button" onClick={() => this.props.handleChange('inc')}>increment</button>
                <button type="button" onClick={() => this.props.handleChange('dec')}>decrement</button>
            </div>
        );
    }
}

export default Count;