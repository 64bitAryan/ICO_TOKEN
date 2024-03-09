import React, { useContext } from "react";
import "./nicepage.css";
import "./SAIB-Affiliate.css";
import { ApplicationContext } from "../../context/ApplicationContext";
import { AffiliateViewModel } from "./AffiliateViewmodel";

export const Affiliate = () => {
  const {
    registerAffiliate,
    inputRef,
    affiliateAddress,
    isValidAddress,
    setAffiliateAddress,
    withdrawCommission,
  } = AffiliateViewModel();

  const {
    chain,
    currentAccount
  } = useContext(ApplicationContext);

  const handleInputChange = async (event) => {
    const val = event.target.value;
    setAffiliateAddress(val);
  };

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
          {currentAccount !== undefined ? 
          <>
          <div className="custom-expanded u-align-left-md u-align-left-sm u-align-left-xs u-container-style u-custom-color-8 u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <span className="u-file-icon u-icon u-text-custom-color-4 u-icon-1">
                <img src="images/9915984-c93b6cf0.png" alt="" />
              </span>
              <h2 className="u-custom-font u-text u-text-custom-color-4 u-text-default-lg u-text-default-xl u-text-3">
                {" "}
                This is your personal invitation link:&nbsp;{" "}
                <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-1 waffle-rich-text-link u-btn-1">
                  https://salesaiboost.io/hgk5guo67mH4Bcd
                </a>
              </h2>
            </div>
          </div>
          <br/>
          <p className="u-align-left u-text u-text-body-alt-color u-text-4">
            <span style={{ fontWeight: 700 }}>
              {" "}
              Number of clicks on a link:
            </span>
            <br />
            122323456
          </p>
          <br/>
          <div style={{display:"flex", justifyContent:"center"}}>
            <input
              style={{width:"500px"}}
              type="text"
              onChange={handleInputChange}
              ref={inputRef}
              placeholder="Enter wallet address"
              className="ml-6 border-white flex justify-center items-center  text-white bg-transparent p-2 border-opacity-20 border rounded-lg w-[90%]"
            />
          </div>
            <button
              onClick={withdrawCommission}
              className="u-btn u-btn-round u-button-style u-custom-color-5 u-custom-font u-radius u-btn-1"
            >
              Withdraw Commission
            </button>
              <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-5">
                {" "}
                Current commission (BEP20)
                <span style={{ fontWeight: 700 }} />
              </p>
              <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-6">
                {" "}
                Current commission (ERC20)
                <span style={{ fontWeight: 700 }} />
              </p>
              <div className="data-layout-selected u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-54 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout" style={{}}>
                <div className="u-layout-row" style={{}}>
                  <div className="u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-1">
                    <div className="u-border-2 u-border-custom-color-8 u-container-layout u-container-layout-2">
                      <p className="u-align-center u-custom-font u-text u-text-custom-color-8 u-text-7">
                        37.035 BNB
                      </p>
                      <a
                        href="https://nicepage.com/one-page-template"
                        className="u-border-1 u-border-custom-color-1 u-btn u-button-style u-custom-color-5 u-custom-font u-btn-2"
                      >
                        PAYMENT{" "}
                      </a>
                    </div>
                  </div>
                  <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-2">
                    <div className="u-border-2 u-border-custom-color-8 u-container-layout u-container-layout-3">
                      <p className="u-align-center u-custom-font u-text u-text-custom-color-8 u-text-8">
                        {" "}
                        3703.5 USDT
                      </p>
                      <a
                        href="https://nicepage.com/one-page-template"
                        className="u-border-1 u-border-custom-color-1 u-btn u-button-style u-custom-color-5 u-custom-font u-btn-3"
                      >
                        PAYMENT{" "}
                      </a>
                    </div>
                  </div>
                  <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-3">
                    <div className="u-border-2 u-border-custom-color-8 u-container-layout u-container-layout-4">
                      <p className="u-align-center u-custom-font u-text u-text-custom-color-8 u-text-9">
                        {" "}
                        3.7035 ETH
                      </p>
                      <a
                        href="https://nicepage.com/one-page-template"
                        className="u-border-1 u-border-custom-color-1 u-btn u-button-style u-custom-color-5 u-custom-font u-btn-4"
                      >
                        PAYMENT{" "}
                      </a>
                    </div>
                  </div>
                  <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-4">
                    <div className="u-border-2 u-border-custom-color-8 u-container-layout u-container-layout-5">
                      <p className="u-align-center u-custom-font u-text u-text-custom-color-8 u-text-10">
                        {" "}
                        3703.5 USDT
                      </p>
                      <a
                        href="https://nicepage.com/one-page-template"
                        className="u-border-1 u-border-custom-color-1 u-btn u-button-style u-custom-color-5 u-custom-font u-btn-5"
                      >
                        PAYMENT{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-11">
              {" "}
              Total turnover (ERC20)
            </p>
            <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-12">
              {" "}
              Total turnover(BEP20)
            </p>
            <div className="data-layout-selected u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-54 u-layout-wrap u-layout-wrap-2">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-5">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-6">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-13">
                      {" "}
                      123.45 BNB
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-6">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-7">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-14">
                      {" "}
                      12345 USDT
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-7">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-8">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-15">
                      {" "}
                      12.345 ETH
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-8">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-9">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-16">
                      {" "}
                      12345 USDT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-17">
            {" "}
            Total commission (BEP20)
          </p>
          <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-18">
            {" "}
            Total commission (ERC20)
          </p>
          <div className="data-layout-selected u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-50 u-layout-wrap u-layout-wrap-3">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-9">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-10">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-19">
                      {" "}
                      37.035 BNB
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-10">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-11">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-20">
                      {" "}
                      3703.5 USDT
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-11">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-12">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-21">
                      {" "}
                      3.7035 ETH
                    </p>
                  </div>
                </div>
                <div className="cell-temp-clone u-container-style u-layout-cell u-shape-rectangle u-size-15 u-layout-cell-12">
                  <div className="u-border-2 u-border-custom-color-1 u-container-layout u-valign-middle u-container-layout-13">
                    <p className="u-align-center u-custom-font u-text u-text-custom-color-1 u-text-22">
                      {" "}
                      3703.5 USDT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-23">
            {" "}
            Commission payment list
          </p>
          <p className="u-custom-font u-text u-text-body-alt-color u-text-default u-text-24">
            {" "}
            Shopping on the invitations
          </p>
          <div className="u-expanded-width-xs u-table u-table-responsive u-table-1">
            <table className="u-table-entity">
              <colgroup>
                <col width="34.9%" />
                <col width="65.1%" />
              </colgroup>
              <thead className="u-custom-color-8 u-table-header u-text-custom-color-4 u-table-header-1">
                <tr style={{ height: 49 }}>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    {" "}
                    Date
                  </th>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="u-table-body u-text-white u-table-body-1">
                <tr style={{ height: 25 }}>
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                </tr>
                <tr style={{ height: 38 }}>
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="u-text u-text-body-alt-color u-text-default u-text-25">
            More &gt;&gt;{" "}
          </p>
          <div className="u-expanded-width-sm u-expanded-width-xs u-table u-table-responsive u-table-2">
            <table className="u-table-entity">
              <colgroup>
                <col width="17.92%" />
                <col width="6.13%" />
                <col width="31.97%" />
                <col width="19.13%" />
                <col width="24.85%" />
              </colgroup>
              <thead className="u-custom-color-8 u-table-header u-text-custom-color-4 u-table-header-2">
                <tr style={{ height: 83 }}>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    {" "}
                    Date
                  </th>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    {" "}
                    Wallet&nbsp;
                    <br />
                    address
                  </th>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    {" "}
                    Total
                  </th>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    Currency
                  </th>
                  <th className="u-border-1 u-border-custom-color-1 u-table-cell">
                    Comission
                  </th>
                </tr>
              </thead>
              <tbody className="u-table-body u-text-white u-table-body-2">
                <tr style={{ height: 38 }}>
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                </tr>
                <tr style={{ height: 38 }}>
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                  <td className="u-border-1 u-border-custom-color-1 u-table-cell" />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-26">
            More &gt;&gt;{" "}
          </p>
          </>
          :
           (chain === "0x61") ? 
                  <div style={{display:"flex", justifyContent:"center", marginTop: "100px"}}><w3m-button /></div> 
                  : <w3m-network-button />
            }
              
            
          
          
          
          
        </div>
      </section>


      <section className="u-clearfix u-gradient u-section-3" id="sec-84ec">
        <div className="u-clearfix u-sheet u-sheet-1">
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
          <p className="u-align-center-xs u-custom-font u-text u-text-custom-color-3 u-text-default u-text-7">
            {" "}
            Grow your digital wealth!
          </p>
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
      </section>
      <footer
        className="u-align-center u-clearfix u-custom-color-7 u-footer u-footer"
        id="sec-9343"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <a
            href="https://nicepage.com/c/pricing-website-templates"
            className="u-border-1 u-border-custom-color-3 u-border-hover-custom-color-5 u-btn u-button-style u-none u-text-hover-white u-btn-1"
          >
            WHITE PAPER{" "}
          </a>
          <p className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-small-text u-text u-text-variant u-text-1">
            ©Copyright SalesAiBoost 2024&nbsp;
          </p>
        </div>
      </footer>
    </>
  );
};
