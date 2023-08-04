import { AiOutlineShoppingCart } from "react-icons/ai";

const ToCartBttn = ({
  cartKey,
  cartID,
  cartTitle,
  cartTotalItem,
  cartPrice,
  cartSum,
  cartPic,
  children,
}) => {
  const [isCart, setCart] = [];

  const CART_KEY = 0;
  const CART_ID = "CARD_ID";
  const CART_TITLE = "DATA_TITLE";
  const CART_TOTAL = "CART_TOTAL";
  const CART_PRICE = "CART_PRICE";
  const CART_PIC = "CART_PIC";
  const CART_SUM = 0;

  const CART_DATA = {
    key: CART_KEY,
    id: CART_ID,
    title: CART_TITLE,
    total: CART_TOTAL,
    price: CART_PRICE,
    pics: CART_PIC,
    sum: CART_SUM,
  };

  const handlerCartData = ({...data}) => {
    console.log(data)
  }

  return (
    <button onClick={() => handlerCartData({...CART_DATA})} className="w-[270px] h-[60px] rounded-lg bg-orange text-white flex justify-center items-center gap-[14px] transition ease-in-out hover:opacity-70">
        {children}
    </button>
  );
};

export default ToCartBttn;
