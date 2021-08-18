import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOutState, selectUserName } from "../../state/userSlice";
import { auth } from "../../firebase";

import "./NavBar.css";

function Navbar() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  async function handleClick(e) {
    e.preventDefault();
    try {
      await auth.signOut();
      dispatch(setUserLogOutState());
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <Link to={"/"} className="nav-logo">
            OMDB
          </Link>
          {!userName ? (
            <ul className="nav-menu">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  SignUp
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-menu">
              <li className="nav-item">
                <Link className="nav-link">Welcome {userName}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Favs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick}>
                  LogOut
                </Link>
              </li>
            </ul>
          )}
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
