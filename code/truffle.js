module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4600000
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: 3,
      gas: 4600000
    }
  }
};
