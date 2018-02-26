
var JobPost = artifacts.require("./JobPost.sol");
var UserAccount = artifacts.require("./Accounts.sol");
var Review = artifacts.require("./Review.sol");

module.exports = function(deployer) {
  deployer.deploy(JobPost);
  deployer.deploy(UserAccount)
  deployer.deploy(Review)
};
