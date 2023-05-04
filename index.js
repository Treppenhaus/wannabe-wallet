const ethers = require('ethers');
let prefix = "696969";

while(true) {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const publicKey = wallet.address;

    console.log(publicKey);
    if(publicKey.startsWith("0x" + prefix)) {
        console.log("found!");
        console.log("private key: " + privateKey);
        return;
    }
}