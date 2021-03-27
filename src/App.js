import "./App.css";
import { Switch, Route } from "react-router-dom";
import Members from "./pages/members/Members";
import User from "./pages/user/User";
import Sports from "./pages/sports/Sports";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/user/:id" component={User} />
        <Route path="/sports" component={Sports} />
        <Route path="/members" component={Members} />
      </Switch>
    </div>
  );
}

export default App;
