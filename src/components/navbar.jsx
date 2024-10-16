import { GhIcon } from "./svgs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <main className="">
        <header
          className={`fixed z-40 top-0 md:relatives bg-[#061417]/90 pb-3  w-full scroll:bg-black pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]`}
        >
          <nav className={`flex items-center justify-between`}>
            {/* <h2
              className={`font-clashbold font-semibold text-[18px] md:text-[25px] leading-[]`}
            >
              VickyJay<span>.</span>
            </h2> */}
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] lg:hover:before:bg-[#4C686F]s active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                    isActive
                      ? "text-white hover:before:w-full"
                      : "text-white hover:before:w-full"
                  } relative`}
                >
                  dtechoracle<span>!</span>
                  <span>⚡</span>
                </div>
              )}
            </NavLink>
            <div className="text-[#FFFFFF99] group group-hover:text-white transition-all duration-300">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/dtechoracle"
                className="group-hover:text-white transition-colors duration-300"
              >
                <span className={`flex items-center gap-[8px] md:gap-[10px]`}>
                  <GhIcon
                    className={`opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <p className="font-clash text-[15px] md:text-[18px] font-medium group-shover:text-white transition-colors duration-300">
                    github
                  </p>
                </span>
              </a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Navbar;
