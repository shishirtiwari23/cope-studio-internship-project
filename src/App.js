import styles from "./App.module.scss";
import { Home } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cursor } from "./components";

const App = () => {
  const [cursorClass, setCursorClass] = useState("");
  useEffect(() => {
    function hoverHandler(e) {
      setCursorClass(styles.cursorHover);
    }
    function onMouseLeave(e) {
      setCursorClass("");
    }
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("mouseenter", hoverHandler);
      img.addEventListener("mouseleave", onMouseLeave);
    });
  }, []);
  return (
    <Router basename="/cope-studio-internship-project">
      <div className={styles.container}>
        <Cursor className={cursorClass} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
