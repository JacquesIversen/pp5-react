import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
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
import DisplayProfile from "./pages/profiles/DisplayProfile";

function App() {
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
          <Route exact path="/profile/:id" render={() => <DisplayProfile />} />
          <Route exact path="/issue/:id" render={() => <IssuePage />} />
          <Route exact path="/issue/:id/edit" render={() => <EditForm />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
