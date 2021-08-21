import { useRef, useState } from "react";
import "./SignUp.css";
import { auth, db } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: userNameRef.current.value,
            })
            .then(() => {
              db.collection("users").doc(userAuth.user.uid).set({
                id: userAuth.user.uid,
                email: userAuth.user.email,
                name: userAuth.user.displayName,
                favourites: [],
              });
            });
        });
      history.push("/login");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">SignUp</div>
        <form onSubmit={handleSubmit}>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">User Name</span>
              <input
                type="text"
                ref={userNameRef}
                required
              />
            </div>
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
                placeholder="At least 6 characters"
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                ref={confirmPasswordRef}
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

          <Link className="alreadyAccount" to={"/login"}>
            Already have an account? LogIn
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
