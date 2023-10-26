import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProfilePage from "./pages/profiles/Profilepage";
import CreateIssue from "./pages/issues/CreateIssue";
import EditForm from "./pages/issues/Edit";
import IssuePage from "./pages/issues/IssuePage";
import Feed from "./pages/issues/Feed";
import { useAuth } from "./contexts/CurrentUserContext";

function App() {
  const { currentUser } = useAuth();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Feed message="No results found:" />}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/issue/create" render={() => <CreateIssue />} />
          <Route exact path="/myprofile" render={() => <ProfilePage />} />
          <Route exact path="/issue/:id" render={() => <IssuePage />} />
          <Route exact path="/issue/:id/edit" render={() => <EditForm />} />
          <Route render={() => <h1>Ooops, this page does not exist</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
