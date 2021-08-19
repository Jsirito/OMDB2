import { db, auth } from "../../firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../state/userSlice";

function Favourites() {
  const dispatch = useDispatch();

  const userUid = localStorage.getItem("OMDBuserID");

  db.collection("users")
    .doc(userUid)
    .get()
    .then((res) => {
      console.log(res.data().favourites);
    })
    .catch((err) => console.log(err));

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
  return <div>FAVS</div>;
}

export default Favourites;
