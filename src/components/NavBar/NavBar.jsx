import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOutState, selectUserName } from "../../state/userSlice";
import { auth } from "../../firebase";

import "./NavBar.css";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(selectUserName);

  async function handleLogOut(e) {
    e.preventDefault();
    try {
      await auth.signOut();
      dispatch(setUserLogOutState());
      localStorage.removeItem("OMDBuserID");
      history.push("/");
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
              {/* <li className="nav-item">
                <div className="nav-link">
                  Welcome {userName}
                </div>
              </li> */}
              <li className="nav-item">
                <Link to="/favourites" className="nav-link">
                  Favs
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogOut}>
                  LogOut
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
