import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./state/store";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home";
import Movie from "./views/movie/Movie";
import LogIn from "./views/logIn/LogIn";
import SignUp from "./views/signUp/SignUp";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" exact component={Movie} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
