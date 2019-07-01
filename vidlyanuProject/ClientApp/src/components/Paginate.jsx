import _ from 'lodash'
 export function  Paginate (currentPage, moviesPerPage, movies) {

    
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie- moviesPerPage;

    console.log(indexOfLastMovie);
     console.log(indexOfFirstMovie);
     console.log("movies",movies)
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie );
     console.log("", currentMovies);

     return (currentMovies);

}
