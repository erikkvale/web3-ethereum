var Web3 = require('web3');
var web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth.getTransactionCount("0x98Bcee6962CB54326cE8ab444627379aCC9187ef").then(console.log);