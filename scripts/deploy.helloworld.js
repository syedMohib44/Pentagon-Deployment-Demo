const hre = require("hardhat");


async function main() {

  const [addr1] = await hre.ethers.getSigners();
  // const houseContract = await ethers.getContractFactory("HelloWorld");
  // this.houseContract = await houseContract.connect(addr1).deploy();

  // console.log("House deployed to:", this.houseContract.target);
  await new Promise(r => setTimeout(r, 60000));

  try {
    await hre.run("verify:verify", {
      address: '0x89899D6A337ac8d1bddaB62B86D258A6e769aBF8'
    });
  } catch (err) {
console.log(err)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
