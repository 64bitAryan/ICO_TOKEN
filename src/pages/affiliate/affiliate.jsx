import React, { useContext, useEffect, useState } from "react";
import { AES, enc } from "crypto-js";
import "./nicepage.css";
import "./SAIB-Affiliate.css";
import { ApplicationContext } from "../../context/ApplicationContext";
import { AffiliateViewModel } from "./AffiliateViewmodel";
import { toEth } from "../../utils/helpers";

export const Affiliate = () => {
  const {
    registerAffiliate,
    inputRef,
    affiliateAddress,
    isValidAddress,
    setAffiliateAddress,
    withdrawCommission,
    getIsAffiliateRegistered,
    isAffiliateRegister,
    getCommisionRate,
    currentCommission,
    getAccumulatedComision,
    accumulatedCommission,
    withdrawBtnText
  } = AffiliateViewModel();

  const [link, setLink] = useState("");

  useEffect(() => {
    getIsAffiliateRegistered();
    getAccumulatedComision();
  }, []);

  const { chain, currentAccount } = useContext(ApplicationContext);

  const handleInputChange = async (event) => {
    const val = event.target.value;
    setAffiliateAddress(val);
  };

  useEffect(() => {
    if (currentAccount !== undefined && currentAccount !== "") {
      let link = enc.Utf8.parse(currentAccount);
      var base64 = enc.Base64.stringify(link);
      link = "https://salesaiboost.io/" + base64;
      setLink(link);
      // setCommisionRate(await getCommisionRate(currentAccount));
    }
  }, [currentAccount]);

  const handleRegisterClick = async (event) => {
    if (isValidAddress(affiliateAddress)) {
      registerAffiliate(affiliateAddress);
      return;
    } else {
      return alert("Invalid address");
    }
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <title>SAIB Affiliate</title>
      <meta name="generator" content="Nicepage 6.5.9, nicepage.com" />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="SAIB Affiliate" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />
      <section
        className="u-clearfix u-custom-color-2 u-section-1"
        id="sec-7e15"
      >
        <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
          <img
            className="u-image u-image-contain u-image-default u-image-1"
            src="images/Logo-saib.png"
            alt=""
            data-image-width={1557}
            data-image-height={306}
          />
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-image u-section-2"
        id="sec-98a7"
        data-image-width={6000}
        data-image-height={3375}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-center u-custom-font u-text u-text-custom-color-3 u-text-1">
            {" "}
            HELLO PARTNER,
          </h1>
          <p className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-2">
            {" "}
            have a 😊smiley day today!&nbsp;
          </p>
          <div className="mycontainer">
          {currentAccount !== undefined ? (
            <>
              <div>
                <div className="custom-expanded u-align-left-md u-align-left-sm u-align-left-xs u-container-style u-custom-color-8 u-group u-shape-rectangle u-group-1">
                    <span className="u-file-icon u-icon u-text-custom-color-4 u-icon-1" onClick={() => {navigator.clipboard.writeText(link)}}>
                      <img src="images/9915984-c93b6cf0.png" alt="" />
                    </span>
                    <h2 className="u-custom-font u-text u-text-custom-color-4 u-text-default-lg u-text-default-xl u-text-3">
                      {" "}
                      This is your personal invitation link:&nbsp;{" "}
                      {isAffiliateRegister ? (
                        <a
                          href={link}
                          target="_blank"
                          className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-1 waffle-rich-text-link u-btn-1"
                        >
                          {link}
                        </a>
                      ) : (
                        <div>not available, need to register</div>
                      )}
                    </h2>
                </div>
                <p className="w-full u-align-center u-text u-text-body-alt-color">
                  <span style={{ fontWeight: 700 }}>
                    {" "}
                    Number of clicks on a link: &nbsp;
                  </span>
                  122323456
                </p>
              </div>
              
              <div className="withdrawBox card bg-white bg-opacity-5 mx-auto rounded-3xl md:min-h-[10rem] border border-[#4a386a] backdrop-blur-sm scale-100 transition ease-in-out duration-500 delay-300">
                  <input
                    value={toEth(accumulatedCommission)}
                    type="text"
                    onChange={handleInputChange}
                    ref={inputRef}
                    placeholder="Enter wallet address"
                    className="w-full border-white flex justify-center items-center  text-white bg-transparent p-3 border-opacity-20 border rounded-lg mb-3 h-16"
                    disabled
                  />
                <button
                  onClick={withdrawCommission}
                  className="btn w-full bg-gradient-to-r  hover:scale-105 transition-all ease-in-out duration-300 hover:from-gradient-right hover:to-gradient-left   from-gradient-left to-gradient-right rounded-lg p-[0.5rem] text-white "
                >
                  <p className="uppercase mb-0 mt-0  text-xl ">{withdrawBtnText}</p>
                </button>
              </div>
              <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-5">
                {" "}
                Current commission (BEP20): {currentCommission}
                <br />
                Accumulated commission (BEP20): {toEth(accumulatedCommission)}
                <span style={{ fontWeight: 700 }} />
              </p>
              <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-6">
                {" "}
                Current commission (ERC20)
                <span style={{ fontWeight: 700 }} />
              </p>
              
            </>
          ) : chain === "0x38" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              <w3m-button />
            </div>
          ) : (
            <w3m-network-button />
          )}
          </div>
        </div>
      </section>

      <section className="u-clearfix u-gradient u-section-3" id="sec-84ec">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="sm-bottom">
            <p className="u-custom-font u-text u-text-custom-color-8 u-text-default u-text-1">
              FOLLOW US:{" "}
            </p>
            <div className="u-social-icons u-spacing-48 u-social-icons-1">
              <a
                className="u-social-url"
                target="_blank"
                data-type="Telegram"
                title="Telegram"
                href=""
              >
                <span className="u-file-icon u-icon u-social-icon u-social-telegram u-text-white u-icon-1">
                  <img src="images/2582606-b1aef137.png" alt="" />
                </span>
              </a>
              <a
                className="u-social-url"
                title="facebook"
                target="_blank"
                href="https://facebook.com/name"
              >
                <span className="u-file-icon u-icon u-social-facebook u-social-icon u-text-white u-icon-2">
                  <img src="images/160154-6d5eb078.png" alt="" />
                </span>
              </a>
              <a
                className="u-social-url"
                title="twitter"
                target="_blank"
                href="https://twitter.com/name"
              >
                <span className="u-file-icon u-icon u-social-icon u-social-twitter u-text-white u-icon-3">
                  <img src="images/5968958-356aaac6.png" alt="" />
                </span>
              </a>
              <a
                className="u-social-url"
                target="_blank"
                data-type="Telegram"
                title="Telegram"
                href=""
              >
                <span className="u-file-icon u-icon u-social-icon u-social-telegram u-text-white u-icon-4">
                  <img src="images/2582606-b1aef137.png" alt="" />
                </span>
              </a>
              <a
                className="u-social-url"
                target="_blank"
                data-type="YouTube"
                title="YouTube"
                href=""
              >
                <span className="u-file-icon u-icon u-social-icon u-social-youtube u-text-white u-icon-5">
                  <img src="images/1077046-4b2d40ef.png" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="footxt">
            
          
          <p className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-hidden-xs u-text u-text-custom-color-3 u-text-2">
            Videos for interested parties
          </p>
          <p className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-hidden-xs u-text u-text-custom-color-3 u-text-3">
            {" "}
            Community page for interested parties
          </p>
          <p className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-hidden-xs u-text u-text-custom-color-3 u-text-4">
            {" "}
            Community page for interested parties
          </p>
          <p className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-hidden-xs u-text u-text-custom-color-3 u-text-5">
            {" "}
            Community page for interested parties
          </p>
          <p className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-custom-font u-hidden-xs u-text u-text-custom-color-3 u-text-6">
            {" "}
            Closed channel for affiliate partners
          </p>
          </div>

          <div className="fooBtm">
          <p className="u-align-center-xs u-custom-font u-text u-text-custom-color-3 u-text-default u-text-7">
            {" "}
            Grow your digital wealth!
          </p>
          <div className="fooBtns">
            <a
              href="SAIB-Stake.html#sec-98a7"
              className="u-btn u-btn-round u-button-style u-custom-color-8 u-custom-font u-radius u-text-custom-color-4 u-btn-1"
            >
              {" "}
              BUY SAIB TOKEN
            </a>
            <a
              href="SAIB-Stake.html#sec-98a7"
              className="u-btn u-btn-round u-button-style u-custom-color-5 u-custom-font u-radius u-btn-2"
            >
              {" "}
              staking SAIB tokens
            </a>
          </div>
          </div>
          
        </div>
      </section>
      {/* <footer
        className="u-align-center u-clearfix u-custom-color-7 u-footer u-footer"
        id="sec-9343"
      >
          <a
            href="https://nicepage.com/c/pricing-website-templates"
            className="u-border-1 u-border-custom-color-3 u-border-hover-custom-color-5 u-btn u-button-style u-none u-text-hover-white u-btn-1"
          >
            WHITE PAPER{" "}
          </a>
          <p className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-small-text u-text u-text-variant u-text-1">
            ©Copyright SalesAiBoost 2024&nbsp;
          </p>
      </footer> */}
      <footer className="u-align-center u-custom-color-7 u-footer u-footer footerBx" id="sec-9343" >
          
          <p className="">
            ©Copyright SalesAiBoost 2024&nbsp;
          </p>

          <a
            href="https://nicepage.com/c/pricing-website-templates"
            className="u-border-1 u-border-custom-color-3 u-border-hover-custom-color-5 u-btn u-button-style u-none u-text-hover-white "
          >
            WHITE PAPER{" "}
          </a>
      </footer>
    </>
  );
};
