import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#183969";
      showAlert("dark mode has been enabled", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "sucess");
    }
  };
  return (
    <>
      <Navbar
        title="Harry"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert Alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <About />
        <TextForm heading="Enter the text to anaylize below" mode={mode} />
      </div>
    </>
  );
}
export default App;
