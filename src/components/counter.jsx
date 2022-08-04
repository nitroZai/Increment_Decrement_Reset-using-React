import React, { Component } from 'react';


class Counter extends Component {
    // state = { 
    //     value: this.props.value
    // }
    
    // handleCounter = () => {

    //     this.setState({
    //         value: this.state.value + 1
    //     })

    // }

    // handleDecrementCounter = () => {
    //     this.setState({
    //         value: this.state.value - 1
    //     })
    // }

    render() { 
        return (
            <div>
                {this.props.children}
                <p className="badge badge-primary">{this.props.value}</p>
                <button onClick={() => this.props.onIncrement(this.props.id)} 
                className="btn btn-secondary btn-sm m-2">Increment</button>
                <button 
                className="btn btn-warning btn-sm m-2"
                onClick={() => this.props.onDecrement(this.props.id)}>Decrement</button>
                <button 
                className="btn btn-danger btn-sm m-2"
                onClick={() => this.props.onDelete(this.props.id)}
                >Delete</button>
                <button className="btn btn-dark btn-sm m-2" onClick={() => this.props.onReset(this.props.id)}>Reset</button>
            </div>
        );
    }
}
 
export default Counter;