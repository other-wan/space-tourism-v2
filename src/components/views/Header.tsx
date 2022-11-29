import { useToggle } from "usehooks-ts";
import classNames from "classnames";

import Close from "assets/icons/Close";
import Logo from "assets/icons/Logo";
import Menu from "assets/icons/Menu";
import ListManager from "components/ListManager";
import { NavLinks } from "configs/navLinkConfig";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [navOpen, toggleNavOpen, _] = useToggle(false);

  const location = useLocation();
  const [navActive, setNavActive] = useState(location.pathname);

  return (
    <div className="flex items-center justify-between w-[90%] mx-auto h-20 py-5 md:py-0 md:mr-0 md:h-24">
      <Link to="/">
        <Logo />
      </Link>

      <button onClick={toggleNavOpen} className="z-30 md:hidden">
        <Menu
          className={classNames("", {
            ["hidden"]: navOpen,
            ["block"]: !navOpen,
          })}
        />
        <Close
          className={classNames("", {
            ["block"]: navOpen,
            ["hidden"]: !navOpen,
          })}
        />
      </button>

      <nav
        className={classNames(
          "absolute top-0 w-[65%] h-screen z-20 bg-main-1/40 backdrop-blur-[40px] \
           md:bg-gray-1 md:static md:h-full md:flex md:items-center md:justify-center \
           lg:before:content-[''] lg:before:h-[1px] lg:before:w-[25%] lg:before:absolute \
           lg:before:top-1/2 lg:before:right-[95%] lg:before:bg-gray-1 lg:before:z-30",
          { ["-right-[1000px]"]: !navOpen, ["right-0"]: navOpen }
        )}
      >
        <ListManager
          data={NavLinks}
          renderItem={(item, index) => (
            <Link
              to={item.route}
              onClick={() => setNavActive(item.route)}
              className={classNames(
                "h-8 flex items-center gap-3 border-r-4 md:border-r-0 \
                 md:border-b-4 md:h-full border-transparent",
                {
                  ["!border-white"]: item.route === navActive,
                }
              )}
            >
              <span
                className="text-white font-barlow-condensed text-nav-md font-bold tracking-space-2
                md:hidden lg:block"
              >{`0${index}`}</span>
              <span className="text-white font-barlow-condensed text-nav-md uppercase tracking-space-2">
                {item.name}
              </span>
            </Link>
          )}
          className={{
            list: "pt-[7.5rem] pl-8 flex flex-col gap-5 md:p-0 md:flex-row md:gap-9 md:h-full",
            item: "",
          }}
        />
      </nav>
    </div>
  );
};

export default Header;
