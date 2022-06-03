const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TimeLockedWallet test suite", function () {
  const Wallet  = await ethers.getContractFactory("TimeLockedWallet");
  const wallet  = await Wallet.deploy(factoryAddr, msg.sender, 10);
  const factoryAddr = '';

beforeEach(async()=>{
  await wallet.deployed();
})


  it("Should store initial values correctly", async function () {

    expect(await wallet.factory).to.equal(factoryAddr); 
    expect(await wallet.owner).to.equal(msg.sender); 
    expect(await wallet.unlockDate).to.equal(10); 
  });

  it("Should store initial values correctly", async function () {
    
    
  });
});
