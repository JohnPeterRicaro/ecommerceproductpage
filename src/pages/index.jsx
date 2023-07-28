import MCollectionComp from "@/components/MCollectionsComp";
import WCollectionsComp from "@/components/WCollectionsComp";
import { useStateContext } from "@/contextprovider/ContextProvider";
import mShoesData from "@/data/MShoesData";
import wShoesData from "@/data/WShoesData";

export default function Home() {
 const {mArrKey} = useStateContext()
 const {wArrKey} = useStateContext()

 const womensData = wShoesData.find(shoe => shoe.key === wArrKey)
 const mensData = mShoesData.find(shoe => shoe.key === mArrKey)
 
  return (
    <section className="w-[1440px] mt-[20px] px-[40px] mx-auto">
      <div className="w-full flex flex-col justify-center items-center gap-[40px]">
        <div className="p-5 w-full h-full rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-4xl text-dark-blue font-bold mb-[80px] w-full text-left">Men's Collection</h1>
          <MCollectionComp data={mensData}/>
        </div>
        <div className="p-5 w-full h-full rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-4xl text-dark-blue font-bold mb-[80px] w-full text-left">Women's Collection</h1>
          <WCollectionsComp data={womensData}/>
        </div>
      </div>
    </section>
  );
}
