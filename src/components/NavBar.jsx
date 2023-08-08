import { useStateContext } from "@/contextprovider/ContextProvider";
import { useRouter } from "next/router";
import navBarData from "@/data/NavBarData";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-auto border-b-2 border-gray-200">
        <div className="mx-auto w-[1440px] h-[120px] flex justify-between items-center">
          <div className="h-full flex justify-center items-center gap-10">
            <Link href="/" className="h-full flex justify-center items-center">
              <img src="/assets/logo.svg" alt="" />
            </Link>
            <div className="h-full flex justify-between items-center gap-8">
              {navBarData.map((link, index) => {
                return (
                    <Link
                      href={link.link}
                      key={index}
                      id={link.id}
                      className={`h-full border-b-4 border-b-orange
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
          <div className="flex justify-center items-center gap-[40px]">
            <button>
              <img src="/assets/icon-cart.svg" alt="" />
            </button>
            <div className="w-[50px] h-[50px] rounded-full border-[3px] border-orange border-opacity-0 transition ease hover:border-opacity-100 cursor-pointer">
              <img src="/assets/image-avatar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
