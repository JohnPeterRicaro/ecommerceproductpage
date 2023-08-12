import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ToCartBttn = ({
  cartTitle,
  cartID,
  cartPrice,
  cartSum,
  cartPic,
  children,
}) => {

  const [data, setData] = useState(() => {
    const getData = JSON.parse(localStorage.getItem("cart"))
    return getData ? getData : [{id: "id", title: "title", price: "price", pics: "pics", sum: 0},]
  })

  const oldSum = data.sum === "undefined" ? 0 : data.sum ? data.sum : data.sum === null ? 0 : 0

  const newSum = cartSum + oldSum

  const CART_DATA = {
    id: cartID,
    title: cartTitle,
    price: cartPrice,
    pics: cartPic,
    sum: newSum,
  };
  
  const handleAddToCart = (product) => {
    console.log(product)
    setData([...data, product])
    localStorage.setItem("cart", JSON.stringify(data))
  }

  return (
    <button
      onClick={() => handleAddToCart(CART_DATA)}
      className="w-[270px] h-[60px] rounded-lg bg-orange text-white flex justify-center items-center gap-[14px] transition ease-in-out hover:opacity-70"
    >
      {children}
    </button>
  );
};

export default ToCartBttn;
