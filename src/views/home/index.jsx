import { useEffect } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../state/userSlice";

import "./index.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          setActiveUser({
            userName: userAuth.displayName,
            userEmail: userAuth.email,
            uid: userAuth.uid,
          })
        );
      }
    });
  }, [dispatch]);
  return (
    <div className="homeContainer">
      <SearchBar />
      <MovieGrid />
    </div>
  );
}

export default Home;
