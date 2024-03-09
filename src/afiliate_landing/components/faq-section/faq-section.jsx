import React, { useState } from "react";

const FAQSection = () => {
  const items = [
    {
      title: "What is the SalesAiBoost affiliate program?",
      content:
        "The SalesAiBoost affiliate program involves entrepreneurs, educators, influencers, and content creators who inspire and teach their community and show them how they can benefit from the market entry of a revolutionary company. You can join the program for free and it enables you to generate revenue with your audience, and earn a commission from every successful SAiB token sale.",
    },
    {
      title: "What requirements do I need to meet to apply?",
      content:
        "To apply, you need to: Have an established audience Create original content, such as videos, social media posts, blog articles, online courses, seminars. Have read and accepted the SalesAiBoost Affiliate Program Agreement",
    },
    {
      title: "Can I be a SalesAiBoost Partner in any country?",
      content:
        "Yes. The Partner Program is global, and we are looking forward to your application as long as our third-party affiliate software supports the country of your residence.",
    },

    {
      title: "How much commission can I earn?",
      content:
        "You are eligible for a 30% commission after every successful sale. There is no maximum number of merchants you can refer to, we would like you to earn as much as possible.",
    },

    {
      title: "How does the payment work?",
      content:
        "The SalesAiBoost Affiliate Program pays out commissions into a digital wallet, which occurs in ETH or USDT, depending on which digital currency the purchase after the successful referral is made in.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container flex items-center  flex-col mx-auto md:pb-20 md:px-28 p-10">
      <h1 className="text-white text-center text-[48px]  agrandir-l mb-4"></h1>
      <h1 class=" text-white text-center  from-gradient-left to-gradient-right michroma md:mt-20 md:mb-20 ">
        FAQ's
      </h1>
      <div className="container mx-auto ">
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className="flex pt-5 pb-5 justify-between items-center p-2 bg-transparent cursor-pointer border-b border-white border-opacity-20"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-white text-[24px] amiko-r">
                {item.title}
              </span>

              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.790283 1L14.2903 14.5L27.7903 1"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="p-2 bg-zinc-600 bg-opacity-20 border-l border-fuchsia-600">
                <p className="text-white text-lg amiko-r">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQSection };
