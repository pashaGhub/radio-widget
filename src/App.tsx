import React from "react";
import s from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

const App: React.FC = () => {
  return (
    <div className={s.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
