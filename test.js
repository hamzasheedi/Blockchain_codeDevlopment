const Blockchain = require("./blockchain");

//random coin name or your coin name

const bitcoin = new Blockchain();

//now we make dummy block in our blockchain to test it.

//bitcoin.createNewBlock(nonce,prevblockhash , hash)

//we will use dummy data in our block

bitcoin.createNewBlock(1234,"randomPreviousBlockHash","RandomHash")

console.log(bitcoin);