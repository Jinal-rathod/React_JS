import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieReducer';

const store = configureStore({
    reducer: movieReducer
});

export default store;