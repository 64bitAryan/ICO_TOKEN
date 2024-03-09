const Footer = () => {
  return (
    <div className="bg-black-heavy p-5 w-full h-auto ">
      <div className="container bg-gradient-to-r rounded-xl mx-auto pb-10">
        <div className="footer-wrapper px-5 py-5 md:px-20 md:py-20 rounded-3xl">
          <h1 className="text-white text-[1.5rem] md:text-[3.375rem] mortend">
            Ready to partner up?
          </h1>

          <p className="text-white text-[1rem] md:text-[2.375rem] michroma">
            Your Partner Business and 30% instant commission await.
          </p>

          <p className="text-white text-[1rem] md:text-[1.5rem] gilory-regular">
            Register, advertise, convert, and earn money.
          </p>

          <button className="bg-black  shadow-md shadow-gradient-right md:px-8 w-full md:w-fit px-10 md:py-2 py-1 rounded-lg mt-5">
            <p className="text-white uppercase text-[1rem]  md:text-[1.5rem] gilory-semibold">
              Count me in too!
            </p>
          </button>
        </div>
      </div>

      <p className="text-white text-center gilory-regular pb-5">
        ©2024 ICO TOKEN. All rights reserved
      </p>
    </div>
  );
};

export { Footer };
