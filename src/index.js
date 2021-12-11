import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchThisMovieGenres)
    yield takeEvery('POST_MOVIE', postMovie);
}

function* postMovie( action ) {
    console.log( '--------> in postMovie', action.payload );
    try {
        const response = yield axios.post('/api/movie', action.payload);
        console.log( 'adding movie: ', response.data );
        yield put( { type: 'FETCH_MOVIES', payload: response.data } );
        alert( 'movie saved!' );
    } catch( err ){
        alert( 'no' );
        console.log( err );
      }
}

function* fetchThisMovieGenres( action ) {
    console.log ('---------->', action.payload);
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
//used to store the movie_id for the MovieDetails page
const movieId = ( state ={}, action ) =>{
    console.log( 'inventory reducer:', action );
    if( action.type === 'SET_ID' ){
      return action.payload;
    }
    return state;
  }

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieId
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
