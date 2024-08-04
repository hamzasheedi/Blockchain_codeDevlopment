# Blockchain Implementation

This repository contains a basic implementation of a blockchain. The code defines a `Blockchain` class that manages a chain of blocks and handles pending transactions.
  
## Overview

The `Blockchain` class provides a simple implementation of a blockchain with the following features:
- Maintains a chain of blocks.
- Stores pending transactions.
- Allows the creation of new blocks to be added to the chain.

## Code Description

### Blockchain Class

The `Blockchain` class is defined as follows:

```javascript
function Blockchain() {
    this.chain = [];
    this.pendingTransaction = [];
}




createNewBlock(nonce, prevBlockHash, hash)
This method creates a new block and adds it to the blockchain. It also handles the pending transactions by clearing them once the new block is added.

Parameters:

nonce: A number used in the mining process.
prevBlockHash: The hash of the previous block in the chain.
hash: The hash of the new block.
Returns:
The newly created block object.

Blockchain.prototype.createNewBlock = function (nonce, prevBlockHash, hash) {
    const newblock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.pendingTransaction, // all pending transactions will be included
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        hash: hash,
    };

    this.pendingTransaction = [];
    // Add the new block to the chain
    this.chain.push(newblock);
    return newblock;
}

The Blockchain class is exported as a module, allowing it to be imported and used in other files.
module.exports = Blockchain;

This project is licensed under the MIT License - see the LICENSE file for details.

