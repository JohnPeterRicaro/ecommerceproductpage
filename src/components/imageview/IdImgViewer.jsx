import { useStateContext } from "@/contextprovider/ContextProvider";
import { motion } from "framer-motion";
import { useState } from "react";
import BodyClassName from "react-body-classname";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const IdImageButton = ({ imageData, imageKey, children }) => {
  const {
    isKey,
    isIdActive,
    setIsIdActive,
    setIsData, // Updated to use the context hook
    setIsKey, // Updated to use the context hook
  } = useStateContext(); // Updated to use the context hook

  return (
    <button
      onClick={() => {
        setIsIdActive(!isIdActive);
        setIsData(imageData);
        setIsKey(imageKey);
        console.log(isKey);
      }}
      className="w-[500px] cursor-pointer group"
    >
      {children}
    </button>
  );
};

const IdImageViewer = () => {
  const { isIdActive, setIsIdActive } = useStateContext();
  const { isKey, setIsKey } = useStateContext();
  const { isData } = useStateContext();
  const [direction, setDirection] = useState(0);

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

  const [key, setKey] = useState(0);

  const handleLeftClick = () => {
    setKey((index) => {
      return index <= 0 ? isData?.bg.length - 1 : index - 1;
    });
  };

  const handleRightClick = () => {
    setKey((index) => {
      return index >= isData.bg.length - 1 ? 0 : index + 1;
    });
  };

  return (
    <>
      {isIdActive && (
        <>
          <BodyClassName className="relative w-full h-full overflow-hidden pr-[19px]">
            <section className="z-40 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 backdrop-blur-[2px] flex justify-center items-center">
              <div className=" z-50 w-[600px] h-[600px] flex flex-col justify-center items-center gap-[24px]">
                <div className="relative w-full h-[40px] flex justify-end items-center">
                  <button
                    onClick={() => {
                        setIsIdActive(!isIdActive);
                      setKey(0);
                    }}
                    className="relative w-[26px] h-[26px] flex justify-center items-center group"
                  >
                    <div className="absolute w-[30px] h-[4px] bg-white rotate-45 rounded-xl transition ease-in duration-300 group-hover:bg-orange group-hover:-rotate-45"></div>
                    <div className="absolute w-[30px] h-[4px] bg-white -rotate-45 rounded-xl transition ease-in duration-300 group-hover:bg-orange group-hover:rotate-45"></div>
                  </button>
                </div>
                <div className="relative w-[600px] h-[600px] flex justify-center items-center">
                  <div className="w-full rounded-2xl overflow-hidden">
                    <motion.img
                      key={key}
                      variants={variants}
                      initial="initial"
                      exit="exit"
                      animate="animate"
                      custom={direction}
                      src={isData?.pics[key]}
                      alt=""
                    />
                  </div>
                  <div className="absolute w-full h-full flex justify-between items-center">
                    <div className="-translate-x-[50px] w-[100px] h-[600px] flex justify-center items-center group">
                      <button
                        onClick={handleLeftClick}
                        className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center group"
                      >
                        <FaChevronLeft className=" text-2xl transition ease-in group-hover:fill-orange" />
                      </button>
                    </div>
                    <div className="translate-x-[50px] w-[100px] h-[600px] flex justify-center items-center">
                      <button
                        onClick={handleRightClick}
                        className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center group"
                      >
                        <FaChevronRight className=" text-2xl transition ease-in group-hover:fill-orange" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-[24px]">
                  {isData?.bg.map((data, index) => {
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
            </section>
          </BodyClassName>
        </>
      )}
    </>
  );
};

export default IdImageViewer;
