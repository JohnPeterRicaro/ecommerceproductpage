import { createContext, useContext, useState, useMemo } from "react";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    cart: false,
    notification: 0,
  };

  const CART_KEY = 0;
  const CART_ID = "CARD_ID";
  const CART_TITLE = "DATA_TITLE";
  const CART_PRICE = "CART_PRICE";
  const CART_PIC = "CART_PIC";
  const CART_SUM = 0;

  const CART_DATA = {
    key: CART_KEY,
    id: CART_ID,
    title: CART_TITLE,
    price: CART_PRICE,
    pics: CART_PIC,
    sum: CART_SUM,
  };

  const allShoesData = useMemo(() => {
    return [...mShoesData, ...wShoesData];
  }, []);

  const [sum, setSum] = useState();
  const [prodTotal, setProdTotal] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isIdActive, setIsIdActive] = useState(false);
  const [isData, setIsData] = useState(allShoesData);
  const [isKey, setIsKey] = useState(0);
  const [isRoute, setIsRoute] = useState("/");
  const [isClicked, setIsClicked] = useState(initialState);
  const [isCartData, setIsCartData] = useState([CART_DATA]);

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
        isCartData,
        setIsCartData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
