import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";

function App() {
  //scroll to top of page during navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
