import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./state/store";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home";
import Movie from "./views/movie/Movie";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" exact component={Movie} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
