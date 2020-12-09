var CryptoJS = require("crypto-js");

// 待加密字符串
var str = 'dsdaasddffew顺丰发士大夫';
// 密钥 16 位，不支持中文
var key = '0123456789abcdef';
// 初始向量 initial vector 16 位，不支持中文
var iv = '0123456789abcdef';
// key 和 iv 可以一致
 
key = CryptoJS.enc.Utf8.parse(key);
iv = CryptoJS.enc.Utf8.parse(iv);

str =  CryptoJS.enc.Utf8.parse(str);

var encrypted = CryptoJS.AES.encrypt(str, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
 
// 转换为字符串
encrypted = encrypted.toString();
 
// mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
// padding 支持 Pkcs7、AnsiX923、Iso10126
// NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
 
// 解密
var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
 
// 转换为 utf8 字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
console.log(encrypted)
console.log(decrypted)