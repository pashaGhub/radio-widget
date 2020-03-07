import React from "react";
import s from "./Station.module.css";

export const Station: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.stationController}>
        <button className={s.minus}></button>
        <img
          src="https://cdn-products.eneba.com/resized-products/XBtltUY46wP7bjxl5h1mmzTnWj4CbEUwlNm2H-dNnYQ_390x400_1x-0.jpeg"
          alt=""
        />
        <button className={s.plus}></button>
      </div>
      <button className={s.stationInfo}>
        <span>Dribbble FM</span>
        <span className={s.stationWave}>101,2</span>
      </button>
    </div>
  );
};
