// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(words: string) {
    return words
      .split(' ')
      .map((word: string) => {
        if (word.length > 4) {
          return word.split('').reverse().join('');
        } else {
          return word;
        }
      })
      .join(' ');
  }
  
  console.log(spinWords2('Hey fellow warriors'))

//   alternative
function spinWords2(words: string) {
    return words
      .split(' ') 
      .map((w: string) => w.length >= 5 ? w.split('').reverse().join('') : w)
      .join(' '); 
  }
  