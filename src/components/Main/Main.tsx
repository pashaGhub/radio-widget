import React, { useContext } from "react";
import { AppContext, IStation } from "../../AppContext";
import { Station } from "./Station/Station";

import s from "./Main.module.css";

export const Main: React.FC = () => {
  const { loader, error, stations } = useContext(AppContext);
  return (
    <div className={s.container}>
      {loader && <div className={s.loader}>loading...</div>}
      {!loader && error && <div className={s.error}>{error}</div>}
      {!loader &&
        !error &&
        stations.map((station: IStation) => {
          return <Station key={station.id} data={station} />;
        })}
    </div>
  );
};
