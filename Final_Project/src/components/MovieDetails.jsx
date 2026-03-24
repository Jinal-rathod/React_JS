import React from 'react';

const MovieDetails = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Release: {movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetails;