import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#18253b";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtilsBro" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/index.html" element={<TextForm heading="Enter the 'text' to analyze" mode={mode} showAlert={showAlert} />}> </Route>
          <Route exact path="/TextUtilsBro/about" element={<About mode={mode} />}></Route>
          <Route exact path="/TextUtilsBro/" element={<TextForm heading="Enter the 'text' to analyze" mode={mode} showAlert={showAlert} />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
