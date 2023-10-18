import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import Content from "./pages/Content";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign In</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign Up</h1>} />
          <Route render={() => <h1>Ooops, this page does not exist</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
