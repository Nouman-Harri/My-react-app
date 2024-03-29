import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";
import Alert from "./components/Alert/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

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
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
  };
  const [textColor, setTextColor] = useState("black");

  const toggleMode = (cls) => {
    removeBodyClasses();
    switch (cls) {
      case "primary":
        setTextColor("danger");
        break;
      case "danger":
        setTextColor("primary");
        break;
      case "success":
        setTextColor("danger");
        break;
      case "warning":
        setTextColor("success");
        break;
      case "light":
        setTextColor("warning");
        break;
      case "dark":
        setTextColor("white");
        break;
      default:
    }
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#183969";
      showAlert("Dark mode has been enabled", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "sucess");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextEditor"
          aboutText="About"
          textColor={textColor}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* switch is replaced by routes  */}
          {/* exact is used to follow the proper path */}
          <Routes>
            <Route excat path="/about" element={<About mode={mode} />}></Route>
            <Route
              excat
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to anaylize below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
