/* PROJECT 3

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Test cases:
Passed:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Passed:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Passed:rot13("SERR YBIR?") should decode to the string FREE LOVE?
Passed:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/


function rot13(str) {
  const abc = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")];
  const len = Array.from(Array(abc.length).keys());
  const cipherDict = len.reduce((cipherDict, elem) => {
      let corIndex = elem + 13 >= abc.length ? elem + 13 - abc.length : elem + 13;
      cipherDict[elem] = corIndex;
      return cipherDict;
    }, 
  {});
  let ans = '';
  [...str].forEach((elem) => {
    let newInd = cipherDict[abc.indexOf(elem)];
    ans +=  elem.match(/[A-Z]/) ? abc[newInd] : elem;
    })
  return ans;
}
