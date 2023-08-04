import { useEffect, useState } from "react"

const CollectionsCard = ({data, children}) => {
    const [isIndex, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((nextdata) => {return nextdata >= data.length - 1 ? 0 : nextdata + 1});
          }, 8000);

        return () => clearInterval(interval)
    }, [isIndex])

    return (
    <>
        <div className="my-[80px] relative flex justify-center items-center">
            <div className="mx-auto w-[1440px] h-[250px]">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="z-10 absolute w-full h-full bg-black backdrop-blur-sm bg-opacity-10"></div>
                    <div className={`absolute w-full h-full ${data[isIndex].bg[0]} bg-center bg-cover bg-no-repeat`}></div>
                    {children}
                </div>
            </div>
        </div>
    </>
    )
}

export default CollectionsCard