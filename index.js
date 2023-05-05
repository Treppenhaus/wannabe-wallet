const ethers = require('ethers');
const fs = require("fs");
const nodeCmd = require("node-cmd");

let prefixes = ["696969", "696900", "690069", "0069", "6969", "0000", "aaaa", "000000", "aaaaaa", "444444", "AAAAAA", "111111", "222222", "666666", "999999", "FFFFFF", "123456", "abcdef"];
let checked = 0;
let started = Date.now();

while(true) {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const publicKey = wallet.address;

    checked++;
    console.log(checked + " " + publicKey);
    prefixes.forEach(prefix => {
        if(publicKey.startsWith("0x" + prefix)) {
            let time = ((Date.now() - started) / 1000);

            nodeCmd.run('echo ' + prefix + " " + privateKey + " " + publicKey + " " + time + " >> wallets.txt", (err, data, stderr) => console.log(data));

            console.log("found!");
            console.log("private key: " + privateKey);
            console.log("checked: " + checked);
            console.log("time: " + time);
        }
    });
}