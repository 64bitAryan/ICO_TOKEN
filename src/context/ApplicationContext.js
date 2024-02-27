import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import stakingAbi from "../artifacts/contracts/StakingAndDivident.sol/StakingAndDivident.json";
import crowdeSaleAbi from "../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import {
  token_address,
  crowde_sale_address,
  staking_address,
  usdt_address,
} from "../utils/constants";
import { toWei, log } from "../utils/helpers";

export const ApplicationContext = createContext();

const { ethereum } = window;

console.log(ethereum);

export const ApplicationProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentChain, setCurrentChain] = useState("");

  let signer,
    tokenContract,
    affiliateContract,
    stakingContract,
    crowdsaleContract,
    usdtContract;

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  ethereum.on("accountsChanged", () => {
    window.location.reload();
    connectWallet();
    handleContracts();
  });

  ethereum.on("networkChanged", async () => {
    window.location.reload();
    setCurrentChain(await ethereum.networkVersion);
  });

  const setChain = async () => {
    if (!ethereum) return alert("Install Metamask");
    try {
      setCurrentChain(await ethereum.networkVersion);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  };
  setChain();

  /* Functions */
  const handleContracts = async () => {
    const currentProvider = new ethers.BrowserProvider(ethereum);
    await currentProvider.send("eth_requestAccounts", []);

    signer = await currentProvider.getSigner();
    tokenContract = new ethers.Contract(token_address, tokenAbi.abi, signer);
    crowdsaleContract = new ethers.Contract(
      crowde_sale_address,
      crowdeSaleAbi.abi,
      signer
    );
    stakingContract = new ethers.Contract(
      staking_address,
      stakingAbi.abi,
      signer
    );
    usdtContract = new ethers.Contract(usdt_address, tokenAbi.abi, signer);
  };
  // handleContracts();

  // Token functions //
  const approveUsdt = async (usdtAmount, approveTo) => {
    const amount = usdtAmount * 10 ** 6;
    try {
      const tx = await usdtContract.approve(approveTo, amount);
      await tx.wait();
      return tx.hash;
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  const approveToken = async (tokenAmount, approveTo) => {
    const amount = toWei(tokenAmount);
    try {
      const tx = await tokenContract.approve(approveTo, amount);
      return tx.hash;
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  // Staking & Divident functions //
  const stakeToken = async (tokenAmount) => {
    try {
      const trx = await stakingContract.stake(toWei(tokenAmount));
      return trx.hash;
    } catch (err) {
      log("Unable to stake token");
      console.log(err);
    }
  };

  const unstakeTokens = async (index) => {
    try {
      const trx = await stakingContract.unstake(index);
      return trx.hash;
    } catch (err) {
      log("Unable to unstake token");
      console.log(err);
    }
  };

  const getEstimatedReward = async (address, index) => {
    try {
      const reward = await stakingContract.calculateReward(address, index);
      return reward;
    } catch (err) {
      log("Unable to get estimated reward");
      console.log(err);
    }
  };

  const claimDivident = async (index) => {
    try {
      const trx = await stakingContract.claimDivident(index);
      return trx.hash;
    } catch (err) {
      log("Unable to claim divident");
      console.log(err);
    }
  };

  const getEstimatedDividentReward = async (address, index) => {
    try {
      const reward = await stakingContract.calculateDividentReward(
        address,
        index
      );
      return reward;
    } catch (err) {
      log("Unable to get estimated divident reward");
      console.log(err);
    }
  };

  // CrowdeSale & Affiliate functions //
  const buyTokenUsingEth = async (ethAmount) => {
    console.log(ethAmount);
    try {
      const trx = await signer.sendTransaction({
        to: crowde_sale_address,
        value: toWei(ethAmount),
      });
      return trx.hash;
    } catch (err) {
      log("Unable to buy token using eth");
      console.log(err);
    }
  };

  const buyTokens = async (usdtAmount, affiliateAddress) => {
    await approveUsdt(usdtAmount, crowde_sale_address);
    const amount = usdtAmount * 10 ** 6;
    try {
      const trx = await crowdsaleContract.buyTokens(amount, affiliateAddress);
      return trx.hash;
    } catch (err) {
      log("Unable to buy tokens");
      console.log(err);
    }
  };

  const registerAsAffiliate = async (affiliateAddress) => {
    try {
      const trx = await affiliateContract.registerAsAffiliate(affiliateAddress);
      return trx.hash;
    } catch (err) {
      log("Unable to register as affiliate");
      console.log(err);
    }
  };

  const withdrawCommission = async () => {
    try {
      const trx = await affiliateContract.withdrawCommission();
      return trx.hash;
    } catch (err) {
      log("Unable to withdraw commission");
      console.log(err);
    }
  };

  const getCustomerAffiliate = async (address) => {
    try {
      const affiliate = await affiliateContract.getAffiliate(address);
      return affiliate;
    } catch (err) {
      log("Unable to get customer affiliate");
      console.log(err);
    }
  };

  // Wallet functions //
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      await handleContracts();
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (err) {
      console.log("error connecting");
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      // throw new Error("No ethereum object found");
    }
  };

  const changeNetwork = async (chainId) => {
    if (!ethereum) return alert("Install Metamask");
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.hexlify(chainId) }],
      });
      return 1;
    } catch (err) {
      if (err.code === 4902) {
        console.log("User rejected network switch");
      } else {
        console.log("Error occurred while switching network: ", err);
      }
      return 0;
    }
  };

  const getEthToUsdtRate = async () => {
    try {
      const resp = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USDT"
      );
      return resp.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        currentAccount,
        currentChain,
        connectWallet,
        changeNetwork,
        approveToken,
        stakeToken,
        unstakeTokens,
        getEstimatedReward,
        claimDivident,
        getEstimatedDividentReward,
        buyTokens,
        registerAsAffiliate,
        withdrawCommission,
        getCustomerAffiliate,
        getEthToUsdtRate,
        approveUsdt,
        buyTokenUsingEth,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
