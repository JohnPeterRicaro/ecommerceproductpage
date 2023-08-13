import { createContext, useContext, useState, useMemo } from "react";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sum, setSum] = useState();
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isIdActive, setIsIdActive] = useState(false);
  const [isData, setIsData] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [isKey, setIsKey] = useState(0);
  const [isRoute, setIsRoute] = useState("/");

  return (
    <StateContext.Provider
      value={{
        sum,
        setSum,
        isCheckOut,
        setIsCheckOut,
        isIdActive,
        setIsIdActive,
        isData,
        setIsData,
        dataLength,
        setDataLength,
        isKey,
        setIsKey,
        isRoute,
        setIsRoute,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
