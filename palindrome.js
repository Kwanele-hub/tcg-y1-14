function isPalindrome(str){
str = str.toLowerCase().replace(/[\W_]/gi);
var reversedStr = str.split("").reverse().join("");
if (str==reversedStr){
    return true
}
return false
};
