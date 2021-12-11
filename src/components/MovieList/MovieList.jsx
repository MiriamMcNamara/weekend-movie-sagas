import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import '../MovieDetails/MovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
            {movies.map( movie=>( <MovieItem movie={movie}  />))}
            </section>
        </main>

    );
}

export default MovieList;