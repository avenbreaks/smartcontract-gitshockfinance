const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("tGTFX Token", function () {
  it("Should return owner of token", async function () {
    const [owner]=await ethers.getSigners();
    const GitshockToken = await ethers.getContractFactory("GitshockToken");
    const gitshockToken = await GitshockToken.deploy();
    await gitshockToken.deployed();
    const owneraddress= await gitshockToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});