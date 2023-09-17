import Logo from "../assets/img/logo.svg";
const Navbar = () => {
  return (
    <div className="md:flex block px-[10%] w-[100%] justify-between items-center py-4 relative z-50 bg-white">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="text-[#999999] md:text-left text-center md:flex font-normal block xsm:absolute md:static xsm:top-20 md:bg-white bg-red-600 w-[100%] space-x-0 md:space-x-4">
        <div>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Home
          </span>
        </div>
        <div>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            About
          </span>
        </div>
        <div>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Contact
          </span>
        </div>
        <div>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Blog
          </span>
        </div>
        <div>
          <span className="cursor-pointer hover:text-[#333366] hover:border-b-2 hover:border-[#00CC66] hover:pb-7">
            Careers
          </span>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r hidden md:block text-white font-medium from-[#00CC66] to-[#33CCFF] py-3 px-8 rounded-full">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Navbar;
