// display a list of jobs to the html page
// well hopefully

// initialising web3 provider, or connecting to established provider
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var jobs = [];

// address & abi of JobPost.sol contract
var contractAddr = '0x7fc66e2c7e07c2405dbf6b9067ba28f5a6a9b37c'
var contractAbi =
[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"posterAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getJobCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getJobs","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"title","type":"string"},{"name":"desc","type":"string"},{"name":"pay","type":"uint256"}],"name":"addJob","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// getting an intance of hosted contract
var contractInstance = web3.eth.contract(contractAbi).at(contractAddr);

contractInstance.getJobs.call(0,function(err,result){
  var post = document.getElementById('postTest');
  post.innerText = result;
});