import React, { Component } from 'react';
import { genres } from '../services/fakeGenreService'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
 export class   Genres  extends Component {
     state = {

      selectedGenre:[]

     }
     handleSelect = (genre) => {

         this.setState({

             selectedGenre: genre
         })
         let data = Object.assign([], this.state.selectedGenre)
         this.props.onSelect(data);
     }
     
    
    render() {
        return (
            <ListGroup as="ul">
                <ListGroupItem as="li" active>
                  All Genres
                  </ListGroupItem>
                {genres.map((genre) => <li key={genre._id}> <a onClick={() => this.handleSelect(genre)} as="li">{genre.name}</a></li>)

                }

          </ListGroup>
        );
    }
}

