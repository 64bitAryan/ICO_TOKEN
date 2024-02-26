import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";

const AdvantageSection = () => {
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
    <div className=" mx-auto w-[90%] md:w-full h-auto  pb-[5rem]">
      <div className="flex container md:mb-10 md:ml-[5rem] flex-col p-5 md:p-10">
        <h1 className=" text-white md:text-[3.7rem] monument-bold">
          Advantage
        </h1>
      </div>

      <Swiper
        slidesPerView={isMobile ? 1 : 5}
        spaceBetween={40}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-2 md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              This currency is SAiB itself
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              SAiB provides youwith the following additional advantages!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-2 md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              Access to the sales superintelligence system
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              Renting orpurchasing the sales super system is possible only with
              SAiB tokens for thebiggest companies.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-2 md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              Voting
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              Users can vote withtheir SAiB tokens on issues affecting the
              development and growth of theecosystem
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-5 w-fit border border-[#4a386a] backdrop-blur-sm px-10">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              Long-term passive income
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              SAiB tokens ensurecontinuous participation for Users in the
              ecosystem's profits
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-2 md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              You can stake
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              Users can staketheir SAiB tokens to earn rewards.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-purple-card w-fit mx-auto rounded-xl p-5 w-fit border border-[#4a386a] backdrop-blur-sm px-10">
            <p className="text-white text-center monument-regular text-[1rem] p-2">
              You can buy
            </p>

            <p className="text-white text-center text-[1rem] tomorrow-light">
              Users can purchase goodsand services with their SAiB tokens from
              merchants who accept SAiB.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { AdvantageSection };
