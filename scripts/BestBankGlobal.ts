// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const BestBankGlobalContract = await ethers.getContractFactory(
    "BestBankGlobal"
  );
  const bestBankGlobal = await BestBankGlobalContract.deploy(
    "BestBankGlobal",
    "BBG"
  );
  await bestBankGlobal.deployed();
  console.log("Address: ", bestBankGlobal.address);

  await bestBankGlobal.mint(
    "0x7F69B8795dab0f6826048bA4c9E1492Cc7d51e13",
    ethers.utils.parseEther("10000000000")
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
