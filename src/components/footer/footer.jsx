import { Logo, RoboImg } from "../../assets/auth";
import Pdf from '../../assets/documents/SalesAIBoost-English.pdf';

const Footer = () => {
  return (
    <div className="bg-blue-dark w-full h-auto pb-20">
      <div className="container bg-footer-blue p-10 rounded-xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-6 relative">
          <div className="flex flex-col col-span-2 gap-2">
            <img src={Logo} width={200} height={200} alt="" />
            <p className="text-[#d7cceb] gilory-regular text-[1rem]">
              We have created the most crucial tool
              forevery business, a revenue-generating super intelligence, but now you too canprofit
              from it! This opportunity is open to everyone for a very limitedtime!!!!
            </p>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3 ">Company</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer" href={Pdf} target = "_blank">
              Whitepaper
            </a>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3">Support</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              hello@salesaiboost.io
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3">Follow Us</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Telegram
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              X(Twitter)
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
            Facebook
            </a>
          </div>

          <img
            className="absolute right-0 footer-logo"
            src={RoboImg}
            width={160}
            height={160}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export { Footer };
