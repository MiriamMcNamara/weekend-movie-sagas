import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function MovieItem( props ){
    // const[ name, setName ]=useState( null );
    const history = useHistory();
    const dispatch = useDispatch();



        //this goes into the new MovieItem component
        const goToDetails = () => {
            console.log( 'in goToDetails', props.movie.id );
            //send dispatch to the store
            dispatch({
                type: 'SET_ID',
                payload: props.movie.id
            })
           //push the url that you want to go to /details/id
           history.push( `/details/` );
       }

    return(
        <div>
            <h1>MovieItem</h1>
                <div key={props.movie.id} >
                    <h3>{props.movie.title}</h3>
                    <img src={props.movie.poster} alt={props.movie.title} onClick={goToDetails} />
                </div>
        </div>
    )
}

export default MovieItem;