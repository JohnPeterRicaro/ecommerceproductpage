import { useStateContext } from "@/contextprovider/ContextProvider";

const PopUpGallery = ({ data, pictures }) => {
  const { isActive, setIsActive } = useStateContext();

  return (
    <>
      {isActive && (
        <>
          <div className="fixed z-10 w-screen h-screen bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[700px] flex justify-end items-center">
              <button className="" onClick={() => setIsActive(!isActive)}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-white transition ease-in hover:fill-orange"
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="w-[700px] h-[700px] bg-white flex flex-col justify-center items-center"></div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUpGallery;
