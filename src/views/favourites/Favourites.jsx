import { db, auth } from "../../firebase";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./favourites.css";

function Favourites() {
  const [favouritesMovies, setfavouritesMovies] = useState();

  useEffect(() => {
    let userUid = "";
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        userUid = userAuth.uid;
        db.collection("users")
          .doc(userUid)
          .get()
          .then((res) => {
            setfavouritesMovies(res.data().favourites);
          })
          .catch((err) => console.log(err));
      }
    });
  }, []);

  if (!favouritesMovies) {
    return (
      <div>
        <h1>NO FAVS</h1>
      </div>
    );
  }

  return (
    <div className="homeContainer">
      <div className="moviesContainer">
        {favouritesMovies.map((favouriteMovie) => (
          <Card
            img={favouriteMovie.img}
            title={favouriteMovie.title}
            imdbID={favouriteMovie.imdbID}
            year={favouriteMovie.year}
            type={favouriteMovie.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
