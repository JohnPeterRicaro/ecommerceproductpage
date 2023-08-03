import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CollectionsGallery = ({ shoesData }) => {
  const [isIndex, setIsIndex] = useState(0);
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

  const handleLeftClick = () => {
    setIsIndex(
      (index) => {return index <= 0 ? shoesData.length - 1 : index - 1}
    );
  };

  const handleRightClick = () => {
    setIsIndex((index) => {return index >= 6 ? 0 : index + 1});
  };

  useEffect(() => {
    const interVal = setInterval(() => {
      setIsIndex((nextdata) => {return nextdata >= 6 ? 0 : nextdata + 1});
    }, 1000);
    return () => clearInterval(interVal);
  }, []);

  console.log(isIndex)

  if (!shoesData || shoesData.length === 0) return null;

  return (
    <div className="w-full h-auto bg-black bg-opacity-70 backdrop-blur">
      <div className="mx-auto w-[1440px] h-auto flex justify-center items-start text-xl">
        <div className="relative w-full aspect-video overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={shoesData[isIndex]}
              variants={variants}
              initial="initial"
              exit="exit"
              animate="animate"
              custom={direction}
              className="absolute w-full h-full"
              src={shoesData[isIndex]?.pics.main.main1}
              alt={shoesData[isIndex]?.pics.main.main2}
            />
          </AnimatePresence>
          {/* Left Button */}
          <button
            onClick={handleLeftClick}
            className=" absolute h-full w-[80px] top-0 left-0 bg-black bg-opacity-30 backdrop-blur group"
          >
            <AiOutlineLeft className=" text-5xl translate-x-2 transition ease-in group-hover:fill-white" />
          </button>
          {/* Right Button */}
          <button
            onClick={handleRightClick}
            className=" absolute h-full w-[80px] top-0 right-0 bg-black bg-opacity-30 backdrop-blur group"
          >
            <AiOutlineRight className=" text-5xl translate-x-6 transition ease-in group-hover:fill-white" />
          </button>
          <div className="absolute top-[470px] left-[100px] bg-black backdrop-blur-xl bg-opacity-30 p-[23px] rounded-xl flex flex-col justify-center items-center gap-[30px]">
            <div className="flex flex-col justify-center items-center gap-[24px] text-center">
              <motion.h1
                key={shoesData[isIndex]?.title}
                variants={variants}
                initial="initial"
                exit="exit"
                animate="animate"
                custom={direction}
                className="w-[400px] h-[72px] text-3xl font-bold text-white"
              >
                {shoesData[isIndex]?.title}
              </motion.h1>
              <motion.p
                key={shoesData[isIndex]?.parag}
                variants={variants}
                initial="initial"
                exit="exit"
                animate="animate"
                custom={direction}
                className="w-[400px] h-[120px] text-white text-center text-base"
              >
                {shoesData[isIndex]?.parag}
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              {shoesData.map((data, index) => {
                return (
                  <button
                    onClick={() => setIsIndex(index)}
                    key={index}
                    className={
                      isIndex === index
                        ? "w-[14px] h-[14px] rounded-full bg-white transition ease-in"
                        : "w-[14px] h-[14px] rounded-full bg-white bg-opacity-50 transition ease-in"
                    }
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsGallery;
