function isPalindrome(str){
str = str.toLowerCase().replace(/[\W_]/gi);
var reversedStr = str.split("").reverse().join("");
