import React from "react";
import s from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.label}>Currently playing</div>
      <div className={s.currentStation}>Dribbble FM</div>
    </div>
  );
};
