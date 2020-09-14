function phoneNumberCheck(str) {
    var myRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gi;
    return myRegex.test(str);
  }
  
console.log(phoneNumberCheck("0754673489"))