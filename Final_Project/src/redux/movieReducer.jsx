const initialState = {
    movies: [],
    loading: false,
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };

        case "FETCH_MOVIES":
            return { movies: action.payload, loading: false, error: null };

        case "ERROR":
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default movieReducer;