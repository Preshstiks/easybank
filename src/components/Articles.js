import Currency from "../assets/img/image-currency.jpg";
import Restaurant from "../assets/img/image-restaurant.jpg";
import Plane from "../assets/img/image-plane.jpg";
import Confetti from "../assets/img/image-confetti.jpg";
const Articles = () => {
  return (
    <div className="bg-gray-50 px-[10%] py-24">
      <div className="py-10">
        <h2 className="text-4xl text-center md:text-left font-extralight text-[#333366]">
          Latest Articles
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="bg-white">
          <div>
            <img src={Currency} alt="currency" />
          </div>
          <div className="py-7 px-5">
            <div className="py-1">
              <span className="text-[#999999] text-[13px] font-light">
                By Claire Robinson
              </span>
            </div>
            <div className="py-1">
              <p className="text-xl hover:text-[#00CC66] cursor-pointer text-[#333366] font-light">
                Receive money in any currency with no fees
              </p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-light">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img src={Restaurant} alt="restaurant" />
          </div>
          <div className="py-7 px-5">
            <div className="py-1">
              <span className="text-[#999999] text-[13px] font-light">
                By Wilson Hutton
              </span>
            </div>
            <div className="py-1">
              <p className="text-xl text-[#333366] cursor-pointer hover:text-[#00CC66] font-light">
                Treat yourself without worrying about money
              </p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-light">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img src={Plane} alt="plane" />
          </div>
          <div className="py-7 px-5">
            <div className="py-1">
              <span className="text-[#999999] text-[13px] font-light">
                By Wilson Hutton
              </span>
            </div>
            <div className="py-1">
              <p className="text-xl text-[#333366] cursor-pointer hover:text-[#00CC66] font-light">
                Take your Easybank card wherever you go
              </p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-light">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img src={Confetti} alt="confetti" />
          </div>
          <div className="py-7 px-5">
            <div className="py-1">
              <span className="text-[#999999] text-[13px] font-light">
                By Claire Robinson
              </span>
            </div>
            <div className="py-1">
              <p className="text-xl text-[#333366] cursor-pointer hover:text-[#00CC66] font-light">
                Our invite-only Beta accounts are now live!
              </p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-light">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
