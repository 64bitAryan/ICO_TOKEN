import { ethers } from "ethers";

export const toWei = (num) => ethers.parseEther(num.toString());

export const toEth = (num) => ethers.formatEther(num);

export const formatNumber = (number) => Math.floor(number * 100) / 100;

export const parseAndTruncate = (amount) => {
  const a = ethers.formatEther(amount.toString());
  return Math.trunc(a * 100) / 100;
};
