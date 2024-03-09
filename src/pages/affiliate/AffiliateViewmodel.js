import { useAccount, useWriteContract } from "wagmi";
import { useRef, useState, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { ethers } from "ethers";

import crowdesaleAbi from "../../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import {
  CROWDSALE_BSC,
  CROWDSALE_ETH,
  provider,
  privateKey,
  provider as Provider,
} from "../../utils/constants";
import { readContract } from "viem/actions";
import { config } from "../../config";

export const AffiliateViewModel = () => {
  const { address } = useAccount();
  const [isAffiliateRegister, setIsAffiliateRegister] = useState(false);
  const [currentCommission, setCurrentCommission] = useState(0);

  const { currentAccount } = useContext(ApplicationContext);
  let { data: hash, writeContract } = useWriteContract();
  const [affiliateAddress, setAffiliateAddress] = useState("");

  const inputRef = useRef(null);
  const withdrawRef = useRef(null);

  const provider = new ethers.JsonRpcProvider(Provider);

  const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    CROWDSALE_BSC,
    crowdesaleAbi.abi,
    wallet
  );

  const registerAffiliate = async (_address) => {
    try {
      writeContract({
        address: CROWDSALE_BSC,
        abi: crowdesaleAbi.abi,
        functionName: "registerAsAffiliate",
        args: [_address],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawCommission = async () => {
    console.log("withdraw commission");
    try {
      writeContract({
        address: CROWDSALE_BSC,
        abi: crowdesaleAbi.abi,
        functionName: "withdrawCommission",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getCommisionRate = async (_address) => {
    try {
      const result = await contract.getAccumulatedCommission(address);
      setCurrentCommission(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getIsAffiliateRegistered = async () => {
    try {
      const result = await contract.getAffiliates(address);
      console.log(result);
      if (result <= 0) setIsAffiliateRegister(false);
      else setIsAffiliateRegister(true);
    } catch (err) {
      console.log(err);
    }
  };

  function isValidAddress(address) {
    if (!address || typeof address !== "string") {
      return false;
    }

    address = address.trim();

    if (!address.startsWith("0x")) {
      return false;
    }

    if (address.length !== 42) {
      return false;
    }

    const hexRegex = /^0x[0-9a-fA-F]{40}$/;
    return hexRegex.test(address);
  }

  return {
    registerAffiliate,
    inputRef,
    affiliateAddress,
    withdrawRef,
    withdrawCommission,
    setAffiliateAddress,
    isValidAddress,
    getIsAffiliateRegistered,
    isAffiliateRegister,
    getCommisionRate,
    currentCommission,
    // getCommisionRate
  };
};
