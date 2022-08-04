import React, { Component } from 'react';

import NavBar from './navbar';
import Counters from './counters';
import Starter from './starter';

class FakeAppMain extends Component {
    
    
    state = { 
    
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]

    } 

    handleIncrement = (counterId) => {
        console.log(" Increment ", counterId)

        const counters = [...this.state.counters]
        
        counters.forEach(element => {
            
            if (counterId === element.id){
                counters[counterId-1].value += 1;
                console.log("Increment Done", counters)
            }

        });

        this.setState(
            {
                counters
            }
        )

    }

    handleDecrement = (counterId) => {
        console.log(" Decrement ", counterId)

        const counters = [ ...this.state.counters ]

        counters.forEach(element => {

            if( element.id === counterId ){
                counters[element.id - 1].value -= 1
                console.log("Decrement done")
            }

        })

        this.setState({
            counters
        })


    }

    handleReset = (counterId) => {
        console.log("Reset Initiated", counterId)

        const counters = [ ...this.state.counters ]

        counters.forEach(element => {

            if( element.id === counterId ){

                element.value = 0

            }

        })

        this.setState({
            counters
        })

        console.log(counters)

    }

    handleDelete = (counterId) => {
        console.log("Delete called", counterId)
        const counters = this.state.counters.filter(
            c => c.id != counterId
        )
        this.setState(
            {
                counters
            }
        )
    } 
    


    render() { 
        return (
        <React.Fragment>
            <NavBar 
                totalCounters={this.state.counters.length}
                activeCounters={this.state.counters.filter(
                    c => c.value > 0 | c.value < 0
                ).length}
                positiveCounters={this.state.counters.filter(
                    c => c.value > 0
                ).length}
                negativeCounters={this.state.counters.filter(
                    c => c.value < 0
                ).length}
            />
                <main className='container'>
                <Counters
                    counters = {this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                    onDecrement={this.handleDecrement}/>
                </main>
        </React.Fragment>
        );
    }
}
 
export default FakeAppMain;
