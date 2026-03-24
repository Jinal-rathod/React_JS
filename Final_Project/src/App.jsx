import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Navbar from './components/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'

function App() {

  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  if (isLoading) return "Loading...";

  return isAuthenticated ? (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <div className='flex justify-center items-center h-screen gap-5 bg-gray-300'>
        <button onClick={signup} className='border border-3 px-10 py-3 font-medium rounded-full bg-white'>Signup</button>

        <button onClick={login} className='border border-3 px-10 py-3 font-medium rounded-full bg-white'>Login</button>
      </div>

    </>
  );
}

export default App;

