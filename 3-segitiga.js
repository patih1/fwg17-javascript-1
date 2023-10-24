

let x = 9
let num = "number"

if(typeof x != num){
  console.log("data harus number")
}else{
  for (let k = x; k >= 1; k--) {
    let segitiga = '';
    for (let l = 1; l <= k; l++) {
      segitiga += k + ' ';
    };
    console.log(segitiga)
  }
}
