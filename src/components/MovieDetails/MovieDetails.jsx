import { useState } from "react";

function MovieDetails( props ){
    // const[ name, setName ]=useState( null );

    return(
        <div>
            <h1>MovieDetails</h1>
            <p> props: { JSON.stringify( props ) } </p>
        </div>
    )
}

export default MovieDetails;