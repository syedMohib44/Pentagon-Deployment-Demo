require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");


const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.22",
        settings: {

          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  networks: {
    pentestnet: {
      url: `https://rpc-testnet.pentagon.games`,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000, // Adjust as necessary
      timeout: 1000000 // Adjust the timeout as needed
    }
  },
  etherscan: {
    apiKey: {
      pentestnet: 'pentestnet'
    },
    customChains: [
      {
        network: "pentestnet",
        chainId: 555555,
        urls: {
          apiURL: "https://api.explorer-testnet.pentagon.zeeve.online/api",
          browserURL: "https://explorer-testnet.pentagon.games/"
        }
      }
    ]
  }
};