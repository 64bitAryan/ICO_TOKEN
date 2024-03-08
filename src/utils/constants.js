export const getAddress = (chainId) => {
  if (chainId === 56) {
    const token_address = "0x8abDbEE435E0fe1A4164Cf0C242ebaC41c463605";
    const crowde_sale_address = "0x1f1d36241AF2Def17c5D0E3aCb132D06071644E1";
    const staking_address = "0xF3C98F3536bE53078032a7d1852C6a99394E3ccb";
    const usdt_address = "0x3Bb0f16c334279E12548F8805a1674124fE4FC40";
    const zeroAddress = "0x0000000000000000000000000000000000000000";

    return {
      token_address,
      crowde_sale_address,
      staking_address,
      usdt_address,
      zeroAddress,
    };
  } else {
    const token_address = "0x83524e6EBd93196DCC311864C3aADbB6EbBDf699";
    const usdt_address = "0x8032517E6e505F94B00a2EaE573A6cbbb6402448";
    const crowde_sale_address = "0xDf46f605502C91c499d073f574DE25a02b16e5A1";
    const staking_address = "0xB875ce35E94C42F6dD9b9FFa2B93e7e70513bD78";
    const zeroAddress = "0x0000000000000000000000000000000000000000";

    return {
      token_address,
      crowde_sale_address,
      staking_address,
      usdt_address,
      zeroAddress,
    };
  }
};

export const zeroAddress = "0x0000000000000000000000000000000000000000";

// original addresses

// export const token_address = "0xD79Ab7734A34c7398dfdF9919B4FA8BDb29eA462";
// export const crowde_sale_address = "0xD0e27F772c1f8e19aF5e4c4A399736950eE6A454";
// export const staking_address = "0xa4F406079AEDfa40B4095bfA49785D1Bb8084B5B";
// export const usdt_address = "0xfe80d187f052C18532DfEFD0152647786fb0A7c6";
