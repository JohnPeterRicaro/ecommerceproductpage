import useStateContext from "@/contextprovider/ContextProvider";
import BodyClassName from "react-body-classname";
import navBarData from "@/data/NavBarData";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useStateContext();
  const router = useRouter()
  return (
    <>
      {mobileMenu && (
        <BodyClassName className="relative w-full h-full overflow-hidden pr-[19px]">
          <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 backdrop-blur-[2px] flex justify-start items-start">
            <div className="w-3/4 h-full bg-white p-[28px] flex flex-col justify-start items-start gap-[80px]">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="relative w-[20px] h-[20px]"
              >
                <div className="absolute w-full h-[3px] bg-gray-800 rounded-lg rotate-45"></div>
                <div className="absolute w-full h-[3px] bg-gray-800 rounded-lg -rotate-45"></div>
              </button>
              <div className="flex flex-col justify-start items-start gap-8 text-xl font-bold">
                {navBarData.map((link, index) => {
                  return (
                    <Link
                      href={link.link}
                      key={index}
                      id={link.id}
                      className={`border-b-4 border-b-orange
                    flex justify-center items-center hover:text-gray-950 hover:border-opacity-100 transition ease-in ${
                      router.pathname === link.link
                        ? "border-opacity-100 text-gray-950"
                        : "border-opacity-0 text-gray-400"
                    }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </BodyClassName>
      )}
    </>
  );
};

export default MobileMenu;
