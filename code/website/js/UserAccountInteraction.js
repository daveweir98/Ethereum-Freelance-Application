// initialising web3 provider, or connecting to established provider
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// getting an intance of hosted contract
var userInstance = web3.eth.contract(UserAbi).at(UserAddr);

function addAccount(firstname, surname, biography, email){
  web3.eth.getAccounts(function(err, accounts){
    console.log(accounts);
    userInstance.getAccount.call(accounts[0], function(err, accountInfo){
      console.log(accounts[0]);
      if (accountInfo[0] == '0x00000000000000000000000000000000'){
        userInstance.setAccount(accounts[0], firstname, surname, biography, email, function(err, result){
          console.log(biography);
          if(err){
            console.log(err);
          } else {
            alert("Thank you for registering");
            document.getElementById("welcome").innerHTML = "Welcome, " + firstname + "!";
          }
        });
      } else {
        alert("This account is already registered");
      }
    })
  })
}

// bad email validation, could be fixed with regex
function validEmailCheck(email) {
  return email.includes("@") && typeof(email) == "string" && email.includes(".")
}

function validInput(firstname, surname, biography, email){
  var validFN = typeof(firstname) == "string" && firstname != "";
  var validLN = typeof(surname) == "string" && surname != "";
  var validBio = typeof(biography) == "string" && biography != "";
  var validEmail = validEmailCheck(email);

  console.log(validFN , validLN , validBio , validEmail)

  if (!validFN) {
    alert("Please enter a valid first name");
  }
  if (!validLN) {
    alert("Please enter a valid last name");
  }
  if (!validBio) {
    alert("Please enter a valid biography");
  }
  if (!validEmail) {
    alert("Please enter a valid email");
  }

  return validFN && validLN && validBio && validEmail
}

window.onload = function(){
  document.getElementById('registerButton').addEventListener('click', function(event){
    event.preventDefault();
    var firstname = document.getElementById('firstnameInput').value;
    var surname = document.getElementById('surnameInput').value;
    var biography = document.getElementById('biographyInput').value;
    var email = document.getElementById('emailInput').value;

    if (validInput(firstname, surname, biography, email)) {
      addAccount(firstname, surname, biography, email);
    }

  })
}
