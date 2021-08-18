import { useDispatch } from "react-redux";
import "./Card.css";
import { getSingleMovieRequest } from "../../state/actions/singleMovie";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();

  const { img, title, imdbID, year, type } = props;

  const handleClick = (evt) => {
    dispatch(getSingleMovieRequest(imdbID));
  };

  return (
    <div class="wrapper">
      <div class="card">
        <img src={img} alt={title}/>
        <div class="descriptions">
          <h1>{title}</h1>
          <h4>{year}</h4>
          <h5>{type}</h5>
          <Link to={`/movie/${imdbID}`}>
            <button onClick={handleClick}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
