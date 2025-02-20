require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const NEXT_PUBLIC_PRIVATE_KEY = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  // defaultNetwork: "polygon_amoy",//Matic for polygon
  // networks: {
  //   hardhat: {},
  //   polygon_amoy: {
  //     url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //     accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //   },
  // },
};
