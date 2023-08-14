import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";
import { IdImageButton } from "@/components/imageview/IdImgViewer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ToCartBttn from "@/components/cart/ToCartBttn";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProductShowcase = ({ req, res }) => {
  const [key, setKey] = useState(0);
  const [direction, setDirection] = useState(0);
  const [count, setCount] = useState(0);

  const allShoesData = useMemo(() => {
    return [...mShoesData, ...wShoesData];
  }, []);

  const router = useRouter();
  const shoeId = router.query.id;

  const productData = allShoesData.find((data) => data.id === shoeId);

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exity: (direction) => {
      return {
        x: direction > 0 ? -200 : 200,
        opacity: 0,
      };
    },
  };

  const handleLeftClick = () => {
    setKey((index) => {
      return index <= 0 ? productData?.bg.length - 1 : index - 1;
    });
  };

  const handleRightClick = () => {
    setKey((index) => {
      return index >= productData.bg.length - 1 ? 0 : index + 1;
    });
  };

  return (
    <>
      {productData ? (
        <section className="mx-auto md:mt-[80px] md:mb-[140px] w-[390px] md:w-[1440px] h-auto md:h-[650px] flex flex-col md:flex-row justify-center md:justify-evenly items-start">
          <div className="w-[390px] md:w-1/2 flex flex-col justify-center items-center gap-[40px]">
            <IdImageButton imageData={productData} imageKey={productData.key}>
              <>
                <div className="relative w-[100%] h-[300px] md:h-auto md:w-[500px] md:rounded-2xl overflow-hidden flex justify-center items-center">
                  <motion.img
                    key={productData.key}
                    variants={variants}
                    initial="initial"
                    exit="exit"
                    animate="animate"
                    custom={direction}
                    src={`${productData.pics[key]}`}
                    alt={`${productData.pics[0]}`}
                  />
                </div>
              </>
            </IdImageButton>
            <div className="absolute w-[400px] h-[21%] flex md:hidden justify-between items-center">
              <div className="translate-x-[30px] md:-translate-x-[50px] w-[40px] h-[20%] md:w-[100px] md:h-[600px] flex justify-center items-center">
                <button
                  onClick={handleLeftClick}
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-white rounded-full flex justify-center items-center group"
                >
                  <FaChevronLeft className=" text-base md:text-2xl transition ease-in group-hover:fill-orange" />
                </button>
              </div>
              <div className="-translate-x-[30px] md:translate-x-[50px] w-[40px] h-[20%] md:w-[100px] md:h-[600px] flex justify-center items-center">
                <button
                  onClick={handleRightClick}
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-white rounded-full flex justify-center items-center group"
                >
                  <FaChevronRight className=" text-base md:text-2xl transition ease-in group-hover:fill-orange" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center gap-[30px]">
              {productData?.bg.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`relative w-[100px] h-[100px] flex justify-center items-center group`}
                  >
                    <button
                      onClick={() => setKey(index)}
                      className={`absolute w-full h-full  rounded-lg border-[3px] ease-in transition ${
                        key === index
                          ? `border-orange bg-white bg-opacity-70`
                          : `border-orange border-opacity-0 group-hover:bg-white group-hover:bg-opacity-70 group-hover:border-opacity-20`
                      }`}
                    ></button>
                    <div
                      className={`w-[100px] h-[100px] rounded-lg ${data} bg-cover bg-no-repeat`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-[40px] w-[390px] md:mt-0 md:w-1/2 h-full text-left flex flex-col justify-center items-start gap-[30px]">
            <div className="space-y-[20px]">
              <h3 className="w-full text-lg md:text-xl font-bold text-orange uppercase">
                sneaker company
              </h3>
              <h1 className="text-3xl md:text-5xl text-gray-800 font-bold uppercase">
                {productData?.title}
              </h1>
            </div>
            <p className="text-left w-[390px] md:w-[500px] text-lg text-dark-grayish-blue">
              {productData?.parag}
            </p>
            <div className="space-y-[10px] w-full flex justify-between items-center md:block md:w-auto">
              <div className="flex justify-center items-center gap-[20px]">
                <h3 className=" text-4xl text-gray-800 font-bold uppercase">
                  ${productData?.price}
                </h3>
                <p className="text-base text-orange font-bold uppercase bg-pale-orange px-[8px] py-[4px] rounded-lg">
                  {productData.sale}
                </p>
              </div>
              <h3 className="text-xl text-grayish-blue font-bold uppercase line-through">
                ${productData?.oldPrice}
              </h3>
            </div>
            <div className="w-[390px] md:w-auto flex flex-col md:flex-row justify-center items-center gap-[24px]">
              <div className="w-full md:w-auto flex justify-center items-center">
                <div className="w-full md:w-auto flex justify-center items-center gap-[1px]">
                  <button
                    onClick={() =>
                      setCount((count) => (count <= 0 ? 0 : count - 1))
                    }
                    className="w-[24%] md:w-[60px] h-[60px] bg-gray-100 rounded-l-lg text-3xl font-bold text-orange flex justify-center items-center ease-in transition hover:text-opacity-50"
                  >
                    -
                  </button>
                  <div className="w-[48%] md:w-[70px] h-[60px] bg-gray-100 text-xl font-bold flex justify-center items-center">
                    {count}
                  </div>
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="w-[24%] md:w-[60px] h-[60px] bg-gray-100 rounded-r-lg text-3xl font-bold text-orange flex justify-center items-center ease-in transition hover:text-opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>
              {count <= 0 ? (
                <>
                  <div className="w-full md:w-[270px] h-[60px] rounded-lg bg-orange text-white flex justify-center items-center gap-[14px] transition ease-in-out hover:opacity-70">
                    0 orders selected
                  </div>
                </>
              ) : (
                <ToCartBttn
                  cartID={productData.id}
                  cartTitle={productData.title}
                  cartPrice={productData.price}
                  cartSum={count}
                  cartPic={productData.pics[0]}
                >
                  <AiOutlineShoppingCart className="fill-white text-2xl" />
                  <h4 className="text-2xl">Add to cart</h4>
                </ToCartBttn>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="mx-auto mt-[100px] w-[390px] md:w-[1440px] h-auto flex justify-center items-center">
          <h1 className="text-2xl text-gray-800 font-bold uppercase">
            Loading...
          </h1>
        </div>
      )}
    </>
  );
};

export default ProductShowcase;
