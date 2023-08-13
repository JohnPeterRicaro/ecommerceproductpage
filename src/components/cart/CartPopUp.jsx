import { useStateContext } from "@/contextprovider/ContextProvider";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartPopUp = ({ isCart, data, dataLength }) => {
  const { isCheckOut, setIsCheckOut, setDataLength } = useStateContext();
  const [isData, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, [data]);

  const handleRemove = (index) => {
    const updatedData = [...isData];
    updatedData.splice(index, 1);
    setData(updatedData);
    setDataLength(updatedData.length);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  return (
    <>
      {isCart && (
        <div className="absolute z-40 w-[360px] h-auto shadow-lg rounded-lg bg-white translate-y-[200px] -translate-x-[40px]">
          <div className="w-full py-[24px] px-[24px] border-b-[1px] border-gray-200 text-xl font-bold text-gray-800 text-left">
            Cart
          </div>
          {dataLength > 0 ? (
            <>
              <div>
                <div className="w-full h-[200px] overflow-y-scroll p-[24px] space-y-[10px]">
                  {isData.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-[20px]"
                      >
                        <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
                          <img src={data.pics} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <h3 className="w-[150px] h-[20px] truncate">
                            {data.title}
                          </h3>
                          <div className="flex justify-center items-center gap-[5px]">
                            <h4 className="text-base text-grayish-blue">
                              ${data.price} x {data.sum}
                            </h4>
                            <h4 className="font-bold text-base text-gray-800">
                              ${parseFloat(data.price) * data.sum}
                            </h4>
                          </div>
                        </div>
                        <button onClick={() => handleRemove({index})} className="group">
                          <FaTrashAlt className="text-gray-400 transition ease-in-out group-hover:text-orange"/>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="mb-[20px] flex justify-center items-center">
                  <button
                    onClick={() => setIsCheckOut(!isCheckOut)}
                    className="w-[85%] h-[50px] rounded-lg bg-orange text-white text-xl font-bold transition ease-in-out hover:bg-opacity-70"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <>
                <div className="w-full h-[200px] text-xl font-bold text-gray-500 flex justify-center items-center">
                  Your cart is empty.
                </div>
              </>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CartPopUp;
