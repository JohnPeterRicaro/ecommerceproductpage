import PopUpButton from "@/components/PopUpButton";
import { useStateContext } from "@/contextprovider/ContextProvider";
import mShoesData from "@/data/MShoesData";
import { useEffect } from "react";

const Men = () => {
  const { isActive } = useStateContext(false);
  const { isData, setIsData } = useStateContext();

  useEffect(() => {
    setIsData(mShoesData);
  }, []);

  return (
    <>
      <div className="w-[1440px] h-auto mx-auto mt-[80px] mb-[80px] flex justify-center items-center gap-[40px] flex-wrap">
        {mShoesData.map((shoe) => (
          <>
            <div
              key={shoe.key}
              className="w-[400px] h-[600px] shadow-lg p-4 rounded-xl flex flex-col justify-start items-center"
            >
              <PopUpButton
                currentData={isData}
                data={isActive}
                arrData={shoe.key}
                className="w-[300px] h-[300px] bg-orange rounded-xl overflow-hidden transition ease-in hover:opacity-[50%] cursor-pointer"
                image={shoe.pics.main.main1}
              ></PopUpButton>
              <div className="text-center p-5 space-y-7">
                <div>
                  <h3 className="text-lg text-very-dark-blue font-bold uppercase">
                    {shoe.title}
                  </h3>
                  <p className="w-[300px] h-[70px] text-dark-grayish-blue line-clamp-3 overflow-hidden text-ellipsis">
                    {shoe.parag}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-7">
                  <h4 className=" text-very-dark-blue font-bold">
                    {shoe.price}
                  </h4>
                  <h5 className="text-white font-bold text-sm rounded-lg bg-orange px-2 py-1">
                    {shoe.sale}
                  </h5>
                </div>
                <button className="px-4 py-2 font-bold text-xl text-white rounded-lg bg-orange shadow-md transition ease-in hover:bg-pale-orange hover:text-very-dark-blue">
                  View Full Details
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Men;
