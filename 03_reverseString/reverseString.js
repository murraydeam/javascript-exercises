const reverseString = function(string) {
    let stringSplit = string.split('');
    let stringReversed = stringSplit.reverse();
    let stringAssemble = stringReversed.join('');
    return stringAssemble  
};

// Do not edit below this line
module.exports = reverseString;
