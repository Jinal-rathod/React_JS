import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/movieActions.jsx';

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error: {error}</h3>;

    return (
        <div className="">
            <h2 className='my-8 text-3xl text-purple-700 font-bold text-center'>Popular Movies</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 mx-auto">
                {movies.map(movie => (
                    <div className="col-md-3" key={movie.id}>
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col w-[600px] h-[400px] items-center bg-neutral-primary-soft p-3 border rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
                            >
                                <img
                                    className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt=""
                                />
                                <div className="flex flex-col justify-between md:p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
                                        {movie.title}
                                    </h5>
                                    <p className="mb-6 text-body">
                                        {movie.overview}
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;