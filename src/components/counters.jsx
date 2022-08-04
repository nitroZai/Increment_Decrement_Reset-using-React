import React, { Component } from 'react';
import Starter from './starter';
import Counter from './counter';

class Counters extends Component {
    
    render() { 

        if (this.props.counters.length === 0) {

            return (
                <h3>There are nothing here, <b>Dumb Fucker</b></h3>
            )

        }

        return (
            <div>
                {/* <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter> */}

                {this.props.counters.map(
                    counter => 
                    <Counter 
                    key={counter.id}
                    value={counter.value}
                    id = {counter.id}
                    onDelete={this.props.onDelete}
                    onReset={this.props.onReset}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    >
            
                    <h4>ID: {counter.id}</h4>

                    </Counter>
                )}

            </div>
        );
    }
}
 
export default Counters;