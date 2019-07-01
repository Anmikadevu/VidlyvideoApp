import React, { Component } from 'react';
import { movies}  from '../services/fakeMovieService';


import { Link } from 'react-router-dom'
import { Pagination } from './Pagination';
import { Genres } from './Genres';
import { MovieTable } from './MovieTable';
import { Paginate } from './Paginate'
import NewMovie from './NewMovie';

export class Movie extends Component {
   
    constructor(props) {
        super(props);
        const details = Object.assign([], movies);
        
        this.state = {


            movies: details,
            moviesPerPage:3,
            currentPage: 1,
           
        }
        

    }
    
    handleDelete=(obj)=> {


        let movies = this.state.movies.filter((m) => m._id !== obj._id)
        
        this.setState  ({

            movies

        })
        console.log(this.state.movies)

    }
    handleSelect = (selectedGenre) => {
      
        const newMoviesList = selectedGenre ? movies.filter((m) => m.genre._id === selectedGenre._id) : movies;
       
        this.setState({

            movies: newMoviesList

        })

    }
    handlePageChange = (page) => {

        this.setState({

            currentPage: page

        })


    }
    updateNewMovie = (newMovie) => {




    }
   
    render() {
        const count = this.state.movies.length
        const { moviesPerPage, currentPage,movies} = this.state
        const allMovies = Paginate(currentPage, moviesPerPage, movies)
        const newMovie=
        console.log("allMovies", allMovies)

        const decision = this.state.movies.length === 0 ? "no" : this.state.movies.length
      
        let tableData = allMovies.map((movie, index) =>
            <tr key={index}>
                <td ><Link to={`/movie/${movie._id}`}>{movie.title}</Link></td>
                  <td >{movie.genre.name}</td>
                  <td >{movie.numberInStock}</td>
                  <td >{movie.dailyRentalRate}</td>
                  <td> <button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                </tr>)



            return (

                <div className="container">
                    <Genres
                        onSelect={this.handleSelect} />
                    <h2>There are {decision} movies in the list</h2>
                    <Link className="btn btn-primary" to="/movies/new">AddNew</Link>
                   
                    <MovieTable
                        tableData={tableData}
                        movies={this.state.movies} />
                    <Pagination
                        totalMovie={count}
                        moviesPerPage={this.state.moviesPerPage}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                    
                   
                </div>


            );
        }
    }
