import { createContext, useContext, useState, useMemo } from "react";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [sum, setSum] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isIdActive, setIsIdActive] = useState(false);
  const [isData, setIsData] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [isKey, setIsKey] = useState(0);
  const [isRoute, setIsRoute] = useState("/");

  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        sum,
        setSum,
        mobileMenu,
        setMobileMenu,
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

export default useStateContext;
