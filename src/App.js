import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import store from "./state/store";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home";
import Movie from "./views/movie/Movie";
import LogIn from "./views/logIn/LogIn";
import SignUp from "./views/signUp/SignUp";
import Favourites from "./views/favourites/Favourites";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider preventDuplicate>
        <BrowserRouter>
          <NavBar />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:id" exact component={Movie} />
              <Route path="/login" exact component={LogIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/favourites" exact component={Favourites} />
            </Switch>
          </div>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
