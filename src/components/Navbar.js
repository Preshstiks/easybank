import Logo from "../assets/img/logo.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[10%] py-4 relative z-50 bg-white">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="text-[#999999] font-light space-x-4">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">Careers</span>
      </div>
      <div>
        <button className="bg-gradient-to-r text-white font-medium from-[#00CC66] to-[#33CCFF] py-3 px-8 rounded-full">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Navbar;
