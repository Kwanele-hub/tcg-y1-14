function phoneNumberCheck(str) {
    var myRegex = /^(1\s?)?(\(\d{3}\)/gi;
    return myRegex.test()
}
console.log(phoneNumberCheck(0854317829));