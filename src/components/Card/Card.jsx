import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import { getSingleMovieRequest } from "../../state/actions/singleMovie";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

function Card(props) {
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
        favourites: firebase.firestore.FieldValue.arrayUnion({img, title, imdbID, year, type}),
      });
  };

  return (
    <div class="wrapper">
      <div class="card">
        <img src={img} alt={title} />
        <div class="descriptions">
          <h1>{title}</h1>
          <h4>{year}</h4>
          <h5>{type}</h5>
          <Link to={`/movie/${imdbID}`}>
            <button onClick={handleClick}>Read More</button>
          </Link>
          <br />
          <br />
          {user.userName ? <button onClick={handleAddToFavs}>Add to fav</button> : ""}
        </div>
      </div>
    </div>
  );
}

export default Card;
