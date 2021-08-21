import { useState, useRef } from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../state/userSlice";
import "./LogIn.css";

function LogIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((userAuth) => {
          dispatch(
            setActiveUser({
              userName: userAuth.user.displayName,
              userEmail: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
          localStorage.setItem("OMDBuserID", userAuth.user.uid);
        });

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
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input
                type="password"
                ref={passwordRef}
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
            Need new account? SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
