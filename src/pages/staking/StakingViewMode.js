import { useAccount, useWriteContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { useState, useRef, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

import tokenAbi from "../../artifacts/contracts/token.sol/Token.json";
import stakingAbi from "../../artifacts/contracts/StakingAndDivident.sol/StakingAndDivident.json";

import { toWei } from "../../utils/helpers";
import { config } from "../../config";

export const StakingViewModel = () => {
  let { data: hash, writeContract } = useWriteContract();
  let { address } = useAccount();
  const [buyValue, setBuyValue] = useState("");
  const { staking_address, token_address } = useContext(ApplicationContext);

  const inputRef = useRef(null);

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
