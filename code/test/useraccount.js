var UserAccount = artifacts.require("./Accounts.sol");

contract('UserAccount', function(accounts){
  it("Should set up an account", function(){
    return UserAccount.deployed().then(function(instance){
      deployedUsers = instance
      return deployedUsers.setAccount(accounts[0], "Dave", "Weir")
    }).then(function(userTrans){
      return deployedUsers.getAccounts.call()
    }).then(function(accs){
      return deployedUsers.getAccount.call(accs[0]);
    }).then(function(me){
      assert.equal(web3.toAscii(me[0]).replace(/\u0000/g, ''), "Dave", "Firstname returned incorrectly")
      assert.equal(web3.toAscii(me[1]).replace(/\u0000/g, ''), "Weir", "Secondname returned incorrectly");
    })
  })

  it("Should add a job as employer", function(){
    return UserAccount.deployed().then(function(instance){
      deployedUsers = instance;
      return deployedUsers.setAccount(accounts[0], "Dave", "Weir")
    }).then(function(userTrans){
      return deployedUsers.addEmployerJob(accounts[0], 1);
    }).then(function(tx){
      return deployedUsers.getAccounts.call()
    }).then(function(accs){
      return deployedUsers.getAccount.call(accs[0]);
    }).then(function(me){
      assert.equal(me[2], 1, "Job ID returned incorrectly");
    })
  })
})
