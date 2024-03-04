import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { createContext, useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import crowdeSaleAbi from "../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import { crowde_sale_address, usdt_address } from "../utils/constants";
import { toWei, log } from "../utils/helpers";
import { config } from "../config";

export const ApplicationContext = createContext();

const { ethereum } = window;

export const ApplicationProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const { data: hash, isPending, writeContract } = useWriteContract();
  const { data: trxHash, sendTransaction } = useSendTransaction();
  const { address } = useAccount();

  let tokenContract, affiliateContract, stakingContract;

  useEffect(() => {
    setCurrentAccount(address);
  }, [address]);

  ethereum.on("accountsChanged", () => {
    window.location.reload();
  });

  ethereum.on("networkChanged", async () => {
    window.location.reload();
  });

  // Token functions //

  const getUserUsdtBalance = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: tokenAbi.abi,
      functionName: "balanceOf",
      args: [currentAccount],
    });
    return result;
  };

  const approveUsdt = async (usdtAmount, approveTo) => {
    const amount = usdtAmount * 10 ** 6;
    const userBalance = await getUserUsdtBalance();
    if (amount > userBalance) return alert("insufficient Usdt token amount");
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
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
