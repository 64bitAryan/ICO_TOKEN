import React from "react";
import "./nicepage.css";
import "./SAIB-Stake.css";
import { StakingViewModel } from "./StakingViewMode";
import Pdf from '../../assets/documents/SalesAIBoost-English.pdf';

export const Stake = () => {
  const {
    approveToken,
    stakeToken,
    setBuyValue,
    handleInputChange,
    buyValue,
    inputRef,
  } = StakingViewModel();

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <title>SAIB Stake</title>
      <meta name="generator" content="Nicepage 6.5.9, nicepage.com" />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="SAIB Stake" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="/" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />

      <div class="stakePage">
      <section
        className="u-clearfix u-custom-color-2 u-sectionStake-1 "
        id="sec-7e15"
      >
        <div className="u-clearfix u-sheetStake u-valign-middle u-sheetStake-1">
          <img
            className="u-image u-image-contain u-image-default u-imageStake-1"
            src="images/Logo-saib.png"
            alt=""
            data-image-width={1557}
            data-image-height={306}
          />
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-image u-sectionStake-2"
        id="sec-98a7"
        data-image-width={6000}
        data-image-height={3375}
      >
        <div className="u-clearfix u-sheetStake u-sheetStake-1">
          <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-container-style u-custom-color-8 u-group u-shape-rectangle u-groupStake-1">
            <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-containerStake-layout-1 stake-boxtop">
              <h2 className="u-text u-text-custom-color-4 u-text-default u-textStake-1">
                {" "}
                $AIB STAKE
              </h2>
            </div>
          </div>
          <img
            className="u-image u-image-contain u-image-default u-imageStake-1"
            src="/images/share-text.png"
            alt=""
            data-image-width={6000}
            data-image-height={1088}
          />
          <h1 className="u-align-center u-custom-font u-hidden-sm u-hidden-xs u-text u-text-custom-color-3 u-textStake-2">
            {" "}
            in the global revenue
            <br />
            of SalesAiBoost
          </h1>
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layoutStake-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layoutStake-cell-1">
                  <div className="u-container-layout u-valign-middle-xl u-valign-top-xs u-containerStake-layout-2">
                    <img
                      className="u-expanded-width-xs u-image u-image-contain u-image-default u-imageStake-2"
                      src="images/pp223.png"
                      alt=""
                      data-image-width={1920}
                      data-image-height={1080}
                    />
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-30 u-layoutStake-cell-2">
                  <div className="u-container-layout u-valign-top-xl u-containerStake-layout-3">
                    <div className="u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gradient u-group u-radius u-shape-round u-groupStake-2">
                      <div className="u-container-layout u-valign-top-xs u-containerStake-layout-4">
                        <h4 className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-custom-font u-text u-text-default u-text-white u-textStake-4">
                          STAKE ​$AIB tokens
                        </h4>
                        <p className="u-custom-font u-text u-text-body-alt-color u-text-default-lg u-text-default-xl u-textStake-5">
                          {" "}
                          REWARD: ​Share in the future global revenue of
                          SalesAiBoost.{" "}
                        </p>
                        <h4 className="u-text u-text-custom-color-5 u-text-default u-textStake-6">
                          Amount
                        </h4>
                        <div className="u-border-2 u-border-custom-color-5 u-line u-line-horizontal u-lineStake-1" />
                        <p className="u-custom-font u-text u-text-custom-color-5 u-text-default-lg u-text-default-xl u-textStake-7">
                          <input
                            type="number"
                            value={buyValue}
                            ref={inputRef}
                            onChange={handleInputChange}
                            className="border-white flex justify-center items-center  text-white bg-transparent p-2 border-opacity-20 border rounded-lg w-[90%]"
                          />
                        </p>
                        <button
                          onClick={() => {
                            approveToken(buyValue);
                          }}
                          className="u-btn u-btn-round u-button-style u-custom-color-5 u-custom-font u-radius u-btnStake-1"
                        >
                          APPROVED{" "}
                        </button>
                        <button
                          onClick={() => {
                            stakeToken(buyValue);
                          }}
                          className="u-btn u-btn-round u-button-style u-custom-color-5 u-custom-font u-radius u-btnStake-2"
                        >
                          STAKE{" "}
                        </button>
                        <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-textStake-8">
                          View staked details.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-gradient u-sectionStake-3" id="sec-84ec">
        <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <img
            className="u-image u-image-contain u-image-default u-preserve-proportions u-imageStake-1"
            src="images/Nevtelenterv-2024-03-06T184400.649.png"
            alt=""
            data-image-width={750}
            data-image-height={750}
          />
          <p className="u-align-left u-custom-font u-text u-text-body-alt-color u-textStake-1">
            <span style={{ fontWeight: 400 }}> As you possess and stake </span>
            $AIB tokens
            <span style={{ fontWeight: 400 }}>
              <span style={{ fontWeight: 700 }}>
                , you will also share in the global revenues of the SalesAiBoost
                platform, including subscription fees
              </span>
              .{" "}
              <span style={{ fontWeight: 700 }}>
                Moreover, <b />
                &nbsp;
              </span>
            </span>
            $AIB tokens
            <span style={{ fontWeight: 400 }}>
              <span style={{ fontWeight: 700 }}>
                &nbsp;possess significant potential for price appreciation due
                to the expected hundreds of millions of users.
              </span>
              <br />
            </span>
          </p>
          <img
            className="u-image u-image-contain u-image-default u-imageStake-2"
            src="images/bq8.png"
            alt=""
            data-image-width={1024}
            data-image-height={1792}
          />
          <p className="u-align-left u-custom-font u-text u-text-body-alt-color u-textStake-2">
            <span style={{ fontWeight: 400 }}>
              Unless you have been living under a rock, you probably already
              know that artificial intelligence has stolen the spotlight with
              its remarkable growth potential. The convergence of these two
              rapidly growing sectors - AI and cryptocurrency - holds
              unimaginable opportunities to say the least, and as this merger is
              only just beginning, now is the time to seize them.
            </span>
          </p>
          <p className="u-align-left u-custom-font u-text u-text-body-alt-color u-textStake-3">
            <span style={{ fontWeight: 400 }}>
              <span style={{ fontWeight: 700 }}>
                A new star has been born on the artificial intelligence market.
              </span>
              <span style={{ fontWeight: 700 }}>
                SalesAiBoost is an innovative sales support tool that draws
                people to salespersons,
              </span>{" "}
              allowing them to grow quickly and easily. The market has longed
              for such a tool, as without sales, no company can survive.
              SalesAiBoost makes online selling simple and efficient, enabling
              users to reap massive profits.
              <br />
              <br />
              <span style={{ fontWeight: 700 }}>
                Now you can take part in the soaring of the market expected to
                reach $300 billion by 2027 – double up!
              </span>
            </span>
            <br />
            <br />
            <span style={{ fontSize: "1.875rem" }}>Add your </span>
            <span style={{ fontSize: "1.875rem" }}>$AIB</span>
            <span style={{ fontSize: "1.875rem" }}>
              &nbsp;tokens.&nbsp;Track your rewards.
            </span>
          </p>
          <a
            href="SAIB-Stake.html#sec-98a7"
            className="u-btn u-btn-round u-button-style u-custom-color-5 u-custom-font u-radius u-btnStake-1"
          >
            {" "}
            staking my tokens
          </a>
        </div>
      </section>
      <footer
        className="u-clearfix u-custom-color-7 u-footer u-footer"
        id="sec-9343"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <a
            href={Pdf} target = "_blank"
            className="u-border-1 u-border-custom-color-3 u-border-hover-custom-color-5 u-btn u-button-style u-none u-text-hover-white u-btn-1"
          >
            WHITE PAPER
          </a>
          <p className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-small-text u-text u-text-variant u-text-1">
            ©Copyright SalesAiBoost 2024&nbsp;
          </p>
        </div>
      </footer>
      </div>
    </>
  );
};
