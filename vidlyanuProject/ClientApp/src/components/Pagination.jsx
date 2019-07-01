import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'

export const Pagination = (props) => {
    const { moviesPerPage, totalMovie, onPageChange } = props;
    
    const pageCount = Math.ceil(totalMovie / moviesPerPage);
    if (pageCount === 1) return null;
    const numbers = _.range(1, pageCount + 1);
    console.log(numbers);
    return (
       
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    {numbers.map((number) => <a key={number} className="page-link"
                        onClick={() => onPageChange(number)}>{number}</a>)}      

                </li>
            </ul>

            </nav>
        
        );
    }

Pagination.propTypes = {


    moviesPerPage: PropTypes.number.isRequired,

    totalMovie: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired

}  
   
 
   



