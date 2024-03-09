import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import {
  LogoMin,
  ContactBlob,
  Security,
  Marketing,
  partner,
  broad,
  dashboard,
} from "../../assets/auth";

const BusinessSuccess = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Check on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative mx-auto px-10  bg-black-heavy w-screen md:w-full h-auto  pb-[5rem]">
      <img
        src={ContactBlob}
        width={800}
        height={800}
        className="absolute left-[-20rem] top-[-15rem]"
      />
      <div className="flex md:flex-row flex-col md:pt-8 justify-between ">
        <div className="flex  md:mb-10  flex-col p-5 md:p-10 md:w-[50%]">
          <h1 className=" text-white text-center md:text-left text-[1.3rem]  md:text-[2.5rem] michroma md:leading-[48px]">
            Your business success and profit <br></br> are important to us
          </h1>
        </div>

        <div className="flex  0 md:mb-10  flex-col p-5 md:p-12 md:w-[50%]">
          <img
            src={LogoMin}
            width={30}
            height={30}
            alt=""
            className="mx-auto sm:mx-0"
          />

          <p className="text-center md:text-left text-white md:text-[1.3rem] gilory-regular ">
            We help you to have as many successful referrals as possible so that
            you can earn as much commission as possible.
          </p>
        </div>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={40}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-[#1c1631] items-center py-5 px-5 md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl p-2 md:min-h-[28rem]   backdrop-blur-sm">
            <img
              src={Security}
              width={80}
              height={80}
              alt=""
              className="mt-3"
            />
            <p className="text-[1.125rem] text-center monument-regular md:leading-[38px] text-md  md:text-[1.8rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              100% business security
            </p>
            <p className="text-white text-center  text-[1.125rem] ">
              <b className="gilory-heavy">
                All our Affliate Partners' business and rewards are protected by
                a smart contract.
              </b>
              So we can't take, delete or withhold your commissions, every
              process from sign-up to payment of your commission is managed by
              smart contracts.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[#1c1631] items-center py-5 px-5 md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl p-2 md:min-h-[28rem]   backdrop-blur-sm">
            <img
              src={Marketing}
              width={80}
              height={80}
              alt=""
              className="mt-3"
            />

            <p className="text-[1.125rem] text-center monument-regular md:leading-[38px] text-md  md:text-[1.8rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
               Marketing tools
            </p>
            <p className="text-white text-center  text-[1.125rem] ">
              <b className="gilory-heavy">
                With the help of creative elements, video materials, and blog
                articles, you can refresh your campaigns and achieve more
                conversions.
              </b>
              Easily resendable, persuasive content that's accessible through
              your referral link.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[#1c1631] items-center py-5 px-5 md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl p-2 md:min-h-[28rem]   backdrop-blur-sm">
            <img src={partner} width={80} height={80} alt="" />

            <p className="text-[1.125rem] text-center monument-regular md:leading-[38px] text-md  md:text-[1.8rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              True partnership
            </p>
            <p className="text-white text-center  md:text-[1.125rem] ">
              <b className="gilory-heavy">
                We provide professional support and committed account managers
                who guide you through the journey of the affiliate venture and
                help you reach your goals.
              </b>
              From our partner newsletter, you can get tips for success, as well
              as resources about the SAiB token and the SalesAiBoost services,
              which you can share with your visitors.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[#1c1631] items-center py-5 px-5 md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl p-2 md:min-h-[28rem]   backdrop-blur-sm">
            <img src={broad} width={80} height={80} alt="" />

            <p className="text-[1.125rem] text-center monument-regular md:leading-[38px] text-md  md:text-[1.8rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              Broad appeal
            </p>
            <p className="text-white text-center text-[1.125rem] ">
              <b className="gilory-heavy">
                There is already huge interest in the SalesAiBoost platform
                during the market research phase, so we expect tens of thousands
                of software users at the launch of the software,
              </b>
              which could positively affect the price of the $AiB token.
              Additionally, those who stake the $AiB token can receive a share
              of every subscription fee paid by each software user.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[#1c1631] items-center py-5 px-5 md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl p-2 md:min-h-[28rem]   backdrop-blur-sm">
            <img src={dashboard} width={80} height={80} alt="" />

            <p className="text-[1.125rem] text-center monument-regular md:leading-[38px] text-md  md:text-[1.8rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              Intuitive dashboards
            </p>
            <p className="text-white text-center text-[1.125rem] ">
              We equip our affiliates with easily navigable dashboards from
              which they can launch, manage, and track campaigns.
              <b className="gilory-heavy">
                See how many people visit your referral link and how much money
                you earn per visitor.
              </b>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { BusinessSuccess };
