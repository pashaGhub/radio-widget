import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

import s from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { currentStation } = useContext(AppContext);
  return (
    <div className={s.container}>
      {currentStation != null && (
        <>
          <div className={s.label}>Currently playing</div>
          <div className={s.currentStation}>{currentStation.title}</div>
        </>
      )}
    </div>
  );
};
