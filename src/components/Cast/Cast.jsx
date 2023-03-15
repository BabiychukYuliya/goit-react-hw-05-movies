import { getCast } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actor } from "pages/MovieDetails/MovieDetails.styled";


const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

    
    useEffect(() => { 
        getCast(movieId).then(setMovieCast)
    }, [movieId]);

      if (!movieCast) {
    return;
  }

    return ( <>
      <ul >
        {movieCast.map(actor => (
          <li key={actor.id} >
            <Actor
              src={actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={actor.original_name}
            />
            <h3>{actor.name}</h3>
            <p>As: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>)
}

export default Cast;