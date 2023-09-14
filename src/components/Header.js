import HeaderLogo from "../assets/img/bg-intro-desktop.svg";
import Phones from "../assets/img/image-mockups.png";
const Header = () => {
  return (
    <div className=" bg-gray-50 flex items-center">
      <div>
        <div>
          <h2 className="text-[50px] font-light">
            Next generation digital banking
          </h2>
        </div>
        <div>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r text-white font-medium from-[#00CC66] to-[#33CCFF] py-3 px-8 rounded-full">
            Request Invite
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={HeaderLogo} alt="header-logo" />
        <img className="absolute top-0 w-[600px]" src={Phones} alt="phones" />
      </div>
    </div>
  );
};

export default Header;
