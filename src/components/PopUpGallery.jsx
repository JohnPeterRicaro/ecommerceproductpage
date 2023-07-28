import { useStateContext } from "@/contextprovider/ContextProvider";
import { useState } from "react";

const PopUpGallery = ({ data, pictures }) => {
  const { isActive, setIsActive } = useStateContext();
  const { mArrKey } = useStateContext();
  const { isData } = useStateContext();
  const galleryData = isData.find((shoe) => shoe.key === mArrKey);


  return (
    <>
      {isActive && (
        <>
          <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-70 flex flex-col justify-center items-center gap-[40px] overflow-hidden">
            <div className="relative w-[550px] flex justify-end items-center">
              <button
                className="w-[35px] h-[35px] flex justify-center items-center group transition ease-in"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="absolute w-[35px] h-[5px] rounded-lg bg-white rotate-45 transition ease-in group-hover:bg-orange"></div>
                <div className="absolute w-[35px] h-[5px] rounded-lg bg-white -rotate-45 transition ease-in group-hover:bg-orange"></div>
              </button>
            </div>
            <div className="w-[550px] h-[550px] flex flex-col justify-start items-center gap-[40px]">
              <div className="w-full">
                <img src={galleryData.pics.main.main1} alt="" />
              </div>
              <div className="flex justify-center items-center gap-[30px]">
                <button className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <img src={galleryData.pics.main.main1} alt="" />
                </button>
                <button className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <img src={galleryData.pics.main.main2} alt="" />
                </button>
                <button className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <img src={galleryData.pics.main.main3} alt="" />
                </button>
                <button className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <img src={galleryData.pics.main.main4} alt="" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUpGallery;
