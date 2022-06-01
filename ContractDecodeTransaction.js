const { ethers } = require("ethers");


async function transactionReciept(){
    const reciept = await provider.getTransactionReceipt("0xe5e59ab3887bf3acdda14597c8a22c82537cd20d0ade61ec826bdf86e85c5f2e")
    
    const logs = reciept.logs[0]
    
    const data = ethers.utils.defaultAbiCoder.decode(['uint256'], logs.data)
    
    console.log("Transfered Value: " + data[0].toString())
    }
    transactionReciept();