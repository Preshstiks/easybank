import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/img/logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="px-[10%] shadow-stone-200 shadow-sm py-8 relative z-50 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <img src={Logo} className="w-[200px]" alt="logo" />
        </div>
        <div onClick={handleMenu} className="md:hidden block">
          {showMenu ? (
            <AiOutlinePlus className=" transform rotate-45 font-bold hover:bg-[#00CC66] hover:text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="font-bold hover:bg-[#00CC66] hover:text-white text-2xl" />
          )}
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="text-[#333366] shadow-sm shadow-stone-300 md:text-left text-center font-normal absolute md:hidden left-[10%] top-[110px] bg-white w-[80%] py-6 rounded-xl"
            >
              <div className="py-3 px-4">
                <span className="cursor-pointer hover:border-b-2 hover:border-[#00CC66] py-3">
                  Home
                </span>
              </div>
              <div className="py-3 px-4">
                <span className="cursor-pointer hover:border-b-2 hover:border-[#00CC66] pb-3">
                  About
                </span>
              </div>
              <div className="py-3 px-4">
                <span className="cursor-pointer hover:border-b-2 hover:border-[#00CC66] pb-3">
                  Contact
                </span>
              </div>
              <div className="py-3 px-4">
                <span className="cursor-pointer hover:border-b-2 hover:border-[#00CC66] pb-3">
                  Blog
                </span>
              </div>
              <div className="py-3 px-4">
                <span className="cursor-pointer hover:border-b-2 hover:border-[#00CC66] pb-3">
                  Careers
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-[#999999] font-normal md:block hidden bg-white space-x-4">
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Home
          </span>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            About
          </span>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Contact
          </span>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Blog
          </span>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Careers
          </span>
        </div>
        <div className="hidden md:block">
          <button className="bg-gradient-to-r text-white font-medium from-[#00CC66] to-[#33CCFF] py-3 px-8 rounded-full">
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
