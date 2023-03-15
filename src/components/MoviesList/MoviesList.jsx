import { Link, useLocation } from "react-router-dom";
import { List } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.map((movie) => (
        <List key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </Link>
        </List>
      ))}
    </div>
  );
};
