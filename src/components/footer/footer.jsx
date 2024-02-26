import { Logo, RoboImg } from "../../assets/auth";
const Footer = () => {
  return (
    <div className="bg-blue-dark w-full h-auto pb-20">
      <div className="container bg-footer-blue p-10 rounded-xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-6 relative">
          <div className="flex flex-col col-span-2 gap-2">
            <img src={Logo} width={200} height={200} alt="" />
            <p className="text-[#d7cceb] gilory-regular text-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3 ">Company</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Marketing Creativity
            </a>

            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Our Projects
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Partners
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Clients
            </a>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3">Support</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Help Center
            </a>
            <a
              href="/terms"
              className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer"
            >
              Terms of Service
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Legal
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Privacy Policy
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Status
            </a>
          </div>

          <div className="flex flex-col gap-y-3  md:mx-auto pt-5 md:pt-0">
            <p className="text-white gilory-semibold mb-3">Follow Us</p>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Facebook
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Twitter
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Dribble
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Instagram
            </a>
            <a className="text-[#d7cceb] gilory-regular mb-1 no-underline cursor-pointer">
              Linkedin
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
