import { useStateContext } from "@/contextprovider/ContextProvider"


const PopUpButton = ({ className, image, altImage, data, arrData, currentData }) => {
    const { setIsActive } = useStateContext()
    const { setMArrKey } = useStateContext()
    const { isData ,setIsData } = useStateContext()
  
    const handleSetArrKey = (data, index) => {
        setMArrKey(index)
        setIsActive(!data)
        console.log(index)
        console.log(isData)
    }

    return(
        <>
            <button onClick={() => handleSetArrKey(data, arrData, currentData)} className={className}>
                <img src={image} alt={altImage} />
            </button>
        </>
    )
}

export default PopUpButton