import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import Content from "./pages/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <h1>Hello World din bitch</h1>
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}

export default App;
