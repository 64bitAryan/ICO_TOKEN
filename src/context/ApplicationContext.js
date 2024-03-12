import { useAccount, useSendTransaction, useWaitForTransactionReceipt, useWriteContract, useWaitForTransaction } from "wagmi";
import { createContext, useEffect, useState } from "react";
import { readContract, getChainId } from "@wagmi/core";
import {
  CROWDSALE_ABI_BSC,
  CROWDSALE_ABI_ETH,
  CROWDSALE_ADDRESS_BSC,
  CROWDSALE_ADDRESS_ETH,
  USDT_ABI_BNB,
  USDT_ABI_ETH,
  USDT_ADDRESS_BSC,
  USDT_ADDRESS_ETH,
  getAddress,
} from "../utils/constants";
import { toWei, log } from "../utils/helpers";
import { config } from "../config";
import { Buffer } from "buffer";

window.Buffer = Buffer;

export const ApplicationContext = createContext();

const { ethereum } = window;

// const provider = new ethers.BrowserProvider(ethereum);

export const ApplicationProvider = ({ children }) => {
  // const [chainId, setChainId] = getChainId(config);
  const [currentAccount, setCurrentAccount] = useState("");
  // const [isConfirmed, setIsConfirmed] = useState(false);
  const [isConfirmedETH, setIsConfirmedETH] = useState(false);
  const [pendingFunction, setPendingFunction] = useState({ functionName: "", isPending: false });
  const [chain, setChain] = useState(56);

  let { hash, isPending, writeContract, variables } = useWriteContract();
  
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
    if(variables){
      setPendingFunction({
        "functionName": variables.functionName,
        "isPending": isPending,
      })
    }
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
      address: USDT_ADDRESS_BSC,
      abi: USDT_ABI_BNB,
      functionName: "totalSupply",
    });
    return result;
  };

  const getTokenTotelSupplyETH = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: USDT_ABI_ETH,
      functionName: "totalSupply",
    });
    return result;
  };

  const getUserUsdtBalance = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_BSC,
      abi: USDT_ABI_BNB,
      functionName: "balanceOf",
      args: [currentAccount],
    });
    return result;
  };

  const getUserUsdtBalanceETH = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: USDT_ABI_ETH,
      functionName: "balanceOf",
      args: [currentAccount],
    });
    console.log(result)
    return result;
  };

  const approveUsdt = async (approveTo) => {
    // setIsConfirmed(false);
    const amount = await getTokenTotelSupply();
    try {
      await writeContract({
        address: USDT_ADDRESS_BSC,
        abi: USDT_ABI_BNB,
        functionName: "approve",
        args: [approveTo, amount],
      });
      await getApprovedUsdtToken();
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  const approveUsdtETH = async (approveTo) => {
    setIsConfirmedETH(false);
    const amount = await getTokenTotelSupplyETH();
    try {
      await writeContract({
        address: USDT_ADDRESS_ETH,
        abi: USDT_ABI_ETH,
        functionName: "approve",
        args: [approveTo, amount],
      });
      await getApprovedUsdtTokenETH();
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
        address: CROWDSALE_ADDRESS_ETH,
        abi: CROWDSALE_ABI_ETH,
        functionName: "buyTokensWithEth",
        args: [affiliateAddress],
        value: amount,
      });
    } catch (err) {
      log("Unable to buy token using eth");
      console.log(err);
    }
  };

  const buyTokenUsingBNB = async (ethAmount, affiliateAddress) => {
    const amount = toWei(ethAmount);
    if (affiliateAddress === "" || undefined) {
      affiliateAddress = zeroAddress;
    }
    console.log(affiliateAddress)
    try {
      writeContract({
        address: CROWDSALE_ADDRESS_BSC,
        abi: CROWDSALE_ABI_BSC,
        functionName: "buyTokensWithBNB",
        args: [affiliateAddress],
        value: amount,
      });
    } catch (err) {
      log("Unable to buy token using eth");
      console.log(err);
    }
  };

  const getDisperseAmount = async () => {
    const result = await readContract(config, {
      address: CROWDSALE_ADDRESS_BSC,
      abi: CROWDSALE_ABI_BSC,
      functionName: "disperseAmount",
      args: [],
    });
    return result;
  };

  const getDisperseAmountETH = async () => {
    const result = await readContract(config, {
      address: CROWDSALE_ADDRESS_ETH,
      abi: CROWDSALE_ABI_ETH,
      functionName: "disperseAmount",
      args: [],
    });
    return result;
  };

  const getApprovedUsdtToken = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_BSC,
      abi: USDT_ABI_BNB,
      functionName: "allowance",
      args: [address, CROWDSALE_ADDRESS_BSC],
    });
    return result;
  };

  const getApprovedUsdtTokenETH = async () => {
    console.log("usdt_address_eth", USDT_ADDRESS_ETH);
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: USDT_ABI_ETH,
      functionName: "allowance",
      args: [address, CROWDSALE_ADDRESS_ETH],
    });
    console.log(result)
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
        address: CROWDSALE_ADDRESS_BSC,
        abi: CROWDSALE_ABI_BSC,
        functionName: "buyTokens",
        args: [amount, affiliateAddress],
      });
      return hash;
    } catch (err) {
      log("Unable to buy tokens");
      console.log(err);
    }
  };

  const buyTokensETH = async (usdtAmount, affiliateAddress) => {
    const amount = usdtAmount * 10 ** 6;
    const userAmount = await getUserUsdtBalanceETH();
    console.log(amount, userAmount)
    if (userAmount < amount) return alert("insufficient user usdt funds.");
    try {
      writeContract({
        address: CROWDSALE_ADDRESS_ETH,
        abi: CROWDSALE_ABI_ETH,
        functionName: "buyTokens",
        args: [amount, affiliateAddress],
      });
      return hash;
    } catch (err) {
      log("Unable to buy tokens");
      console.log(err);
    }
  };

  const registerAffiliate = async (_address) => {
    try {
      writeContract({
        address: CROWDSALE_ADDRESS_BSC,
        abi: CROWDSALE_ABI_BSC,
        functionName: "registerAsAffiliate",
        args: [_address],
      });
    } catch (err) {
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
      const respBNB = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USDT"
      );
      let usdtETH = await resp.json();
      let usdtBNB = await respBNB.json();
      return { ethPrice: usdtETH, bnbPrice: usdtBNB };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        chain,
        currentAccount,
        getEstimatedReward,
        claimDivident,
        getEstimatedDividentReward,
        buyTokens,
        buyTokensETH,
        registerAffiliate,
        withdrawCommission,
        getCustomerAffiliate,
        getEthToUsdtRate,
        approveUsdt,
        approveUsdtETH,
        buyTokenUsingEth,
        buyTokenUsingBNB,
        getApprovedUsdtToken,
        getApprovedUsdtTokenETH,
        getDisperseAmount,
        getDisperseAmountETH,
        pendingFunction,
        // isConfirmed,
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
