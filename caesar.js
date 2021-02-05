const caesar = function(str, shift = 0) {
  let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabetStr.split("");
  let alphabetUpperArr = alphabetStr.toUpperCase().split("")
  let inputStr = str.split("");
  let finishedArr = [];

  if (Math.sign(shift) === -1 ) {
    shift = shift + alphabetArr.length;
    console.log(shift)
  }

  for (let str of inputStr) {
    if (str == str.toUpperCase()) {
      let idx = alphabetUpperArr.indexOf(str);
        if (idx === -1) {
        finishedArr.push(str);
      }
        else {
        finishedArr.push((alphabetUpperArr[(idx + shift) % alphabetUpperArr.length]))
    }
  }
    else {
    let idx = alphabetArr.indexOf(str);
    if (idx === -1) {
      finishedArr.push(str);
    }
    else {
    finishedArr.push((alphabetArr[(idx + shift) % alphabetArr.length ]))
    }
  }
}
return finishedArr.join("");
}
module.exports = caesar
