import { ethers } from "ethers";

export const toWei = (num) => ethers.parseEther(num.toString());

export const toEth = (num) => ethers.formatEther(num);

export const formatNumber = (number) => Math.floor(number * 100) / 100;

export const parseAndTruncate = (amount) => {
  const a = ethers.formatEther(amount.toString());
  return Math.trunc(a * 100) / 100;
};

export const log = (message) => {
  console.log(`--${message}--`);
};

export const isValidAddress = (address) => {
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
};
