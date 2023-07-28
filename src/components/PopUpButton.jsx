import { useStateContext } from "@/contextprovider/ContextProvider"


const PopUpButton = ({ className, image, altImage, data }) => {
    const {setIsActive} = useStateContext()
    return(
        <>
            <button onClick={() => setIsActive(!data)} className={className}>
                <img src={image} alt={altImage} />
            </button>
        </>
    )
}

export default PopUpButton