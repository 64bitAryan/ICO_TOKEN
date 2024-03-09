import { HeroVector, HomePageBlob, Logo } from "../../assets/auth";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { isValidAddress } from "../../../utils/helpers";
import { AffiliateViewModel } from "../../../pages/affiliate/AffiliateViewmodel";

const HeroSection = () => {
  const { registerAffiliate } = AffiliateViewModel();
  const [animateForm, setAnimateForm] = useState(false);
  const [affiliateAddress, setAffiliateAddress] = useState("");
  const inputRef = useRef();

  const handleRegisterClick = async () => {
    console.log(affiliateAddress);
    if (isValidAddress(affiliateAddress)) {
      await registerAffiliate(affiliateAddress);
    } else {
      return alert("Invalid wallet address");
    }
  };

  const handleIputChange = async (event) => {
    const val = event.target.value;
    setAffiliateAddress(val);
  };

  const handleAnimateForm = () => {
    setAnimateForm(true);
    setTimeout(() => {
      setAnimateForm(false);
    }, 1000);
  };

  return (
    <div className="  w-screen h-auto  relative">
      <img
        src={HomePageBlob}
        width={500}
        height={500}
        alt=""
        className="absolute right-0"
      />
      <div className="flex justify-center items-center pt-10">
        <img src={Logo} width={300} height={300} alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-2 md:p-0">
        <div className="w-full md:w-[55%] ">
          <img
            src={HeroVector}
            width={1000}
            height={1000}
            alt=""
            className="w-auto scale-[1.4] md:scale-100"
          />
        </div>

        <div className="flex flex-col w-full items-center py-5 md:py-10 px-[10px] md:px-0 md:w-[45%]">
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
            <p class="text-center tracking-[3px] mb-5 md:text-left md:leading-[38px] bg-gradient-to-r text-[1.2rem] md:text-[1.875rem] xl:text-[2rem] w-full  text-white michroma ">
              Welcome to your <br></br> SalesAiBoost business
            </p>

            <h1 className="text-center mortend  md:leading-[77px] md:tracking-[11%] text-primary-pink md:text-left  text-[2rem] md:text-[3.5rem] xl:text-[3.8rem]  break-words">
              30% <br></br> commission <br></br> instantly
            </h1>

            <p className="text-white text-center md:text-left mt-5 md:w-[90%] mr-auto md:leading-[28px] gilory-regular  md:text-[1.25rem] xl:text-[1.5rem] ">
              Join our Affiliate Program now, take your share in a $200 billion
              market revolution and start earning by helping to launch the
              world's first AI-based sales platform into the market.
            </p>

            <div className="flex flex-col items-center mt-5 mb-5 w-full  md:w-[60%] mr-auto">
              <input
                type="text"
                ref={inputRef}
                onChange={handleIputChange}
                className="btn w-[80%] mb-5 mx-auto sm:mx-0 shadow-md shadow-gradient-right md:w-full bg-gradient-to-r  hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white"
              />
              <button
                onClick={handleRegisterClick}
                className="btn w-[80%] mb-5 mx-auto sm:mx-0 shadow-md shadow-gradient-right md:w-full bg-gradient-to-r  hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white "
              >
                <p className="text-sm md:text-xl gilory-semibold uppercase">
                  Register Now!{" "}
                </p>
              </button>
              <w3m-button />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
