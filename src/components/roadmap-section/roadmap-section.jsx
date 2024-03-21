import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const RoadMapSection = () => {
  return (
    <div className=" w-full pt-10 h-auto md:pt-20 md:pb-20 pb-10">
      <h1 className=" text-white text-center md:text-[3.7rem] monument-bold md:pb-20 pb-10">
        Roadmap
      </h1>
      <div className="md:min-h-screen  flex flex-col justify-start md:justify-center sm:py-12 pb-10">
        <div className="py-3  w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div class="hidden sm:block w-1 bg-transparent absolute h-[92%] left-1/2 transform -translate-x-1/2 border-l-2 border-dashed"></div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
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
                      <div className="flex flex-col p-5 items-start justify-center bg-purple-card w-fit mx-auto rounded-xl  md:min-h-[10rem] border md:max-w-[30rem] border-[#4a386a] backdrop-blur-sm">
                        <p className="text-white text-center monument-regular md:text-[2rem] p-2">
                          2024 Q1
                        </p>

                        <ul className="list-disc pl-5 mt-4">
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              SAiB provides you with the following additional
                              advantages!
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              SAiB provides you with the following additional
                              advantages!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="text-black">01</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.9 }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: 100, opacity: 0 },
                      }}
                    >
                      <div className="flex flex-col p-5 items-start justify-center bg-purple-card  mx-auto w-full rounded-xl  md:min-h-[10rem] border md:max-w-[30rem] border-[#4a386a] backdrop-blur-sm">
                        <p className="text-white text-center monument-regular md:text-[2rem] p-2">
                          2024 Q2
                        </p>

                        <ul className="list-disc pl-5 mt-4">
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Development of custom AI specifically for sales
                              and communication content generation
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Development of a custom AI image generator
                              specifically for sales
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="text-black">02</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.11 }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: -100, opacity: 0 },
                      }}
                    >
                      <div className="flex flex-col p-5 items-start justify-center bg-purple-card  mx-auto w-full rounded-xl  md:min-h-[10rem] border md:max-w-[30rem] border-[#4a386a] backdrop-blur-sm">
                        <p className="text-white text-center monument-regular md:text-[2rem] p-2">
                          2024 Q3
                        </p>

                        <ul className="list-disc pl-5 mt-4">
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Development of SalesAiBoost software
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              PR communication to large sales companies,
                              building brand awareness
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Company pre-contracts to use the platform
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="text-black">03</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.13 }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: 100, opacity: 0 },
                      }}
                    >
                      <div className="flex flex-col p-5 items-start justify-center bg-purple-card  mx-auto w-full rounded-xl  md:min-h-[10rem] border md:max-w-[30rem] border-[#4a386a] backdrop-blur-sm">
                        <p className="text-white text-center monument-regular md:text-[2rem] p-2">
                          2024 Q4
                        </p>

                        <ul className="list-disc pl-5 mt-4">
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Launch of SalesAiBoost web application sales
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Development of SalesAiBoost mobile application
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              SAiB tokens are listed on the major stock exchanges.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="rounded-full bg-white  border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="text-black">04</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.16 }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: -100, opacity: 0 },
                      }}
                    >
                      <div className="flex flex-col p-5 items-start justify-center bg-purple-card  mx-auto w-full rounded-xl  md:min-h-[10rem] border md:max-w-[30rem] border-[#4a386a] backdrop-blur-sm">
                        <p className="text-white text-center monument-regular md:text-[2rem] p-2">
                          2025 Q1
                        </p>

                        <ul className="list-disc pl-5 mt-4">
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              First global share payment to $AiB token stake
                              holders
                            </p>
                          </li>
                          <li>
                            <p className="text-white  text-[1rem] tomorrow-light">
                              Launch of SalesAiBoost mobile application
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="text-black">05</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mx-auto mt-5 mb-5 w-[80%] md:w-[40%] justify-center items-center">
        <Link to="/stake" className="btn btn-primary text-center w-full bg-tiffany-blue gilory-semibold hover:scale-105 transition-all ease-in-out duration-300 rounded-md p-5 text-white hover:text-white">
          <p className="uppercase text-xl ">
            Stake my SAiB tokens
          </p>
        </Link>
      </div>
    </div>
  );
};

export { RoadMapSection };
