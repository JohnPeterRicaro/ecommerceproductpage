import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";
import { useStateContext } from "@/contextprovider/ContextProvider";
import { IdImageButton } from "@/components/imageview/IdImgViewer";

const ProductShowcase = ({ req, res }) => {
  const [key, setKey] = useState(0);
  const [direction, setDirection] = useState(0);
  const { isKey } = useStateContext();

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

  return (
    <>
      {productData ? (
        <section className="mx-auto mt-[80px] mb-[140px] w-[1440px] h-[650px] flex justify-evenly items-start">
          <div className="w-1/2 flex flex-col justify-center items-center gap-[40px]">
            <IdImageButton imageData={productData} imageKey={productData.key}>
              <>
                <div className="w-[500px] rounded-2xl overflow-hidden flex justify-center items-center">
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
            <div className="flex justify-center items-center gap-[30px]">
              {productData?.bg.map((data, index) => {
                return (
                  <div
                    className={`relative w-[100px] h-[100px] flex justify-center items-center group`}
                  >
                    <button
                      key={index}
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
          <div className="w-1/2 h-full text-left flex flex-col justify-center items-start gap-[30px]">
            <div className="space-y-[20px]">
              <h3 className="w-full text-xl font-bold text-orange uppercase">
                sneaker company
              </h3>
              <h1 className="text-5xl text-gray-800 font-bold uppercase">
                {productData?.title}
              </h1>
            </div>
            <p className="text-left w-[500px] text-lg text-dark-grayish-blue">{productData?.parag}</p>
            <div className="space-y-[10px]">
              <div className="flex justify-center items-center gap-[20px]">
                  <h3 className=" text-4xl text-gray-800 font-bold uppercase">
                    {productData?.price}
                  </h3>
                  <p className="text-base text-orange font-bold uppercase bg-pale-orange px-[8px] py-[4px] rounded-lg">
                    {productData.sale}
                  </p>
              </div>
              <h3 className="text-xl text-grayish-blue font-bold uppercase line-through">
                {productData?.oldPrice}
              </h3>
            </div>
            <div className="flex justify-center items-center gap-[24px]">

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
