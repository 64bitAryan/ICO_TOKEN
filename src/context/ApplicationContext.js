import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import crowdeSaleAbi from "../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import { crowde_sale_address, usdt_address } from "../utils/constants";
import { toWei, log } from "../utils/helpers";
import { config } from "../config";
import { Buffer } from "buffer";

window.Buffer = Buffer;

export const ApplicationContext = createContext();

const { ethereum } = window;

// const provider = new ethers.BrowserProvider(ethereum);
let provider;

export const ApplicationProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  let { data: hash, isPending, writeContract } = useWriteContract();
  let { data: trxHash, sendTransaction } = useSendTransaction();
  let { address } = useAccount();

  let tokenContract, affiliateContract, stakingContract;

  useEffect(() => {
    if (ethereum) {
      provider = new ethers.BrowserProvider(ethereum);
      ethereum.on("accountsChanged", () => {
        window.location.reload();
      });

      ethereum.on("networkChanged", async () => {
        window.location.reload();
      });
    }
    setCurrentAccount(address);
  }, [address]);

  useEffect(() => {
    if (ethereum) waitForReceipt(hash);
  }, [hash]);

  async function waitForReceipt(txHash) {
    try {
      if (ethereum) {
        provider = new ethers.BrowserProvider(ethereum);
        await provider.waitForTransaction(txHash);
        setIsConfirmed(true);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error
    }
  }

  // Token functions //

  const getTokenTotelSupply = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: tokenAbi.abi,
      functionName: "totalSupply",
    });
    return result;
  };

  const getUserUsdtBalance = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: tokenAbi.abi,
      functionName: "balanceOf",
      args: [currentAccount],
    });
    return result;
  };

  const approveUsdt = async (approveTo) => {
    setIsConfirmed(false);
    const amount = await getTokenTotelSupply();
    try {
      writeContract({
        address: usdt_address,
        abi: tokenAbi.abi,
        functionName: "approve",
        args: [approveTo, amount],
      });
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  const getApprovedUsdtToken = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: tokenAbi.abi,
      functionName: "allowance",
      args: [address, crowde_sale_address],
    });
    return result;
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
    const amount = toWei(ethAmount);
    try {
      sendTransaction({ to: crowde_sale_address, value: amount });
      return trxHash;
    } catch (err) {
      log("Unable to buy token using eth");
      console.log(err);
    }
  };

  const buyTokens = async (usdtAmount, affiliateAddress) => {
    const amount = usdtAmount * 10 ** 6;
    const userAmount = await getUserUsdtBalance();
    if (userAmount < amount) return alert("insufficient user usdt funds.");
    try {
      writeContract({
        address: crowde_sale_address,
        abi: crowdeSaleAbi.abi,
        functionName: "buyTokens",
        args: [amount, affiliateAddress],
      });
      return hash;
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
        getApprovedUsdtToken,
        isConfirmed,
        isPending,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
