import { useState, useRef } from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">LogIn</div>
        <form onSubmit={handleSubmit}>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">Email</span>
              <input
                type="text"
                ref={emailRef}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter password"
                required
              />
              {error && <div className="inputError">{error}</div>}
            </div>
          </div>
          <input
            disabled={loading}
            className="button"
            type="submit"
            value="Go!"
          />
          <br />
          <br />

          <Link className="alreadyAccount" to={"/signup"}>
            New Account? SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
