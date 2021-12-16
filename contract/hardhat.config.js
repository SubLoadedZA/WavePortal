require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/lxo-itzmintKb1g2OK12lO7i735d9da2',
      accounts: ['xxx'],
    },
  },
};
