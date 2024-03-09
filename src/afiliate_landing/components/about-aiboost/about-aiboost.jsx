import {
  Invest,
  CoinStack,
  Stats,
  ProfitBag,
  Percentage,
  AI,
  Bot,
  Game,
  AI1,
  RoboImg,
  AI3,
} from "../../assets/auth";
const AboutAIBoost = () => {
  return (
    <div className=" mx-auto px-10  bg-black-heavy w-screen md:w-full h-auto  pb-[5rem]">
      <h1 class=" bg-gradient-to-r ml-[3px] mr-[3px] text-center  from-gradient-left to-gradient-right michroma md:mt-20 md:mb-20 text-transparent bg-clip-text ">
        About the <br></br> SalesAiBoost system
      </h1>

      <div className="flex md:flex-row gap-y-5 md:gap-y-0 flex-col gap-x-5  ">
        <div className="md:w-[33%] mt-5 md:mt-0">
          <div class="bg-gradient-to-r md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy p-4 md:min-h-[18rem] flex flex-col items-center rounded-lg ">
              <img
                className="mb-2"
                src={Bot}
                width={80}
                height={80}
                about="invest"
              />
              <p className="text-white text-center gilory-heavy md:text-[1.25rem]">
                Continuously attract new prospects automatically with
                SalesAiBoost, the world's first AI-based lead generation system.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[33%] ">
          <div class="bg-gradient-to-r md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy md:min-h-[18rem] p-4 flex flex-col items-center rounded-lg">
              <img
                className="mb-2"
                src={AI}
                width={80}
                height={80}
                about="invest"
              />
              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                Despite all technological advancements, we find it incredible
                that over 90% of direct salespeople still do not use artificial
                intelligence for lead generation.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[33%] ">
          <div class="bg-gradient-to-r md:min-h-[18rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy md:min-h-[18rem] p-4 flex flex-col items-center rounded-lg">
              <img
                className="mb-2"
                src={Game}
                width={80}
                height={80}
                about="invest"
              />
              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                <b className="gilory-heavy">
                  SalesAiBoost is a superintelligence that navigates the
                  marketing maze,
                </b>
                buyers will queue up at the sellers wanting to purchase.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-x-5 gap-y-5 md:gap-y-0 mt-5  ">
        <div className="md:w-[40%] md:h-[20rem]">
          <div class="bg-gradient-to-r  md:min-h-[22.5rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy p-4  md:min-h-[22.4rem] flex flex-col justify-center items-center rounded-lg ">
              <h1 class=" bg-gradient-to-r text-center  from-gradient-left to-gradient-right gilory-bold mb-5 text-transparent bg-clip-text ">
                114 Million Sallers
              </h1>
              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                <b className="gilory-heavy">
                  There are over 114 million direct sellers in the world, the
                  market has a turnover of $200 billion USD,
                </b>
                and the competition is fierce. Digital sales is a dense traffic
                maze with constant congestion. Crazy scrambling, piles of
                post-its on the to-do list, and a tangled mess of diluted
                strategies.
                <b className="gilory-heavy">Until now.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[40%] md:h-[20rem]">
          <div class="bg-gradient-to-r  md:min-h-[22.5rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <div class="bg-black-heavy md:min-h-[22.5rem] p-4 flex  flex-col items-center rounded-lg ">
              <img
                className="mb-2 mx-auto"
                src={Percentage}
                width={80}
                height={80}
                about="invest"
              />

              <p className="text-white text-center gilory-regular md:text-[1.25rem]">
                <b className="gilory-heavy">
                  SalesAiBoost frees up sales with the full potential of AI.
                </b>
                No more endless and failure-filled hunts for leads. With
                SalesAiBoost, buyers automatically arrive hour by hour, while
                salespeople do not need to be programmers or marketing experts.
                A single platform, working strategy, 2-3 clicks, and customers
                flood in.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[20%] hidden md:block  ">
          <div class="bg-gradient-to-r md:min-h-[22.5rem] rounded-lg from-gradient-left to-gradient-right p-[1px] ">
            <img
              src={AI3}
              about=""
              className="h-[22.5rem] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 ">
        <button className="btn  shadow-md shadow-gradient-right w-fit bg-gradient-to-r cursor-pointer py-2 md:!py-5 mt-5 md:!px-10 hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white ">
          <p className=" text-sm md:text-xl gilory-semibold uppercase">
            I won't miss out on this, I want a 30% commission from it!
          </p>
        </button>
      </div>
    </div>
  );
};

export { AboutAIBoost };
