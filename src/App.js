import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import { createContext } from "react";
import View from "./components/Category/View";
import Reel from "./components/Reel/Reel"

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/view/:category/:id" element={<View />} />
            <Route path="/reel" element={<Reel />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
