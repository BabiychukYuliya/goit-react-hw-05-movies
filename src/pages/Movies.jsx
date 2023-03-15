
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'api';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const name = searchParams.get("name");


    useEffect(() => {
        if (!name) return;

        getSearchMovie(name).then(setMovies);

    }, [name]);


  const handleSubmit = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

    return (<>
        <Searchbar onSearch={handleSubmit} />
        <MoviesList movies={movies} />
    </>)
    
};

export default Movies;