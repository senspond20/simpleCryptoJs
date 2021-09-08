# Simple CryptoJs

## 양방향 암호화(AES
+ AES는 미국 표준 기술 연구소에 의해서 연방 정보 처리 표준으로 지정된 암호화 방식
+ 복호화 가능

```js
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
```

> U2FsdGVkX1+LsJ+6uM8TSINz+wnllJAQZ0F2gcVx5FzhMA3l02bTzl+KeENhyx4b
> 안녕하세요


## 단방향 암호화 
+ 복호화 불가능
