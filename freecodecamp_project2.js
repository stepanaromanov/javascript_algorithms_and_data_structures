/* PROJECT 2

Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals  Arabic numerals
M   1000
CM  900
D   500
CD  400
C   100
XC  90
L   50
XL  40
X   10
IX  9
V   5
IV  4
I   1
All roman numerals answers should be provided in upper-case.

Test cases:
convertToRoman(2) should return the string II.
Passed:convertToRoman(3) should return the string III.
Passed:convertToRoman(4) should return the string IV.
Passed:convertToRoman(5) should return the string V.
Passed:convertToRoman(9) should return the string IX.
Passed:convertToRoman(12) should return the string XII.
Passed:convertToRoman(16) should return the string XVI.
Passed:convertToRoman(29) should return the string XXIX.
Passed:convertToRoman(44) should return the string XLIV.
Passed:convertToRoman(45) should return the string XLV.
Passed:convertToRoman(68) should return the string LXVIII
Passed:convertToRoman(83) should return the string LXXXIII
Passed:convertToRoman(97) should return the string XCVII
Passed:convertToRoman(99) should return the string XCIX
Passed:convertToRoman(400) should return the string CD
Passed:convertToRoman(500) should return the string D
Passed:convertToRoman(501) should return the string DI
Passed:convertToRoman(649) should return the string DCXLIX
Passed:convertToRoman(798) should return the string DCCXCVIII
Passed:convertToRoman(891) should return the string DCCCXCI
Passed:convertToRoman(1000) should return the string M
Passed:convertToRoman(1004) should return the string MIV
Passed:convertToRoman(1006) should return the string MVI
Passed:convertToRoman(1023) should return the string MXXIII
Passed:convertToRoman(2014) should return the string MMXIV
Passed:convertToRoman(3999) should return the string MMMCMXCIX

*/

function convertToRoman(num) {
    let answer = [];
    const dictionary = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    let keys = Object.keys(dictionary)
                    .map(elem => parseInt(elem))
    while (num > 0) {
        let index = keys.concat(num + 1)
                        .sort((a, b) => a - b)
                        .indexOf(num + 1);
        num -= keys[index - 1];
        answer.push(dictionary[keys[index - 1]]);
    }
    return answer.join("")
}