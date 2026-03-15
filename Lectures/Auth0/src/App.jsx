import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import Layout from './components/Layout';

function App() {

  const { isAuthenticated, loading } = useAuth0();

  console.log(isAuthenticated);
  console.log(loading);

  return (
    <>
      <Layout />
    </>
  )
}

export default App
