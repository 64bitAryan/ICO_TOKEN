import { useWriteContract } from "wagmi";
import { useRef, useState, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

import crowdesaleAbi from "../../artifacts/contracts/Crowdsale.sol/Crowdesale.json";

export const AffiliateViewModel = () => {
  const { crowde_sale_address } = useContext(ApplicationContext);
  let { data: hash, writeContract } = useWriteContract();
  const [affiliateAddress, setAffiliateAddress] = useState("");

  const inputRef = useRef(null);

  const registerAffiliate = async (_address) => {
    try {
      writeContract({
        address: crowde_sale_address,
        abi: crowdesaleAbi.abi,
        functionName: "registerAsAffiliate",
        args: [_address],
      });
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
    setAffiliateAddress,
    isValidAddress,
  };
};
