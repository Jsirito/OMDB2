import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSingleMovieRequest } from "../../state/actions/singleMovie";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { useSnackbar } from "notistack";
import "./Card.css";

function Card(props) {
  const [currentURL, setcurrentURL] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { img, title, imdbID, year, type } = props;

  const handleClick = () => {
    dispatch(getSingleMovieRequest(imdbID));
  };

  const handleAddToFavs = () => {
    db.collection("users")
      .doc(user.uid)
      .update({
        favourites: firebase.firestore.FieldValue.arrayUnion({
          img,
          title,
          imdbID,
          year,
          type,
        }),
      });
    enqueueSnackbar(`${title} was added`, { variant: "success" });
  };

  const removeFromFavs = () => {
    db.collection("users")
      .doc(user.uid)
      .update({
        favourites: firebase.firestore.FieldValue.arrayRemove({
          img,
          title,
          imdbID,
          year,
          type,
        }),
      });
    enqueueSnackbar(`${title} was removed`, { variant: "error" });
  };

  useEffect(() => {
    setcurrentURL(window.location.pathname);
  }, []);

  return (
    <div class="card">
      {img === "N/A" ? (
        <img src="/no-image.png" alt={title} />
      ) : (
        <img src={img} alt={title} />
      )}

      <div class="descriptions">
        <h1>{title}</h1>
        <h4>{year}</h4>
        <h5>{type}</h5>
        <div className="buttonsWrapper">
          <Link
            className="cardButton"
            to={`/movie/${imdbID}`}
            onClick={handleClick}
          >
            Read More
          </Link>
          {user.userName ? (
            <div>
              {currentURL === "/favourites" ? (
                <button className="cardButton" onClick={removeFromFavs}>
                  Remove from Favs
                </button>
              ) : (
                <button className="cardButton" onClick={handleAddToFavs}>
                  Add to Favs
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
