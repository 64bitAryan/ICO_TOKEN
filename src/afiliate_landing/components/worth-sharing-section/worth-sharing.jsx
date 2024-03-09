import { ProblemImg } from "../../assets/auth";
import { motion } from "framer-motion";
import { Coin } from "../../assets/auth";

const WorthSharing = () => {
  return (
    <div className="bg-purple-background  w-full h-auto  ">
      <div className="flex flex-col md:flex-row items-center ">
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
              src={Coin}
              width={700}
              height={700}
              alt="Problem"
              className="mx-auto scale-110 md:scale-100"
            />
          </motion.div>
        </div>

        <div className="content flex-grow px-3 md:px-8 md:p-0 md:w-[50%]">
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
            <div className="p-5 md:p-0">
              <h1 className=" text-white text-[1.8rem] md:text-[2.5rem] michroma">
                Worth Sharing
              </h1>
            </div>

            <div className="md:w-[90%] w-full p-5 md:p-0">
              <p className="text-white text-[1.2rem]  md:mt-5 md:leading-[28px] gilory-regular md:text-[1.375rem]">
                <b className="gilory-heavy">
                  We love referrals, which is why we offer an outstanding 30%
                  commission on every successful referral in our Affiliate
                  Program.
                </b>
                Let's say your referral leads to a purchase of SAib tokens worth
                $50,000, which could result in long-term profit for the members
                you bring in due to potential price increases and demand for the
                SalesAiBoost system. They will be grateful to you for showing
                them how to be part of an innovative and growing business, and
                you earn cleanly, without deductions:
              </p>

              <p className=" text-left text-[3rem] w-fit mortend md:text-[3rem] p-2 bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text">
                15,000 *
              </p>

              <p className="text-white  text-[1.4rem] md:mt-2  md:leading-[28px] gilory-regular   md:text-[1.5rem]">
                Just because they used your link!
              </p>

              <p className="text-white md:mt-2 gilory-regular text-[0.8rem] mt-3 ">
                {" "}
                *A 30% commission is given after every successful referral into
                the specified wallet. The example detailed above and the
                expected commission amount are not guaranteed and are
                indicative, depending on the Partner's business activity.
              </p>

              <button className="  shadow-md bg-white w-fit  cursor-pointer py-2 md:!py-5 mt-5 md:!px-10 hover:scale-105 transition-all ease-in-out duration-300   rounded-lg p-[0.5rem] text-black-heavy ">
                <p class="text-sm md:text-xl gilory-semibold uppercase">
                  Request My Affiliate Link!
                </p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { WorthSharing };
