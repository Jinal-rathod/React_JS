
import { useState, useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import AuthPage from "./pages/AuthPage.jsx";
import Dashboard from "./components/Dashboard";
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return user ? (
    <Dashboard user={user} setUser={setUser} />
  ) : (
    <AuthPage setUser={setUser} />
  );
}

export default App;
