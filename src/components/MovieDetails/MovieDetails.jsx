import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function MovieDetails( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const history = useHistory();
    const movieId = useSelector(store => store.movieId);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const[ thisMovie, setThisMovie ]=useState( {} );

    //use the movie id saved in the store to get the matching movie.description
    useEffect(() => {
        for(let i=0; i<movies.length; i++){
            if (movies[i].id === movieId){
                setThisMovie(movies[i]);
            }
        }
    }, []);

    const backToList = () => {
        console.log( 'in backToList');
        history.push( `/`);
    }

    return(
        <div>
            <h1>Movie Details: {thisMovie.title}</h1>
            <p> { JSON.stringify( thisMovie.description )} </p>
            <br />
            <p>  Genres: </p>
            {genres.map( (genre) => <p>{genre.name}</p>)}
            <button onClick={backToList}>Back to List</button>
        </div>
    )
}

export default MovieDetails;