import { useStateContext } from "@/contextprovider/ContextProvider";
import wShoesData from "@/data/WShoesData";
import Link from "next/link";
import { useEffect } from "react";

const WCollectionsComp = ({ data }) => {
  const {wArrKey, setWArrKey} = useStateContext()
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWArrKey((prevKey) => (prevKey + 1) % wShoesData.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mb-[80px]">
      <div
        key={data.key}
        className="w-full flex flex-row-reverse justify-center items-center gap-[100px]"
      >
        <div className="w-[500px] h-[500px] rounded-xl shadow-md overflow-hidden">
          <img src={data.pics.main1} alt="" />
        </div>
        <div className="text-left flex flex-col justify-between items-start gap-[60px]">
          <div className="w-[550px] h-[220px] space-y-[20px]">
            <h1 className="text-dark-blue font-bold text-3xl">
              {data.title}
            </h1>
            <div className="w-[550px] text-dark-grayish-blue">
              <p className="w-full h-full">{data.parag}</p>
            </div>
            <div className="flex justify-start items-center gap-[10px]">
              <h3 className="text-lg font-bold text-white bg-orange rounded-lg p-1 shadow-md">
                {data.price}
              </h3>
              <h5 className="text-gray-300 text-xs line-through">
                {data.oldPrice}
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-[40px]">
            <div className="space-x-[20px]">
              {wShoesData.map((dot) => (
                <button
                  key={dot.key}
                  className={`w-[15px] h-[15px] rounded-full ${
                    wArrKey === dot.key ? "bg-orange" : "bg-pale-orange"
                  }`}
                  onClick={() => setWArrKey(dot.key)}
                ></button>
              ))}
            </div>
            <Link
              href="/Women"
              className="p-4 text-white font-bold text-xl bg-orange rounded-lg shadow-lg transition ease-out hover:bg-pale-orange hover:text-very-dark-blue"
            >
              View Women's Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCollectionsComp;
