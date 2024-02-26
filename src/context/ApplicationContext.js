import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import affiliateAbi from "../artifacts/contracts/Affiliate.sol/AffiliateProgram.json";
import stakingAbi from "../artifacts/contracts/StakingAndDivident.sol/StakingAndDivident.json";
import crowdeSaleAbi from "../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import dotenv from "dotenv";
dotenv.config();

export const ApplicationContext = createContext();

const { ethereum } = window;

export const ApplicationProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentChain, setCurrentChain] = useState("");
  let signer,
    tokenContract,
    affiliateContract,
    stakingContract,
    crowdsaleContract;

  useEffect(() => {
    setChain();
    checkIfWalletIsConnected();
    handleContracts();
  });

  ethereum.on("accountsChanged", () => {
    window.location.reload();
    connectWallet();
  });

  ethereum.on("networkChanged", async () => {
    window.location.reload();
    setCurrentChain(await ethereum.networkVersion);
  });

  // Functions

  const handleContracts = async () => {
    const currentProvider = new ethers.BrowserProvider();
    await currentProvider.send("eth_requestAccounts", []);
    signer = currentProvider.getSigner();
    tokenContract = new ethers.Contract(
      tokenAbi.abi,
      process.env.token_address,
      signer
    );
    crowdsaleContract = new ethers.Contract(
      crowdeSaleAbi.abi,
      process.env.crowde_sale_address,
      signer
    );
    stakingContract = new ethers.Contract(
      stakingAbi.abi,
      process.env.staking_address,
      signer
    );
  };

  const setChain = async () => {
    if (!ethereum) return alert("Install Metamask");
    try {
      setCurrentChain(await ethereum.networkVersion);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        return true;
      } else {
        console.log("No Account found");
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Install Metamask");
      const accounts = await ethereum.request({ method: "eth_requestAccount" });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
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

  return (
    <ApplicationContext.Provider
      value={{
        currentAccount,
        currentChain,
        connectWallet,
        changeNetwork,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
