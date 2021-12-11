import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie( props ){

    const dispatch = useDispatch();
    // const[ name, setName ]=useState( null );
    const[ addMovie, setAddMovie ]=useState( {
        title: '',
        poster: '',
        description: '',
        genre_id: 0
    } );

    const postMovie = ()=>{
        console.log( 'in postMovie' );
        dispatch({
            type: 'POST_MOVIE',
            payload: addMovie
        });
    }

    const handleTitle = (event )=>{ //input capture
        console.log( 'in handleTitle:', event.target.value);
        setAddMovie( {...addMovie, title: event.target.value} );
    }
    const handlePoster = (event )=>{ //input capture
        console.log( 'in handlePoster:', event.target.value);
        setAddMovie( {...addMovie, poster: event.target.value} );
    }

    const handleDescription = (event )=>{ //input capture
        console.log( 'in handleDescription:', event.target.value);
        setAddMovie( {...addMovie, description: event.target.value} );
    }

    const handleGenre = (event )=>{ //input capture
        console.log( 'in handleGenre:', event.target.value);
        setAddMovie( {...addMovie, genre_id: Number(event.target.value)} );
    }

    return(
        <div>
            <h1>Add A Movie</h1>
            <br />
            <label for="title">Enter the Movie Title: </label>
            <input type='text' placeholder='movie title' onChange={(event ) =>handleTitle ( event )}></input>
            <br />
            <label for="poster">Enter the Movie's Poster URL: </label>
            <input type='text' placeholder='movie poster URL' onChange={(event ) =>handlePoster ( event )}/>
            <br />
            <label for="description">Enter the Movie's Description: </label>
            <textarea type='text' placeholder='movie description' onChange={(event ) =>handleDescription ( event )} />
            <br />
            <label for="genre">Select a Genre: </label>
            <select name="genre" id="genre" onChange={(event ) =>handleGenre ( event )}>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space Opera</option>
                <option value="13">Superhero</option>
            </select>
            <br />
            <button>Cancel</button>
            <br />
            <button onClick={postMovie}>Save</button>
{/* - a textarea (for the movie description)
- a dropdown (for the genres)

The Add Movie page should have the buttons:

- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should save these inputs in the database and 
bring the user to the Home/List Page (which now has the new movie) */}
        </div>
    )
}

export default AddMovie;