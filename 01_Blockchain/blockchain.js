// making function that will store block in chain
function Blockchain() {
    this.chain = [];
    this.pendingTransaction = [];
}

// now we make block that will store in blockchain
//Making a function that will create a new block in blockchain
//using prototype method

Blockchain.prototype.createNewBlock = function (nonce, prevBlockHash, hash) {
    const newblock = {
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transaction : this.pendingTransaction, // all pending transaction will be transact
        nonce : nonce,
        prevBlockHash : prevBlockHash,
        hash : hash,
    }

    this.pendingTransaction = [];
    // here we will push or store our block in chain
    this.chain.push(newblock);
    return newblock;
}


module.exports = Blockchain ;



