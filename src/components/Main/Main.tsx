import React, { useContext } from "react";
import { AppContext, IStation } from "../../AppContext";
import { Station } from "./Station/Station";

import s from "./Main.module.css";

export const Main: React.FC = () => {
  const { stations } = useContext(AppContext);
  return (
    <div className={s.container}>
      {stations.map((station: IStation) => {
        return <Station key={station.id} data={station} />;
      })}
    </div>
  );
};
