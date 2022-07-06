import { ethers } from "ethers";

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/Root.sol/Root.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  /* @ts-ignore */
  // eslint-disable-next-line no-undef
  (network = "maticmum"),
  API_KEY
);

/* @ts-ignore */
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const RootContract = new ethers.Contract(
  /* @ts-ignore */
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

(async () => {
  process.stdout.write("Fetching the data. Please wait");
  const dotsIncrement = setInterval(() => {
    process.stdout.write(".");
  }, 1000);

  await RootContract.mintProfileNFT("Pawel", "");

  clearInterval(dotsIncrement);
  process.stdout.write("\n");
})();
