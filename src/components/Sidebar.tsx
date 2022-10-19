import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import Logo from "../assets/imgs/logo.png";
import { links } from "../assets/data/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({
  handleClick,
}: {
  handleClick?: (value: boolean) => void;
}) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        to={link.to}
        key={link.name}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-green-400"
        onClick={() => (handleClick ? handleClick(false) : {})}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={Logo} alt="Logo" className="w-full h-20 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={Logo} alt="Logo" className="w-full h-20 object-contain" />
        <NavLinks handleClick={setMobileMenuOpen} />
      </div>
    </Fragment>
  );
};

export default Sidebar;
