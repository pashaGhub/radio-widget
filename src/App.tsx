import React from "react";
import { ContextProvider } from "./AppContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

import s from "./App.module.css";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className={s.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
