import { useState } from "react";

import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import AnimatedHamburger from "./AnimatedHamburger";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-slate-950 text-gray-300 p-4 fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-semibold">
          <Logo />
        </div>
        <DesktopNav />
        <AnimatedHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
