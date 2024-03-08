import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { createContext, useEffect, useState } from "react";
import { readContract, getChainId } from "@wagmi/core";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import USDTToken from "../artifacts/contracts/usdtToken.sol/USDTtoken.json";
import crowdeSaleAbi from "../artifacts/contracts/CrowdsaleEth.sol/CrowdesaleEth.json";
import { getAddress } from "../utils/constants";
import { toWei, log } from "../utils/helpers";
import { config } from "../config";
import { Buffer } from "buffer";

window.Buffer = Buffer;

export const ApplicationContext = createContext();

const { ethereum } = window;

// const provider = new ethers.BrowserProvider(ethereum);

export const ApplicationProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [chain, setChain] = useState(56);

  let { data: hash, isPending, writeContract } = useWriteContract();
  let { address } = useAccount();

  (async () => {
    if (window.ethereum) {
      const c = await window.ethereum.request({ method: "eth_chainId" });
      setChain(c);
      console.log("Current chain ID:", chain);
    } else {
      setChain(56);
    }
  })();

  let {
    token_address,
    crowde_sale_address,
    staking_address,
    usdt_address,
    zeroAddress,
  } = getAddress(chain);

  useEffect(() => {
    if (!isPending) setIsConfirmed(true);
  }, [isPending]);

  let affiliateContract, stakingContract;

  useEffect(() => {
    setCurrentAccount(address);
  }, [address]);

  if (ethereum) {
    ethereum.on("accountsChanged", () => {
      window.location.reload();
    });

    ethereum.on("chainChanged", async () => {
      console.log("Chain chainChanged");
      window.location.reload();
    });
  }

  // Token functions //

  const getTokenTotelSupply = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: USDTToken.abi,
      functionName: "totalSupply",
    });
    return result;
  };

  const getUserUsdtBalance = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: USDTToken.abi,
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
        abi: USDTToken.abi,
        functionName: "approve",
        args: [approveTo, amount],
      });
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  const buyTokenUsingEth = async (ethAmount, affiliateAddress) => {
    const amount = toWei(ethAmount);
    if (affiliateAddress === "" || undefined) affiliateAddress = zeroAddress;
    try {
      writeContract({
        address: crowde_sale_address,
        abi: crowdeSaleAbi.abi,
        functionName: "buyTokensWithBNB",
        args: [affiliateAddress],
        value: amount,
      });
    } catch (err) {
      log("Unable to buy token using eth");
      console.log(err);
    }
  };

  const getApprovedUsdtToken = async () => {
    const result = await readContract(config, {
      address: usdt_address,
      abi: USDTToken.abi,
      functionName: "allowance",
      args: [address, crowde_sale_address],
    });
    return result;
  };

  // Staking & Divident functions //
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

  const buyTokens = async (usdtAmount, affiliateAddress) => {
    const amount = usdtAmount * 10 ** 18;
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
        token_address,
        crowde_sale_address,
        staking_address,
        usdt_address,
        zeroAddress,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
