import CollectionsGallery from "@/components/collectionsgallery/CollectionsGallery";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { useMemo, useState } from "react";
import CollectionsCard from "@/components/collectionsgallery/CollectionsCard";
import Link from "next/link";

export default function Home() {
  const allShoesData = useMemo(() => {
    return [...mShoesData, ...wShoesData];
  }, []);

  return (
    <>
      <CollectionsGallery shoesData={allShoesData} />
      <section className="mt-[80px] w-full h-auto">
        <CollectionsCard data={wShoesData}>
          <div className="z-20 p-[24px] w-full h-full flex flex-col justify-center items-start md:items-end gap-[20px]">
            <h1 className="text-3xl font-bold text-white uppercase">
              Women's shoes collection
            </h1>
            <Link
              href={`/Women`}
              className="px-[20px] py-[10px] rounded-xl bg-orange text-white font-bold text-lg flex justify-center items-center uppercase transition ease-in hover:bg-pale-orange hover:text-orange"
            >
              visit collection
            </Link>
          </div>
        </CollectionsCard>
        <section className="mt-[40px] w-full h-auto">
          <div className="mx-auto w-[390px] md:w-[1440px] p-[24px] flex flex-col md:flex-row justify-center items-center gap-[40px]">
            <div className="w-full md:w-auto flex justify-start items-center gap-[20px]">
              <div className=" bg-orange h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-full flex justify-center items-center">
                <AiOutlinePercentage className="text-2xl md:text-4xl text-white" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-orange text-2xl font-bold uppercase">
                  Get Discounts!
                </h1>
                <p className="text-gray-500 text-xl">Season end sale!</p>
              </div>
            </div>
            <div className="w-[80px] h-[4px] md:w-[4px] md:h-[80px] bg-pale-orange rounded-lg"></div>
            <div className="w-full md:w-auto flex justify-start items-center gap-[20px]">
              <div className=" bg-orange h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-full flex justify-center items-center">
                <FaGift className="text-2xl md:text-4xl text-white" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-orange text-2xl font-bold uppercase">
                  FAST DELIVERY!
                </h1>
                <p className="text-gray-500 text-xl">
                  Fast delivery nationwide!
                </p>
              </div>
            </div>
            <div className="w-[80px] h-[4px] md:w-[4px] bg-pale-orange rounded-lg"></div>
            <div className="w-full md:w-auto flex justify-start items-center gap-[20px]">
              <div className=" bg-orange h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-full flex justify-center items-center">
                <h1 className="text-white font-bold text-base md:text-xl">NEW!</h1>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-orange text-2xl font-bold uppercase">
                  Brand New!
                </h1>
                <p className="text-gray-500 text-xl">
                  New collections are in stock
                </p>
              </div>
            </div>
          </div>
        </section>
        <CollectionsCard data={mShoesData}>
          <div className="z-20 p-[24px] w-full h-full flex flex-col justify-center items-start gap-[20px]">
            <h1 className="text-3xl font-bold text-white uppercase">
              Men's shoes collection
            </h1>
            <Link
              href={`/Men`}
              className="px-[20px] py-[10px] rounded-xl bg-orange text-white font-bold text-lg flex justify-center items-center uppercase transition ease-in hover:bg-pale-orange hover:text-orange"
            >
              visit collection
            </Link>
          </div>
        </CollectionsCard>
      </section>
    </>
  );
}
