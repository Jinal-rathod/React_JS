import axios from 'axios';

const API_KEY = "a35bba37bb4ceeb9d11aa7d79f7261e1";

export const fetchPopularMovies = () => async (dispatch) => {
    dispatch({ type: "LOADING" });

    try {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        dispatch({ type: "FETCH_MOVIES", payload: res.data.results });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
};

export const searchMovies = (query) => async (dispatch) => {
    dispatch({ type: "LOADING" });

    try {
        const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );

        dispatch({ type: "FETCH_MOVIES", payload: res.data.results });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
    }
};