import { FaEye } from "react-icons/fa";
import { ImageButton } from "../imageview/ImageViewer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const CollectionsComponent = ({ data }) => {
  const router = useRouter();
  
  return (
    <div className="mx-auto my-[40px] md:my-[80px] w-[390px] md:w-[1440px] h-auto">
      <div className="w-full py-[0px] md:py-[80px] flex flex-wrap justify-center items-center gap-[54px]">
        {data.map((card) => {
          return (
            <div
              key={card.key}
              className="w-auto rounded-3xl overflow-hidden bg-gray-50 shadow-md flex flex-col md:flex-row justify-center items-center gap-1 md:gap-5"
            >
              <ImageButton imageData={data} imageKey={card.key}>
                <>
                  <div className="absolute z-10 w-full h-full bg-black bg-opacity-0 transition ease group-hover:backdrop-blur group-hover:bg-opacity-5 flex justify-center items-center">
                    <FaEye className="text-5xl fill-white opacity-0 group-hover:opacity-100" />
                  </div>
                  <img src={card.pics[0]} className="" alt="" />
                </>
              </ImageButton>
              <div className="w-[300px] h-[340px] md:h-auto px-[24px] flex flex-col justify-center items-start gap-[20px]">
                <h1 className="text-2xl font-bold">{card.title}</h1>
                <p className="text-sm">{card.parag}</p>
                <AnimatePresence>
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-orange px-3 py-1 rounded-lg text-white font-bold transition ease hover:bg-pale-orange hover:text-orange"
                    onClick={() => router.push(`/productshowcase/${card.id}`)}
                  >
                    View Full Details
                  </motion.button>
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsComponent;
