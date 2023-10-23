import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Profile from "./pages/profiles/Profile";
import CreateIssue from "./pages/issues/CreateIssue";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import IssuePage from "./pages/issues/IssuePage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <h1>Home Page</h1>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/issue/create"
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Post an
                  Issue now
                </NavLink>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                >
                  <i className="fa-solid fa-user"></i> My Profile
                </NavLink>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i className="fa-solid fa-right-to-bracket"></i> Sign In
                </NavLink>{" "}
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/issue/1"
                >
                  <i className="fa-solid fa-right-to-bracket"></i> Feed
                </NavLink>
              </>
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/issue/create" render={() => <CreateIssue />} />
          <Route exact path="/myprofile" render={() => <Profile />} />
          <Route exact path="/issue/:id" render={() => <IssuePage />} />
          <Route render={() => <h1>Ooops, this page does not exist</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
