import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { LogoMin, Promote, Earn } from "../../assets/auth";

const EarningSection = () => {
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
    <div className=" mx-auto md:px-10 p-2 bg-purple-background w-screen md:w-full h-auto  pb-[5rem]">
      <div className="flex flex-col md:flex-row pt-8 justify-between items-end ">
        <div className="flex  md:mb-10  flex-col p-5 md:p-10">
          <h1 className=" text-white text-center md:text-left  md:text-[2.2rem] mortend md:leading-[38px]">
            Earning Income Has Never Been So Easy
          </h1>
        </div>

        <div className="flex  0 md:mb-10  flex-col p-5 md:p-10">
          <img
            src={LogoMin}
            width={30}
            height={30}
            alt=""
            className="mx-auto sm:mx-0"
          />

          <p className="text-center md:text-left  text-white md:text-[1.25rem] gilory-regular ">
            <b className="gilory-semibold">3 simple steps</b> to start your
            business and the outstanding 30% affiliate commission can start
            coming in!
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={24}
        centeredSlides={true}
        className="mySwiper"
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
          <div className="min-h-[31rem]  md:min-h-auto justify-center md:justify-normal bg-card-earning items-center md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl px-5 py-5 md:min-h-[28rem]   backdrop-blur-sm">
            {/* <img src={JoinNow} width={80} height={80} alt="" className="mt-3" /> */}
            <p className=" text-center monument-regular text-[1.7rem] md:text-[2rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              Join now
            </p>
            <p className="text-white text-center text-[1.3rem] md:text-[1.3rem] ">
              <b> Register and start your journey to commissions by sharing </b>{" "}
              the story of the $AiB token and the SalesAiBoost platform.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[31rem]] md:min-h-auto justify-center md:justify-normal bg-card-earning items-center md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl px-5 py-5 md:min-h-[28rem]   backdrop-blur-sm">
            <img src={Promote} width={80} height={80} alt="" className="mt-3" />

            <p className=" text-center monument-regular text-[1.7rem] md:text-[2rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              Promote
            </p>
            <p className="text-white text-center text-[1.3rem] md:text-[1.3rem] ">
              Showcase the profitability of the $AiB token and explain the
              problems that the SalesAiBoost system solves and how it transforms
              the world of sales from frantic prospect hunting to effortless
              prospect magnetism, where customers wait with their credit cards
              in hand to make a purchase.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[31rem] md:min-h-auto justify-center md:justify-normal bg-card-earning items-center md:py-5 md:px-10 flex flex-col  mx-auto rounded-xl px-5 py-5 md:min-h-[28rem]   backdrop-blur-sm">
            <img src={Earn} width={80} height={80} alt="" />

            <p className=" text-center monument-regular text-[1.7rem] md:text-[2rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
              Earn Money
            </p>
            <p className="text-white text-center text-[1.3rem] md:text-[1.3rem] ">
              This is the fun part. You receive the 30% commission of the
              purchase amount immediately after each successful referral. Clean.
              Without deductions.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center md:mt-10 ">
        <button className="btn mt-5 md:mt-0  shadow-md shadow-gradient-right w-fit bg-gradient-to-r !px-10 hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white ">
          <p className=" text-sm md:text-xl gilory-semibold uppercase">
            I Register my own Business
          </p>
        </button>
      </div>
    </div>
  );
};

export { EarningSection };
