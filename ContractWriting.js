const { ethers } = require("ethers");

const contractAddress = "0x685cdefcd925074162d241e5ad252d6d25973c87"
const contractAbi = require('./contracts/studyCoinAbi.json')
let provider = new ethers.providers.InfuraProvider("maticmum", "your infura key");
const signer = new ethers.Wallet('your private key', provider)

const transfer = async() => {
    const contract = new ethers.Contract(contractAddress,contractAbi, signer)
    const transcation = contract.transfer('0x61BB3a3a90b55fe536F270fA6010eb30eFBdb2B3', 1)
    .then((transaction) => {
        console.log(transaction.hash)
    })
}
