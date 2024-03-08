import { ProblemImg } from "../../assets/auth";
import { motion } from "framer-motion";
const ProblemSection = () => {
  return (
    <div className="  w-full h-auto pt-[5rem] ">
      <div className="flex flex-col md:flex-row items-center md:p-5 md:p-10">
        <div className="image flex-grow md:w-[50%]">
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
            <img
              src={ProblemImg}
              width={500}
              height={500}
              alt="Problem"
              className="w-full"
            />
          </motion.div>
        </div>

        <div className="content flex-grow px-8 md:p-0 md:w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 100, opacity: 0 },
            }}
          >
            <div className="">
              <h1 className=" text-white md:text-[3.7rem] monument-bold">
                The
                <span className="bg-gradient-to-r ml-4 from-gradient-left to-gradient-right text-transparent bg-clip-text">
                  Problem
                </span>
              </h1>
            </div>

            <div className="mt-5">
              <p className="text-white mt-5 md:mt-3 md:leading-[28px] gilory-regular md:text-[1.375rem]">
                Today, the preparation of human salespeople is no longer
                sufficient; their motivation fluctuates, and their extremely
                variable efficiency in communication is insufficient in the
                advertisement noise generated by your competitors, which has
                become immense, your potential customers most likely don't even
                hear it.
              </p>

              <p className="text-white mt-5 md:mt-3  md:leading-[28px] gilory-regular md:text-[1.375rem]">
                Artificial Intelligence might seem like a solution at first
                thought, but there are two insurmountable factors. 
              </p>

              <p className="text-white mt-5 md:mt-3  md:leading-[28px] gilory-regular  md:text-[1.375rem]">
                Artificial Intelligence performs excellently in many areas, but
                sales is an infinitely complex activity, explicitly requiring
                emotions. People will always buy from companies, during a
                purchase,people give their money for the product or service.
                Right? However, people ALWAYS buy from people!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { ProblemSection };
