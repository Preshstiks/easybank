import Online from "../assets/img/icon-online.svg";
import Budgeting from "../assets/img/icon-budgeting.svg";
import Onboarding from "../assets/img/icon-onboarding.svg";
import Api from "../assets/img/icon-api.svg";
const About = () => {
  return (
    <div className="px-[10%] bg-gray-100 py-24">
      <div>
        <div>
          <h2 className="text-4xl font-extralight text-[#333366]">
            Why choose Easybank?
          </h2>
        </div>
        <div className="py-5">
          <p className="text-[#999999] font-light text-[15px] w-[52%]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 py-5">
        <div>
          <div className="pb-2">
            <img src={Online} alt="online" />
          </div>
          <div className="py-3">
            <h2 className="text-xl text-[#333366] font-light">
              Online Banking
            </h2>
          </div>
          <div>
            <p className="text-[#999999] font-light text-[15px]">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        <div>
          <div className="pb-2">
            <img src={Budgeting} alt="budgeting" />
          </div>
          <div className="py-3">
            <h2 className="text-xl text-[#333366] font-light">
              Simple Budgeting
            </h2>
          </div>
          <div>
            <p className="text-[#999999] font-light text-[15px]">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
        </div>
        <div>
          <div className="pb-2">
            <img src={Onboarding} alt="onboarding" />
          </div>
          <div className="py-3">
            <h2 className="text-xl text-[#333366] font-light">
              Fast Onboarding
            </h2>
          </div>
          <div>
            <p className="text-[#999999] font-light text-[15px]">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
        </div>
        <div>
          <div className="pb-2">
            <img src={Api} alt="api" />
          </div>
          <div className="py-3">
            <h2 className="text-xl text-[#333366] font-light">Open API</h2>
          </div>
          <div>
            <p className="text-[#999999] font-light text-[15px]">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
