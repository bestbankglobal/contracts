import { expect } from "chai";
import { ethers } from "hardhat";

describe("BestBankGlobal", function() {
  it("Contract", async function() {
    const [owner] = await ethers.getSigners();
    const ownerAddr = await owner.getAddress();

    const bestBankGlobalContract = await ethers.getContractFactory(
      "BestBankGlobal"
    );
    const bestBankGlobal = await bestBankGlobalContract.deploy(
      "BestBankGlobal",
      "BBG"
    );
    await bestBankGlobal.deployed();

    expect(await bestBankGlobal.name()).to.equal("BestBankGlobal");

    expect(await bestBankGlobal.symbol()).to.equal("BBG");

    await bestBankGlobal.mint(
      ownerAddr,
      ethers.utils.parseEther("10000000000")
    );

    expect(await bestBankGlobal.totalSupply()).to.equal(
      ethers.utils.parseEther("10000000000")
    );
  });
});
