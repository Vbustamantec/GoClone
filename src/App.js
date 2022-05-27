import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="text-2xl bg-gray-100 dark:bg-gray-900 dark:text-gray-200  ">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
