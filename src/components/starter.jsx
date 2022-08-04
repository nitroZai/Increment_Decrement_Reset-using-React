import React, { Component } from 'react';
import { getMovies, getMovie, deleteMovie, saveMovie } from '../services/fakeMovieService';


export default class Starter extends Component {

    // state = {
    //     count: 0
    // }

    // arrowHandleButton = () => {

    //     this.setState({

    //         count: this.state.count +  1

    //     }, () => console.log("Callback called", this.state.count))

    // }


    // render() {
    //     return (
        
    //         <div className="container">
    //             <h2 className='container'>Counter</h2>
    //             <button className="btn btn-primary" onClick={this.arrowHandleButton}>Increment</button>
    //             <p>{this.state.count}</p>
    //         </div>

    //     )
    // }


    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {

        const movies = this.state.movies.filter(m => m._id !== movie._id)

        this.setState({
            movies
        })
    }

    render() {

        const {length: movieCount} = this.state.movies;

        if (movieCount === 0){
            return <h3>There are no movies in here. <b>Get the fuck out of here.</b></h3>
        }

        return (
                <React.Fragment>
                    <h3>There are {movieCount} movies in the table list.</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map(
                                    movie => (
                                        <tr key={movie._id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>
                                                <button
                                                onClick={() => this.handleDelete(movie)}
                                                className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                    
                        </tbody>
                    </table>
                </React.Fragment>
        )
    }

}