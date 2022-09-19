require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@nomiclabs/hardhat-etherscan');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    dev: {
        url: "http://localhost:7545",
        gasPrice: 20,
        saveDeployments: true
    },
    erctest: {
        url: "https://eth-goerli.nodereal.io/v1/6e0e7ff6084c444ab8bc499ad6c83116",
        accounts: [process.env.PRIV_KEY],
        gasPrice: 9000000000,
        blockGasLimit: 1000000
    },
    bsc: {
        url: "https://bsc-dataseed1.binance.org/",
        accounts: [process.env.PRIV_KEY],
        gasPrice: 5100000000,
        blockGasLimit: 1000000
    }
},
etherscan:{
  apiKey:process.env.API_KEY
}
};