import React, { createContext, useState, useEffect } from "react";
import { data } from "./data";

export interface IStation {
  id: number;
  title: string;
  waves: number;
  img: string;
}

interface ICurrentStaion {
  id: number;
  title: string;
}

interface IState {
  stations: IStation[];
  currentStation: ICurrentStaion | null;
}

const initialState: IState = {
  stations: [],
  currentStation: null
};

export const AppContext = createContext<IState | any>(initialState);

export function ContextProvider(props: any): JSX.Element {
  const [stations, setStations] = useState<IStation[]>([]);
  const [currentStation, setCurrentStation] = useState<ICurrentStaion | null>(
    null
  );
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<String>("");

  //simulating data fetch
  async function getData() {
    setLoader(true);
    if (data) {
      await setStations([...data]);
    } else {
      setError("there is no data");
    }
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{ stations, currentStation, setCurrentStation, loader, error }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
