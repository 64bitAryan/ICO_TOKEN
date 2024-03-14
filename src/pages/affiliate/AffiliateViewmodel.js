import { useAccount, useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useRef, useState, useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { ethers } from "ethers";

import crowdesaleAbi from "../../artifacts/contracts/Crowdsale.sol/Crowdesale.json";
import {
  provider,
  privateKey,
  provider as Provider,
  CROWDSALE_ADDRESS_BSC,
  CROWDSALE_ABI_BSC,
} from "../../utils/constants";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { readContract } from "viem/actions";
import { config } from "../../config";

export const AffiliateViewModel = () => {
  const { address } = useAccount();
  const [isAffiliateRegister, setIsAffiliateRegister] = useState(false);
  const [currentCommission, setCurrentCommission] = useState(0);
  const [accumulatedCommission, setAccumulatedCommission] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const { currentAccount } = useContext(ApplicationContext);
  let { data: hash, isPending, writeContract, variables, status } = useWriteContract();
  const [affiliateAddress, setAffiliateAddress] = useState("");

  const inputRef = useRef(null);
  const withdrawRef = useRef(null);

  const provider = new ethers.JsonRpcProvider(Provider);

  const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    CROWDSALE_ADDRESS_BSC,
    CROWDSALE_ABI_BSC,
    wallet
  );

  useEffect(()=>{
    console.log(hash)
    if(hash){
    async function getReceipt(){
      const result = await waitForTransactionReceipt(config,{
        hash: hash,
      })
      console.log(result)
      if(result.status){
        iziToast.success({
          title: 'Succss',
          message: successMessage,
          position:"topRight"
      });
      }
    }
    getReceipt()
  }
  },[hash])

  const registerAffiliate = async (_address) => {
    try {
      setSuccessMessage("Affiliate Registered Successfully!");
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
    console.log("withdraw commission");
    try {
      setSuccessMessage("Commission Withdraw Successfully!");
      writeContract({
        address: CROWDSALE_ADDRESS_BSC,
        abi: CROWDSALE_ABI_BSC,
        functionName: "withdrawCommission",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getCommisionRate = async () => {
    try {
      const result = await contract.commissionRate();
      setCurrentCommission(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getAccumulatedComision = async () => {
    try {
      const result = await contract.getAccumulatedCommission(address);
      console.log(`Result ${result}`);
      setAccumulatedCommission(result);
      return result;
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
    getAccumulatedComision,
    accumulatedCommission,
    setAccumulatedCommission,
    // getCommisionRate
  };
};
