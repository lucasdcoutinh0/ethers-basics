const { ethers } = require("ethers");

const contractAddress = "0x685cdefcd925074162d241e5ad252d6d25973c87"
const contractAbi = require('./contracts/studyCoinAbi.json')
let provider = new ethers.providers.InfuraProvider("maticmum", "your infura key");

const contract = new ethers.Contract(contractAddress,contractAbi,provider)