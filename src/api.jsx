import axios from "axios";


const KEY = '92482f3e0360ce24426b46fb170dce96';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



export const getTrandingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};


export const getSearchMovie = async (name) => {
    const response = await axios.get(`search/movie?api_key=${KEY}&query=${name}`);
  return response.data.results;
}


export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};



export const getCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};


export const getReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};