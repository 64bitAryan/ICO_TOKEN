import { ContactBlob } from "../../assets/auth";

const ContactUs = () => {
  return (
    <div className=" relative mx-auto p-5 md:p-20  bg-black-heavy w-screen md:w-full h-auto  pb-[5rem]">
      <img
        src={ContactBlob}
        width={800}
        height={800}
        className="absolute left-[-20rem] top-[-15rem]"
      />

      <div class="bg-gradient-to-r rounded-lg from-gradient-left to-gradient-right p-[1px]">
        <div className="bg-black-heavy rounded-lg p-10">
          <h2 className="text-center text-white pt-1 michroma md:text-[2.5rem] pb-8">
            Contact Us
          </h2>

          <div className="flex mt-8 flex-col gap-y-5 md:gap-y-0 justify-center md:gap-x-10 items-center md:flex-row w-full md:px-10">
            <div className="input-wrapper w-full ">
              <input
                className="p-5 bg-input-bg w-full  rounded-lg border border-white border-opacity-50 text-white"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="input-wrapper w-full ">
              <input
                className="p-5 bg-input-bg w-full  rounded-lg border border-white border-opacity-50 text-white"
                type="text"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="input-wrapper mt-5  w-full md:px-10 md:mt-8 md:pb-10">
            <input
              className="p-5 bg-input-bg w-full  rounded-lg border border-white border-opacity-50 text-white"
              type="text"
              placeholder="Email"
            />
          </div>
          <button
            className={`bg-gradient-to-r  shadow-md shadow-gradient-right transition-all px-2 py-2  rounded-lg hover:scale-105 duration-150 ease-in-out from-gradient-left to-gradient-right mx-auto  w-fit md:!p-4 md:!px-10 text-center justify-center md:text-xl md:mt-10 mt-5 mb-5 flex items-center  gap-5`}
          >
            <p className="uppercase gilory-semibold text-white text-sm md:text-[1.5rem]">
              {" "}
              Create my free SalesAiBoost Affiliate Account
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
