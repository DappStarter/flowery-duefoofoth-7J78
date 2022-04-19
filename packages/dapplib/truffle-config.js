require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note mushroom protect grid kiwi sunset teach'; 
let testAccounts = [
"0x3858106a6a2c22afeb0ee295e2a3621137f86ccfff563774bab3113e700b7ef3",
"0x904b9a70c3a30ea47d9222139ec22fb7372c62d47163f02bc6388497a62a7c45",
"0x4b7c285333430236fbf31581fb2f6e29f981bedcaed87b0c409a143233401147",
"0xb2c918c663f25064706d6aaaa71eb7614c2c292bcc090262e8b6cbf460e24941",
"0x35bd08338b6bd25e06b9ddbaccdfe98ca0585fc6843252841038ae7a41229b49",
"0x25f1f9f64d2c90a00851aaf2fae3b7eac11fdf1be35d6c96a64d3eb719caca71",
"0x15248e2f8f0729f182f2ef0259caeb5bd6b08245bbd611b7cec5a2fbdd762877",
"0xa62cdf71e615e2d66f0c5019b3cc7b02bf5b4af5cf15b9e8b6d50c1fa64e0291",
"0xa8705b3c8bd37df351e5c3dff838ae7f11a721dc33a3a0d1c5fd92706ca420c5",
"0xd77bf03e1fc59e7be1ebf831f655b0d4b7378a5ea93f2c58b22fa6e42bc4cbd4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

