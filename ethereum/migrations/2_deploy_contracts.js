var SelfKeyCrowdsale = artifacts.require("./SelfKeyCrowdsale.sol");


module.exports = function(deployer, network, accounts) {
  var startTime = 1506556800;
  var endTime = 1512086400
  var rate = 30000;
  var wallet = accounts[9];

  deployer.deploy(SelfKeyCrowdsale, startTime, endTime, rate, wallet);
};