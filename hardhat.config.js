require("@nomiclabs/hardhat-waffle");


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and write the alechemy key 
// and the ropsten private key in a secret.json
const { ALCHEMY_API_KEY, ROPSTEN_PRIVATE_KEY } = require('./.secrets.json');

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};