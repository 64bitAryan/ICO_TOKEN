import { motion } from "framer-motion";
const HomeSection2 = () => {
  return (
    <div className=" bg-Vector2 w-full h-auto pt-[5rem]">
      <div className="flex flex-col p-5 md:p-10">
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
          <h1 className="text-center text-white md:text-[3.7rem] monument-bold">
            A Profitable
          </h1>

          <h1 class="text-center bg-gradient-to-r md:mt-3 md:p-5 from-gradient-left to-gradient-right text-transparent bg-clip-text md:text-[3.7rem] monument-bold">
            Opportunity for You!
          </h1>

          <p className="text-white mt-5 md:mt-10 text-center leading-[28px] gilory-regular md:w-[80%] mx-auto md:text-[1.375rem]">
            Companies are already begging for it! Nomatter what business you are
            in, the most important activity for any company issales! Because no
            matter how attractive the product or how excellent theservice, if it
            cannot sell, then it's the end! Companies know this, which iswhy
            they incredibly desire our sales super machine, but they have to
            wait a bitlonger! We are in the final stages of development, and
            soon this amazing toolwill belong to the companies, but until then,
            you can also make money with it!How?
          </p>

          <p className="text-tiffany-blue  text-center leading-[28px] gilory-heavy md:w-[80%] mx-auto md:text-[2rem] mt-5">
            PAY ATTENTION, because this is about YOU!!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export { HomeSection2 };
