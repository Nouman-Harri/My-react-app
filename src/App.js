import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#183969";
      showAlert("Dark mode has been enabled", "sucess");
      document.title = "Harry - Dark mode";
      // setInterval(() => {
      //   document.title = "install my app";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "subscribe my app";
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "sucess");
      document.title = "Harry - Light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Harry"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">{/* <About /> */}</div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to anaylize below"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
