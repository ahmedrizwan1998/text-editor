import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    });
    setTimeout(() => {
        setAlert(null);
    }, 1200)
  }

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0c24";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggleTheme}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter text below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
