import React from "react";
import s from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={s.container}>
      <button className={s.arrow}></button>
      <span className={s.label}>stations</span>
      <button className={s.switch}></button>
    </div>
  );
};
