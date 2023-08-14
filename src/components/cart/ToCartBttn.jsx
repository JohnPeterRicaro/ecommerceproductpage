import { useStateContext } from "@/contextprovider/ContextProvider";
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
    const getData = JSON.parse(localStorage.getItem("cart"));
    return getData ? getData : [];
  });
  const { setDataLength } = useStateContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data));
    setDataLength(data.length);
  }, [data, setDataLength]);

  const CART_DATA = {
    id: cartID,
    title: cartTitle,
    price: cartPrice,
    pics: cartPic,
    sum: cartSum,
  };

  const handleAddToCart = (product) => {
    setData((prevData) => [...prevData, product]);
    window.location.reload(false)
  };

  return (
    <button
      onClick={() => handleAddToCart(CART_DATA)}
      className="w-full md:w-[270px] h-[60px] rounded-lg bg-orange text-white flex justify-center items-center gap-[14px] transition ease-in-out hover:opacity-70 boxOrangeShadow"
    >
      {children}
    </button>
  );
};

export default ToCartBttn;
