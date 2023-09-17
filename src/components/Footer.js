import Logo from "../assets/img/logo.svg";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#333366] md:px-[10%] px-0 py-24">
      <div className="flex md:justify-between md:flex-row flex-col items-center">
        <div className="space-y-12">
          <div className="relative md:block flex flex-col items-center">
            <img src={Logo} alt="logo" />
            <h2 className="text-white font-bold text-2xl tracking-wider absolute top-[-8px] left-7">
              easybank
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <AiFillFacebook className="text-white hover:text-[#00CC66] text-lg cursor-pointer" />
            <AiFillYoutube className="text-white hover:text-[#00CC66] text-lg cursor-pointer" />
            <AiOutlineTwitter className="text-white hover:text-[#00CC66] text-lg cursor-pointer" />
            <BsPinterest className="text-white hover:text-[#00CC66] text-lg cursor-pointer" />
            <BsInstagram className="text-white hover:text-[#00CC66] text-lg cursor-pointer" />
          </div>
        </div>
        <div className="text-white font-light text-center leading-8">
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">
              About Us
            </span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">Contact</span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">Blog</span>
          </div>
        </div>
        <div className="text-white font-light text-center leading-8">
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">Career</span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">Support</span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-[#00CC66]">
              Privacy Policy
            </span>
          </div>
        </div>
        <div className="md:space-y-6 md:flex flex-col items-center space-y-0">
          <div>
            <button className="bg-gradient-to-r text-white font-medium from-[#00CC66] to-[#33CCFF] py-3 px-8 rounded-full">
              Request Invite
            </button>
          </div>
          <div>
            <span className="font-extralight text-white text-sm">
              © Easybank. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center text-white">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className=" underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="underline" href="https://github.com/preshstiks">
          Davies Precious
        </a>
        .
      </div>
    </div>
  );
};
export default Footer;
