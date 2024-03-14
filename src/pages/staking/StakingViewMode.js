import { useAccount, useWriteContract } from "wagmi";
import { readContract, waitForTransactionReceipt } from "@wagmi/core";
import { useState, useRef, useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

import tokenAbi from "../../artifacts/contracts/token.sol/Token.json";
import stakingAbi from "../../artifacts/contracts/StakingAndDivident.sol/StakingAndDivident.json";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { toWei } from "../../utils/helpers";
import { config } from "../../config";

export const StakingViewModel = () => {
  let { data: hash, isPending, writeContract, variables, status } = useWriteContract();
  let { address } = useAccount();
  const [buyValue, setBuyValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { staking_address, token_address } = useContext(ApplicationContext);

  const inputRef = useRef(null);

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

  const getApprovalAmount = async () => {
    const result = await readContract(config, {
      address: token_address,
      abi: tokenAbi.abi,
      functionName: "allowance",
      args: [address, staking_address],
    });
    return result;
  };

  const approveToken = async (_amount) => {
    const amount = toWei(_amount);
    try {
      setSuccessMessage("Token Transfer Approved Successfully!");
      writeContract({
        address: token_address,
        abi: tokenAbi.abi,
        functionName: "approve",
        args: [staking_address, amount],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const stakeToken = async (_tokenAmount) => {
    const approveAmount = await getApprovalAmount();
    if (approveAmount < _tokenAmount) return alert("Tokens not approved");
    const amount = toWei(_tokenAmount);
    try {
      setSuccessMessage("Token Staked Successfully!");
      writeContract({
        address: staking_address,
        abi: stakingAbi.abi,
        functionName: "stake",
        args: [amount],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = async (event) => {
    if (address === undefined) return;
    const val = event.target.value;
    setBuyValue(val);
  };

  const unstakeToken = async (index) => {
    try {
      setSuccessMessage("Token Unstaked Successfully!");
      writeContract({
        address: staking_address,
        abi: stakingAbi.abi,
        functionName: "unstake",
        args: [index],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    approveToken,
    stakeToken,
    setBuyValue,
    handleInputChange,
    unstakeToken,
    buyValue,
    inputRef,
  };
};
