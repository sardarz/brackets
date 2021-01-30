module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;
  let map = new Map();
  
  for (let bracket of bracketsConfig) {
    map.set(bracket[1], bracket[0]);
  }
  
  let sameArr = [];

  for (let bracket of bracketsConfig) {
    if (bracket[1] === bracket[0]) sameArr.push(bracket[0]);
  }

  let arrCounter = new Array(sameArr.length).fill(0);

  console.log(map, str);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let bracket = str[i]
    if (!map.has(bracket)) {
      arr.push(bracket)
    } else if (map.get(bracket) === bracket) {
      let idx = sameArr.indexOf(bracket)
      if (arrCounter[idx] % 2 === 0) {
        arr.push(bracket);
        arrCounter[idx]++;
      } else if (arrCounter[idx] % 2) {
        if (arr.pop() !== map.get(bracket)) return false;
        arrCounter[idx]--;
      }
    } else {
    if (arr.pop() !== map.get(bracket)) return false;
    }
}
  return true;
}
