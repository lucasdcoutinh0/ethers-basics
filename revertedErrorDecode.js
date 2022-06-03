const { ethers } = require("ethers");
let provider = new ethers.providers.InfuraProvider("maticmum", "d13778b232614309af22fda20a18a3af");


async function revertedErrorDecode(){
    const txHash = "0x6d30217834ee538b5a99aad005a45ced8a22edd723542c741fb590ec33f12da6"
    const reciept = await provider.getTransactionReceipt(txHash)
    try{
        const reciept = await provider.getTransaction('0x6d30217834ee538b5a99aad005a45ced8a22edd723542c741fb590ec33f12da6');
        let code = await provider.call(reciept, reciept.blockNumber)
    }catch (err) {
        console.log("Error: " + err.reason);
    }
        
    
}
revertedErrorDecode()