import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./global/globalStyles";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import React from "react";

const App:React.FC = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <GlobalStyles />
    </>
  );
}

export default App;
