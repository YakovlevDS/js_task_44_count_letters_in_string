// ? Task:Напиши функцию countLettersInString, которая принимает строку str и возвращает объект, в котором ключ - буквы из str (все в нижнем регистре), а значение - количество этих букв в str.

// Например: countLettersInString('arithmetics') => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}


// Solution 1

function countLettersInString(str) {
  let newStr = str.split("");
  const unique = [...new Set(newStr)];
  let resObj = {};
  for (let i = 0; i < unique.length; i++) {
    let count = 0;
    newStr.forEach((element) => {
      if (element === unique[i]) {
        count += 1;
      }
    });
    resObj[unique[i]] = count;
  }
  return resObj;
};


console.log(countLettersInString('arithmmmmmmeticaaas'));

// ! Explanation: 
