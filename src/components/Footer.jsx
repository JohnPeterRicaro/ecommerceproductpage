import navBarData from "@/data/NavBarData";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[80px] w-full h-auto border-t-2 border-gray-200">
      <div className="mx-auto w-[1440px] h-auto px-[80px] py-[100px] flex justify-between items-start">
            <div className="flex justify-center items-start gap-[100px]">
                <Link href={`/`}>
                    <img src="/assets/logo.svg" alt="" />
                </Link>
                <div className="pt-[40px] flex flex-col justify-center items-start gap-[30px]">
                    {navBarData.map(link => {
                        return (
                            <Link key={link.key} href={link.link} className="text-xl text-gray-800 border-b-2 border-white border-opacity-0 transition ease hover:border-opacity-100 hover:border-orange">
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center items-center gap-[30px]">
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
