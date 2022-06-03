const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  const Factory = await hre.ethers.getContractFactory(
    "TimeLockedWalletFactory"
  );
  const factory = await Factory.deploy();

  const Token = await hre.ethers.getContractFactory("BetaToken");
  const token = await Token.deploy();

  await factory.deployed();
  await token.deployed();

  console.log("TimeLockedWalletFactory deployed to:", factory.address);
  console.log("BetaToken deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
