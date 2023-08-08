import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ToCartBttn = ({
  cartKey,
  cartTitle,
  cartID,
  cartTotalItem,
  cartPrice,
  cartSum,
  cartPic,
  children,
}) => {

  const CART_DATA = {
    id: cartID,
    title: cartTitle,
    price: cartPrice,
    pics: cartPic,
    sum: cartSum,
  };

  return (
    <button
      className="w-[270px] h-[60px] rounded-lg bg-orange text-white flex justify-center items-center gap-[14px] transition ease-in-out hover:opacity-70"
    >
      {children}
    </button>
  );
};

export default ToCartBttn;
