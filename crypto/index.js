// http://nodejs.cn/api/crypto.html#crypto_crypto_getciphers

const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

console.log(privateKey, publicKey)