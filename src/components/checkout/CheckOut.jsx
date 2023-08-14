import { useStateContext } from "@/contextprovider/ContextProvider"
import BodyClassName from "react-body-classname"


const CheckOut = () => {
    const {isCheckOut, setIsCheckOut} = useStateContext()

    return (<>{isCheckOut && 
    <>
    <BodyClassName className="relative w-full h-full overflow-hidden pr-[19px]">
    <section className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur flex justify-center items-center overflow-hidden">
        <div className="w-[90%] h-[30%] md:w-[20%] md:h-[30%] bg-white rounded-lg flex flex-col justify-center items-center gap-[30px]">
            <h1 className="text-3xl font-bold text-gray-800 text-center uppercase">
                This is just a mock website
            </h1>
            <button onClick={() => setIsCheckOut(!isCheckOut)} className="w-[70%] h-[50px] rounded-lg bg-orange text-white transition ease-in-out hover:bg-opacity-70">
                Close window
            </button>
        </div>
    </section>
    </BodyClassName>
    </>}</>
    )
}

export default CheckOut