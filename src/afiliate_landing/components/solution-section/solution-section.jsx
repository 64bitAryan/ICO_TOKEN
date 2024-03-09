import { RoboImg } from "../../assets/auth";
import { motion } from "framer-motion";
const SolutionSection = () => {
  return (
    <div className=" w-full h-auto  px-[1rem] md:px-0 ">
      <div className="flex w-[90%] mx-auto flex-col-reverse md:flex-row items-center md:pt-5 md:pl-5 pr-5 md:p-10">
        <div className="content flex-grow md:w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -100, opacity: 0 },
            }}
          >
            <div className="mt-5">
              <p className="text-white mt-5 md:mt-3 md:leading-[48px] tracking-[0.1px]  md:text-[2rem] michroma">
                Why Should you Advertise the $AiB token and what change does
                <span class=" bg-gradient-to-r ml-[3px] mr-[3px]  from-gradient-left to-gradient-right text-transparent bg-clip-text ">
                  SalesAiBoost
                </span>
                bring to the world of sales?
              </p>

              <p className="text-white gilory-regular text-left md:text-[1.5rem] mt-5">
                If you want to lift an industry even higher, it must be very
                good and revolutionary. This is SalesAiBoost.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="image flex-grow md:w-[50%] flex items-center justify-center">
          <img src={RoboImg} alt="Solution" className="w-[50%] h-fit" />
        </div>
      </div>
    </div>
  );
};

export { SolutionSection };
