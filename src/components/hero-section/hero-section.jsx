import { Binance, Logo, USDT } from "../../assets/auth";
import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animateForm, setAnimateForm] = useState(false);

  const handleAnimateForm = () => {
    setAnimateForm(true);
    setTimeout(() => {
      setAnimateForm(false);
    }, 1000);
  };

  return (
    <div className="  w-screen h-auto pt-2 md:pt-[5rem] bg-Hero ">
      <div className="flex justify-center items-center ">
        <img src={Logo} width={300} height={300} alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-2 md:p-10">
        <div className="flex flex-col w-full items-center p-5 md:p-10 md:w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 100, opacity: 0 },
            }}
          >
            <h1 className="text-center  md:leading-[58px] text-white md:text-left md:text-[3rem] monument-bold">
              The World’s #1 Selling Software
            </h1>

            <h1 class="text-center md:text-left md:leading-[58px] bg-gradient-to-r w-full  from-gradient-left to-gradient-right text-transparent bg-clip-text md:text-[3rem] monument-bold">
              with the power of ai
            </h1>

            <p className="text-white text-center md:text-left mt-5 md:w-[90%] mr-auto md:leading-[28px] gilory-regular  md:text-[1.375rem]">
              We have created the most crucial tool forevery business, a
              revenue-generating super intelligence, but now you too canprofit
              from it! This opportunity is open to everyone for a very
              limitedtime!!!!
            </p>

            <div className="flex flex-row mt-5 mb-5 w-full  md:w-[60%] mr-auto">
              <button
                onClick={() => {
                  handleAnimateForm();
                }}
                className="btn w-full bg-gradient-to-r  hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white "
              >
                <p className=" text-xl gilory-semibold ">Pre-sale </p>
              </button>
            </div>

            <p className="md:mr-auto mt-8 md:leading-[58px] text-white md:text-[2rem] monument-bold">
              1 ICO = $0.000039
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-[50%] ">
          <div
            className={`card bg-white bg-opacity-5 mx-auto rounded-3xl md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm ${
              animateForm
                ? "scale-105 transition ease-in-out duration-500 delay-300"
                : "scale-100 transition ease-in-out duration-500 delay-300"
            }`}
          >
            <div className="bg-gradient-to-r from-[#6F38C0] to-[#C289F4] rounded-tl-3xl rounded-tr-3xl pb-2">
              <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] pt-5 pb-5 monument-regular">
                Purchase ICO Token
              </p>

              <div className="flex pl-0 pr-0 md:pl-10 md:pr-10 flex-col md:flex-row gap-5 justify-center">
                <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
                  <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
                    12d
                  </p>
                </div>

                <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
                  <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
                    12h
                  </p>
                </div>

                <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
                  <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
                    03m
                  </p>
                </div>

                <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
                  <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
                    59s
                  </p>
                </div>
              </div>

              <div class="relative pt-1 w-[80%] mx-auto mt-5">
                <div class="flex">
                  <div class="flex-grow flex items-center bg-transparent border-white border-opacity-15 border opacity-75 rounded-full">
                    <div class="w-1/4 h-4 bg-[#00C2BA] rounded-full"></div>
                  </div>
                </div>
              </div>

              <p className="text-center mt-5 mb-5 md:mt-0 md:mb-0  md:leading-[58px] text-white md:text-[1rem] gilory-regular">
                USDT Raised: $5,596.83 / $650, 000
              </p>
            </div>

            <div className="flex flex-row gap-5 justify-center mt-5 mb-5 md:mt-0 md:mb-0 items-center">
              <div className="border border-b-white opacity-20 w-[30%]"></div>
              <div>
                <p className="text-center  md:leading-[58px] text-white md:text-[1rem] gilory-regular">
                  1 ICO = $0.000039
                </p>
              </div>
              <div className="border border-b-white opacity-20 w-[30%]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-center w-[80%] mx-auto">
              <div className="rounded-xl justify-center items-center gap-x-2 flex flex-row border-white border px-8 py-3 border-opacity-20">
                <img src={Binance} width={20} height={20} alt="" />
                <p className="text-white">Binance</p>
              </div>

              <div className="rounded-xl justify-center items-center gap-x-2 flex flex-row border-white border px-8 py-3 border-opacity-20">
                <img src={USDT} width={20} height={20} alt="" />
                <div className="flex flex-col">
                  <p className="text-white font-bold">USDT</p>
                  <p className="text-[0.8rem] text-white">ERC20</p>
                </div>
              </div>

              <div className="rounded-xl justify-center items-center gap-x-2 flex flex-row border-white border px-8 py-3 border-opacity-20">
                <img src={Binance} width={20} height={20} alt="" />
                <p className="text-white">Binance</p>
              </div>

              <div className="rounded-xl justify-center items-center gap-x-2 flex flex-row border-white border px-8 py-3 border-opacity-20">
                <img src={USDT} width={20} height={20} alt="" />
                <div className="flex flex-col">
                  <p className="text-white font-bold">USDT</p>
                  <p className="text-[0.8rem] text-white">ERC20</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row  justify-center items-center mt-5 mb-5 md:mt-0 md:mb-0">
              <div>
                <p className="text-center  md:leading-[58px] text-white md:text-[1rem] gilory-regular">
                  USD balance 0
                </p>
              </div>
            </div>

            <hr className="w-[85%] opacity-25 mx-auto"></hr>

            <div className="flex flex-col md:flex-row w-[80%] gap-3 mx-auto justify-between pt-5">
              <div className="flex flex-col w-full">
                <label className="text-left  md:leading-[58px] text-white md:text-[1rem] gilory-regular">
                  Amount In USDT you pay
                </label>

                <input
                  type="text"
                  className="border-white  text-white bg-transparent p-2 border-opacity-20 border rounded-lg"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-left  md:leading-[58px] text-white md:text-[1rem] gilory-regular">
                  Amount in ICO you receive
                </label>

                <input
                  type="text"
                  className="border-white text-white bg-transparent p-2 border-opacity-20 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-row mx-auto mt-5 mb-5  w-[80%] justify-center items-center">
              <p className="text-center  text-white md:text-[1rem] gilory-regular">
                0.15 RTH is reserved for gas. The actual Amount used will depend
                on the network
              </p>
            </div>

            <div className="flex flex-row mx-auto mt-5 mb-5  w-[80%] justify-center items-center">
              <button className="btn w-full bg-tiffany-blue rounded-md p-[0.5rem] text-white hover:scale-105 transition-all ease-in-out duration-300">
                <p className="uppercase text-xl ">Buy now </p>
              </button>
            </div>

            <div className="flex flex-row mx-auto mt-5 mb-5  w-[80%] justify-center items-center">
              <p className="text-center  text-white md:text-[1rem] gilory-regular">
                Listing Price: $0.0000336
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };