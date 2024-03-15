import { RoboImg } from "../../assets/auth";
import { motion } from "framer-motion";
const SolutionSection = () => {
  return (
    <div className=" w-full h-auto pt-[5rem] px-[1rem] md:px-0 bg-Vector1 ">
      <div className="flex w-[90%] mx-auto flex-col md:flex-row items-center md:pt-5 md:pl-5 pr-5 md:p-10">
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
            <div className="">
              <h1 className=" text-white md:text-[3.7rem] monument-bold">
                Our
                <span className="bg-gradient-to-r ml-5 from-gradient-left to-gradient-right text-transparent bg-clip-text">
                  Solution
                </span>
              </h1>
            </div>

            <div className="mt-5">
              <p className="text-white mt-5 md:mt-3 md:leading-[28px] gilory-regular md:text-[1.375rem]">
                Based on the above, the path is clear! We need to create a
                complex ecosystem, a system that indispensably involves both the
                salesperson and an Artificial Intelligence specifically
                developed for sales.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="image flex-grow md:w-[50%] flex items-center justify-center">
          <img src={RoboImg} alt="Solution" className="w-[60%] robotImg"  />
        </div>
      </div>
    </div>
  );
};

export { SolutionSection };
