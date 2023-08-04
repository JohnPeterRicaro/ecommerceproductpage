import { createContext, useContext, useState, useMemo } from "react";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    cart: false,
    notification: 0,
  };


  const [sum, setSum] = useState();
  const [prodTotal, setProdTotal] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isIdActive, setIsIdActive] = useState(false);
  const [isData, setIsData] = useState();
  const [isKey, setIsKey] = useState(0);
  const [isRoute, setIsRoute] = useState("/");
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true, notification: prodTotal });
  };

  return (
    <StateContext.Provider
      value={{
        sum,
        setSum,
        isActive,
        setIsActive,
        isIdActive,
        setIsIdActive,
        prodTotal,
        isData,
        setIsData,
        isKey,
        setIsKey,
        setProdTotal,
        isRoute,
        setIsRoute,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
