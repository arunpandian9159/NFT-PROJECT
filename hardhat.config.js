require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const POLYGON_AMOY_RPC =
  process.env.POLYGON_AMOY_RPC || "https://rpc-amoy.polygon.technology/";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: POLYGON_AMOY_RPC,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
  },
};
