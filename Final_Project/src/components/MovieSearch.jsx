import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = "a35bba37bb4ceeb9d11aa7d79f7261e1";

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                );
                setMovies(res.data.results);
                setFilteredMovies(res.data.results);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [query, movies]);

    return (
        <div>
            <div className='flex justify-center'>
                <input
                    type="text"
                    placeholder="Search popular movies..."
                    className="w-[50%] border rounded-full px-3 py-2 mt-5"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {loading && <h3 className="text-center mt-5">Loading...</h3>}

            {!loading && filteredMovies.length === 0 && (
                <h3 className="text-center mt-5">No movies found</h3>
            )}

            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {filteredMovies.map(movie => (
                    <div key={movie.id}>
                        <div className="flex flex-col w-[600px] h-[400px] items-center p-3 border rounded shadow md:flex-row md:max-w-xl">
                            <img
                                className="object-cover w-full h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="flex flex-col justify-between md:p-4">
                                <h5 className="text-2xl font-bold">
                                    {movie.title}
                                </h5>
                                <p>
                                    {movie.overview?.slice(0, 100)}...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;