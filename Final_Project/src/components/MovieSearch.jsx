import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/movieActions';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setQuery(e.target.value);
        dispatch(searchMovies(e.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Search movies..."
            className="form-control"
            value={query}
            onChange={handleChange}
        />
    );
};

export default MovieSearch;