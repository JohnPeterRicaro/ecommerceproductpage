import navBarData from "@/data/NavBarData";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-auto border-b-2 border-gray-200">
        <div className="mx-auto w-[1440px] h-[120px] flex justify-between items-center">
          <div className="h-full flex justify-center items-center gap-10">
            <a href="/" className="h-full flex justify-center items-center">
              <img src="/assets/logo.svg" alt="" />
            </a>
            <div className="h-full flex justify-between items-center gap-8">
              {navBarData.map((link) => (
                <>
                  <a
                    href={link.link}
                    key={link.key}
                    id={link.id}
                    className="h-full text-gray-400 border-b-4 border-opacity-0 border-b-orange
                    flex justify-center items-center hover:text-gray-950 hover:border-opacity-100 transition ease-in"
                  >
                    {link.name}
                  </a>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-[40px]">
            <button>
              <img src="/assets/icon-cart.svg" alt="" />
            </button>
            <div className="w-[50px] h-[50px]">
                <img src="/assets/image-avatar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
