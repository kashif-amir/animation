import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import { createContext } from "react";
import View from "./components/Category/View";
import Reel from "./components/Reel/Reel"
import Navbar from "./components/Header/Navbar";

export const UserContext = createContext();

function App() {
  const [animation, setAnimation] = useState([]);
  //scroll to top of page during navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          animation,
          setAnimation,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Header />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/view" element={<View />} exact />
            <Route path="/reel" element={<Reel />} exact />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
