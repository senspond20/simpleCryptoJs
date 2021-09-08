const CryptoJS = require("crypto-js");

const SECRET_KEY = "hello" 
var data = '안녕하세요'

// 암호화
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
console.log(ciphertext)

// 복호화
var bytes  = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData); 