import { createContext, useContext, useState } from "react";

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
  const CART_SUM = 0

  const CART_DATA = {
    key: CART_KEY,
    id: CART_ID,
    title: CART_TITLE,
    price: CART_PRICE,
    pics: CART_PIC,
    sum: CART_SUM,
  };

  const [sum, setSum] = useState();
  const [prodTotal, setProdTotal] = useState();
  const [isActive, setIsActive] = useState();
  const [isData, setIsData] = useState([]);
  const [isRoute, setIsRoute] = useState("/");
  const [isClicked, setIsClicked] = useState(initialState);
  const [isCartData, setIsCartData] = useState([CART_DATA]);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        sum,
        setSum,
        isActive,
        setIsActive,
        prodTotal,
        isData,
        setIsData,
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
