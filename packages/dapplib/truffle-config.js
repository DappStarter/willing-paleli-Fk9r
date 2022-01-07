require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note screen collect grace globe equal gaze'; 
let testAccounts = [
"0x765e6adaa6bcb8e6a9e2913947b2f4303dfe65caf109fd207b1c01ebc5b46875",
"0xee152989c7c48362d124300d8b9afe209d0b5fa3257bfcf9a36a3ca44476761c",
"0xb0ec9b835a4265846202a0c6c04ed6fce9d797e281f0069c762a7df8d4c2913f",
"0xd78434b2a82e9a48aad631cfcf7b93e3c9a8b7741c4a18b3fd6b678c02da84ae",
"0xa80664d67039a93cc4cc09d1b80c4a5bdeec21478afafd416b9f6e03c1f69bf5",
"0xb97330151fc4d2d312a7f553d8932342f390cedf07be5bf7dff2189fee58f6da",
"0x2d15c67297a72979dc09d7ea6aaf82ae5ffa4ea81f0fdd47f873aed6e158d7d2",
"0xbcf3df9d5b581a3d32db2c9744547c19ac73e5a4d8fe300f8376646f1f5e5cfe",
"0x2af6fcdcdd0af46c2744752f121172d4d42b7090670d110f14ecdabc2f5866b3",
"0x7714200eec11fa3120dd13024d4047b4303b35af6b28fca5fd67b101056b44c3"
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

