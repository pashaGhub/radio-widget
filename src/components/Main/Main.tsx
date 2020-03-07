import React from "react";
import s from "./Main.module.css";

import { Station } from "./Station/Station";

export const Main: React.FC = () => {
  return (
    <div className={s.container}>
      <Station />
    </div>
  );
};
