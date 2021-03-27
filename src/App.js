import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <h1>Amsterdam Sports Inc</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
