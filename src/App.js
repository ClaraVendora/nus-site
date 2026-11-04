import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  if (user === undefined) return <p>Loading...</p>;

  const Protected = ({ children }) => (user ? children : <Navigate to="/login" replace />);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/academics">Academics</Link> | <Link to="/admission">Admission</Link> |{" "}
        {user ? (
          <>
            <span>{user.email}</span> <button onClick={() => signOut(auth)}>Log out</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/academics" element={<Protected><Academics /></Protected>} />
        <Route path="/admission" element={<Protected><Admission /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;