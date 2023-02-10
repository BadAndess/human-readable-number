module.exports = function toReadable (number) {
    let res = "";
    let resOne = "";
    let resDozen = "";
    let resHundrets = "";
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirdteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundrets = ones[Math.floor(number / 100)];
    let teen = teens[Math.floor(number % 10)];
    let dozens = '';

    console.log(number)
    if (number === 0) {
        return "zero";
    }
    if (number >= 100) {
        resHundrets = hundrets + " hundret ";
        number %= 100;
        if (number >= 10 && number < 20) {
            resDozen = teen;
        } else {
            resDozen = tens[Math.floor(number / 10)];
            number %= 10;
        }
        if (number < 10) {
            resOne = ones[number];
        }
    }
    res = resHundrets + resDozen + " " + resOne;
    return res;
}
