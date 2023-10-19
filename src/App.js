import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { AuthProvider } from "./contexts/CurrentUserContext";

function App() {
  return (
    <AuthProvider>
      <div className={styles.App}>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route render={() => <h1>Ooops, this page does not exist</h1>} />
          </Switch>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
