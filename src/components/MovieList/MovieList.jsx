import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import '../MovieDetails/MovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieItem from '../MovieItem/MovieItem';
import { Link, useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

const goToAddMovie = () => {
    history.push( `/addmovie`);
}

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
            {movies.map( movie=>( <MovieItem movie={movie}  />))}
            </section>
            <button onClick={goToAddMovie}>Add Movie</button>
        </main>

    );
}

export default MovieList;