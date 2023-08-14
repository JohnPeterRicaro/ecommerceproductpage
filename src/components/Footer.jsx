import navBarData from "@/data/NavBarData";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[80px] w-full h-auto border-t-2 border-gray-200">
      <div className="mx-auto w-[390px] md:w-[1440px] h-auto py-[50px] px-[40px] md:px-[80px] md:py-[100px] flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col md:flex-row justify-center items-start gap-[40px] md:gap-[100px]">
                <Link href={`/`}>
                    <img src="/assets/logo.svg" alt="" />
                </Link>
                <div className=" md:pt-[40px] flex flex-col justify-center items-start gap-[15px] md:gap-[30px]">
                    {navBarData.map(link => {
                        return (
                            <Link key={link.key} href={link.link} className="text-base md:text-xl text-gray-800 border-b-2 border-white border-opacity-0 transition ease hover:border-opacity-100 hover:border-orange">
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className=" mt-[40px] md:mt-0 flex justify-center items-center gap-[30px]">
                    <Link target="_blank" href={`https://www.facebook.com/`}>
                        <FaFacebook className="text-3xl fill-orange transition ease hover:fill-pale-orange"/>
                    </Link>
                    <Link target="_blank" href={`https://twitter.com/`}>
                        <FaTwitter className="text-3xl fill-orange transition ease hover:fill-pale-orange"/>
                    </Link>
                    <Link target="_blank" href={`https://linkedin.com/`}>
                        <FaLinkedin className="text-3xl fill-orange transition ease hover:fill-pale-orange"/>
                    </Link>
                    <Link target="_blank" href={`https://www.instagram.com/`}>
                        <FaInstagram className="text-3xl fill-orange transition ease hover:fill-pale-orange"/>
                    </Link>
            </div>
      </div>
    </div>
  );
};

export default Footer;
