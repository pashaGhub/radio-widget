import React, { useContext } from "react";
import { AppContext, IStation } from "../../../AppContext";
import s from "./Station.module.css";

export const Station: React.FC<{ data: IStation }> = ({ data }) => {
  const { currentStation, setCurrentStation } = useContext(AppContext);

  //checking if station is open and adding "open" style
  const styles = [s.container];
  if (currentStation != null && currentStation.id === data.id) {
    styles.push(s.open);
  }

  //changing dot by comma in the wave number
  const waveNum = data.waves
    .toString()
    .replace(/[,.]/g, m => (m === "," ? "." : ","));

  return (
    <div className={styles.join(" ")}>
      <div className={s.stationController}>
        <button className={s.minus}></button>
        <img src={data.img} alt="" />
        <button className={s.plus}></button>
      </div>
      <button className={s.stationInfo}>
        <span>{data.title}</span>
        <span className={s.stationWave}>{waveNum}</span>
      </button>
    </div>
  );
};
