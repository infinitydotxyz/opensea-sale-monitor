const hre = require("hardhat");
const OpenSeaABI = require('../OpenSeaABI.json')
const OPENSEA_ADDRESS = "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b"
const iface = new ethers.utils.Interface(OpenSeaABI);
const provider = ethers.getDefaultProvider()

async function main() {
  const signers = await ethers.getSigners();

  console.log("==== OpenSea Sale Monitor ====");
  console.log(`Executing from ${signers[0].address}`)

  const contract = new ethers.Contract(OPENSEA_ADDRESS, OpenSeaABI, signers[0]);

  contract.on("OrdersMatched", async (...args) => {
    const event = args[args.length - 1];
    const response = (await provider.getTransaction(event.transactionHash)).data
    const decodedResponse = iface.decodeFunctionData("atomicMatch_", response)
    const collectionAddress = decodedResponse.addrs[4]
    const seller = decodedResponse.addrs[8]
    const buyer = decodedResponse.addrs[1]
    const buyData = decodedResponse.calldataBuy

    let tokenId, quantity

    if (response.length > 4810) {
      // ERC-1155 
      tokenId = ethers.BigNumber.from("0x" + decodedResponse.calldataBuy.slice(138, 202)).toString()
      quantity = ethers.BigNumber.from("0x" + decodedResponse.calldataBuy.slice(202, 266)).toString()
    }
    else {
      // ERC-721
      tokenId = ethers.BigNumber.from("0x" + buyData.slice(buyData.length - 32)).toString()
    }

    if (response.length > 4810) {
      console.log(`{${event.transactionHash}} [${seller}] sold [${quantity}] of tokenID [${tokenId}] from ERC-1155 collection [${collectionAddress}] to [${buyer}]`)

    } else {
      console.log(`{${event.transactionHash}} [${seller}] sold tokenID [${tokenId}] from ERC-721 collection [${collectionAddress}] to [${buyer}]`)
    }

  });

}

main()
