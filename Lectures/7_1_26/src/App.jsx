import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import Blog from './Pages/Blog.jsx'
import Navbar from "./pages/Navbar";
import Error from "./Pages/Error.jsx";

function App() {
  return (
    <div className="p-6">
      {/* <nav className="flex gap-4 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
