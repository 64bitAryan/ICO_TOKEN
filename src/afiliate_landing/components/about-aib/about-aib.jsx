import {
  Invest,
  CoinStack,
  Stats,
  ProfitBag,
  AI1,
  AI2,
} from "../../assets/auth";
const AboutAIB = () => {
  return (
    <div className=" mx-auto px-10 mt-20 md:mt-0 bg-black-heavy w-screen md:w-full h-auto  pb-[5rem]">
      <h1 class=" bg-gradient-to-r ml-[3px] mr-[3px] text-center  from-gradient-left to-gradient-right michroma md:mt-20 md:mb-20 text-transparent bg-clip-text ">
        About the $AiB token
      </h1>

      <div className="flex main-row md:flex-row gap-y-5 md:gap-y-0 flex-col gap-x-3  ">
        <div className="md:w-[25%] mt-5 md:mt-0 div1">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy about-child p-4 md:min-h-[18rem] flex flex-col items-center rounded-lg ">
              <img
                className="mb-2"
                src={Invest}
                width={80}
                height={80}
                about="invest"
              />
              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                <b className="gilory-heavy">
                  Now you can take part in this $200 billion USD market,
                </b>
                invest in the SalesAiBoost platform and profit from this
                paradigm shift.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[60%] div2">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy about-child md:min-h-[18rem] p-4 flex flex-col md:flex-row-reverse items-center rounded-lg">
              <div className="md:w-[30%] items-center flex justify-center">
                <img
                  className="mb-2 mx-auto sm:mx-0 md:w-[80%]"
                  src={CoinStack}
                  width={80}
                  height={80}
                  about="invest"
                />
              </div>
              <div className="md:w-[70%]">
                <p className="text-white text-center md:text-left gilory-regular md:text-[1.4rem]">
                  <b className="gilory-heavy">
                    The $AiB token is not just an investment into software, but
                    an investment into a growing market.
                  </b>
                  For visionaries, it represents an opportunity to participate
                  in the revolution of direct sales - whether they are at the
                  forefront with SalesAiBoost or watching the incredible
                  unfolding of opportunities from a distance. The market's
                  future, vibrant with opportunities, invites you to speculate
                  on the pioneering impact of SalesAiBoost.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[15%] hidden md:block div">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <img
              src={AI1}
              about=""
              className="h-[18rem] w-full about-child rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex main-row md:flex-row gap-y-5 md:gap-y-0 flex-col gap-x-3 md:mt-3 ">
        <div className="md:w-[15%] hidden md:block div">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <img
              src={AI2}
              about=""
              className="h-[18rem] w-full about-child rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="md:w-[60%] div2 mt-5 md:mt-0">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy about-child md:min-h-[18rem] p-4 flex flex-col md:flex-row-reverse items-center rounded-lg">
              <div className="md:w-[30%] items-center flex justify-center">
                <img
                  className="mb-2 mx-auto sm:mx-0 md:w-[80%]"
                  src={ProfitBag}
                  width={80}
                  height={80}
                  about="invest"
                />
              </div>
              <div className="md:w-[70%]">
                <p className="text-white md:text-left text-center gilory-regular md:text-[1.5rem]">
                  <b className="gilory-heavy mr-2">
                    By purchasing $AiB tokens, you can profit from the expected
                    future price increases
                  </b>
                  as the digital sales market is hungry for this technology and
                  the SalesAiBoost solution. It can reach even more interested
                  parties and profit.
                  <b className="gilory-heavy">
                    In addition, you can even get a share of the SalesAiBoost
                    software sales by staking your tokens.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[25%] mt-5 md:mt-0 div1">
          <div class="bg-gradient-to-r about-main md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy about-child p-4 md:min-h-[18rem] flex flex-col items-center rounded-lg ">
              <img
                className="mb-2"
                src={Stats}
                width={80}
                height={80}
                about="invest"
              />
              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                Step into a future where innovation meets opportunity and offers
                profit for you. Join the journey with SalesAiBoost, where the
                visions of tomorrow are realized today. Immerse yourself in the
                revolution -
                <b className="gilory-heavy">your future awaits you.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutAIB };
