import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { createContext, useEffect, useState } from "react";
import { readContract, getChainId } from "@wagmi/core";
import tokenAbi from "../artifacts/contracts/token.sol/Token.json";
import USDTToken from "../artifacts/contracts/usdtToken.sol/USDTtoken.json";
import crowdeSaleAbiETH from "../artifacts/contracts/CrowdsaleEth.sol/CrowdesaleEth.json";
import crowdeSaleAbi from "../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import {
  CROWDSALE_BSC,
  CROWDSALE_ETH,
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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isConfirmedETH, setIsConfirmedETH] = useState(false);
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
      address: USDT_ADDRESS_BSC,
      abi: USDTToken.abi,
      functionName: "totalSupply",
    });
    return result;
  };

  const getTokenTotelSupplyETH = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: USDTToken.abiETH,
      functionName: "totalSupply",
    });
    return result;
  };

  const getUserUsdtBalance = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_BSC,
      abi: USDTToken.abi,
      functionName: "balanceOf",
      args: [currentAccount],
    });
    return result;
  };

  const getUserUsdtBalanceETH = async () => {
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: USDTToken.abiETH,
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
        address: USDT_ADDRESS_BSC,
        abi: USDTToken.abi,
        functionName: "approve",
        args: [approveTo, amount],
      });
    } catch (err) {
      log("Unable to approve token");
      console.log(err);
    }
  };

  const approveUsdtETH = async (approveTo) => {
    setIsConfirmedETH(false);
    const amount = await getTokenTotelSupplyETH();
    try {
      writeContract({
        address: USDT_ADDRESS_ETH,
        abi: USDTToken.abiETH,
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
        address: CROWDSALE_ETH,
        abi: crowdeSaleAbiETH.abi,
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
    if (affiliateAddress === "" || undefined) affiliateAddress = zeroAddress;
    try {
      writeContract({
        address: CROWDSALE_BSC,
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
      address: USDT_ADDRESS_BSC,
      abi: tokenAbi.abi,
      functionName: "allowance",
      args: [address, CROWDSALE_BSC],
    });
    return result;
  };

  const getApprovedUsdtTokenETH = async () => {
    console.log("usdt_address_eth", USDT_ADDRESS_ETH);
    const result = await readContract(config, {
      address: USDT_ADDRESS_ETH,
      abi: tokenAbi.abiETH,
      functionName: "allowance",
      args: [address, CROWDSALE_ETH],
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
        address: CROWDSALE_BSC,
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

  const buyTokensETH = async (usdtAmount, affiliateAddress) => {
    const amount = usdtAmount * 10 ** 6;
    const userAmount = await getUserUsdtBalanceETH();
    if (userAmount < amount) return alert("insufficient user usdt funds.");
    try {
      writeContract({
        address: CROWDSALE_ETH,
        abi: crowdeSaleAbiETH.abi,
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
        address: crowde_sale_address,
        abi: crowdeSaleAbi.abi,
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
