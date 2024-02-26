import { Explaimation } from "../../assets/auth";
const AttentionSection = () => {
  return (
    <div className="mt-[40rem] md:mt-[68rem]  w-full h-auto pt-[5rem]">
      <div className="flex flex-col ">
        <img src={Explaimation} className="md:w-[20%] w-[50%] mx-auto mb-20" />

        <div className="bg-Vector2 !bg-cover w-full pb-[8rem] ">
          <h1 className="text-center text-white md:text-[3.7rem] monument-bold">
            Pay Attention
          </h1>

          <h1 class="text-center md:mt-5 bg-gradient-to-r  md:p-5 from-gradient-left to-gradient-right text-transparent bg-clip-text md:text-[3.7rem] monument-bold">
            Here's How!
          </h1>

          <p className="text-white mt-5 md:mt-10 text-center leading-5 md:leading-[38px] gilory-regular w-[80%] md:w-[60%] mx-auto md:text-[2rem]">
            The entire system operates within an ecosystemon the ETH blockchain,
            with its own currency.
          </p>

          <p className="text-white md:mt-1 text-center leading-5 md:leading-[38px] gilory-regular w-[80%] md:w-[60%] mx-auto md:text-[2rem]">
            Fora very brief period now, you have the opportunity to get this
            currency at anincredibly low price before it goes public.
          </p>
        </div>
      </div>
    </div>
  );
};

export { AttentionSection };
