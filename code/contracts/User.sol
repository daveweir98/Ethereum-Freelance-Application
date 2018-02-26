pragma solidity ^0.4.19;

contract Accounts {
    struct Account {
        bytes16 firstName;
        bytes16 lastName;
        uint[] employerJobs; // All jobs a user has created
        uint[] workerJobs;  // All jobs a user has been assigned to
        address addr;
    }

    mapping (address => Account) accounts; // Map contract address to account
    address[] public allAccounts;

    // Create an account
    function setAccount(address _addr, bytes16 _firstName, bytes16 _lastName) public {
        var account = accounts[_addr];

        account.firstName = _firstName;
        account.lastName = _lastName;
        account.employerJobs;
        account.workerJobs;
        account.addr = _addr;

        allAccounts.push(_addr);
    }

    // Get a list of all accounts
    function getAccounts() public constant returns(address[]) {
        return allAccounts;
    }

    // Get a single account
    function getAccount(address _addr) public constant returns (bytes16, bytes16, uint[], uint[], address   ) {
        return (accounts[_addr].firstName, accounts[_addr].lastName, accounts[_addr].employerJobs, accounts[_addr].workerJobs, accounts[_addr].addr);
    }

    // Add a job to an accounts employerJobs list
    function addEmployerJob(address _addr, uint id) public {
        accounts[_addr].employerJobs.push(id);
    }

    // Add a job to an accounts workerJobs list
    function addWorkerJob(address _addr, uint id) public {
        accounts[_addr].workerJobs.push(id);
    }

    // Returns all of an accounts employerJobs
    function getEmployerJobs(address _addr) public constant returns (uint[]) {
        return accounts[_addr].employerJobs;
    }

    // Returns all of an accounts workerJobs
    function getWorkerJobs(address _addr) public constant returns (uint[]) {
        return accounts[_addr].workerJobs;
    }

    // Returns the total number of accounts
    function countAccounts() public constant returns (uint) {
        return allAccounts.length;
    }

}
