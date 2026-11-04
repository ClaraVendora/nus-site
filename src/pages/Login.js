import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const messages = {
  "auth/user-not-found": "No account exists for this email. Please sign up first.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/email-already-in-use": "An account with this email already exists. Please log in.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/popup-closed-by-user": "Google sign-in was cancelled.",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();

  const run = async (action) => {
    setNotice("");
    try {
      await action();
      navigate("/");
    } catch (err) {
      setNotice(messages[err.code] || `Login failed: ${err.code}`);
    }
  };

  return (
    <div>
      <h2>Login / Sign up</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />{" "}
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={() => run(() => signInWithEmailAndPassword(auth, email, password))}>Log in</button>{" "}
      <button onClick={() => run(() => createUserWithEmailAndPassword(auth, email, password))}>Sign up</button>{" "}
      <button onClick={() => run(() => signInWithPopup(auth, googleProvider))}>Sign in with Google</button>
      {notice && <p style={{ color: "red" }}>{notice}</p>}
    </div>
  );
}