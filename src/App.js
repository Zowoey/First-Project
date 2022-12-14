import Navbar from "./Navbar";
import Home from "./Home";
import { Create } from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//temp comment

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
