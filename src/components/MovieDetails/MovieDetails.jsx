import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const movieId = useSelector(store => store.movieId);
    const movies = useSelector(store => store.movies);

    const[ thisMovie, setThisMovie ]=useState( {} );

    //use the movie id saved in the store to get the matching movie.description
    useEffect(() => {
        for(let i=0; i<movies.length; i++){
            if (movies[i].id === movieId){
                setThisMovie(movies[i]);
            }
        }
    }, []);

    return(
        <div>
            <h1>Movie Details: {thisMovie.title}</h1>
            <p> { JSON.stringify( thisMovie.description ) } </p>
        </div>
    )
}

export default MovieDetails;