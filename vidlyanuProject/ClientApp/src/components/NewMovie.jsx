import React, { Component } from 'react';
import validate from 'react-joi-validation';
import { genres } from '../services/fakeGenreService'
import { saveMovie } from '../services/fakeMovieService'


export default class NewMovie extends Component {
    state = {

        title: '',
        genre: '',
        numberInStock: '',
        rate: '',
        error: {}
    }
    
    handleInputChange = (e) => {
       
       
        this.setState({

            [e.target.name] : e.target.value

        })


    }
    handleSubmit = (event) => {

        event.preventDefault();
        const data = {
            'title': this.state.title, 'genre': this.state.genre,
            'numberInStock': this.state.numberInStock, 'rate': this.state.rate
        }
        saveMovie(data)
        this.props.history.push("/movies")
    }


    render() {

        return (<div>
            <h1>Register Here</h1>
            <form  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={this.handleInputChange}
                        value={this.state.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select
                        className="form-control"
                        id="genre"
                        name="genre"
                        
                        onChange={this.handleInputChange}
                        value={this.state.genre}>
                        {genres.map((genre) => <option key={genre._id}>{genre.name}</option>)}
                    </select>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="numberinstock">Number In Stock</label>
                    <input type="number"
                        className="form-control"
                        id="numberInStock"
                        name="numberInStock"
                        onChange={this.handleInputChange}
                        value={this.state.numberInStock} />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">Rate</label>
                    <input type="number"
                        className="form-control"
                        id="rate"
                        name="rate"
                        onChange={this.handleInputChange}
                        value={this.state.rate} />
                </div>
                <button type="btn btn-success" className="btn btn-default" >Save</button>
            </form>
        </div>
        );
    }
}

