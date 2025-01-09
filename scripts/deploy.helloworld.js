const hre = require("hardhat");


async function main() {

  const [addr1] = await hre.ethers.getSigners();
  const helloworldContract = await ethers.getContractFactory("HelloWorld");
  this.helloworldContract = await helloworldContract.connect(addr1).deploy();

  console.log("Hello World deployed to:", this.helloworldContract.target);
  await new Promise(r => setTimeout(r, 60000));

  try {
    await hre.run("verify:verify", {
      address: this.helloworldContract.target
    });
  } catch (err) {
    console.log(err)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
