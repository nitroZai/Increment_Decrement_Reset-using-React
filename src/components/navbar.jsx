import React, { Component } from 'react';

// const NavBar = (props) => { 
        // return (

        //     <nav className="navbar navbar-light bg-light">
        //     <a href="#" className="navbar-brand">
        //         NavBar{" "}
        //         <span className='badge badge-pill badge-secondary'>
        //             {props.totalCounters}
        //         </span>
        //     </a>
        //     <a className="navbar-brand" href="#">There are {props.totalCounters} Counters in total.</a>
        //     <a href="#" className="navbar-brand"> Positive Counters: {props.positiveCounters}  </a>
        //     <a href="#" className="navbar-brand"> Negative Counters: {props.negativeCounters}</a>
        //     <a href="#" className="navbar-brand"> Total Active Counters: {props.activeCounters} </a>
            
        //     </nav>

        // );

// TODO: Stateless Functional Components using Parameter Destructuring
// The same destructing can be applied in rest of the components, mainly when they are used with Props
const NavBar = ({totalCounters, activeCounters, negativeCounters, positiveCounters}) => { 

        return (
            <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                NavBar{" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalCounters}
                </span>
            </a>
            <a className="navbar-brand" href="#">There are {totalCounters} Counters in total.</a>
            <a href="#" className="navbar-brand"> Positive Counters: {positiveCounters}  </a>
            <a href="#" className="navbar-brand"> Negative Counters: {negativeCounters}</a>
            <a href="#" className="navbar-brand"> Total Active Counters: {activeCounters} </a>
            
            </nav>
        );
}

// class NavBar extends Component {
//     state = {  } 
    
// }
 
export default NavBar;