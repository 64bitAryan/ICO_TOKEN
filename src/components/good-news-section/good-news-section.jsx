const GoodNewsSection = () => {
  return (
    <div className="w-full h-auto z-10 mt-[-2rem] md:mt-[-5rem] pb-[5rem] bg-PrupleImg">
      <div className="flex flex-col items-center p-5 md:p-10">
        <div className="content md:pt-10">
          <div className="mt-10">
            <h1 className=" text-white text-center md:text-[3.7rem] monument-bold">
              Good News
            </h1>

            <p className="text-white  md:mt-8 w-[80%] mx-auto text-center leading-[28px] gilory-regular md:text-[1.375rem]">
              We have created this incrediblyefficient sales superintelligence!
              Only 2 companies have been given theopportunity to test the system
              live!
            </p>

            <p className="text-white font-bold md:mt-2 w-[80%] mx-auto text-center leading-[28px] gilory-regular md:text-[1.375rem]">
              The results are incredible! Here's the video!
            </p>
          </div>
        </div>

        <div className="image flex-grow md:w-[90%] relative  md:p-20 flex items-center justify-center">
          <video
            className="rounded-xl border border-white shadow-md"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            controls
          />

          <div className="absolute border border-white border-opacity-10 bg-white bg-opacity-10 rounded-lg md:p-10 backdrop-blur-lg h-fit md:max-w-[40rem] p-2 top-[100%] md:top-[70%]  md:left-0 md:bottom-0">
            <p className="text-white text-center tomorrow-light md:text-[1.125rem] text-[0.7rem]">
              As mentioned above, companies are practicallybegging for it. But
              they have to wait until the final development phase iscompleted!
            </p>

            <p className="text-white mt-5 text-center tomorrow-light md:text-[1.125rem] text-[0.7rem]">
              This will be a very short period! But untilthen, anyone can profit
              from this incredible power!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GoodNewsSection };